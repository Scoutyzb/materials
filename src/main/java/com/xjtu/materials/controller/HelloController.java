package com.xjtu.materials.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.xjtu.materials.pojo.User;
import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.pojo.Publication;

import com.xjtu.materials.service.UserService;
import com.xjtu.materials.service.FilePathService;
import com.xjtu.materials.service.SearchService;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

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
    @Autowired
    UserService userService;
    @Autowired
    FilePathService filePathService;
    @Autowired
    SearchService searchService;



    @RequestMapping("/")
    public String hello() {
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

//    @RequestMapping("/searchPage")
//    public String searchPage() {
//        return "searchPage";
//    }

    //进行高级搜索，获得输入元素对应的金属化合物
    @RequestMapping("/searchPage")
    public ModelAndView searchPage(String name,HttpServletRequest request,HttpSession session) {
        ModelAndView mv = new ModelAndView("searchPage");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);
        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
        return mv;
    }

    @RequestMapping("/crystal")
    public String crystal() {
        return "crystalStructure";
    }

    @RequestMapping("/electron")
    public String electron() {
        return "electronicStructure";
    }


    @RequestMapping("/login")
    public String login() {
        return "login";
    }


    /*
     * hl_login_ajax
     */
    @ResponseBody
    @RequestMapping(value = "/check", method= RequestMethod.POST, produces="application/json;charset=utf-8")
    public String check(@RequestParam("username") String userName, @RequestParam("password") String password, HttpSession session, HttpServletRequest request) {
        int isExist = userService.isLogin(userName,password);
        if (isExist==0) {
            return "0";
        }
        else if (isExist==1){
            return "1";
        }
        else {
            List<User> list = userService.loginUserInfo(userName);
            session.setAttribute("UserId", list.get(0).getUserid());
            session.setAttribute("UserName", list.get(0).getUsername());
            return "2";
        }
    }

    /*
     * hl_signin_ajax
     */
    @RequestMapping("/signin")
    public String signin() {
        return "signin";
    }


    /*
     * hl_checkUser_ajax
     */
    @ResponseBody
    @RequestMapping(value = "/checkUser", method= RequestMethod.POST, produces="application/json;charset=utf-8")
    public String checkUser(@RequestParam("type") String type, @RequestParam("username") String userName, @RequestParam("pwd") String password, @RequestParam("sex") String sex , @RequestParam("birthday") String birthday ,@RequestParam("email") String email , @RequestParam("job") String job , @RequestParam("organization") String organization ,HttpSession session, HttpServletRequest request) {
        System.out.println("信息："+type+"\n"+userName+"\n"+password+"\n"+sex+"\n"+birthday+"\n"+email+"\n"+job+"\n"+organization+"\n");
        int isExist = userService.isExist(type,userName,password,sex,birthday,email,job,organization);
        if(isExist==1){
            return "1";
        }
        else {
            return "0";
        }
    }

    /*
     * hl_upload_ajax
     */
    @RequestMapping("/upload")
    public String upload() {
        return "upload";
    }


    /*
     * hl_upload_上传cif文件
     */
    @RequestMapping(value = "/upload_cif", method= RequestMethod.POST, produces="application/json;charset=utf-8")
    public String upload_cif(@RequestParam("file") MultipartFile file, @RequestParam("name") String name,HttpSession session, HttpServletRequest request) throws IOException, InterruptedException{
        String username = (String) session.getAttribute("UserName");
        if (username == null){
            return "login";
        }
        filePathService.Upload(file,name,username);
        return "upload";
    }

    /*
     * hl_upload_上传文献
     */
    @RequestMapping(value = "/upload_publication", method= RequestMethod.POST, produces="application/json;charset=utf-8")
    public String upload_publication(@RequestParam("fileName") String fileName , @RequestParam("userName") String authorName , @RequestParam("abstractText") String abstractText , @RequestParam("DIO") String DIO , @RequestParam("type") String type , @RequestParam("adress") String adress , HttpSession session, HttpServletRequest request) throws IOException, InterruptedException{
        String username = (String) session.getAttribute("UserName");
        if (username == null){
            return "login";
        }
        filePathService.UploadPublication(fileName,authorName,username,abstractText,DIO,type,adress);
        return "upload";
    }

    /*
     * hl_indexSearch_from
     */
    @RequestMapping("/indexSearch")
    public String indexSearch() {
        return "upload";
    }


    /**
     * @Description 首页
     * @Auther hl
     * @date 14:21 2019/1/22
     * @return List<Publication>
     */
    @RequestMapping("/searchPaper")
    public ModelAndView searchPaper(String paperName, String searchType , HttpServletRequest request,HttpSession session) {
        ModelAndView mv = new ModelAndView("paper1");
        List<Publication> results = new LinkedList<>();
        if (searchType.equals("按名称")){
            results = searchService.SelectByPaperName(paperName);
        }
        else if (searchType.equals("按作者")){
            results = searchService.SelectByUserName(paperName);
        }
        else{
            results = searchService.SelectByType(paperName);
        }

        mv.addObject("Publications", results);
        mv.addObject("Number",results.size());

        return mv;
    }
}
