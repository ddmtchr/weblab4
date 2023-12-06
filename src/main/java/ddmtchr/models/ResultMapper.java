package ddmtchr.models;

import ddmtchr.models.database.entities.ResultEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ResultMapper {
    ResultMapper instance = Mappers.getMapper(ResultMapper.class);

    Result entityToResult(ResultEntity e);

    Result pointToResult(Point p);
}
