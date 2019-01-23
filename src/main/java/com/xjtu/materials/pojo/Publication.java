package com.xjtu.materials.pojo;

public class Publication {
    private String publicationid;

    private String publicationname;

    private String publicationauthor;

    private String publicationsummary;

    private String publicationtype;

    private String publicationdoi;

    private String publicationwebsite;

    private String username;

    private String uploadtime;

    private String isauthenticated;

    public String getPublicationid() {
        return publicationid;
    }

    public void setPublicationid(String publicationid) {
        this.publicationid = publicationid == null ? null : publicationid.trim();
    }

    public String getPublicationname() {
        return publicationname;
    }

    public void setPublicationname(String publicationname) {
        this.publicationname = publicationname == null ? null : publicationname.trim();
    }

    public String getPublicationauthor() {
        return publicationauthor;
    }

    public void setPublicationauthor(String publicationauthor) {
        this.publicationauthor = publicationauthor == null ? null : publicationauthor.trim();
    }

    public String getPublicationsummary() {
        return publicationsummary;
    }

    public void setPublicationsummary(String publicationsummary) {
        this.publicationsummary = publicationsummary == null ? null : publicationsummary.trim();
    }

    public String getPublicationtype() {
        return publicationtype;
    }

    public void setPublicationtype(String publicationtype) {
        this.publicationtype = publicationtype == null ? null : publicationtype.trim();
    }

    public String getPublicationdoi() {
        return publicationdoi;
    }

    public void setPublicationdoi(String publicationdoi) {
        this.publicationdoi = publicationdoi == null ? null : publicationdoi.trim();
    }

    public String getPublicationwebsite() {
        return publicationwebsite;
    }

    public void setPublicationwebsite(String publicationwebsite) {
        this.publicationwebsite = publicationwebsite == null ? null : publicationwebsite.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getUploadtime() {
        return uploadtime;
    }

    public void setUploadtime(String uploadtime) {
        this.uploadtime = uploadtime == null ? null : uploadtime.trim();
    }

    public String getIsauthenticated() {
        return isauthenticated;
    }

    public void setIsauthenticated(String isauthenticated) {
        this.isauthenticated = isauthenticated == null ? null : isauthenticated.trim();
    }

    @Override
    public String toString() {
        return "Publication{" +
                "publicationid='" + publicationid + '\'' +
                ", publicationname='" + publicationname + '\'' +
                ", publicationauthor='" + publicationauthor + '\'' +
                ", publicationsummary='" + publicationsummary + '\'' +
                ", publicationtype='" + publicationtype + '\'' +
                ", publicationdoi='" + publicationdoi + '\'' +
                ", publicationwebsite='" + publicationwebsite + '\'' +
                ", username='" + username + '\'' +
                ", uploadtime='" + uploadtime + '\'' +
                ", isauthenticated='" + isauthenticated + '\'' +
                '}';
    }
}