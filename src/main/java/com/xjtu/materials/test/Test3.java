package com.xjtu.materials.test;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Test3 {
    public static void main(String[] args) {
        try{
            System.out.println("start");
            String[] args1 = new String[]{"C:\\ProgramData\\Anaconda3\\python.exe", "F:\\workspace\\python\\matgen\\test1.py"};
            Process pr = Runtime.getRuntime().exec(args1);

            BufferedReader in = new BufferedReader(new
                    InputStreamReader(pr.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                System.out.println(line);
            }
            in.close();
            pr.waitFor();
            System.out.println("end");
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
