package com.xjtu.materials.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CSVUtils {
    // 读取
    public static List<String> importCsv(File file) {
        List<String> dataList = new ArrayList<String>();

        BufferedReader br = null;
        try {
            br = new BufferedReader(new FileReader(file));
            String line = "";
            while ((line = br.readLine()) != null) {
                dataList.add(line);
            }
        } catch (Exception e) {
        } finally {
            if (br != null) {
                try {
                    br.close();
                    br = null;
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        return dataList;
    }

    public static void importCsv() {
        List<String> dataList = CSVUtils.importCsv(new File("F:\\learning\\作业\\材料基因组\\数据说明\\Al3Co DOS.csv"));
        if (dataList != null && !dataList.isEmpty()) {
            for (int i = 0; i < dataList.size(); i++) {
                if (i != 0) {//不读取第一行
                    String s = dataList.get(i);
                    System.out.println("第i行:" + s);
                    String[] as = s.split(",");
                    System.out.println(as[0]);
                    System.out.println(Float.valueOf(as[0]));

                    System.out.println(as[1]);
                    //System.out.println(as[2]);
                }
            }
        }
    }

    public static void main(String[] args) {
        importCsv();
    }

}
