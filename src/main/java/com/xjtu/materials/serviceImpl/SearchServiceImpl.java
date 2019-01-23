package com.xjtu.materials.serviceImpl;

import com.fasterxml.jackson.databind.JsonSerializer;
import com.xjtu.materials.pojo.Publication;
import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.mapper.PublicationMapper;

import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {
    @Autowired
    UpLoadMaterialMapper upLoadMaterialMapper;
    @Autowired
    PublicationMapper publicationMapper;

    //根据输入的元素名，查询数据库中对应的化合物
    @Override
    public List<UpLoadMaterial> SelectByName(String[] names){
        int count = names.length;
        String str = "%";
        for(int i =0;i<count;i++){
            str = str+names[i]+"%";
        }
        List<UpLoadMaterial> materials = upLoadMaterialMapper.selectLikeStr(str);
        return materials;
    }

    /**
     * @Description 使用文献名称进行检索
     * @Auther hl
     * @date 15:27 2019/1/22
     * @return List<Publication>
     */
    @Override
    public List<Publication> SelectByPaperName(String paperName){
        String pName = "%"+paperName+"%";
        List<Publication> publications = publicationMapper.selectLikePName(pName);
        return publications;
    }
    /**
     * @Description 使用作者姓名进行检索
     * @Auther hl
     * @date 15:35 2019/1/22
     * @return List<Publication>
     */
    @Override
    public List<Publication> SelectByUserName(String userName){
        String uName = "%"+userName+"%";
        List<Publication> publications = publicationMapper.selectLikeUName(uName);
        return publications;
    }
    /**
     * @Description 使用标记类型进行检索
     * @Auther hl
     * @date 15:35 2019/1/22
     * @return List<Publication>
     */
    @Override
    public List<Publication> SelectByType(String type){
        String tName = "%"+type+"%";
        List<Publication> publications = publicationMapper.selectLikeType(tName);
        return publications;
    }
}
