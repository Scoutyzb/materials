package com.xjtu.materials.pojo;

public class Log {
    private String logid;

    private String userid;

    private String usertype;

    private String logtime;

    private String methodlogicname;

    private String method;

    private String paramid;

    private String logtype;

    // 额外添加
    private User operator;
    // 被操作者名字
    private String beOperator;

    public String getBeOperator() {
        return beOperator;
    }

    public void setBeOperator(String beOperator) {
        this.beOperator = beOperator;
    }

    public User getOperator() {
        return operator;
    }

    public void setOperator(User operator) {
        this.operator = operator;
    }

    public String getLogid() {
        return logid;
    }

    public void setLogid(String logid) {
        this.logid = logid == null ? null : logid.trim();
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid == null ? null : userid.trim();
    }

    public String getUsertype() {
        return usertype;
    }

    public void setUsertype(String usertype) {
        this.usertype = usertype == null ? null : usertype.trim();
    }

    public String getLogtime() {
        return logtime;
    }

    public void setLogtime(String logtime) {
        this.logtime = logtime == null ? null : logtime.trim();
    }

    public String getMethodlogicname() {
        return methodlogicname;
    }

    public void setMethodlogicname(String methodlogicname) {
        this.methodlogicname = methodlogicname == null ? null : methodlogicname.trim();
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method == null ? null : method.trim();
    }

    public String getParamid() {
        return paramid;
    }

    public void setParamid(String paramid) {
        this.paramid = paramid == null ? null : paramid.trim();
    }

    public String getLogtype() {
        return logtype;
    }

    public void setLogtype(String logtype) {
        this.logtype = logtype == null ? null : logtype.trim();
    }

    @Override
    public String toString() {
        return "Log{" +
                "logid='" + logid + '\'' +
                ", userid='" + userid + '\'' +
                ", usertype='" + usertype + '\'' +
                ", logtime='" + logtime + '\'' +
                ", methodlogicname='" + methodlogicname + '\'' +
                ", method='" + method + '\'' +
                ", paramid='" + paramid + '\'' +
                ", logtype='" + logtype + '\'' +
                ", operator=" + operator +
                ", beOperator='" + beOperator + '\'' +
                '}';
    }
}