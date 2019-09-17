package com.xjtu.materials.serviceImpl;


import com.xjtu.materials.pojo.UpLoadMaterialExample;
import com.xjtu.materials.pojo.User;
import com.xjtu.materials.pojo.UserExample;
import com.xjtu.materials.service.FilePathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ClassUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import com.xjtu.materials.util.FileUtil;

import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.mapper.PublicationMapper;

import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.pojo.Publication;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class FilePathServiceImpl implements FilePathService {
    @Autowired
    UpLoadMaterialMapper upLoadMaterialMapper;
    @Autowired
    PublicationMapper publicationMapper;

    /**
     * @Description 提交cif材料并存储（多文件批量存储）
     * @Auther hl
     * @date 16:00 2019/1/19
     * @return String Success
     */
     @Override
     public List<String> Upload(List<String> data, String username) {
         List<String> materialIDs = new ArrayList<>();
//         materialIDs = null;
         String materialID = null;
         if(data != null){
             for (int i = 0; i<data.size(); i++){
                 String name = data.get(i);
                 i+=1;
                 String path = data.get(i);
                 // 接着创建对应的实体类，将以下路径进行添加，然后通过数据库操作方法写入
                 UpLoadMaterial material = new UpLoadMaterial();
                 Date date=new Date();
                 SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                 String time = format.format(date);
                 String type = "1";

                 UpLoadMaterialExample example = new UpLoadMaterialExample();
                 example.createCriteria().andMaterialnameEqualTo(name);
                 List<UpLoadMaterial> upLoadMaterials = upLoadMaterialMapper.selectByExample(example);
                 if (upLoadMaterials.size() == 1){
                     materialID = upLoadMaterials.get(0).getMaterialid();
                     material.setMaterialid(materialID);
                     material.setMaterialname(name);
                     material.setType(type);
                     material.setIsauthenticated("1");
                     material.setTime(time);
                     material.setPath(path);
                     material.setUsername(username);
                     upLoadMaterialMapper.updateByPrimaryKeySelective(material);
                     if (materialID != null){
                         materialIDs.add(materialID);
                     }
                 }else{
                     materialID = UUID.randomUUID().toString();
                     material.setMaterialid(materialID);
                     material.setMaterialname(name);
                     material.setType(type);
                     material.setIsauthenticated("1");
                     material.setTime(time);
                     material.setPath(path);
                     material.setUsername(username);
                     upLoadMaterialMapper.insert(material);
                     materialIDs.add(materialID);
                 }
             }
             return materialIDs;
         }else{
             return null;
         }
     }

    /**
     * @Description 提交cif材料并存储（单文件信息存储）
     * @Auther hl
     * @date 16:00 2019/1/19
     * @return String Success
     */
     @Override
     public String UploadFile(List<String> data,String username){
         if(data != null){
             String name = data.get(0);
             String path = data.get(1);
             String materialID = null;
             // 接着创建对应的实体类，将以下路径进行添加，然后通过数据库操作方法写入
             UpLoadMaterial material = new UpLoadMaterial();
             Date date=new Date();
             SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
             String time = format.format(date);
             String type = "1";

             UpLoadMaterialExample example = new UpLoadMaterialExample();
             example.createCriteria().andMaterialnameEqualTo(name);
             List<UpLoadMaterial> upLoadMaterials = upLoadMaterialMapper.selectByExample(example);
             if (upLoadMaterials.size() == 1){
                 materialID = upLoadMaterials.get(0).getMaterialid();
                 material.setMaterialid(materialID);
                 material.setMaterialname(name);
                 material.setType(type);
                 material.setIsauthenticated("1");
                 material.setTime(time);
                 material.setPath(path);
                 material.setUsername(username);
                 upLoadMaterialMapper.updateByPrimaryKeySelective(material);
             }else{
                 materialID = UUID.randomUUID().toString();
                 material.setMaterialid(materialID);
                 material.setMaterialname(name);
                 material.setType(type);
                 material.setIsauthenticated("1");
                 material.setTime(time);
                 material.setPath(path);
                 material.setUsername(username);
                 upLoadMaterialMapper.insert(material);
             }
             return materialID;
         }else{
             return "false";
         }
     }

    /**
     * @Description 按审核状态返回cif材料
     * Isauthenticated 状态 ：1：未审核
     * @Auther Liang
     * @date 16:50 2019/1/21
     * @return java.util.List<com.xjtu.materials.pojo.UpLoadMaterial>
     */
    @Override
    public List<UpLoadMaterial> getByIsAuthMaterial(String isAuthMaterial) {
        UpLoadMaterialExample example = new UpLoadMaterialExample();
        example.createCriteria().andIsauthenticatedEqualTo(isAuthMaterial);
        List<UpLoadMaterial> upLoadMaterials = upLoadMaterialMapper.selectByExample(example);
        return upLoadMaterials;
    }

    /**
     * @Description 提交文献及DIO
     * @Auther hl
     * @date 13:44 2019/1/22
     * @return String Success
     */
    @Override
    public String UploadPublication(String fileName,String authorName,String username,String abstractText,String DIO,String type,String adress){
        Publication publication = new Publication();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(date);
        String publicationID = UUID.randomUUID().toString();
        publication.setPublicationid(publicationID);
        publication.setPublicationname(fileName);
        publication.setPublicationauthor(authorName);
        publication.setPublicationsummary(abstractText);
        publication.setPublicationdoi(DIO);
        publication.setUsername(username);
        publication.setUploadtime(time);
        publication.setPublicationtype(type);
        publication.setPublicationwebsite(adress);
        publication.setIsauthenticated("1");
        publicationMapper.insert(publication);
        return publicationID;
    }

}
