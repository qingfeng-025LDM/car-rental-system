package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.utils.Pages;

import java.util.List;

public interface CarInfoService extends IService<CarInfo> {
    List<CarInfo> getCarInfoList();

    Pages getCarInfoPage(int currentPage, int rows);

    void addCarInfo(CarInfo carInfo);

    CarInfo getCarInfoById(String id);

    void delCarInfoById(String id);

    void delCarInfoByIds(String ids);

    void updateCarInfo(CarInfo carInfo);
}
