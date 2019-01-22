package com.xjtu.materials.service;

import com.xjtu.materials.pojo.User;

import java.util.List;

public interface UserService {
    int isLogin(String userName,String password);
    List<User> loginUserInfo(String name);
    int isExist(String type,String userName,String password,String sex,String birthday,String email,String job,String organization);

    // 获取所有用户
    List<User> getAllUser();
    // 获取不同状态用户 1、2、3 对应普通、拉黑、管理员用户
    List<User> getUsersByIsAuth(String auth);

}
