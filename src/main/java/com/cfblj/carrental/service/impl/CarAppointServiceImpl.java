package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.mapper.CarAppointMapper;
import com.cfblj.carrental.model.CarAppoint;
import com.cfblj.carrental.service.CarAppointService;
import com.cfblj.carrental.utils.Pages;
import org.springframework.stereotype.Service;

@Service
public class CarAppointServiceImpl extends ServiceImpl<CarAppointMapper, CarAppoint> implements CarAppointService {
    @Override
    public Pages getCarAppointPage(int curPage, int size) {
        return null;
    }

    @Override
    public CarAppoint getCarAppointById(String id) {
        return null;
    }
}
