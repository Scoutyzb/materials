package com.xjtu.materials.util;

import org.apache.tomcat.util.http.parser.MediaType;
import org.python.antlr.ast.Str;
import org.python.apache.commons.compress.utils.IOUtils;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;
import sun.font.TrueTypeFont;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FileUtil {
    //静态方法：三个参数：文件的二进制，文件路径，文件名
    //通过该方法将在指定目录下添加指定文件
    public static void fileupload(byte[] file,String filePath,String fileName) throws IOException {
        //目标目录
        File targetfile = new File(filePath);
        if(targetfile.exists()) {
            targetfile.mkdirs();
        }
        //二进制流写入
        FileOutputStream out = new FileOutputStream(filePath+fileName);
        out.write(file);
        out.flush();
        out.close();
    }
    /**
     * 获得data的首个子路径
     * @param files
     */
    public static String obtain(List<MultipartFile> files){
        //获得文件夹元素的值item
        String dir = files.get(0).getOriginalFilename();
        String item = dir.substring(0, dir.indexOf("/"));
        return item;
    }

    /**
     * 在basePath下全部替换上传的文件夹(多文件批量)
     * @param basePath
     * @param files
     */
    public static List<String> saveMultiFile(String basePath, List<MultipartFile> files) {
        if(files.size() > 1){
            List<String> data = new ArrayList<>();
            if (basePath.endsWith("/")) {
                basePath = basePath.substring(0, basePath.length() - 1);
            }
            //获得文件夹元素的值item
            String dir = files.get(0).getOriginalFilename();
            String item = dir.substring(0, dir.indexOf("/"));
            //使用data存储元素信息
            if(item.equals("data")){
                //获得data路径下是否存在item
                String path = basePath+"\\"+item;
                //将文件夹存入指定路径
                for (MultipartFile file : files) {
                    // 获取文件名
                    String fileName = file.getOriginalFilename();
                    String a = fileName.substring(5,fileName.length());
                    item = a.substring(0, a.indexOf("/"));
                    data.add(item);
                    //材料路径
                    String cailiaoPath = basePath + "\\data\\" + item;
                    data.add(cailiaoPath);
                    //若同名文件夹之前已经存在，则删除文件夹
                    File fileE=new File(cailiaoPath);
                    if (fileE.exists()){
                        deleteFile(fileE);
                    }
                    //文件上传
                    String filePath = basePath + "\\" + fileName;
                    makeDir(filePath);
                    File dest = new File(filePath);
                    try {
                        file.transferTo(dest);
                    } catch (IllegalStateException | IOException e)
                    {
                        e.printStackTrace();
                    }
                }
                return data;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }
    /**
     * 在basePath下部分覆盖上传的文件夹（多文件批量）
     * @param basePath
     * @param files
     */
    public static List<String> saveMultiFile1(String basePath, List<MultipartFile> files) {
        if(files.size() > 1){
            List<String> data = new ArrayList<>();
            if (basePath.endsWith("/")) {
                basePath = basePath.substring(0, basePath.length() - 1);
            }
            //获得文件夹元素的值item
            String dir = files.get(0).getOriginalFilename();
            String item = dir.substring(0, dir.indexOf("/"));
            //使用data存储元素信息
            if(item.equals("data")){
                //获得data路径下是否存在item
                String path = basePath+"\\"+item;
                //将文件夹存入指定路径
                for (MultipartFile file : files) {
                    // 获取文件名
                    String fileName = file.getOriginalFilename();
                    String a = fileName.substring(5,fileName.length());
                    item = a.substring(0, a.indexOf("/"));
                    data.add(item);
                    //材料路径
                    String cailiaoPath = basePath + "\\data\\" + item;
                    data.add(cailiaoPath);
                    //文件上传
                    String filePath = basePath + "\\" + fileName;
                    makeDir(filePath);
                    File dest = new File(filePath);
                    try {
                        file.transferTo(dest);
                    } catch (IllegalStateException | IOException e)
                    {
                        e.printStackTrace();
                    }
                }
                for  ( int  i  =   0 ; i  <  data.size()  -   1 ; i ++ )  {
                    for  ( int  j  =  data.size()  -   1 ; j  >  i; j -- )  {
                        if  (data.get(j).equals(data.get(i)))  {
                            data.remove(j);
                        }
                    }
                }
                return data;
            }else{
                return null;
            }
        }else{
            return null;
        }
    }

    /**
     * 在basePath下全部替换上传的文件夹（单文件夹）
     * @param basePath
     * @param files
     */
    public static List<String> saveMultiFile2(String basePath, List<MultipartFile> files) {
        if(files.size() > 1){
            List<String> data = new ArrayList<>();
//            if (files == null || files.size() == 0){
//                return data;
//            }
            if (basePath.endsWith("/")) {
                basePath = basePath.substring(0, basePath.length() - 1);
            }

            //获得文件夹元素的值item
            String dir = files.get(0).getOriginalFilename();

            String item = dir.substring(0, dir.indexOf("/"));
            //使用data存储元素信息
            data.add(item);
            //获得data路径下是否存在item
            String path = basePath+"\\"+item;
            //使用data存储文件路径信息
            data.add(path);
            //若同名文件夹之前已经存在，则删除文件夹
            File fileE=new File(path);
            if (fileE.exists()){
                deleteFile(fileE);
            }

            //将文件夹存入指定路径
            for (MultipartFile file : files) {
                // 获取文件名
                String fileName = file.getOriginalFilename();
                String filePath = basePath + "/" + fileName;
                makeDir(filePath);
                File dest = new File(filePath);
                try {
                    file.transferTo(dest);
                } catch (IllegalStateException | IOException e)
                {
                    e.printStackTrace();
                }
            }
            return data;
        }else{
            return null;
        }
    }

    /**
     * 在basePath下部分覆盖上传的文件夹（单文件夹）
     * @param basePath
     * @param files
     */
    public static List<String> saveMultiFile3(String basePath, List<MultipartFile> files) {
        if(files.size() > 1){
            List<String> data = new ArrayList<>();
            if (basePath.endsWith("/")) {
                basePath = basePath.substring(0, basePath.length() - 1);
            }
            //获得文件夹元素的值item
            String dir = files.get(0).getOriginalFilename();
            String item = dir.substring(0, dir.indexOf("/"));
            //使用data存储元素信息
            data.add(item);
            //获得data路径下是否存在item
            String path = basePath+"\\"+item;
            //使用data存储文件路径信息
            data.add(path);
            //若同名文件夹之前已经存在，则删除文件夹
            //将文件夹存入指定路径
            for (MultipartFile file : files) {
                // 获取文件名
                String fileName = file.getOriginalFilename();
                String filePath = basePath + "/" + fileName;
                makeDir(filePath);
                File dest = new File(filePath);
                try {
                    file.transferTo(dest);
                } catch (IllegalStateException | IOException e)
                {
                    e.printStackTrace();
                }
            }
            return data;
        }else{
            return null;
        }
    }




    /**
     * 文件下载
     */
    public static String downLoad(String endPath, MultipartFile toMultipartFile){
        makeDir(endPath);
        File dest = new File(endPath);
        try {
            toMultipartFile.transferTo(dest);
        } catch (IllegalStateException | IOException e)
        {
            e.printStackTrace();
        }
        return "1";
    }


    /**
     * 确保目录存在，不存在则创建
     * @param filePath
     */
    private static void makeDir(String filePath) {
        if (filePath.lastIndexOf('/') > 0) {
            String dirPath = filePath.substring(0, filePath.lastIndexOf('/'));
            File dir = new File(dirPath);
            if (!dir.exists()) {
                dir.mkdirs();
            }
        }
    }
    /**
     * 删除指定路径下的所有文件
     */
    private static void deleteFile(File dir) {
        //1,获取该文件夹下的所有的文件和文件夹
        File[] subFiles = dir.listFiles();
        //2,遍历数组
        for (File subFile : subFiles) {
            //3,判断是文件直接删除
            if(subFile.isFile()) {
                subFile.delete();
            }else {     //4,如果是文件夹,递归调用
                deleteFile(subFile);
            }
        }
        //5,循环结束后,把空文件夹删掉
        dir.delete();
    }
}
