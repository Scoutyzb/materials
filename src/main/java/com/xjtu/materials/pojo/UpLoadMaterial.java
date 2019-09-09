package com.xjtu.materials.pojo;

public class UpLoadMaterial {
    private String materialid;

    private String username;

    private String materialname;

    private String type;

    private String isauthenticated;

    private String time;

    private String path;

    private String generaldensitypath;

    private String partitiondensitypath;

    private String energydensitypath;

    public String getMaterialid() {
        return materialid;
    }

    public void setMaterialid(String materialid) {
        this.materialid = materialid == null ? null : materialid.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
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

    public String getGeneraldensitypath() {
        return generaldensitypath;
    }

    public void setGeneraldensitypath(String generaldensitypath) {
        this.generaldensitypath = generaldensitypath == null ? null : generaldensitypath.trim();
    }

    public String getPartitiondensitypath() {
        return partitiondensitypath;
    }

    public void setPartitiondensitypath(String partitiondensitypath) {
        this.partitiondensitypath = partitiondensitypath == null ? null : partitiondensitypath.trim();
    }

    public String getEnergydensitypath() {
        return energydensitypath;
    }

    public void setEnergydensitypath(String energydensitypath) {
        this.energydensitypath = energydensitypath == null ? null : energydensitypath.trim();
    }
}