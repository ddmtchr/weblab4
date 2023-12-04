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

    public void addResult(Result result, String username) {
        ResultEntity entity = new ResultEntity(result);
        entity.setUsername(username);
        resultRepository.save(entity);
    }

    public List<Result> getUserResults(String username) {
        List<ResultEntity> entities = resultRepository.findByUsername(username);
        return entities.stream().map(Result::getFromEntity).sorted(Comparator.comparing(Result::getExecAt)).toList();
    }

    public void clearUserResults(String username) {
        resultRepository.deleteByUsername(username);
    }
}
