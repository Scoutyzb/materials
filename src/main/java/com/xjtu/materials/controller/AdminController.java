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
}
