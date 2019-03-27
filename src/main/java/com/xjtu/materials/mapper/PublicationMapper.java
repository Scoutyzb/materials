package com.xjtu.materials.mapper;

import com.xjtu.materials.pojo.Publication;
import com.xjtu.materials.pojo.PublicationExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PublicationMapper {
    int countByExample(PublicationExample example);

    int deleteByExample(PublicationExample example);

    int deleteByPrimaryKey(String publicationid);

    int insert(Publication record);

    int insertSelective(Publication record);

    List<Publication> selectByExample(PublicationExample example);

    Publication selectByPrimaryKey(String publicationid);

    int updateByExampleSelective(@Param("record") Publication record, @Param("example") PublicationExample example);

    int updateByExample(@Param("record") Publication record, @Param("example") PublicationExample example);

    int updateByPrimaryKeySelective(Publication record);

    int updateByPrimaryKey(Publication record);

    List<Publication> selectLikePName(String pName);

    List<Publication> selectLikeUName(String uName);

    List<Publication> selectLikeType(String typeName);

    List<String> selectByUserId(String userId);
}