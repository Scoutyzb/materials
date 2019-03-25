package com.xjtu.materials.service;

import com.xjtu.materials.pojo.Publication;

import java.util.List;

/**
 * @Author: Liang
 * @Description:
 * @Date: Created in 0:05 2019/1/23
 */
public interface PublicationService {
    // 按审核状态选取cif材料
    List<Publication> getPublicationsByIsAuth(String isAuthMaterial);
    // 获取所有出版物
    List<Publication> getAllPublications();
}
