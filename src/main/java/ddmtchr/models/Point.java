package ddmtchr.models;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Point {
    @NotNull
    private Double x;
    @NotNull
    private Double y;
    @NotNull
    @Min(0)
    private Double r;

//    public Double getX() {
//        return x;
//    }
//
//    public void setX(Double x) {
//        this.x = x;
//    }
//
//    public Double getY() {
//        return y;
//    }
//
//    public void setY(Double y) {
//        this.y = y;
//    }
//
//    public Double getR() {
//        return r;
//    }
//
//    public void setR(Double r) {
//        this.r = r;
//    }
//
//    @Override
//    public String toString() {
//        return "Point[" + x + ", " + y + ", " + r + "]";
//    }
}
