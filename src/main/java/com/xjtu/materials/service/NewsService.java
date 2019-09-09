package com.xjtu.materials.service;

import com.xjtu.materials.pojo.News;
import com.xjtu.materials.pojo.Knows;

import java.util.List;

public interface NewsService {
    void insert(String link, String title,String score,String num,String time,String note,String type,String author,String eye,String article);
    List<News> AllNews();
    void insertKnows(String link, String title,String score,String num,String time,String note,String type,String author,String eye,String article);
    List<Knows> AllKnows();
}
