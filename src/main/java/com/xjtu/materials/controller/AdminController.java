package com.xjtu.materials.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author: Liang
 * @Description: 后台Controller
 * @Date: Created in 20:44 2019/1/20
 */
@Controller
public class AdminController {
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
    public String homePage() {
        return "admin/homePage";
    }
}
