package com.cfblj.carrental.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cfblj.carrental.model.CarInfo;

import java.util.List;

public interface CarInfoMapper extends BaseMapper<CarInfo> {
    List<CarInfo> selectCarInfoList(CarInfo carInfo);
}
