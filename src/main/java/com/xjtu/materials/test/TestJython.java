package com.xjtu.materials.test;

import org.python.core.Py;
import org.python.core.PySystemState;
import org.python.util.PythonInterpreter;

import java.util.Properties;

public class TestJython {
    public static void main(String[] args) {
        Properties props = new Properties();
//        props.put("python.console.encoding", "UTF-8");
//        props.put("python.security.respectJavaAccessibility", "false");
        //props.put("python.import.site", "false");
        Properties preprops = System.getProperties();
        PythonInterpreter.initialize(preprops, props, new String[0]);

        PySystemState sys = Py.getSystemState();
        System.out.println(sys.path.toString());    // previous
        sys.path.add("C:\\ProgramData\\Anaconda3\\Lib\\site-packages");
        sys.path.add("C:\\ProgramData\\Anaconda3\\Lib");
        System.out.println(sys.path.toString());   // later

        PythonInterpreter interp = new PythonInterpreter();

        interp.execfile("F:\\workspace\\python\\matgen\\test1.py");

    }
}

