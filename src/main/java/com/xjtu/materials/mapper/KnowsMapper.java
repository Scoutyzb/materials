package com.xjtu.materials.mapper;

import com.xjtu.materials.pojo.Knows;
import com.xjtu.materials.pojo.KnowsExample;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
@Mapper
public interface KnowsMapper {
    int countByExample(KnowsExample example);

    int deleteByExample(KnowsExample example);

    int deleteByPrimaryKey(String knowsid);

    int insert(Knows record);

    int insertSelective(Knows record);

    List<Knows> selectByExampleWithBLOBs(KnowsExample example);

    List<Knows> selectByExample(KnowsExample example);

    Knows selectByPrimaryKey(String knowsid);

    int updateByExampleSelective(@Param("record") Knows record, @Param("example") KnowsExample example);

    int updateByExampleWithBLOBs(@Param("record") Knows record, @Param("example") KnowsExample example);

    int updateByExample(@Param("record") Knows record, @Param("example") KnowsExample example);

    int updateByPrimaryKeySelective(Knows record);

    int updateByPrimaryKeyWithBLOBs(Knows record);

    int updateByPrimaryKey(Knows record);
}