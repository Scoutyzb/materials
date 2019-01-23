package com.xjtu.materials.service;

import com.xjtu.materials.pojo.Log;

import java.util.List;

public interface LogService {

    // 获取所有日志
    List<Log> getAllLog();

    /**
     * @Description 上传文件日志
     * @Auther hl
     * @date 0:30 2019/1/23
     * @return void
     */
    void UploadLog(String userID, String objectID);
    /**
     * @Description 提交文献日志
     * @Auther hl
     * @date 0:44 2019/1/23
     * @return void
     */
    void UploadpuPlicationLog(String userID,String objectID);
    /**
     * @Description 管理员拉黑用户日志
     * @Auther hl
     * @date 11:12 2019/1/23
     * @return void
     */
    void UploadUsers(String adminID,String userId);
    /**
     * @Description cif文件通过审核的日志文件
     * @Auther hl
     * @date 11:30 2019/1/23
     * @return void
     */
    void UploadFilesSuccess(String adminID,String materialID);
    /**
     * @Description cif文件未通过审核的日志文件
     * @Auther hl
     * @date 11:35 2019/1/23
     * @return void
     */
     void UploadFilesFailed(String adminID,String materialID);
}
