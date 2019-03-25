package com.xjtu.materials.serviceImpl;

import com.xjtu.materials.mapper.PublicationMapper;
import com.xjtu.materials.pojo.Publication;
import com.xjtu.materials.pojo.PublicationExample;
import com.xjtu.materials.service.PublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: Liang
 * @Description:
 * @Date: Created in 0:07 2019/1/23
 */
@Service
public class PublicationServiceImpl implements PublicationService {

    @Autowired
    PublicationMapper publicationMapper;

    /**
     * @Description 按状态查询文献
     * @Auther Liang
     * @date 0:14 2019/1/23
     * @param isAuthMaterial 表示要查询的文献的状态 1 待审核 2 通过审核 3 未通过审核
     * @return java.util.List<com.xjtu.materials.pojo.Publication>
     */
    @Override
    public List<Publication> getPublicationsByIsAuth(String isAuthMaterial) {
        PublicationExample example = new PublicationExample();
        example.createCriteria().andIsauthenticatedEqualTo(isAuthMaterial);
        List<Publication> publications = publicationMapper.selectByExample(example);
        return publications;
    }

    /**
     * @Description 获取所有出版物
     * @Auther Liang
     * @date 22:11 2019/3/25
     * @return java.util.List<com.xjtu.materials.pojo.Publication>
     */
    @Override
    public List<Publication> getAllPublications() {
        PublicationExample example = new PublicationExample();
        example.createCriteria().andPublicationnameIsNotNull();
        List<Publication> publications = publicationMapper.selectByExample(example);
        return publications;
    }
}
