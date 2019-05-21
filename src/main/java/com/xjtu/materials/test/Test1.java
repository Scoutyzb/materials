package com.xjtu.materials.test;

import org.python.core.Py;
import org.python.core.PySystemState;
import org.python.util.PythonInterpreter;

public class Test1 {
    public static void main(String[] args) {
        PythonInterpreter interpreter = new PythonInterpreter();
        PySystemState sys = Py.getSystemState();
        interpreter.exec("import sys");
        interpreter.exec("print sys.path");
        interpreter.exec("path = \"C:\\ProgramData\\Anaconda3\\Lib\\site-packages\"");
        interpreter.exec("sys.path.append(path)");
        interpreter.exec("path = \"C:\\ProgramData\\Anaconda3\\Lib\"");
        interpreter.exec("sys.path.append(path)");
        interpreter.exec("print sys.path");

        interpreter.execfile("F:\\workspace\\python\\matgen\\test1.py");
    }
}
