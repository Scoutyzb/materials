//package com.xjtu.materials.test;
//
//
//import com.xjtu.materials.util.ReadFromFile;
//import org.python.antlr.ast.Str;
//
//import java.util.List;
//
//public class Test4 {
//    public static void main(String[] args) {
//        String path = "D:\\data\\Al2Hf\\PBE\\mechanical property\\Al2Hf Elastic Constants.txt";
//        List<String[]> readInLine = ReadFromFile.readFileByLines(path);
////        for (String[] temp : res) {
////            for (String temp1 : temp) {
////                System.out.print(temp1 + ";");
////            }
////            System.out.println("-");
////        }
//        int line = 0;
//        for (int i = 0; i < readInLine.size(); i++) {
//            if (readInLine.get(i).length >=4 && "Elastic".equals(readInLine.get(i)[1]) && "Cij".equals(readInLine.get(i)[4])) {
//                line = i;
//                break;
//            }
//        }
//        // Cij
//        float[][] cij = new float[6][6];
//        for (int i = 0; i < 6; i++) {
//            for (int j = 0; j < 6; j++) {
//                cij[i][j] = Float.parseFloat(readInLine.get(i + line + 3)[j + 1]);
//            }
//        }
//        // Sij
//        float[][] sij = new float[6][6];
//        for (int i = 0; i < 6; i++) {
//            for (int j = 0; j < 6; j++) {
//                sij[i][j] = Float.parseFloat(readInLine.get(i + line + 14)[j + 1]);
//            }
//        }
//        for (float[] a : cij) {
//            for (float b : a) {
//                System.out.print(b + "--");
//            }
//            System.out.println("**");
//        }
//        for (float[] a : sij) {
//            for (float b : a) {
//                System.out.print(b + "--");
//            }
//            System.out.println("**");
//        }
//    }
//}
