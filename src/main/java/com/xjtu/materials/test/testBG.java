//package com.xjtu.materials.test;
//
//import com.xjtu.materials.util.ReadFromFile;
//import org.python.antlr.ast.Str;
//
//import java.util.List;
//
//public class testBG {
//    public static void main(String[] args) {
//        String path = "D:\\data\\Al2Hf\\PBE\\mechanical property\\Al2Hf Elastic Constants.txt";
//        List<String[]> readInLine = ReadFromFile.readFileByLines(path);
//        int lineBG = 0;
//        float data_B = 0;
//        float data_G = 0;
//        for (int i = 0; i < readInLine.size(); i++) {
//            String[] tempStr = readInLine.get(i);
//            if (tempStr.length > 5 && "Elastic".equals(tempStr[1]) && "polycrystalline".equals(tempStr[4])) {
//                lineBG = i;
//            }
//        }
//        for (int i = 0; i < 6; i++) {
//            if (readInLine.get(i + lineBG).length > 5 && "Bulk".equals(readInLine.get(i + lineBG)[0])){
//                data_B = Float.parseFloat(readInLine.get(i + lineBG)[5]);
//            }
//            if (readInLine.get(i + lineBG).length > 7 && "Shear".equals(readInLine.get(i + lineBG)[0])){
//                data_G = Float.parseFloat(readInLine.get(i + lineBG)[7]);
//            }
//        }
//        System.out.println("data_B:" + data_B + "-------data_G:" + data_G);
//    }
//}
