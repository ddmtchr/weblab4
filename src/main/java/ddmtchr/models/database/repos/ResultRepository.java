package ddmtchr.models.database.repos;

import ddmtchr.models.database.entities.ResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResultRepository extends JpaRepository<ResultEntity, Long> {
    List<ResultEntity> findByUsername(String username);

    long deleteByUsername(String username);
}
