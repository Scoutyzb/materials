package com.xjtu.materials.service;

import com.xjtu.materials.pojo.Publication;
import com.xjtu.materials.pojo.UpLoadMaterial;

import java.util.List;

public interface SearchService {
    List<UpLoadMaterial> SelectByName(String[] names);
    List<UpLoadMaterial> selectAll();
    List<Publication> SelectByPaperName(String paperName);
    List<Publication> SelectByUserName(String userName);
    List<Publication> SelectByType(String type);
}
