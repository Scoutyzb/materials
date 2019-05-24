package com.xjtu.materials.serviceImpl;

import com.xjtu.materials.service.ChartService;
import com.xjtu.materials.util.CSVUtils;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class ChartServiceImpl implements ChartService {

    // 读取能带密度图文件，返回数据
    @Override
    public List<float[][]> getBandData(String address) {
        List<float[][]> result = new ArrayList<>();
        List<String> data = CSVUtils.importCsv(new File(address));
//        float[][] data_band1 = new float[100][2];
//        float[][] data_band2 = new float[100][2];
        List<float[]> data_band1 = new ArrayList<>();
        List<float[]> data_band2 = new ArrayList<>();
        float[][] temp1;
        float[][] temp2;
        if (data != null && !data.isEmpty()) {
            for (int i = 0; i < data.size(); i++) {
                String s = data.get(i);

                String[] as = s.split(",");
                if (as[0].equals("0") && as[1].equals("1e+308")) {
                    temp1 = new float[data_band1.size()][2];
                    for (int i1 = 0; i1 < data_band1.size(); i1++) {
                        temp1[i1] = data_band1.get(i1);
                    }
                    if (data_band2.size() != 0) {
                        temp2 = new float[data_band1.size()][2];
                        for (int i2 = 0; i2 < data_band2.size(); i2++) {
                            temp1[i2] = data_band1.get(i2);
                        }
                        result.add(temp2);
                    }
                    result.add(temp1);
                    data_band1.clear();
                    data_band2.clear();
                    continue;
                }
                if (as.length >= 2) {
                    data_band1.add(new float[]{Float.valueOf(as[0]), Float.valueOf(as[1])});
//                    data_band1[j][0] = Float.valueOf(as[0]);
//                    data_band1[j][1] = Float.valueOf(as[1]);
                }
                if (as.length >= 4) {
                    data_band2.add(new float[]{Float.valueOf(as[2]), Float.valueOf(as[3])});
//                    data_band2[j][0] = Float.valueOf(as[2]);
//                    data_band2[j][1] = Float.valueOf(as[3]);

                }
            }
        }
        return result;
    }

    @Override
    public List<float[][]> getFenData(String address) {
        List<float[][]> res = new ArrayList<>();
        List<String> data_fen = new ArrayList<>();
        data_fen = CSVUtils.importCsv(new File(address));
        float[][] data_fen_s = new float[data_fen.size()][2];
        float[][] data_fen_p = new float[data_fen.size()][2];
        float[][] data_fen_d = new float[data_fen.size()][2];
        if (data_fen != null && !data_fen.isEmpty()) {
            for (int j = 0; j < data_fen.size(); j++) {
                String s = data_fen.get(j);
                String[] as = s.split(",");
                if (as.length >= 2) {
                    data_fen_s[j][0] = Float.valueOf(as[0]);
                    data_fen_s[j][1] = Float.valueOf(as[1]);
                }
                if (as.length >= 4) {
                    data_fen_p[j][0] = Float.valueOf(as[2]);
                    data_fen_p[j][1] = Float.valueOf(as[3]);
                }
                if (as.length >= 6) {
                    data_fen_d[j][0] = Float.valueOf(as[4]);
                    data_fen_d[j][1] = Float.valueOf(as[5]);
                }

            }
        }
        res.add(data_fen_s);
        res.add(data_fen_p);
        res.add(data_fen_d);
        return res;
    }

    @Override
    public float[][] getZongData(String addrenss) {
        List<String> dataList = new ArrayList<String>();
        dataList = CSVUtils.importCsv(new File(addrenss));
        float[][] dataZong = new float[dataList.size()][2];
        if (dataList != null && !dataList.isEmpty()) {
            for (int i = 0; i < dataList.size(); i++) {
                if (i != 0) {//不读取第一行
                    String s = dataList.get(i);
//                    System.out.println("第i行:" + s);
                    String[] as = s.split(",");
                    dataZong[i][0] = Float.valueOf(as[0]);
                    dataZong[i][1] = Float.valueOf(as[1]);
//                    System.out.println(dataZong[i][0]);
//                    System.out.println(dataZong[i][1]);
                }
            }
        }
        return dataZong;
    }
}
