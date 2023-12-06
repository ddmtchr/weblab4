package ddmtchr.models;

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
}
