package com.xjtu.materials.serviceImpl;

import com.xjtu.materials.service.ChartService;
import com.xjtu.materials.util.CSVUtils;
import com.xjtu.materials.util.ReadFromFile;
import org.springframework.stereotype.Service;
import static java.lang.Math.pow;

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
    // 分态
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
    public float[][] getZongData(String address) {
        List<String> dataList = new ArrayList<String>();
        dataList = CSVUtils.importCsv(new File(address));
        float[][] dataZong = new float[dataList.size()][2];
        if (dataList != null && !dataList.isEmpty()) {
            for (int i = 0; i < dataList.size(); i++) {
                String s = dataList.get(i);
//                System.out.println("第i行:" + s);
                String[] as = s.split(",");
                dataZong[i][0] = Float.valueOf(as[0]);
                dataZong[i][1] = Float.valueOf(as[1]);
//                System.out.println("第i行x:" + dataZong[i][0]);
//                System.out.println("第i行y:" + dataZong[i][1]);
            }
        }
        return dataZong;
    }

    @Override
    public List<float[][]> getDanYuanSu(String address, List<String> nameYuanSu) {
        List<float[][]> res = new ArrayList<>();
        String path = address;
        for (int i = 0; i < nameYuanSu.size(); i++) {
            String pathTemp = path + " LDOS_" + nameYuanSu.get(i) + ".csv";
            System.out.println(pathTemp);
            res.add(getZongData(pathTemp));
        }
        return res;
    }

    @Override
    public List<float[][]> getMechData(String address) {
        List<float[][]> res = new ArrayList<>();
        // 读取Cij
        List<String[]> readInLine = ReadFromFile.readFileByLines(address);
        int line = 0;
        for (int i = 0; i < readInLine.size(); i++) {
            if (readInLine.get(i).length >=4 && "Elastic".equals(readInLine.get(i)[1]) && "Cij".equals(readInLine.get(i)[4])) {
                line = i;
                break;
            }
        }
        // Cij
        float[][] cij = new float[6][6];
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                cij[i][j] = Float.parseFloat(readInLine.get(i + line + 3)[j + 1]);
            }
        }
        // Sij
        float[][] sij = new float[6][6];
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < 6; j++) {
                sij[i][j] = Float.parseFloat(readInLine.get(i + line + 14)[j + 1]);
            }
        }
        // B和 G
        int lineBG = 0;
        float data_B = 0;
        float data_G = 0;

        for (int i = line; i < readInLine.size(); i++) {
            String[] tempStr = readInLine.get(i);
            if (tempStr.length > 5 && "Elastic".equals(tempStr[1]) && "polycrystalline".equals(tempStr[4])) {
                lineBG = i;
            }
        }
        for (int i = 0; i < 6; i++) {
            if (readInLine.get(i + lineBG).length > 5 && "Bulk".equals(readInLine.get(i + lineBG)[0])){
                data_B = Float.parseFloat(readInLine.get(i + lineBG)[5]);
            }
            if (readInLine.get(i + lineBG).length > 7 && "Shear".equals(readInLine.get(i + lineBG)[0])){
                data_G = Float.parseFloat(readInLine.get(i + lineBG)[7]);
            }
        }

        // 圆圈图数据 3组
        float[][] data_pict1 = new float[100][2];
        float[][] data_pict2 = new float[100][2];
        float[][] data_pict3 = new float[100][2];
        // 第1组  100模式
        double angle = 0;
        for (int i = 0; i < 100; i++) {
            angle = 2 * Math.PI / 100 * i;
            data_pict1[i][0] = (float)(1 / calcul_100E(angle, sij) * Math.sin(angle));
            data_pict1[i][1] = (float)(1 / calcul_100E(angle, sij) * Math.cos(angle));
        }

        float[][] tempBG = new float[1][2];
        tempBG[0][0] = data_B;
        tempBG[0][1] = data_G;
        // 结果
        res.add(cij);
        res.add(sij);
        res.add(tempBG);
        res.add(data_pict1);
        // res中 0 位cij，1位sij，2位 2个B和G
        return res;
    }

    // 读Phonon Dispersion.csv文件
    @Override
    public List<float[][]> getPhononDisp(String address) {
        List<float[][]> result = new ArrayList<>();
        List<String> data = CSVUtils.importCsv(new File(address));

        List<float[]> data_band = new ArrayList<>();
        float[][] temp;
        if (data != null && !data.isEmpty()) {
            for (int i = 0; i < data.size(); i++) {
                String s = data.get(i);
                String[] as = s.split(",");
                if (as[0].equals("0") && as[1].equals("1e+308")) {
                    temp = new float[data_band.size()][2];
                    for (int i1 = 0; i1 < data_band.size(); i1++) {
                        temp[i1] = data_band.get(i1);
                    }

                    result.add(temp);
                    data_band.clear();
                    continue;
                }
                data_band.add(new float[]{Float.valueOf(as[0]), Float.valueOf(as[1])});
            }
        }
        return result;
    }

    private static double calcul_100E(double angle, float[][] sij){
        double n1 = 0;
        double n2 = Math.sin(angle);
        double n3 = Math.cos(angle);

        double res = sij[1][1] * pow(n2, 4) + sij[2][2] * pow(n3, 4) + 4 * sij[1][3] * n3 * pow(n2, 3) + 4 * sij[2][3] * n2 * pow(n3, 3) +
                (2 * sij[1][2] + 4 * sij[3][3]) * pow(n2, 2) * pow(n3, 2);
        return res;
    }

}
