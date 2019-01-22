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
     * @Description 提交cif材料并存储
     * @Auther hl
     * @date 16:00 2019/1/19
     * @return String Success
     */
    @Override
    public String Upload(@RequestParam("file") MultipartFile file,String name,String username){
        if(!file.isEmpty()) {
            // 获取文件名称,包含后缀
            String fileName = file.getOriginalFilename();

            // 存放在这个路径下：该路径是该工程目录下的static文件下：(注：该文件可能需要自己创建)
            // 放在static下的原因是，存放的是静态文件资源，即通过浏览器输入本地服务器地址，加文件名时是可以访问到的
//            String path = ClassUtils.getDefaultClassLoader().getResource("").getPath()+"static/json/";
//            String path = "E:\\IDEA\\IntelliJ IDEA 2018.2\\workspace\\materials\\src\\main\\resources\\static\\json\\" ;
            String path = "D:\\cif\\" ;

            try {
                // 该方法是对文件写入的封装，在util类中，导入该包即可使用，后面会给出方法
                FileUtil.fileupload(file.getBytes(), path, fileName);
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }

            // 接着创建对应的实体类，将以下路径进行添加，然后通过数据库操作方法写入
            UpLoadMaterial material = new UpLoadMaterial();
            Date date=new Date();
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String time = format.format(date);
            String materialID = UUID.randomUUID().toString();
            String urlPath = path+fileName;
            String type = "1";
            material.setMaterialid(materialID);
            material.setMaterialname(name);
            material.setType(type);
            material.setIsauthenticated("1");
            material.setTime(time);
            material.setPath(urlPath);
            material.setUsername(username);
            upLoadMaterialMapper.insert(material);
            return "success";
        }
        else {
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
    public void UploadPublication(String fileName,String authorName,String username,String abstractText,String DIO,String type,String adress){
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
    }

}
