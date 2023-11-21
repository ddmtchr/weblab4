package ddmtchr.controllers;

import ddmtchr.models.Point;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/check")
public class AreaCheckController {
    @PostMapping
    public ResponseEntity<Point> addNewResult(@RequestBody Point point) {
        System.out.println("Received " + point);
        return ResponseEntity.ok(point);
    }

}
