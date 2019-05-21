package com.xjtu.materials.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.pojo.Log;
import com.xjtu.materials.pojo.Publication;
import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.service.IndexService;
import com.xjtu.materials.service.PublicationService;
import com.xjtu.materials.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author: Liang
 * @Description:
 * @Date: Created in 21:58 2019/3/25
 */
@Controller
public class ForeController {

    @Autowired
    PublicationService publicationService;
    @Autowired
    IndexService indexService;
    @Autowired
    UpLoadMaterialMapper upLoadMaterialMapper;
    @Autowired
    SearchService searchService;


    /**
     * @Description 首页
     * @Auther Liang
     * @date 22:00 2019/3/25
     * @return java.lang.String
     */
    @RequestMapping("/fore")
    public String fore() {
        return "foreWeb/fore";
    }

    @RequestMapping("/searchPage1")
    public String searchPage1() {
        return "foreWeb/searchPage1";
    }
//    @RequestMapping(value = "/upload_cif", method= RequestMethod.POST, produces="application/json;charset=utf-8")
////    public String upload_cif(@RequestParam("file") MultipartFile file, @RequestParam("name") String name, HttpSession session, HttpServletRequest request) throws IOException, InterruptedException{
////        String username = (String) session.getAttribute("UserName");
////        String userID = (String) session.getAttribute("UserId");
////
////        if (username == null){
////            return "login";
////        }
////        String objectID = filePathService.Upload(file,name,username);
////        logService.UploadLog(userID,objectID);
////        return "upload";
////    }

    @RequestMapping("/index1")
    public ModelAndView index(HttpSession session, HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("foreWeb/index1");

        String userName = (String)session.getAttribute("UserName");
        String userId = (String)session.getAttribute("UserId");
        List<String> Materials = indexService.findMaterial(userId);
        List<String> Publications = indexService.Publications(userId);
        List<Log> Logs = indexService.Logs(userId);

        mv.addObject("Materials", Materials);
        mv.addObject("Publications", Publications);
        mv.addObject("Logs", Logs);
        return mv;
    }

    /**
     * @Description 出版物页
     * @Auther Liang
     * @date 22:21 2019/3/25
     * @return org.springframework.web.servlet.ModelAndView
     */
    @RequestMapping("/references")
    public ModelAndView references() {
        ModelAndView mv = new ModelAndView("paper1");
        List<Publication> publications = publicationService.getAllPublications();

        mv.addObject("Publications", publications);
        return mv;
    }

    /**
     * @Description 晶体结构
     * @Auther HL
     * @date 1:20 2019/3/26
     * @return java.lang.String
     */
    @RequestMapping("/crystalStructure1")
    public ModelAndView crystalStructure1(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/foreWeb/crystalStructure1");
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();

        mv.addObject("materialName", materialName);

        return mv;
    }

    @RequestMapping("/get_default_app")
    public ModelAndView get_default_app() {
        return null;
    }

    /**
     * @Description ajax返回查询结果
     * @Auther Liang
     * @date 20:36 2019/3/31
     * @return java.lang.String
     */
    @RequestMapping("/searchData")
    @ResponseBody
    public Object searchData() throws JsonProcessingException {
        List<UpLoadMaterial> materials = searchService.selectAll();
        Map<String,Object> returnMap=new HashMap<>();
        returnMap.put("data", materials);
        return returnMap;
    }
}

//    /fore/paper
//    /paper
    
