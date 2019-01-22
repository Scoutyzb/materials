package com.xjtu.materials.service;

import com.xjtu.materials.pojo.UpLoadMaterial;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FilePathService {
    String Upload(MultipartFile file,String name,String username);

    // 未审核cif材料
    List<UpLoadMaterial> getByIsAuthMaterial(String isAuthMaterial);

    void UploadPublication(String fileName,String authorName,String username,String abstractText,String DIO,String type,String adress);
}
