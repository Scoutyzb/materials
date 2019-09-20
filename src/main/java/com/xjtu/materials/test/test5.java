package com.xjtu.materials.test;

import java.io.File;

public class test5 {
    public static void main(String[] args) {
        String path = "D:\\data\\Al2Hf\\PBE\\electronic properties";
        getFile(path);
    }

    private static void getFile(String path) {
        //  get  file  list  where  the  path  has
        File file = new File(path);
        //  get  the  folder  list
        File[] array = file.listFiles();

        for (int i = 0; i < array.length; i++) {
            if (array[i].isFile()) {
                //  only  take  file  name
                System.out.println("^^^^^" + array[i].getName());
                //  take  file  path  and  name
                System.out.println("#####" + array[i]);
                //  take  file  path  and  name
                System.out.println("*****" + array[i].getPath());
            } else if (array[i].isDirectory()) {
                getFile(array[i].getPath());
            }
        }
    }

}
