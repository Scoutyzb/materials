package com.xjtu.materials.controller;

import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.mapper.UserMapper;
import com.xjtu.materials.pojo.Publication;
import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.pojo.User;
import com.xjtu.materials.service.FilePathService;
import com.xjtu.materials.service.PublicationService;
import com.xjtu.materials.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
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
    @Autowired
    UserMapper userMapper;
    @Autowired
    PublicationService publicationService;

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
        List<UpLoadMaterial> materials = filePathService.getByIsAuthMaterial("1");

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
        List<User> generalUsers = userService.getUsersByIsAuth("1");
        // 管理员数据
        List<User> adminUsers = userService.getUsersByIsAuth("2");
        // 拉黑用户数据
        List<User> blackListUsers = userService.getUsersByIsAuth("3");

        mv.addObject("generalUsers",generalUsers);
        mv.addObject("adminUsers",adminUsers);
        mv.addObject("blackListUsers",blackListUsers);

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

        // 3类审核状态的cif文件
        List<UpLoadMaterial> materials = filePathService.getByIsAuthMaterial("1");
        List<UpLoadMaterial> authMaterials = filePathService.getByIsAuthMaterial("2");
        List<UpLoadMaterial> unAuthMaterials = filePathService.getByIsAuthMaterial("3");

        mv.addObject("materials", materials);
        mv.addObject("authMaterials", authMaterials);
        mv.addObject("unAuthMaterials", unAuthMaterials);

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
     * @Description ajax功能，cif文件后台通过审核
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

    /**
     * @Description ajax功能，管理员后台拉黑用户
     * Isauthenticated状态： 1 普通用户 2 管理员 3拉黑
     * @Auther Liang
     * @date 22:41 2019/1/22
     * @return java.lang.String
     */
    @ResponseBody
    @RequestMapping("/addToBlacklist")
    public String addToBlacklist(HttpServletRequest request) {
        String userId = request.getParameter("userId");

        User user = userMapper.selectByPrimaryKey(userId);

        user.setIsauthenticated("3");

        userMapper.updateByPrimaryKey(user);

        return "1";
    }

    /**
     * @Description ajax功能，管理员后台将用户移出黑名单
     * @Auther Liang
     * @date 23:14 2019/1/22
     * @param request
     * @return java.lang.String
     */
    @ResponseBody
    @RequestMapping("/removeFromBlacklist")
    public String removeFromBlacklist(HttpServletRequest request) {
        String userId = request.getParameter("userId");

        User user = userMapper.selectByPrimaryKey(userId);

        user.setIsauthenticated("1");

        userMapper.updateByPrimaryKey(user);

        return "1";
    }

    /**
     * @Description  后台文献信息 publicationPage.html
     * @Auther Liang
     * @date 23:40 2019/1/22
     * @return org.springframework.web.servlet.ModelAndView
     */
    @RequestMapping("/publicationPage")
    public ModelAndView publicationPage() {
        ModelAndView mv = new ModelAndView("admin/publicationPage");

        List<Publication> publications = publicationService.getPublicationsByIsAuth("1");
        List<Publication> unAuthPublications = publicationService.getPublicationsByIsAuth("3");
        List<Publication> authPublications = publicationService.getPublicationsByIsAuth("2");

        mv.addObject("publications", publications);
        mv.addObject("authPublications", authPublications);
        mv.addObject("unAuthPublications", unAuthPublications);

        System.out.println(publications);
        return mv;
    }
}
