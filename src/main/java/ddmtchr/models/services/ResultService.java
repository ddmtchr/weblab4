package ddmtchr.models.services;

import ddmtchr.models.AreaChecker;
import ddmtchr.models.Result;
import ddmtchr.models.database.entities.ResultEntity;
import ddmtchr.models.database.repos.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class ResultService {
    private ResultRepository resultRepository;

    @Autowired
    public ResultService(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    public void addResult(Result result) {
        ResultEntity entity = new ResultEntity();
        long startTime = System.nanoTime();
        entity.setX(result.getX());
        entity.setY(result.getY());
        entity.setR(result.getR());
        entity.setResult(AreaChecker.checkHit(result.getX(), result.getY(), result.getR()));
        entity.setExecAt(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
        entity.setExecTime(((System.nanoTime() - startTime) / 1000) / 1000.0);

        resultRepository.save(entity);
    }

    public void clearAllResults() {
        resultRepository.deleteAll();
    }
}
