package ddmtchr.models.database.entities;

import ddmtchr.models.Result;
import jakarta.persistence.*;

@Entity
@Table(name = "results_four")
public class ResultEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private boolean result;
    private double x;
    private double y;
    private double r;
    @Column(name = "exec_time")
    private double execTime;
    @Column(name = "exec_at")
    private String execAt;

    public ResultEntity() {}

    public ResultEntity(Result result) {
        this.result = result.isResult();
        this.x = result.getX();
        this.y = result.getY();
        this.r = result.getR();
        this.execTime = result.getExecTime();
        this.execAt = result.getExecAt();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public double getExecTime() {
        return execTime;
    }

    public void setExecTime(double execTime) {
        this.execTime = execTime;
    }

    public String getExecAt() {
        return execAt;
    }

    public void setExecAt(String execAt) {
        this.execAt = execAt;
    }
}
