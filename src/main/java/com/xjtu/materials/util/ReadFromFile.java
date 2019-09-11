package com.xjtu.materials.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ReadFromFile {
    /**
     * 以行为单位读取文件，常用于读面向行的格式化文件
     */
    public static List<String[]> readFileByLines(String fileName) {
        List<String[]> res = new ArrayList<>();
        List<String> tempRes = new ArrayList<>();
        File file = new File(fileName);
        BufferedReader reader = null;
        try {
            System.out.println("以行为单位读取文件内容，一次读一整行：");
            reader = new BufferedReader(new FileReader(file));
            String tempString = null;
            int line = 1;
            // 一次读入一行，直到读入null为文件结束
            while ((tempString = reader.readLine()) != null) {
                // 显示行号
                System.out.println("line " + line + ": " + tempString);
                tempRes.add(tempString);
                line++;
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e1) {
                }
            }
        }
        for (int i = 0; i < tempRes.size(); i++) {
            String[] temp = tempRes.get(i).split("\\s+");
            res.add(temp);
        }
        return res;
    }
}
