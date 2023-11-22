package ddmtchr.models;

public class AreaChecker {
    public static boolean checkHit(double x, double y, double r) {
        if (x >= 0) {
            return (y <= 0) && (x * x) + (y * y) < (r * r);
        } else {
            if (y >= 0) {
                return y <= x / 2 + r / 2;
            } else {
                return (x >= -r) && (y >= -r / 2);
            }
        }
    }
}
