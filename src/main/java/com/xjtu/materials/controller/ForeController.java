package com.xjtu.materials.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.pojo.*;
import com.xjtu.materials.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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



    /**
     * @Description 首页
     * @Auther Liang
     * @date 22:00 2019/3/25
     * @return java.lang.String
     */
    @RequestMapping("/fore")
    public ModelAndView fore(HttpServletRequest request, HttpSession session){
        ModelAndView mv = new ModelAndView("foreWeb/fore");
        System.out.println("1");
        List<News> News = newsService.AllNews();
        System.out.println("News的长度"+News.size());
        System.out.println("2");
        mv.addObject("News", News);
        System.out.println("3");
        return mv;
    }




//          http://www.cailiaokexue.com/category/news/nonmetalnews/page/
//          http://www.cailiaokexue.com/category/news/metalnews/page/
//          http://www.cailiaokexue.com/category/news/comprehnews/page/
//            存储news

//
//            String s1 = "http://www.cailiaokexue.com/category/news/comprehnews/page/";
//            String s2 = "&filter=";
//
//            String link = null;   // 连接
//            String title = null;  // 主题
//            String score = null;  // 热度
//            String num = null;   // 评价人数
//            String time = null;   //发表时间
//            String note = null;     //摘要
//
//            String type = null;     //类型
//            String author = null;      //作者
//            String eye = null;      //阅读量
//            String article = null;  //文章
//
//            // 存储待爬取的网址url链接
//            ArrayList<String> list = new ArrayList<>();
//            for (int i = 1; i <= 11; i += 1) {
//                list.add(s1+i);
//            }
//
//            // 遍历url集合 爬取网页数据
//            for (String string : list) {
//                Document doc = Jsoup.connect(string).userAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36").timeout(1000000).get();
//                Elements infos = doc.getElementsByClass("excerpt");
//                for (Element element : infos) {
//                    Element links = element.getElementsByTag("a").get(0);
//                    link = links.attr("href");
//
//                    //每一个连接进行解析
//                    Document doc1 = Jsoup.connect(link).userAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36").timeout(6000).get();
//                    Elements infos1 = doc1.getElementsByClass("content");
//                    for (Element element1 : infos1){
//                        Element types = element1.getElementsByClass("meta").get(0);
//                        type = types.child(0).text();
//                        author = types.child(1).text();
//                        eye = types.child(3).text();
//                        eye = eye.substring(0,eye.length()-2);
//
//                        Element articles = element1.getElementsByClass("article-content").get(0);
//                        article = articles.html();
//                    }
//
//
//                    Element ls = element.getElementsByTag("a").get(1);
//                    title = ls.attr("title");
//
//                    Element notes = element.getElementsByClass("note").get(0);
//                    note = notes.html();
//
//                    Element star = element.getElementsByClass("auth-span").get(0);
//                    time = star.child(0).text();    // 获取发表时间
//                    int m = 0, n = 0;
//                    for (int i = 0; i < time.length(); i++) {
//                        if (time.charAt(i) == '(') {
//                            m = i ;
//                        }
//                        if (time.charAt(i) == ')') {
//                            n = i ;
//                            time = time.substring(m+1, n );
//                        }
//                    }
//                    if(time.length()==5){
//                        time = "2019-"+time;
//                    }
//
//                    score = star.child(1).text();     // 获取热度
//                    score = score.substring(0,score.length()-1);
//                    num = star.child(2).text();     // 获取评论人数
//                    num = num.substring(0,num.length()-2);
//                    System.out.println("time长度"+time.length());
//                    System.out.println(link + "\t" + title + "\t热度\t" + score + "\t评论人数\t" + num + "\t时间\t" + time + "\t内容\t"+ note+"\t类型\t"+type+"\t阅读量\t"+eye+"\t作者\t"+author);
//                    System.out.println("内容："+article);
//                    System.out.println("\n");
//                    System.out.println("\n");
//                    type = "综合新闻";
//                    newsService.insert(link,title,score,num,time,note,type,author,eye,article);
//                }
//            }


        //        http://www.cailiaokexue.com/category/knowlodge/metalknow/page/
        //        http://www.cailiaokexue.com/category/knowlodge/nonmetalknow/page/
        //        http://www.cailiaokexue.com/category/knowlodge/comprehknow/page/
        //        存储knows

//        String s1 = "http://www.cailiaokexue.com/category/knowlodge/comprehknow/page/";
//        String s2 = "&filter=";
//
//        String link = null;   // 连接
//        String title = null;  // 主题
//        String score = null;  // 热度
//        String num = null;   // 评价人数
//        String time = null;   //发表时间
//        String note = null;     //摘要
//
//        String type = null;     //类型
//        String author = null;      //作者
//        String eye = null;      //阅读量
//        String article = null;  //文章
//
//        // 存储待爬取的网址url链接
//        ArrayList<String> list = new ArrayList<>();
//        for (int i = 1; i <= 2; i += 1) {
//            list.add(s1+i);
//        }
//
//        // 遍历url集合 爬取网页数据
//        for (String string : list) {
//            Document doc = Jsoup.connect(string).userAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36").timeout(1000000).get();
//            Elements infos = doc.getElementsByClass("excerpt");
//
//            for (Element element : infos) {
//                Element links = element.getElementsByTag("a").get(0);
//                link = links.attr("href");
//
//                //每一个连接进行解析
//                Document doc1 = Jsoup.connect(link).userAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36").timeout(6000).get();
//                Elements infos1 = doc1.getElementsByClass("content");
//                for (Element element1 : infos1){
//                    Element types = element1.getElementsByClass("meta").get(0);
//                    type = types.child(0).text();
//                    author = types.child(1).text();
//                    eye = types.child(3).text();
//                    eye = eye.substring(0,eye.length()-2);
//
//                    Element articles = element1.getElementsByClass("article-content").get(0);
//                    article = articles.html();
//                }
//
//                Element ls = element.getElementsByTag("a").get(1);
//                title = ls.attr("title");
//
//                Element notes = element.getElementsByClass("note").get(0);
//                note = notes.html();
//
//                Element star = element.getElementsByClass("auth-span").get(0);
//                time = star.child(0).text();    // 获取发表时间
//                int m = 0, n = 0;
//                for (int i = 0; i < time.length(); i++) {
//                    if (time.charAt(i) == '(') {
//                        m = i ;
//                    }
//                    if (time.charAt(i) == ')') {
//                        n = i ;
//                        time = time.substring(m+1, n );
//                    }
//                }
//                if(time.length()==5){
//                    time = "2019-"+time;
//                }
//
//                score = star.child(1).text();     // 获取热度
//                score = score.substring(0,score.length()-1);
//                num = star.child(2).text();     // 获取评论人数
//                num = num.substring(0,num.length()-2);
//                System.out.println("time长度"+time.length());
//                System.out.println(link + "\t" + title + "\t热度\t" + score + "\t评论人数\t" + num + "\t时间\t" + time + "\t内容\t"+ note+"\t类型\t"+type+"\t阅读量\t"+eye+"\t作者\t"+author);
//                System.out.println("内容："+article);
//                System.out.println("\n");
//                System.out.println("\n");
//                type = "综合知识";
//                newsService.insertKnows(link,title,score,num,time,note,type,author,eye,article);
//            }
//        }


//      比较时间
//        List<News> News = newsService.AllNews();
//        ArrayList<String> re = new ArrayList<>();
//        for (News news:News) {
//            String time = news.getTime();
//            System.out.println(time);
//            String data = null;
//
//            int m = 0, n = 0;
//            for (int i = 0; i < time.length(); i++) {
//                if (time.charAt(i) == '(') {
//                    m = i ;
//                }
//                if (time.charAt(i) == ')') {
//                    n = i ;
//                    data = time.substring(m+1, n );
//                    System.out.println(data);
//                    re.add(data);
//                }
//            }
//        }
//        String DATE1 = re.get(0);
//        String DATE2 = re.get(1);
//        System.out.println("DATE1"+DATE1);
//        System.out.println("DATE2"+DATE2);
//
//        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
//        try {
//            Date dt1 = df.parse(DATE1);
//            Date dt2 = df.parse(DATE2);
//            if (dt1.getTime() > dt2.getTime()) {
//                System.out.println("dt1 在dt2前");
////                    return 1;
//            } else if (dt1.getTime() < dt2.getTime()) {
//                System.out.println("dt1在dt2后");
////                    return -1;
//            } else {
//                System.out.println("无法比较！");
////                    return 0;
//            }
//        } catch (Exception exception) {
//            exception.printStackTrace();
//        }
//        System.out.println("完成！");
//        mv.addObject("News",News);
//        return mv;
//    }


    //进行高级搜索，获得输入元素对应的金属化合物
    @RequestMapping("/searchPage1")
    public ModelAndView searchPage1(String name, HttpServletRequest request, HttpSession session) {
        ModelAndView mv = new ModelAndView("foreWeb/searchPage");

        String[] a = name.split("[^a-zA-Z]+");
        List<UpLoadMaterial> Materials = searchService.SelectByName(a);

        mv.addObject("Materials", Materials);
        mv.addObject("Number",Materials.size());
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


    /**
     * @Description 能带结构图
     * @Auther HL
     * @date 1:20 2019/5/28
     * @return java.lang.String
     */
    @RequestMapping("/bandDensity")
    public ModelAndView bandDensity(@RequestParam(value = "id") String id) {
        ModelAndView mv = new ModelAndView("/foreWeb/bandDensity");
        String Path = upLoadMaterialMapper.selectByPrimaryKey(id).getEnergydensitypath();

        // 能带密度图
//        List<float[][]> data_band = chartService.getBandData("D:\\data\\bandDensity\\Al3Co Band Structure(2).csv");
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
        String Path = upLoadMaterialMapper.selectByPrimaryKey(id).getGeneraldensitypath();
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
        String Path = upLoadMaterialMapper.selectByPrimaryKey(id).getPartitiondensitypath();
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

