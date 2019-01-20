package com.xjtu.materials.service;

import com.xjtu.materials.pojo.User;

import java.util.List;

public interface userService {
    int isLogin(String userName,String password);
    List<User> loginUserInfo(String name);
    int isExist(String type,String userName,String password,String sex,String birthday,String email,String job,String organization);
}
