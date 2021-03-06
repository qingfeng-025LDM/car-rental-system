package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.CarAppoint;
import com.cfblj.carrental.utils.Pages;

public interface CarAppointService extends IService<CarAppoint> {
    Pages getCarAppointPage(CarAppoint carAppoint, int curPage, int size);

    CarAppoint getCarAppointById(String id);

    void addCarAppoint(CarAppoint carAppoint);
}
