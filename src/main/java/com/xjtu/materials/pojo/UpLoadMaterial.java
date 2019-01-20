package com.xjtu.materials.pojo;

public class UpLoadMaterial {
    private String materialid;

    private String materialname;

    private String type;

    private String isauthenticated;

    private String time;

    private String path;

    public String getMaterialid() {
        return materialid;
    }

    public void setMaterialid(String materialid) {
        this.materialid = materialid == null ? null : materialid.trim();
    }

    public String getMaterialname() {
        return materialname;
    }

    public void setMaterialname(String materialname) {
        this.materialname = materialname == null ? null : materialname.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getIsauthenticated() {
        return isauthenticated;
    }

    public void setIsauthenticated(String isauthenticated) {
        this.isauthenticated = isauthenticated == null ? null : isauthenticated.trim();
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time == null ? null : time.trim();
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path == null ? null : path.trim();
    }
}