package ddmtchr.models.database.entities;

import ddmtchr.models.Result;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
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

    public ResultEntity(Result result) {
        this.result = result.isResult();
        this.x = result.getX();
        this.y = result.getY();
        this.r = result.getR();
        this.execTime = result.getExecTime();
        this.execAt = result.getExecAt();
    }
}
