package com.xjtu.materials.service;

import com.xjtu.materials.pojo.Log;

import java.util.List;

public interface IndexService {
    List<String> findMaterial(String userId);
    List<String> Publications(String userId);
    List<Log> Logs(String userId);
}
