package com.xjtu.materials.serviceImpl;

import com.xjtu.materials.mapper.LogMapper;
import com.xjtu.materials.mapper.PublicationMapper;
import com.xjtu.materials.mapper.UpLoadMaterialMapper;
import com.xjtu.materials.mapper.UserMapper;
import com.xjtu.materials.pojo.Log;
import com.xjtu.materials.pojo.LogExample;
import com.xjtu.materials.pojo.User;
import com.xjtu.materials.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class LogServiceImpl implements LogService {
    @Autowired
    LogMapper logMapper;
    @Autowired
    UserMapper userMapper;
    @Autowired
    PublicationMapper publicationMapper;
    @Autowired
    UpLoadMaterialMapper upLoadMaterialMapper;

    /**
     * @Description 获取所有日志
     * @Auther Liang
     * @date 14:18 2019/1/23
     * @return java.util.List<com.xjtu.materials.pojo.Log>
     */
    public List<Log> getAllLog() throws NullPointerException {
        LogExample example = new LogExample();
        example.createCriteria().andLogidIsNotNull();
        List<Log> logs = logMapper.selectByExample(example);
        for (Log log : logs) {
            // 封装操作用户
            User user = userMapper.selectByPrimaryKey(log.getUserid());
            //System.out.println(log.getUserid()+"--->"+user);
            log.setOperator(user);
            // 封装被操作对象名
            log.setOperator(userMapper.selectByPrimaryKey(log.getUserid()));
            String beOperator = "";
            switch (log.getLogtype()) {
                case "User": beOperator = userMapper.selectByPrimaryKey(log.getParamid()).getUsername(); break;
                case "Publication": beOperator = publicationMapper.selectByPrimaryKey(log.getParamid()).getPublicationname(); break;
                case "UpLoadMaterial":
                    if (upLoadMaterialMapper.selectByPrimaryKey(log.getParamid()) != null) {
                        beOperator = upLoadMaterialMapper.selectByPrimaryKey(log.getParamid()).getMaterialname();
                    } else {
                        beOperator = null;
                    };
                    break;
                default:break;
            }
            log.setBeOperator(beOperator);
        }
        return logs;
    }

    /**
     * @Description 上传文件日志(批量)
     * @Auther hl
     * @date 0:30 2019/1/23
     * @return void
     */
    @Override
    public void UploadLog(String userID, List<String> materialIDs, String method, String logicName){
        for (int i=0; i<materialIDs.size(); i++){
            String objectID = materialIDs.get(i);
            Log log = new Log();
            Date date=new Date();
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String time = format.format(date);
            String logID = UUID.randomUUID().toString();
            log.setLogid(logID);
            log.setUserid(userID);
            log.setUsertype("用户");
            log.setLogtime(time);
            log.setMethodlogicname(logicName);
            log.setMethod(method);
            log.setParamid(objectID);
            log.setLogtype("UpLoadMaterial");
            logMapper.insert(log);
        }
    }

    /**
     * @Description 上传文件日志（单个）
     * @Auther hl
     * @date 0:30 2019/1/23
     * @return void
     */
    public void UploadFileLog(String userID, String meterialID, String method, String logicName){
        Log log = new Log();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(date);
        String logID = UUID.randomUUID().toString();
        log.setLogid(logID);
        log.setUserid(userID);
        log.setUsertype("用户");
        log.setLogtime(time);
        log.setMethodlogicname(logicName);
        log.setMethod(method);
        log.setParamid(meterialID);
        log.setLogtype("UpLoadMaterial");
        logMapper.insert(log);
    }

    /**
     * @Description 下载文件日志
     * @Auther hl
     * @date 0:30 2019/1/23
     * @return void
     */
    @Override
    public void DownLoadFile(String userID, String objectID, String method){
        Log log = new Log();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(date);
        String logID = UUID.randomUUID().toString();
        log.setLogid(logID);
        log.setUserid(userID);
        log.setUsertype("用户");
        log.setLogtime(time);
        log.setMethodlogicname("DownLoadFile");
        log.setMethod(method);
        log.setParamid(objectID);
        log.setLogtype("DownLoadMaterial");
        logMapper.insert(log);
    }

    /**
     * @Description 提交文献日志
     * @Auther hl
     * @date 0:44 2019/1/23
     * @return void
     */
    @Override
    public void UploadpuPlicationLog(String userID, String objectID){
        Log log = new Log();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(date);
        String logID = UUID.randomUUID().toString();
        log.setLogid(logID);
        log.setUserid(userID);
        log.setUsertype("用户");
        log.setLogtime(time);
        log.setMethodlogicname("UploadPublication");
        log.setMethod("上传文献");
        log.setParamid(objectID);
        log.setLogtype("Publication");
        logMapper.insert(log);
    }

    /**
     * @Description 管理员拉黑用户日志
     * @Auther hl
     * @date 11:12 2019/1/23
     * @return void
     */
    @Override
    public void UploadUsers(String adminID,String userId){
        Log log = new Log();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(date);
        String logID = UUID.randomUUID().toString();
        log.setLogid(logID);
        log.setUserid(adminID);
        log.setUsertype("管理员");
        log.setLogtime(time);
        log.setMethodlogicname("DeleteUser");
        log.setMethod("拉黑用户");
        log.setParamid(userId);
        log.setLogtype("User");
        logMapper.insert(log);
    }

    /**
     * @Description cif文件通过审核的日志文件
     * @Auther hl
     * @date 11:30 2019/1/23
     * @return void
     */
    public void UploadFilesSuccess(String adminID,String materialID){
        Log log = new Log();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(date);
        String logID = UUID.randomUUID().toString();
        log.setLogid(logID);
        log.setUserid(adminID);
        log.setUsertype("管理员");
        log.setLogtime(time);
        log.setMethodlogicname("FileReviewSuccess");
        log.setMethod("稀贵金属cif文件审核通过");
        log.setParamid(materialID);
        log.setLogtype("UpLoadMaterial");
        logMapper.insert(log);
    }

    /**
     * @Description cif文件未通过审核的日志文件
     * @Auther hl
     * @date 11:35 2019/1/23
     * @return void
     */
    public void UploadFilesFailed(String adminID,String materialID){
        Log log = new Log();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(date);
        String logID = UUID.randomUUID().toString();
        log.setLogid(logID);
        log.setUserid(adminID);
        log.setUsertype("管理员");
        log.setLogtime(time);
        log.setMethodlogicname("FileReviewFailed");
        log.setMethod("稀贵金属cif文件未审核通过");
        log.setParamid(materialID);
        log.setLogtype("UpLoadMaterial");
        logMapper.insert(log);
    }
    /**
     * @Description 对应ajax功能，Publication文献后台通过审核
     * 修改Isauthenticated 状态：1 未审核 2 通过审核 3 不通过审核
     * @Auther hl
     * @date 13:45 2019/1/23
     * @return java.lang.String
     */
    public void UploadPublicationsSuccess(String adminID,String materialID){
        Log log = new Log();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(date);
        String logID = UUID.randomUUID().toString();
        log.setLogid(logID);
        log.setUserid(adminID);
        log.setUsertype("管理员");
        log.setLogtime(time);

        log.setMethodlogicname("PublicationReviewSuccess");
        log.setMethod("文献审核通过");
        log.setParamid(materialID);
        log.setLogtype("Publication");
        logMapper.insert(log);
    }
    /**
     * @Description 对应ajax功能，Publication文献后台未通过审核
     * 修改Isauthenticated 状态：1 未审核 2 通过审核 3 不通过审核
     * @Auther hl
     * @date 13:50 2019/1/23
     * @return java.lang.String
     */
    public void UploadPublicationsFailed(String adminID,String materialID){
        Log log = new Log();
        Date date=new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String time = format.format(date);
        String logID = UUID.randomUUID().toString();
        log.setLogid(logID);
        log.setUserid(adminID);
        log.setUsertype("管理员");
        log.setLogtime(time);

        log.setMethodlogicname("PublicationReviewfailed");
        log.setMethod("文献未审核通过");
        log.setParamid(materialID);
        log.setLogtype("Publication");
        logMapper.insert(log);
    }

}
