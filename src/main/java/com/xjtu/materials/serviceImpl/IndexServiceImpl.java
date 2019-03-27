package com.xjtu.materials.serviceImpl;

import com.xjtu.materials.mapper.LogMapper;
import com.xjtu.materials.mapper.PublicationMapper;
import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.pojo.Log;
import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.service.IndexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IndexServiceImpl implements IndexService {
    @Autowired
    UpLoadMaterialMapper upLoadMaterialMapper;
    @Autowired
    PublicationMapper publicationMapper;
    @Autowired
    LogMapper logMapper;

    @Override
    public List<String> findMaterial(String userId){
        List<String>  materialNames = upLoadMaterialMapper.selectByUserId(userId);
        return materialNames;
    }

    @Override
    public List<String> Publications(String userId){
        List<String>  publications = publicationMapper.selectByUserId(userId);
        return publications;
    }
    @Override
    public List<Log> Logs(String userId){
        List<Log> logs = logMapper.selectByUserId(userId);
        return logs;
    }
}
