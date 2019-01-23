package com.xjtu.materials.service;

import org.springframework.web.multipart.MultipartFile;

public interface LogService {
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
    /**
     * @Description 对应ajax功能，Publication文献后台通过审核
     * 修改Isauthenticated 状态：1 未审核 2 通过审核 3 不通过审核
     * @Auther hl
     * @date 13:45 2019/1/23
     * @return java.lang.String
     */
     void UploadPublicationsSuccess(String adminID,String materialID);
    /**
     * @Description 对应ajax功能，Publication文献后台未通过审核
     * 修改Isauthenticated 状态：1 未审核 2 通过审核 3 不通过审核
     * @Auther hl
     * @date 13:50 2019/1/23
     * @return java.lang.String
     */
     void UploadPublicationsFailed(String adminID,String materialID);
}
