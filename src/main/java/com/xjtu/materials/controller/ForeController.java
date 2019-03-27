package com.xjtu.materials.controller;

import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.pojo.Publication;
import com.xjtu.materials.service.PublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

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
    UpLoadMaterialMapper upLoadMaterialMapper;

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

    @RequestMapping("/index1")
    public String index1() {
        return "foreWeb/index";
    }

    @RequestMapping("/index2")
    public String index2() {
        return "foreWeb/index1";
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
}
