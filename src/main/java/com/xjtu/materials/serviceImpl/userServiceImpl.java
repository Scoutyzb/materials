package com.xjtu.materials.serviceImpl;

import com.xjtu.materials.pojo.User;
import com.xjtu.materials.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.xjtu.materials.mapper.UserMapper;
import com.xjtu.materials.pojo.UserExample;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class userServiceImpl implements userService {

    @Autowired
    UserMapper userMapper;

//
    @Override
    public int isLogin(String userName,String password){
        UserExample example = new UserExample();
        example.createCriteria().andUsernameEqualTo(userName);
        List<User> users = userMapper.selectByExample(example);
        int result = 0;
        String userPassword = users.get(0).getPassword();

        if (!users.isEmpty()){
            if(password.equals(userPassword)){
                result = 2;
            }
            else{
                result = 1;
            }
        }
        else{
            result = 0;
        }
        System.out.println(result);
        return result;
    }
    @Override
    public List<User> loginUserInfo(String name){
        UserExample example = new UserExample();
        example.createCriteria().andUsernameEqualTo(name);
        List<User> users = userMapper.selectByExample(example);
        return users;
    }

    @Override
    public int isExist(String type,String userName,String password,String sex,String birthday,String email,String job,String organization){
        UserExample example = new UserExample();
        example.createCriteria().andUsernameEqualTo(userName);
        List<User> users = userMapper.selectByExample(example);
        if(!users.isEmpty()){
            return 0;
        }
        else{
            if(type.equals("0")){
                type = "个人用户";
            }
            if(sex.equals("1")){
                sex = "男";
            }
            else{
                sex = "女";
            }
            Date date=new Date();
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String time = format.format(date);
            String userID = UUID.randomUUID().toString();

            User user = new User();
            user.setUserid(userID);
            user.setUsername(userName);
            user.setPassword(password);
            user.setEmail(email);
            user.setOrganization(organization);
            user.setRole("用户");
            user.setJob(job);
            user.setIsauthenticated("1");
            user.setRegistranttime(time);
            userMapper.insert(user);
            return  1;
        }
    }
}
