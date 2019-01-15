package com.xjtu.materials.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * @Author: Liang
 * @Description: controller
 * @Date: Created in 15:40 2019/1/15
 */
@Controller
public class HelloController {
    /**
     * @Description 测试用
     * @Auther Liang
     * @date 15:42 2019/1/15
     * @return java.lang.String
     */
//    @ResponseBody
    @RequestMapping("/")
    public String hello() {
//        return "Hello World";
        return "index";
    }

    /**
     * @Description 首页
     * @Auther Liang
     * @date 17:02 2019/1/15
     * @return java.lang.String
     */
    @RequestMapping("/index")
    public String index1() {
        return "index";
    }

    @RequestMapping("/paper")
    public String paper() {
        return "paper";
    }

    @RequestMapping("/searchPage")
    public String searchPage() {
        return "searchPage";
    }

    @RequestMapping("/crystal")
    public String crystal() {
        return "crystalStructure";
    }

    @RequestMapping("/electron")
    public String electron() {
        return "electronicStructure";
    }
}
