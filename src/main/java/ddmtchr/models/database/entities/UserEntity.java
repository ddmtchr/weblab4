package ddmtchr.models.database.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "users_four")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

}
