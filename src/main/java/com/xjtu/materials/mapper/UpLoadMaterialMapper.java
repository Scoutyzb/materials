package com.xjtu.materials.mapper;

import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.pojo.UpLoadMaterialExample;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UpLoadMaterialMapper {
    int countByExample(UpLoadMaterialExample example);

    int deleteByExample(UpLoadMaterialExample example);

    int deleteByPrimaryKey(String materialid);

    int insert(UpLoadMaterial record);

    int insertSelective(UpLoadMaterial record);

    List<UpLoadMaterial> selectByExample(UpLoadMaterialExample example);

    UpLoadMaterial selectByPrimaryKey(String materialid);

    int updateByExampleSelective(@Param("record") UpLoadMaterial record, @Param("example") UpLoadMaterialExample example);

    int updateByExample(@Param("record") UpLoadMaterial record, @Param("example") UpLoadMaterialExample example);

    int updateByPrimaryKeySelective(UpLoadMaterial record);

    int updateByPrimaryKey(UpLoadMaterial record);

    List<UpLoadMaterial> selectLikeStr(String str);

    List<String> selectByUserId(String userId);
}