package com.xjtu.materials.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.pojo.Publication;
import com.xjtu.materials.pojo.UpLoadMaterial;
import com.xjtu.materials.pojo.User;
import com.xjtu.materials.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

/**
 * @Author: Liang
 * @Description: controller
 * @Date: Created in 15:40 2019/1/15
 */
@Controller
public class HelloController {

    @Autowired
    UserService userService;
    @Autowired
    FilePathService filePathService;
    @Autowired
    SearchService searchService;
    @Autowired
    LogService logService;
    @Autowired
    UpLoadMaterialMapper upLoadMaterialMapper;
    @Autowired
    ChartService chartService;

    // json处理工具
    private ObjectMapper mapper = new ObjectMapper();

    /**
     * @Description 测试用
     * @Auther Liang
     * @date 15:42 2019/3/31
     * @return java.lang.String
     */
    @RequestMapping("/searchPageTest")
    public ModelAndView searchPageTest() {
        ModelAndView mv = new ModelAndView("/foreWeb/searchPageTest");
        return mv;
    }


    /**
     * @Description 测试用
     * @Auther Liang
     * @date 15:42 2019/1/15
     * @return java.lang.String
     */
    @RequestMapping("/")
    public ModelAndView hello() throws JsonProcessingException {
        ModelAndView mv = new ModelAndView("index");
        float[][] dataZong = chartService.getZongData("D:\\data\\generalDensity\\Al3Co DOS.csv");

        // 分态密度图
        List<float[][]> data_fen = new ArrayList<>();
        data_fen = chartService.getFenData("D:\\data\\partitionDensity\\Al3Co PDOS.csv");
        float[][] data_fen_s = data_fen.get(0);
        float[][] data_fen_p = data_fen.get(1);
        float[][] data_fen_d = data_fen.get(2);

        // 能带密度图
        List<float[][]> data_band = chartService.getBandData("D:\\data\\bandDensity\\Al3Co Band Structure(2).csv");

        // test数据
//        int[][] ex1 = new int[][]{{1, 1}, {2, 2}, {3, 3}, {4, 5}};
//        int[][] ex2 = new int[][]{{1, 0}, {2, 0}, {3, 1}, {4, 2}};
//        List<int[][]> res = new ArrayList<>();
//        res.add(ex1);
//        res.add(ex2);


        mv.addObject("dataZong", dataZong);
        mv.addObject("data_fen_s", data_fen_s);
        mv.addObject("data_fen_p", data_fen_p);
        mv.addObject("data_fen_d", data_fen_d);
        mv.addObject("data_band", data_band);
//        mv.addObject("res", res);
        return mv;
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
    public ModelAndView crystal(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("crystalStructure");
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();

        mv.addObject("materialName", materialName);

        return mv;
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


//    /*
//     * hl_upload_上传cif文件
//     */
//    @RequestMapping(value = "/upload_cif", method= RequestMethod.POST, produces="application/json;charset=utf-8")
//    public String upload_cif(@RequestParam("file") MultipartFile file, @RequestParam("name") String name,HttpSession session, HttpServletRequest request) throws IOException, InterruptedException{
//        String username = (String) session.getAttribute("UserName");
//        String userID = (String) session.getAttribute("UserId");
//
//        if (username == null){
//            return "login";
//        }
//        String objectID = filePathService.Upload(file,name,username);
//        logService.UploadLog(userID,objectID);
//        return "upload";
//    }

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
