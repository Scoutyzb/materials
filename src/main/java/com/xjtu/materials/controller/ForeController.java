package com.xjtu.materials.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.pojo.*;
import com.xjtu.materials.service.*;
import com.xjtu.materials.util.FileUtil;
import com.xjtu.materials.util.ReadFromFile;
import org.python.antlr.ast.Str;
import org.springframework.beans.factory.annotation.Autowired;
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

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
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

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
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
    @RequestMapping(value = "/uploadP", method= RequestMethod.POST, produces="application/json;charset=utf-8")
    public String uploadPublication(@RequestParam("fileName") String fileName , @RequestParam("userName") String authorName , @RequestParam("abstractText") String abstractText , @RequestParam("DIO") String DIO , @RequestParam("type") String type , @RequestParam("adress") String adress , HttpSession session, HttpServletRequest request) throws IOException, InterruptedException{
        String username = (String) session.getAttribute("UserName");
        String userID = (String) session.getAttribute("UserId");
        if (username == null){
            return "login";
        }
        String objectID = filePathService.UploadPublication(fileName,authorName,username,abstractText,DIO,type,adress);
        logService.UploadpuPlicationLog(userID,objectID);
        return "foreWeb/upload_publication";
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
        MultipartHttpServletRequest params=((MultipartHttpServletRequest) request);
        List<MultipartFile> files = params.getFiles("folder");     //fileFolder为文件项的name值
        String type = params.getParameter("type");
        String method = null;
        if (type.equals("all")){
            method = "全部替换";
            List<String> data =  FileUtil.saveMultiFile("D:\\data", files);
            String meterialID = filePathService.Upload(data,username);
            logService.UploadLog(userID,meterialID,method);
        }
        else if (type.equals("section")){
            method = "部分覆盖";
            List<String> data =  FileUtil.saveMultiFile1("D:\\data", files);
            String meterialID = filePathService.Upload(data,username);
            logService.UploadLog(userID,meterialID,method);
        }
//        List<String> data =  FileUtil.saveMultiFile("D:\\data", files);
//        String meterialID = filePathService.Upload(data,username);
//        logService.UploadLog(userID,meterialID);
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
    public String downLoadFile(HttpSession session, HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
        String username = (String) session.getAttribute("UserName");
        String userID = (String) session.getAttribute("UserId");
        String materialId = request.getParameter("materialId");
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(materialId).getMaterialname();
        String downloadFilePath = "D:\\data\\"+materialName+"\\PBE\\crystal structure";//被下载的文件在服务器中的路径,
        String path = materialName+".cif";
        File scFileDir = new File(downloadFilePath);
        File TrxFiles[] = scFileDir.listFiles();
        String fileName = TrxFiles[0].getName();
        if (fileName.equals(path)){
            System.out.println("相等"+fileName);
            String realPath = "D:\\data\\"+materialName+"\\PBE\\crystal structure";
            File file = new File(realPath, path);
            System.out.println("文件"+file.exists());
            // 如果文件名存在，则进行下载
            if (file.exists()) {
                System.out.println("文件存在");
                // 配置文件下载
                response.setHeader("content-type", "application/octet-stream");
                response.setContentType("application/octet-stream");
                // 下载文件能正常显示中文
                response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));

                // 实现文件下载
                byte[] buffer = new byte[1024];
                FileInputStream fis = null;
                BufferedInputStream bis = null;
                try {
                    fis = new FileInputStream(file);
                    bis = new BufferedInputStream(fis);
                    OutputStream os = response.getOutputStream();
                    int i = bis.read(buffer);
                    while (i != -1) {
                        os.write(buffer, 0, i);
                        i = bis.read(buffer);
                    }
                    return "1";
//                    System.out.println("Download the song successfully!");
                }
                catch (Exception e) {
                    return "0";
//                    System.out.println("Download the song failed!");
                }
                finally {
                    if (bis != null) {
                        try {
                            bis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                    if (fis != null) {
                        try {
                            fis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }else{
                return "0";
            }
        }
        return "1";
    }


    /**
     * @Description 晶体结构
     * @Auther HL
     * @date 1:20 2019/3/26
     * @return java.lang.String
     */
    @RequestMapping("/crystalStructure1")
    public ModelAndView crystalStructure1(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/foreWeb/crystalStructure1");
        String materialName = upLoadMaterialMapper.selectByPrimaryKey(id).getMaterialname();

        mv.addObject("materialName", materialName);
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
        // PDOS
        String pathPDOS = "D:\\data\\"+materialName+"\\PBE\\electronic properties\\"+materialName+" PDOS.csv";
        List<float[][]> dataPDOS = chartService.getFenData(pathPDOS);

//        for (int i = 0; i < dataPDOS.size(); i++) {
//            for (int j = 0; j < dataPDOS.get(i).length; j++) {
//                System.out.println(dataPDOS.get(i)[j][0]);
//                System.out.println(dataPDOS.get(i)[j][1]);
//            }
//        }

        mv.addObject("data_band", data_band);
        mv.addObject("materialName", materialName);
        mv.addObject("dataZong", dataZong);
        mv.addObject("dataPDOS", dataPDOS);

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

//    /fore/paper
//    /paper

