package com.cfblj.carrental.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cfblj.carrental.model.CarRental;

import java.util.List;

public interface CarRentalMapper extends BaseMapper<CarRental> {
    List<CarRental> selectCarRentalList();
}
