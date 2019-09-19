package com.xjtu.materials.service;

import org.python.antlr.ast.Str;

import java.util.List;

public interface ChartService {
    // 能带图数据
    List<float[][]> getBandData(String address);
    // 分态图数据
    List<float[][]> getFenData(String address);
    // 总态图数据
    float[][] getZongData(String address);
    // 总台图中的单元素数据
    List<float[][]> getDanYuanSu(String address, List<String> nameYuanSu);
    // Mech
    List<float[][]> getMechData(String address);
    // phonon Dispersion图
    List<float[][]> getPhononDisp(String address);

}
