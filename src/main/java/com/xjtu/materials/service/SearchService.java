package com.xjtu.materials.service;

import com.xjtu.materials.pojo.UpLoadMaterial;

import java.util.List;

public interface SearchService {
    List<UpLoadMaterial> SelectByName(String[] names);
}
