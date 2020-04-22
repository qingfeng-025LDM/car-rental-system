package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.CarBand;

import java.util.List;

public interface CarBandService extends IService<CarBand> {
    List<CarBand> getCarBandList();

    void addCarBand(CarBand carBand);

    void updateCarBand(CarBand carBand);

    CarBand getCarBandById(String id);

    void delCarBandById(String id);

    void delCarBandByIds(String ids);
}
