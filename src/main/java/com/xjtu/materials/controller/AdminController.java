package com.xjtu.materials.controller;

import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.pojo.User;
import com.xjtu.materials.service.FilePathService;
import com.xjtu.materials.service.UserService;
import javafx.scene.paint.Material;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @Author: Liang
 * @Description: 后台Controller
 * @Date: Created in 20:44 2019/1/20
 */
@Controller
public class AdminController {
    @Autowired
    UserService userService;

    @Autowired
    FilePathService filePathService;

    @Autowired
    UpLoadMaterialMapper upLoadMaterialMapper;

    @RequestMapping("/adminIndex")
    public String index1() {
        return "admin/index";
    }



    /**
     * @Description 管理员登陆
     * @Auther Liang
     * @date 15:09 2019/1/21
     * @return java.lang.String
     */
    @RequestMapping("/adminLogin")
    public String adminLogin() {
        return "admin/adminLogin";
    }

    /**
     * @Description homePage页
     * @Auther Liang
     * @date 15:26 2019/1/21
     * @return java.lang.String
     */
    @RequestMapping("/adminHomePage")
    public ModelAndView homePage() {
        ModelAndView mv = new ModelAndView("admin/homePage");

        List<User> users = userService.getAllUser();
        List<UpLoadMaterial> materials = filePathService.unAuthMaterial();

        mv.addObject("users", users);
        mv.addObject("usersNum", users.size());
        mv.addObject("materials", materials);
        mv.addObject("materialsNum", materials.size());

        return mv;
    }

    /**
     * @Description 用户管理页面
     * @Auther Liang
     * @date 21:59 2019/1/21
     * @return org.springframework.web.servlet.ModelAndView
     */
    @RequestMapping("/userPage")
    public ModelAndView userPage() {
        ModelAndView mv = new ModelAndView("admin/userPage");

        // 普通用户数据
        List<User> generalUsers = userService.getGeneralUser();
        // 管理员数据
        List<User> adminUsers = userService.getAdminUser();
        mv.addObject("generalUsers",generalUsers);
        mv.addObject("adminUsers",adminUsers);

        return mv;
    }

    /**
     * @Description cif文件管理页面
     * @Auther Liang
     * @date 0:16 2019/1/22
     * @return org.springframework.web.servlet.ModelAndView
     */
    @RequestMapping("/cifPage")
    public ModelAndView cifPage () {
        ModelAndView mv = new ModelAndView("admin/cifPage");

        // 未审核cif文件
        List<UpLoadMaterial> materials = filePathService.unAuthMaterial();

        // todo: 已审核cif文件


        mv.addObject("materials", materials);

        return mv;
    }


    /**
     * @Description 对应ajax功能，cif文件后台通过审核
     * 修改Isauthenticated 状态：1 未审核 2 通过审核 3 不通过审核
     * @Auther Liang
     * @date 15:28 2019/1/22
     * @return java.lang.String
     */
    @ResponseBody
    @RequestMapping("/throughMaterialAudit")
    public String throughMaterialAudit(HttpServletRequest request) {

        String materialID = request.getParameter("materialID");
        System.out.println(materialID);

        UpLoadMaterial material = upLoadMaterialMapper.selectByPrimaryKey(materialID);

        System.out.println(material);
        material.setIsauthenticated("2");

        upLoadMaterialMapper.updateByPrimaryKey(material);

        System.out.println("审核成功");
        return "1";
    }

    /**
     * @Description 对应ajax功能，cif文件后台通过审核
     * 修改Isauthenticated 状态：1 未审核 2 通过审核 3 不通过审核
     * @Auther Liang
     * @date 15:28 2019/1/22
     * @return java.lang.String
     */
    @ResponseBody
    @RequestMapping("/unThroughMaterialAudit")
    public String unThroughMaterialAudit(HttpServletRequest request) {

        String materialID = request.getParameter("materialID");
        System.out.println(materialID);

        UpLoadMaterial material = upLoadMaterialMapper.selectByPrimaryKey(materialID);

        System.out.println(material);
        material.setIsauthenticated("3");

        upLoadMaterialMapper.updateByPrimaryKey(material);

        System.out.println("未通过审核");

        return "1";
    }
}
