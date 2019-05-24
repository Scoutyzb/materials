package com.xjtu.materials.service;

import java.util.List;

public interface ChartService {
    // 能带图数据
    List<float[][]> getBandData(String address);
    // 分态图数据
    List<float[][]> getFenData(String address);
    // 总态图数据
    float[][] getZongData(String addrenss);
}
