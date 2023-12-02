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
//
//    public double getX() {
//        return x;
//    }
//
//    public void setX(double x) {
//        this.x = x;
//    }
//
//    public double getY() {
//        return y;
//    }
//
//    public void setY(double y) {
//        this.y = y;
//    }
//
//    public double getR() {
//        return r;
//    }
//
//    public void setR(double r) {
//        this.r = r;
//    }
//
//    public boolean isResult() {
//        return result;
//    }
//
//    public void setResult(boolean result) {
//        this.result = result;
//    }
//
//    public double getExecTime() {
//        return execTime;
//    }
//
//    public void setExecTime(double execTime) {
//        this.execTime = execTime;
//    }
//
//    public String getExecAt() {
//        return execAt;
//    }
//
//    public void setExecAt(String execAt) {
//        this.execAt = execAt;
//    }
}
