package ddmtchr.models;

import ddmtchr.models.database.entities.ResultEntity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Result {
    private double x;
    private double y;
    private double r;
    private boolean result;
    private double execTime;
    private String execAt;

    public static Result getFromEntity(ResultEntity e) {
        Result res = new Result();
        res.setX(e.getX());
        res.setY(e.getY());
        res.setR(e.getR());
        res.setResult(e.isResult());
        res.setExecAt(e.getExecAt());
        res.setExecTime(e.getExecTime());
        return res;
    }
}
