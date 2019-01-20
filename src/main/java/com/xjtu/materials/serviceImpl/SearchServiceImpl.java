package com.xjtu.materials.serviceImpl;

import com.fasterxml.jackson.databind.JsonSerializer;
import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xjtu.materials.mapper.UpLoadMaterialMapper;

import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {
    @Autowired
    UpLoadMaterialMapper upLoadMaterialMapper;

    @Override
    public List<UpLoadMaterial> SelectByName(String[] names){
        int count = names.length;
        System.out.println(count);
        for(int i =0;i<count;i++){
            System.out.println(names[i]);
        }
        return null;
    }
}
