package com.xjtu.materials.pojo;

public class User {
    private String userid;

    private String username;

    private String password;

    private String email;

    private String job;

    private String organization;

    private String role;

    private String isauthenticated;

    private String registranttime;

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid == null ? null : userid.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job == null ? null : job.trim();
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization == null ? null : organization.trim();
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role == null ? null : role.trim();
    }

    public String getIsauthenticated() {
        return isauthenticated;
    }

    public void setIsauthenticated(String isauthenticated) {
        this.isauthenticated = isauthenticated == null ? null : isauthenticated.trim();
    }

    public String getRegistranttime() {
        return registranttime;
    }

    public void setRegistranttime(String registranttime) {
        this.registranttime = registranttime == null ? null : registranttime.trim();
    }

    @Override
    public String toString() {
        return "User{" +
                "userid='" + userid + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", job='" + job + '\'' +
                ", organization='" + organization + '\'' +
                ", role='" + role + '\'' +
                ", isauthenticated='" + isauthenticated + '\'' +
                ", registranttime='" + registranttime + '\'' +
                '}';
    }
}