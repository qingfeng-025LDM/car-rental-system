package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.CarBand;
import com.cfblj.carrental.utils.Pages;

import java.util.List;

public interface CarBandService extends IService<CarBand> {
    void addCarBand(CarBand carBand);

    void updateCarBand(CarBand carBand);

    CarBand getCarBandById(String id);

    void delCarBandById(String id);

    void delCarBandByIds(String ids);

    Pages getCarBandPage(CarBand carBand, int curPage, int size);
}
