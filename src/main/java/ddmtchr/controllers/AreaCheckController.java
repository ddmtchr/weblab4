package ddmtchr.controllers;

import ddmtchr.models.AreaChecker;
import ddmtchr.models.Point;
import ddmtchr.models.Result;
import ddmtchr.models.services.ResultService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/points")
public class AreaCheckController {
    private ResultService resultService;

    @Autowired
    public AreaCheckController(ResultService resultService) {
        this.resultService = resultService;
    }

    @PostMapping
    public ResponseEntity<Point> addResult(@RequestBody @Valid Point point) {
        System.out.println("Received " + point); //todo remove
        Result result = new Result();
        long startTime = System.nanoTime();
        result.setX(point.getX());
        result.setY(point.getY());
        result.setR(point.getR());
        result.setResult(AreaChecker.checkHit(point.getX(), point.getY(), point.getR()));
        result.setExecAt(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        result.setExecTime(((System.nanoTime() - startTime) / 1000) / 1000.0);
        resultService.addResult(result); //todo point validation
        return ResponseEntity.ok(point);
    }

    @GetMapping
    public ResponseEntity<List<Result>> getAllResults() {
        return ResponseEntity.ok(resultService.getAllResults());
    }

    @DeleteMapping
    public ResponseEntity<?> clearAllResults() {
        resultService.clearAllResults();
        return ResponseEntity.noContent().build();
    }

}
