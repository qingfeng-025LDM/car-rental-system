package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.CarAppoint;
import com.cfblj.carrental.utils.Pages;

public interface CarAppointService extends IService<CarAppoint> {
    Pages getCarAppointPage(int curPage, int size);

    CarAppoint getCarAppointById(String id);
}
