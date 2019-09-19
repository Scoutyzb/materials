package com.xjtu.materials.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.pojo.*;
import com.xjtu.materials.service.*;
import com.xjtu.materials.util.FileUtil;
import com.xjtu.materials.util.ReadFromFile;
import org.python.antlr.ast.Str;
import org.python.apache.commons.compress.utils.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    IndexService indexService;
    @Autowired
    UpLoadMaterialMapper upLoadMaterialMapper;
    @Autowired
    SearchService searchService;
    @Autowired
    ChartService chartService;
    @Autowired
    NewsService newsService;
    @Autowired
    FilePathService filePathService;
    @Autowired
    LogService logService;

    /**
     * @Description 首页
     * @Auther Liang
     * @date 22:00 2019/3/25
     * @return java.lang.String
     */
    @RequestMapping("/fore")
    public ModelAndView fore(HttpServletRequest request, HttpSession session){
        ModelAndView mv = new ModelAndView("foreWeb/fore");
        List<News> News = newsService.AllNews();
        mv.addObject("News", News);
        return mv;
    }

    //总览搜索页
    @RequestMapping("/searchPage1")
    public ModelAndView searchPage1(String name, HttpServletRequest request, HttpSession session) {
        ModelAndView mv = new ModelAndView("foreWeb/searchPage");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);
        //需要的文件是否存在
        int[] isExist = new int[Materials.size()];
        for (int i = 0; i < Materials.size(); i++) {
            String materialName = Materials.get(i).getMaterialname();
            String path = "D:\\data\\"+materialName+"\\PBE\\crystal structure\\"+materialName+".cif";
            File file = new File(path);
            if (file.exists()) {
                isExist[i] = 1;
            } else {
                isExist[i] = 0;
            }
        }

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
        mv.addObject("isExist",isExist);
        return mv;
    }

    @RequestMapping("/searchPage2")
    public ModelAndView searchPage2(String name, HttpServletRequest request, HttpSession session) {
        ModelAndView mv = new ModelAndView("foreWeb/searchPage2");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);
        //需要的文件是否存在
        int[] isExist = new int[Materials.size()];
        for (int i = 0; i < Materials.size(); i++) {
            String materialName = Materials.get(i).getMaterialname();
            String path = "D:\\data\\"+materialName+"\\PBE\\crystal structure\\"+materialName+".cif";
            File file = new File(path);
            if (file.exists()) {
                isExist[i] = 1;
            } else {
                isExist[i] = 0;
            }
        }

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
        mv.addObject("isExist",isExist);
        return mv;
    }

    @RequestMapping("/searchPage3")
    public ModelAndView searchPage3(String name, HttpServletRequest request, HttpSession session) {
        ModelAndView mv = new ModelAndView("foreWeb/searchPage3");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);

        //需要的文件是否存在
        int[] isExist = new int[Materials.size()];
        for (int i = 0; i < Materials.size(); i++) {
            String materialName = Materials.get(i).getMaterialname();
            String path = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" Band Structure.csv";
            File file = new File(path);
            if (file.exists()) {
                isExist[i] = 1;
            } else {
                isExist[i] = 0;
            }
        }

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
        mv.addObject("isExist",isExist);
        return mv;
    }

    @RequestMapping("/searchPage4")
    public ModelAndView searchPage4(String name, HttpServletRequest request, HttpSession session) {
        ModelAndView mv = new ModelAndView("foreWeb/searchPage4");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);

        //需要的文件是否存在
        int[] isExist = new int[Materials.size()];
        for (int i = 0; i < Materials.size(); i++) {
            String materialName = Materials.get(i).getMaterialname();
            String path = "D:\\data\\"+materialName+"\\PBE\\phonon spectrum\\"+materialName+" Phonon Dispersion.csv";
            File file = new File(path);
            if (file.exists()) {
                isExist[i] = 1;
            } else {
                isExist[i] = 0;
            }
        }

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
        mv.addObject("isExist",isExist);
        return mv;
    }

    @RequestMapping("/searchPage5")
    public ModelAndView searchPage5(String name, HttpServletRequest request, HttpSession session) {
        ModelAndView mv = new ModelAndView("foreWeb/searchPage5");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
        return mv;
    }

    @RequestMapping("/searchPage6")
    public ModelAndView searchPage6(String name, HttpServletRequest request, HttpSession session) {
        ModelAndView mv = new ModelAndView("foreWeb/searchPage6");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);

        //需要的文件是否存在
        int[] isExist = new int[Materials.size()];
        for (int i = 0; i < Materials.size(); i++) {
            String materialName = Materials.get(i).getMaterialname();
            String path = "D:\\data\\"+materialName+"\\PBE\\mechanical property\\"+materialName+" Elastic Constants.txt";
            File file = new File(path);
            if (file.exists()) {
                isExist[i] = 1;
            } else {
                isExist[i] = 0;
            }
        }

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
        mv.addObject("isExist",isExist);
        return mv;
    }

    @RequestMapping("/index1")
    public ModelAndView index(HttpSession session, HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("foreWeb/index1");

        String userName = (String)session.getAttribute("UserName");
        String userId = (String)session.getAttribute("UserId");
        List<String> Materials = indexService.findMaterial(userId);
        List<String> Publications = indexService.Publications(userId);
        List<Log> Logs = indexService.Logs(userId);
        List<News> News = newsService.AllNews();
        List<Knows> Knows = newsService.AllKnows();

        mv.addObject("Knows",Knows);
        mv.addObject("News",News);
        mv.addObject("Materials", Materials);
        mv.addObject("Publications", Publications);
        mv.addObject("Logs", Logs);
        return mv;
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
     * @Description 上传出版物页
     * @Auther HL
     * @date 21:39 2019/9/10
     * @return org.springframework.web.servlet.ModelAndView
     */
    @RequestMapping("/upload_publication")
    public String upload_publication() {
        return "foreWeb/upload_publication";
    }

    /**
     * @Description 上传出版物
     * @Auther HL
     * @date 21:39 2019/9/29
     * @return org.springframework.web.servlet.ModelAndView
     */
//    @RequestMapping(value = "/uploadP", method= RequestMethod.POST, produces="application/json;charset=utf-8")
//    public String uploadPublication(@RequestParam("fileName") String fileName , @RequestParam("userName") String authorName , @RequestParam("abstractText") String abstractText , @RequestParam("DIO") String DIO , @RequestParam("type") String type , @RequestParam("adress") String adress , HttpSession session, HttpServletRequest request) throws IOException, InterruptedException{
//        String username = (String) session.getAttribute("UserName");
//        String userID = (String) session.getAttribute("UserId");
//        if (username == null){
//            return "login";
//        }
//        String objectID = filePathService.UploadPublication(fileName,authorName,username,abstractText,DIO,type,adress);
//        logService.UploadpuPlicationLog(userID,objectID);
//        return "foreWeb/upload_publication";
//    }
    /**
     * @Description 上传出版物
     * @Auther HL
     * @date 21:39 2019/9/29
     * @return java.lang.String
     */
    @ResponseBody
    @RequestMapping("/uploadP")
    public String uploadP(HttpSession session, HttpServletRequest request){
        String username = (String) session.getAttribute("UserName");
        String userID = (String) session.getAttribute("UserId");
        String fileName = request.getParameter("fileName");
        String authorName = request.getParameter("userName");
        String abstractText = request.getParameter("abstractText");
        String type = request.getParameter("type");
        String DIO = request.getParameter("DIO");
        String adress = request.getParameter("adress");
        if (username == null){
            return "login";
        }
        String objectID = filePathService.UploadPublication(fileName,authorName,username,abstractText,DIO,type,adress);
        logService.UploadpuPlicationLog(userID,objectID);
        return "1";
    }

    /**
     * @Description 上传文件页面
     * @Auther HL
     * @date 21:39 2019/9/29
     * @return org.springframework.web.servlet.ModelAndView
     */
    @RequestMapping("/uploadFile")
    public String uploadFile() {
        return "foreWeb/uploadFile";
    }

    /**
     * @Description 上传cif
     * @Auther HL
     * @date 21:39 2019/9/29
     * @return org.springframework.web.servlet.ModelAndView
     */
    @RequestMapping(value="/upload_cif", method=RequestMethod.POST)
    public String uploadFileFolder(HttpServletRequest request, HttpSession session) {
        String username = (String) session.getAttribute("UserName");
        String userID = (String) session.getAttribute("UserId");
        if (username == null){
            return "login";
        }
        MultipartHttpServletRequest params=((MultipartHttpServletRequest) request);
        List<MultipartFile> files = params.getFiles("folder");     //fileFolder为文件项的name值
        String type = params.getParameter("type");
        String method = null;
        String logicName = null;
        if (type.equals("singleAll")){
            String item = FileUtil.obtain(files);
            if (item.equals("data")){
                return "foreWeb/uploadFileError";
            }
            method = "上传文件（全部替换）";
            logicName = "UploadFile(All)";
            List<String> data =  FileUtil.saveMultiFile2("D:\\data", files);
            String meterialID = filePathService.UploadFile(data,username);
            logService.UploadFileLog(userID, meterialID, method,logicName);
        }
        else if(type.equals("singleSection")){
            String item = FileUtil.obtain(files);
            if (item.equals("data")){
                return "foreWeb/uploadFileError";
            }
            method = "上传文件（部分覆盖）";
            logicName = "UploadFile(Section)";
            List<String> data =  FileUtil.saveMultiFile3("D:\\data", files);
            String meterialID = filePathService.UploadFile(data,username);
            logService.UploadFileLog(userID, meterialID, method, logicName);
        }
        else if (type.equals("lotAll")){
            String item = FileUtil.obtain(files);
            if (!item.equals("data")){
                return "foreWeb/uploadFileError";
            }
            method = "上传文件（全部替换）";
            logicName = "UploadFile(All)";
            List<String> data =  FileUtil.saveMultiFile("D:", files);
            List<String> meterialIDs = filePathService.Upload(data,username);
            logService.UploadLog(userID, meterialIDs, method, logicName);
        }
        else if (type.equals("lotSection")){
            String item = FileUtil.obtain(files);
            if (!item.equals("data")){
                return "foreWeb/uploadFileError";
            }
            method = "上传文件（部分覆盖）";
            logicName = "UploadFile(Section)";
            List<String> data =  FileUtil.saveMultiFile1("D:", files);
            List<String> materialIDs = filePathService.Upload(data,username);
            logService.UploadLog(userID, materialIDs, method, logicName);
        }
        return "foreWeb/uploadFile";
    }

    /**
     * @Description 进入下载页面
     * @Auther HL
     * @date 22:41 2019/9/15
     * @return ModelAndView
     */
    @RequestMapping("/downLoad")
    public ModelAndView downLoadFile(String name, HttpServletRequest request, HttpSession session) {
        ModelAndView mv = new ModelAndView("foreWeb/downLoad");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
        return mv;
    }

    /**
     * @Description ajax功能，实现下载功能
     * @Auther HL
     * @date 22:41 2019/9/15
     * @return java.lang.String
     */
    @ResponseBody
    @RequestMapping("/downLoadFile")
    public String downLoadFile(HttpSession session, HttpServletRequest request, HttpServletResponse response) throws IOException{
        String username = (String) session.getAttribute("UserName");
        String userID = (String) session.getAttribute("UserId");

        if (username == null){
            return "login";
        }
        String materialId = request.getParameter("materialId");
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(materialId).getMaterialname();
        String downloadFilePath = "D:\\data\\"+materialName+"\\PBE\\crystal structure";//被下载的文件在服务器中的路径,
        String path = materialName+".cif";
        String openPath = downloadFilePath+"\\"+path;
        String endPath = "D:\\dataDownLoad\\"+materialName+".cif";

        File scFileDir = new File(downloadFilePath);
        if (!scFileDir.exists()){
            return "0";
        }else{
            File TrxFiles[] = scFileDir.listFiles();
            String fileName = TrxFiles[0].getName();
            if (fileName.equals(path)) {
                File file = new File(openPath);
                FileInputStream fileInput = new FileInputStream(file);
                MultipartFile toMultipartFile = new MockMultipartFile("file", file.getName(), "text/plain", IOUtils.toByteArray(fileInput));
                toMultipartFile.getInputStream();
                // 获取文件名
                String result = FileUtil.downLoad(endPath, toMultipartFile);
                logService.DownLoadFile(userID, materialId, "下载文件");
                return result;
            }else{
                return "0";
            }
        }
    }

    /**
     * @Description 下载页面搜索功能
     * @Auther HL
     * @date 22:41 2019/9/18
     * @return java.lang.String
     */
    @RequestMapping("/downLoadSearchPage")
    public ModelAndView searchPage(String name, HttpServletRequest request, HttpSession session) {
        ModelAndView mv = new ModelAndView("foreWeb/downLoad");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
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
        //文件是否存在标记，第一个对应电子结构，第二个对应热力学，1存在，0不存在
        int[] isExist = new int[4];

        ModelAndView mv = new ModelAndView("/crystalStructure1");
        // 晶体结构部分
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();
        String path = "D:\\data\\"+materialName+"\\PBE\\crystal structure\\"+materialName+".cif";

        List<String[]> stringOfFile = ReadFromFile.readFileByLines(path);
        String[] para = new String[6];
        for (int i = 0; i < stringOfFile.size(); i++) {
            if (stringOfFile.get(i)[0].equals("_cell_length_a")) {
                for (int j = 0; j < 6; j++) {
                    para[j] = stringOfFile.get(i + j)[1];
                }
            }
        }

        // 电子结构部分
        //此处更新路径
        String Path = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" Band Structure.csv";
        // 能带密度图
        // 文件不存在则送标记至前端
        File file1 = new File(Path);
        List<float[][]> data_band = new ArrayList<>();
        if (file1.exists()) {
            data_band = chartService.getBandData(Path);
            isExist[0] = 1;
        } else {
            data_band = new ArrayList<>();
        }


        // 总态密度
        String PathZong = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" DOS.csv";
        // PDOS
        String pathPDOS = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" PDOS.csv";
        // 热力学部分
        // PDOS
        String pathElas = "D:\\data\\"+materialName+"\\PBE\\mechanical property\\"+materialName+" Elastic Constants.txt";


        // 文件不存在则送标记至前端

        float[][] dataZong;
        List<float[][]> dataPDOS;
        List<float[][]> mechData;
        File file2 = new File(PathZong);
        if (file2.exists()) {
            dataZong = chartService.getZongData(PathZong);
            isExist[1] = 1;
        } else {
            dataZong = new float[10][];
        }
        File file3 = new File(pathPDOS);
        if (file3.exists()) {
            dataPDOS = chartService.getFenData(pathPDOS);
            isExist[2] = 1;
        } else {
            dataPDOS = new ArrayList<>();
            dataPDOS.add(new float[10][]);
            dataPDOS.add(new float[10][]);
            dataPDOS.add(new float[10][]);
        }
        File file4 = new File(pathElas);
        if (file4.exists()) {
            mechData = chartService.getMechData(pathElas);
            isExist[3] = 1;
        } else {
            mechData = new ArrayList<>();
            mechData.add(new float[100][2]);
            mechData.add(new float[100][2]);
            mechData.add(new float[100][2]);
            mechData.add(new float[100][2]);
        }

        mv.addObject("materialName", materialName);
        mv.addObject("para", para);
        mv.addObject("data_band", data_band);
        mv.addObject("dataZong", dataZong);
        mv.addObject("dataPDOS", dataPDOS);
        mv.addObject("mechData", mechData);
        mv.addObject("isExist", isExist);

        return mv;
    }

    @RequestMapping("/crystalStructure2")
    public ModelAndView crystalStructure2(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/crystalStructure2");
//        AlNiZr(2).cif
        // 读cif文件
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();
        String path = "D:\\data\\"+materialName+"\\PBE\\crystal structure\\"+materialName+".cif";
        List<String[]> stringOfFile = ReadFromFile.readFileByLines(path);
        String[] para = new String[6];
        for (int i = 0; i < stringOfFile.size(); i++) {
            if (stringOfFile.get(i)[0].equals("_cell_length_a")) {
                for (int j = 0; j < 6; j++) {
                    para[j] = stringOfFile.get(i + j)[1];
                }
            }
        }

        mv.addObject("materialName", materialName);
        mv.addObject("para", para);

        return mv;
    }

    @RequestMapping("/electronicStructure")
    public ModelAndView electronicStructure(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/electronicStructure");

        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();
        //此处更新路径
        String Path = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" Band Structure.csv";
        // 能带密度图
        List<float[][]> data_band = chartService.getBandData(Path);
        // 总态密度
        String PathZong = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" DOS.csv";
        float[][] dataZong = chartService.getZongData(PathZong);
        // 总台图中的单元素数据
        List<String> nameYuanSu = new ArrayList<>();
        int start = 0;
        for (int i = 0; i < materialName.length(); i++) {
            if (materialName.charAt(i) >= '1' && materialName.charAt(i) <= '9') {
                start++;
                continue;
            }
            if (i + 1 >= materialName.length() || materialName.charAt(i + 1) >= 'A' &&
                    materialName.charAt(i + 1) <= 'Z' || materialName.charAt(i + 1) >= '1' && materialName.charAt(i + 1) <= '9') {
                String temp = materialName.substring(start, i + 1);
                start = i + 1;
                nameYuanSu.add(temp);
            }
        }
        String pathYuanSu = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\" + materialName;
        List<float[][]> yuanSuData = chartService.getDanYuanSu(pathYuanSu, nameYuanSu);
        yuanSuData.add(dataZong);

        // PDOS
        String pathPDOS = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" PDOS.csv";
        List<float[][]> dataPDOS = chartService.getFenData(pathPDOS);

//        for (int i = 0; i < dataPDOS.size(); i++) {
//            for (int j = 0; j < dataPDOS.get(i).length; j++) {
//                System.out.println(dataPDOS.get(i)[j][0]);
//                System.out.println(dataPDOS.get(i)[j][1]);
//            }
//        }
        nameYuanSu.add(materialName);

        mv.addObject("data_band", data_band);
        mv.addObject("materialName", materialName);
        mv.addObject("yuanSuData", yuanSuData);
        mv.addObject("dataPDOS", dataPDOS);
        mv.addObject("nameYuanSu", nameYuanSu);

        return mv;
    }

    @RequestMapping("/phonon")
    public ModelAndView phonon(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/phonon");
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();
        //Phonon Dispersion路径
        String path = "D:\\data\\"+materialName+"\\PBE\\phonon spectrum\\"+materialName+" Phonon Dispersion.csv";
        //读取路径下数据
        List<float[][]> data_phonon = chartService.getPhononDisp(path);
        //Phonon DOS 路径
        String pathDOS = "D:\\data\\"+materialName+"\\PBE\\phonon spectrum\\"+materialName+" Phonon DOS.csv";
        // 读取
        float[][] data_DOS = chartService.getZongData(pathDOS);

        mv.addObject("data_phonon", data_phonon);
        mv.addObject("materialName", materialName);
        mv.addObject("data_DOS", data_DOS);

        return mv;
    }

    @RequestMapping("/elasticity")
    public ModelAndView elasticity(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/elasticity");

        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();

        // PDOS
        String pathElas = "D:\\data\\"+materialName+"\\PBE\\mechanical property\\"+materialName+" Elastic Constants.txt";
        List<float[][]> mechData = chartService.getMechData(pathElas);

        mv.addObject("materialName", materialName);
        mv.addObject("mechData", mechData);

        return mv;
    }

    /**
     * @Description 能带结构图
     * @Auther HL
     * @date 1:20 2019/5/28
     * @return java.lang.String
     */
    @RequestMapping("/bandDensity")
    public ModelAndView bandDensity(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/foreWeb/bandDensity");

        //此处更新路径
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();
        String Path = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" Band Structure.csv";
        // 能带密度图
        List<float[][]> data_band = chartService.getBandData(Path);

        mv.addObject("data_band", data_band);

        return mv;
    }

    /**
     * @Description 总态密度图
     * @Auther HL
     * @date 1:20 2019/5/28
     * @return java.lang.String
     */
    @RequestMapping("/generalDensity")
    public ModelAndView generalDensity(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/foreWeb/generalDensity");
        //此处更新路径
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();
        String Path = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" DOS.csv";

        float[][] dataZong = chartService.getZongData(Path);
        mv.addObject("dataZong", dataZong);

        return mv;
    }

    /**
     * @Description 分态密度图
     * @Auther HL
     * @date 1:20 2019/5/28
     * @return java.lang.String
     */
    @RequestMapping("/partitionDensity")
    public ModelAndView partitionDensity(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/foreWeb/partitionDensity");
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();
        String Path = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" PDOS.csv";
        // 分态密度图
        List<float[][]> data_fen = new ArrayList<>();
        data_fen = chartService.getFenData(Path);
        float[][] data_fen_s = data_fen.get(0);
        float[][] data_fen_p = data_fen.get(1);
        float[][] data_fen_d = data_fen.get(2);

        mv.addObject("data_fen_s", data_fen_s);
        mv.addObject("data_fen_p", data_fen_p);
        mv.addObject("data_fen_d", data_fen_d);

        return mv;
    }

    @RequestMapping("/get_default_app")
    public ModelAndView get_default_app() {
        return null;
    }

    /**
     * @Description ajax返回查询结果
     * @Auther Liang
     * @date 20:36 2019/3/31
     * @return java.lang.String
     */
    @RequestMapping("/searchData")
    @ResponseBody
    public Object searchData() throws JsonProcessingException {
        List<UpLoadMaterial> materials = searchService.selectAll();
        Map<String,Object> returnMap=new HashMap<>();
        returnMap.put("data", materials);
        return returnMap;
    }

}


