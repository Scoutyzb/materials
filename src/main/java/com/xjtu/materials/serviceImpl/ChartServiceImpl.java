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
            for (int i = 0, j = 0; i < data.size(); i++) {
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
                System.out.println(j);
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
}
