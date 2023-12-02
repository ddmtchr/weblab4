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
}
