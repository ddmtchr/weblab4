package ddmtchr.models.services;

import ddmtchr.models.Result;
import ddmtchr.models.database.entities.ResultEntity;
import ddmtchr.models.database.repos.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class ResultService {
    private final ResultRepository resultRepository;

    @Autowired
    public ResultService(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    public void addResult(Result result) {
        ResultEntity entity = new ResultEntity(result);
        resultRepository.save(entity);
    }

    public List<Result> getAllResults() {
        List<ResultEntity> entities = resultRepository.findAll();
        return entities.stream().map(Result::getFromEntity).sorted(Comparator.comparing(Result::getExecAt)).toList();
    }

    public void clearAllResults() {
        resultRepository.deleteAll();
    }
}
