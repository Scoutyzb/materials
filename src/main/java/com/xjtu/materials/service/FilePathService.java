package com.xjtu.materials.service;

import org.springframework.web.multipart.MultipartFile;

public interface FilePathService {
    String Upload(MultipartFile file,String name);
}
