package com.xjtu.materials.test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Test2 {
    public static void main(String args[]) throws IOException, InterruptedException {
        String a = "1", b = "2";
        String[] argg = new String[] {"C:\\ProgramData\\Anaconda3\\python.exe", "F:\\workspace\\python\\matgen\\test1.py"};
        Process pr = Runtime.getRuntime().exec(argg);

        BufferedReader in = new BufferedReader(new InputStreamReader(pr.getInputStream()));
        String line;
        String result = "";
        while ((line = in.readLine()) != null) {
//                line = decodeUnicode(line);
            result += line;
        }
        in.close();
        pr.waitFor();
        System.out.println(result);
//        InputStream is = pr.getInputStream();
//        DataInputStream dis = new DataInputStream(is);
//        String str = dis.readLine();
//        pr.waitFor();
//        System.out.println(str);

        System.out.println("finished");
    }
}
