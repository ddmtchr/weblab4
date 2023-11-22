package ddmtchr.models;

public class Result {
    private double x;
    private double y;
    private double r;
    private boolean result;
    private double execTime;
    private String execAt;

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

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
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
