package com.xjtu.materials.service;

import com.xjtu.materials.pojo.User;

import java.util.List;

public interface UserService {
    int isLogin(String userName,String password);
    List<User> loginUserInfo(String name);
    int isExist(String type,String userName,String password,String sex,String birthday,String email,String job,String organization);

    // 获取所有用户
    List<User> getAllUser();
    // 获取普通用户
    List<User> getGeneralUser();
    // 获取管理员
    List<User> getAdminUser();
}
