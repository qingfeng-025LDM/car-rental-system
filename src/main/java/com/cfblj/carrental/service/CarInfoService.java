package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.CarInfo;

import java.util.List;

public interface CarInfoService extends IService<CarInfo> {
    List<CarInfo> getCarInfoList();

    void addCarInfo(CarInfo carInfo);

    CarInfo getCarInfoById(String id);

    void delCarInfoById(String id);

    void delCarInfoByIds(String ids);

    void updateCarInfo(CarInfo carInfo);
}
