package com.xjtu.materials.serviceImpl;

import com.xjtu.materials.mapper.KnowsMapper;
import com.xjtu.materials.mapper.NewsMapper;
import com.xjtu.materials.pojo.Knows;
import com.xjtu.materials.pojo.KnowsExample;
import com.xjtu.materials.pojo.News;
import com.xjtu.materials.pojo.NewsExample;
import com.xjtu.materials.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class NewsServiceImpl implements NewsService {
    @Autowired
    NewsMapper newsMapper;
    @Autowired
    KnowsMapper knowsMapper;
    /**
     * @Description 存储news
     * @Auther hl
     * @date 0:00 2019/6/8
     * @return void
     */
    public void insert(String link, String title,String score,String num,String time,String note,String type,String author,String eye,String article){
        News news = new News();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String cuntime = format.format(date);
        String newsID = UUID.randomUUID().toString();

        news.setNewsid(newsID);
        news.setAuthor(author);
        news.setNewstitle(title);
        news.setType(type);
        news.setNote(note);
        news.setScore(score);
        news.setNum(num);
        news.setTime(time);
        news.setEye(eye);
        news.setArticle(article);

        newsMapper.insert(news);
    }
    /**
     * @Description 读取所有news
     * @Auther hl
     * @date 0:00 2019/6/8
     * @return void
     */
    public List<News> AllNews(){
        NewsExample example = new NewsExample();
        example.createCriteria().andNewsidIsNotNull();
        List<News> allNews = newsMapper.selectByExample(example);
        List<News> resultNews = new ArrayList<>();
        for (News news : allNews){
            String test = news.getScore();
            if(Integer.parseInt(test)>4000){
                resultNews.add(news);
            }
        }
        return resultNews;
    }
    /**
     * @Description 存储knows
     * @Auther hl
     * @date 0:00 2019/6/8
     * @return void
     */
    public void insertKnows(String link, String title,String score,String num,String time,String note,String type,String author,String eye,String article){
        Knows knows = new Knows();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String cuntime = format.format(date);
        String newsID = UUID.randomUUID().toString();

        knows.setKnowsid(newsID);
        knows.setAuthor(author);
        knows.setKnowstitle(title);
        knows.setType(type);
        knows.setNote(note);
        knows.setScore(score);
        knows.setNum(num);
        knows.setTime(time);
        knows.setEye(eye);
        knows.setArticle(article);

        knowsMapper.insert(knows);
    }
    /**
     * @Description 读取所有knows
     * @Auther hl
     * @date 0:00 2019/6/8
     * @return void
     */
    public List<Knows> AllKnows(){
        KnowsExample example = new KnowsExample();
        example.createCriteria().andKnowsidIsNotNull();
        List<Knows> allKnows = knowsMapper.selectByExample(example);
        List<Knows> resultNews = new ArrayList<>();
        for (Knows knows : allKnows){
            String test = knows.getScore();
//            test = test.substring(0,knows.getScore().length());
            if(Integer.parseInt(test)>4000){
                resultNews.add(knows);
            }
        }
        return resultNews;
    }

}
