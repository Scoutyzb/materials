package com.xjtu.materials.util;

import org.springframework.web.multipart.MultipartFile;
import sun.font.TrueTypeFont;

import java.io.File;
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
     * 在basePath下保存上传的文件夹
     * @param basePath
     * @param files
     */

    public static List<String> saveMultiFile(String basePath, List<MultipartFile> files) {
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
//        if (files == null || files.size()==0) {
//            return;
//        }
//        if (basePath.endsWith("/")) {
//            basePath = basePath.substring(0, basePath.length() - 1);
//        }
//
//        //获得文件夹元素的值item
//        String dir = files.get(0).getOriginalFilename();
//        System.out.println("dir"+dir);
//        //判断是否为IE浏览器的文件名，IE浏览器下文件名会带有盘符信息
//        // Check for Unix-style path
//        int unixSep = dir.lastIndexOf('/');
//        // Check for Windows-style path
//        int winSep = dir.lastIndexOf('\\');
//        // Cut off at latest possible point
//        int pos = (winSep > unixSep ? winSep : unixSep);
//        if (pos != -1){
//            // Any sort of path separator found...
//            dir = dir.substring(pos + 1);
//        }
//        String item = dir.substring(0, dir.indexOf("."));
//
//        //获得data路径下是否存在item
//        String path = basePath+"\\"+item;
//        System.out.println("路径"+path);
//        File fileE=new File(path);
//        System.out.println("存在"+fileE.exists());
//        if (fileE.exists()){
//            deleteFile(fileE);
//        }
//        System.out.println("Al文件的尺寸"+fileE.length());
//
//        //实现文本的存入
//        for (MultipartFile file : files) {
//            // 获取文件名
//            String fileName = file.getOriginalFilename();
//            //判断是否为IE浏览器的文件名，IE浏览器下文件名会带有盘符信息
//            // Check for Unix-style path
//            int unixSep1 = fileName.lastIndexOf('/');
//            // Check for Windows-style path
//            int winSep1 = fileName.lastIndexOf('\\');
//            // Cut off at latest possible point
//            int pos1 = (winSep1 > unixSep1 ? winSep1 : unixSep1);
//            if (pos1 != -1)  {
//                // Any sort of path separator found...
//                fileName = fileName.substring(pos1 + 1);
//            }
//            System.out.println("fileName"+fileName);
//            String filePath = basePath + "/" + fileName;
//            System.out.println("filePath"+filePath);
//            makeDir(filePath);
//            File dest = new File(filePath);
//            try {
//                file.transferTo(dest);
//            } catch (IllegalStateException | IOException e) {
//                e.printStackTrace();
//            }
//        }
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
