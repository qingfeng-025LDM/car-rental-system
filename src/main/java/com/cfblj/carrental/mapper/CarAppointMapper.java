package com.cfblj.carrental.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cfblj.carrental.model.CarAppoint;

import java.util.List;

public interface CarAppointMapper extends BaseMapper<CarAppoint> {
    List<CarAppoint> selectCarAppointList(CarAppoint carAppoint);
}
