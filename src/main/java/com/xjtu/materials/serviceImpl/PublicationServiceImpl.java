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
     * @Description
     * @Auther Liang
     * @date 0:14 2019/1/23
     * @param isAuthMaterial
     * @return java.util.List<com.xjtu.materials.pojo.Publication>
     */
    @Override
    public List<Publication> getPublicationsByIsAuth(String isAuthMaterial) {
        PublicationExample example = new PublicationExample();
        example.createCriteria().andIsauthenticatedEqualTo(isAuthMaterial);
        List<Publication> publications = publicationMapper.selectByExample(example);
        return publications;
    }

}
