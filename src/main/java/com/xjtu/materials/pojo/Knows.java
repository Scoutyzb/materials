package com.xjtu.materials.pojo;

public class Knows {
    private String knowsid;

    private String knowstitle;

    private String author;

    private String type;

    private String note;

    private String score;

    private String num;

    private String time;

    private String eye;

    private String article;

    public String getKnowsid() {
        return knowsid;
    }

    public void setKnowsid(String knowsid) {
        this.knowsid = knowsid == null ? null : knowsid.trim();
    }

    public String getKnowstitle() {
        return knowstitle;
    }

    public void setKnowstitle(String knowstitle) {
        this.knowstitle = knowstitle == null ? null : knowstitle.trim();
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author == null ? null : author.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note == null ? null : note.trim();
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score == null ? null : score.trim();
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num == null ? null : num.trim();
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time == null ? null : time.trim();
    }

    public String getEye() {
        return eye;
    }

    public void setEye(String eye) {
        this.eye = eye == null ? null : eye.trim();
    }

    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article == null ? null : article.trim();
    }
}