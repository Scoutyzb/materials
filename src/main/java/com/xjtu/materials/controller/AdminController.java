package com.xjtu.materials.controller;

import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.mapper.UserMapper;
import com.xjtu.materials.pojo.Log;
import com.xjtu.materials.mapper.PublicationMapper;
import com.xjtu.materials.pojo.Publication;
import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.pojo.User;
import com.xjtu.materials.service.FilePathService;
import com.xjtu.materials.service.LogService;
import com.xjtu.materials.service.PublicationService;
import com.xjtu.materials.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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
    @Autowired
    PublicationMapper publicationMapper;
    @Autowired
    LogService logService;

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
        List<Publication> publications = publicationService.getPublicationsByIsAuth("1");

        mv.addObject("users", users);
        mv.addObject("usersNum", users.size());
        mv.addObject("materials", materials);
        mv.addObject("materialsNum", materials.size());
        mv.addObject("publications", publications);



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
    public String throughMaterialAudit(HttpSession session, HttpServletRequest request) {
        String adminID = (String) session.getAttribute("UserId");

        String materialID = request.getParameter("materialID");
        System.out.println(materialID);

        UpLoadMaterial material = upLoadMaterialMapper.selectByPrimaryKey(materialID);

        System.out.println(material);
        material.setIsauthenticated("2");

        upLoadMaterialMapper.updateByPrimaryKey(material);

        System.out.println("审核成功");

        //cif文件通过审核的日志文件
        logService.UploadFilesSuccess(adminID,materialID);
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
    public String unThroughMaterialAudit(HttpSession session, HttpServletRequest request) {
        String adminID = (String) session.getAttribute("UserId");

        String materialID = request.getParameter("materialID");
        System.out.println(materialID);

        UpLoadMaterial material = upLoadMaterialMapper.selectByPrimaryKey(materialID);

        System.out.println(material);
        material.setIsauthenticated("3");

        upLoadMaterialMapper.updateByPrimaryKey(material);

        System.out.println("未通过审核");

        //cif文件未通过审核的日志文件
        logService.UploadFilesFailed(adminID,materialID);

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
    public String addToBlacklist(HttpSession session, HttpServletRequest request) {
        String adminID = (String) session.getAttribute("UserId");

        String userId = request.getParameter("userId");

        User user = userMapper.selectByPrimaryKey(userId);

        user.setIsauthenticated("3");

        userMapper.updateByPrimaryKey(user);

        /**
         * @Description 添加管理员拉黑用户日志
         * @Auther hl
         * @date 11:10 2019/1/23
         * @return void
         */
        logService.UploadUsers(adminID,userId);

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

    /**
     * @Description 后台日志展示页 logPage.html
     * @Auther Liang
     * @date 14:01 2019/1/23
     * @return org.springframework.web.servlet.ModelAndView
     */
    @RequestMapping("/logPage")
    public ModelAndView logPage() {
        System.out.println("进入logPage");
        ModelAndView mv = new ModelAndView("admin/logPage");
        List<Log> logs = logService.getAllLog();
        mv.addObject("logs", logs);

        System.out.println(logs);
        return mv;
    }

    /**
     * @Description 对应ajax功能，Publication文献后台通过审核
     * 修改Isauthenticated 状态：1 未审核 2 通过审核 3 不通过审核
     * @Auther hl
     * @date 13:45 2019/1/23
     * @return java.lang.String
     */
    @ResponseBody
    @RequestMapping("/throughPublicationAudit")
    public String throughPublicationAudit(HttpSession session, HttpServletRequest request) {
        String adminID = (String) session.getAttribute("UserId");

        String materialID = request.getParameter("materialID");
        System.out.println(materialID);

        Publication publication = publicationMapper.selectByPrimaryKey(materialID);

        System.out.println(publication);
        publication.setIsauthenticated("2");

        publicationMapper.updateByPrimaryKey(publication);

        System.out.println("审核成功");

        //文献通过审核日志
        logService.UploadPublicationsSuccess(adminID,materialID);
        return "1";
    }

    /**
     * @Description 对应ajax功能，Publication文献后台未通过审核
     * 修改Isauthenticated 状态：1 未审核 2 通过审核 3 不通过审核
     * @Auther hl
     * @date 13:50 2019/1/23
     * @return java.lang.String
     */
    @ResponseBody
    @RequestMapping("/unThroughPublicationAudit")
    public String unThroughPublicationAudit(HttpSession session, HttpServletRequest request) {
        String adminID = (String) session.getAttribute("UserId");

        String materialID = request.getParameter("materialID");
        System.out.println(materialID);

        Publication publication = publicationMapper.selectByPrimaryKey(materialID);

        System.out.println(publication);
        publication.setIsauthenticated("3");

        publicationMapper.updateByPrimaryKey(publication);

        System.out.println("审核未成功");

        //文献未通过审核
        logService.UploadPublicationsFailed(adminID,materialID);
        return "1";
    }

    @RequestMapping("/uploadCif")
    public ModelAndView uploadCif() {
        ModelAndView mv = new ModelAndView("admin/upLoadCif");
        return mv;
    }
    @RequestMapping("/uploadPublication")
    public ModelAndView uploadPublication() {
        ModelAndView mv = new ModelAndView("admin/uploadPublication");
        return mv;
    }
}
