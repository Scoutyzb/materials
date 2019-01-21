package com.xjtu.materials.service;

import com.xjtu.materials.pojo.UpLoadMaterial;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FilePathService {
    String Upload(MultipartFile file,String name);

    // 未审核cif材料
    List<UpLoadMaterial> unAuthMaterial();
}
