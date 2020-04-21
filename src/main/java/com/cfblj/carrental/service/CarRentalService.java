package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.CarRental;
import com.cfblj.carrental.utils.Pages;

public interface CarRentalService extends IService<CarRental> {
    Pages getCarRentalPage(int curPage, int size);

    CarRental getCarRentalById(String id);
}
