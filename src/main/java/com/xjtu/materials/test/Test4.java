package com.xjtu.materials.test;


import com.xjtu.materials.util.ReadFromFile;
import org.python.antlr.ast.Str;

import java.util.List;

public class Test4 {
    public static void main(String[] args) {
        String path = "D:\\data\\cif\\AlHfNi.cif";
        List<String[]> res = ReadFromFile.readFileByLines(path);
        for (String temp : res.get(8)) {
            System.out.println(temp);
        }
//        for (int i = 0; i < 30; i++) {
//            if (res.get(i)[0].equals("\\s+")) {
//                System.out.println(res.get(i).toString());
//            }
////            System.out.println(res.get(i)[0]);
////            for (int j = 0; j < res.get(i).length; j++) {
////                System.out.println(res.get(i)[j]);
////            }
//        }
    }
}
