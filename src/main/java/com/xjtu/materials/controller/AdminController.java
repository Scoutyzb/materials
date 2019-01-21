package com.xjtu.materials.controller;

import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.pojo.User;
import com.xjtu.materials.service.FilePathService;
import com.xjtu.materials.service.UserService;
import javafx.scene.paint.Material;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

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
}
