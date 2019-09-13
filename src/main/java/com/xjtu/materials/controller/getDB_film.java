//package com.xjtu.materials.controller;
//
//import org.jsoup.Jsoup;
//import org.jsoup.nodes.Document;
//import org.jsoup.nodes.Element;
//import org.jsoup.select.Elements;
//
//import java.io.IOException;
//import java.util.ArrayList;
//
//public class getDB_film {
//
//    public static void main(String[] args) throws IOException {
////      http://www.cailiaokexue.com/category/news/nonmetalnews/page/
////      http://www.cailiaokexue.com/category/news/metalnews/page/
////        http://www.cailiaokexue.com/category/news/comprehnews/page/
//
////        http://www.cailiaokexue.com/category/knowlodge/metalknow/page/
//
//        String s1 = "http://www.cailiaokexue.com/category/news/metalnews/page/";
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
//        for (int i = 1; i <= 3; i += 1) {
//            list.add(s1+i);
//        }
//
//        // 遍历url集合 爬取网页数据
//        for (String string : list) {
//            Document doc = Jsoup.connect(string).userAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36").timeout(6000).get();
//            Elements infos = doc.getElementsByClass("excerpt");
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
//                    article = articles.text();
//                }
//
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
//
////                String time1 = buffer.toString();
//                score = star.child(1).text();     // 获取热度
//                score = score.substring(0,score.length()-1);
//                num = star.child(2).text();     // 获取评论人数
//                num = num.substring(0,num.length()-2);
//                System.out.println(link + "\t" + title + "\t热度\t" + score + "\t评论人数\t" + num + "\t时间\t" + time + "\t内容\t"+ note+"\t类型\t"+type+"\t阅读量\t"+eye+"\t作者\t"+author);
//                System.out.println("内容："+article);
//                System.out.println("\n");
//                System.out.println("\n");
//
//            }
//        }
//    }
//}
