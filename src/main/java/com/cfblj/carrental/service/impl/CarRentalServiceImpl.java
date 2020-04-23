package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.mapper.CarRentalMapper;
import com.cfblj.carrental.model.CarRental;
import com.cfblj.carrental.service.CarRentalService;
import com.cfblj.carrental.utils.Pages;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarRentalServiceImpl extends ServiceImpl<CarRentalMapper, CarRental> implements CarRentalService {

    @Autowired
    private CarRentalMapper carRentalMapper;

    @Override
    public Pages getCarRentalPage(CarRental carRental, int curPage, int size) {
        PageHelper.startPage(curPage, size);
        Page<CarRental> page = (Page<CarRental>)carRentalMapper.selectCarRentalList(carRental);
        return new Pages(page.getTotal(), page.getResult());
    }

    @Override
    public CarRental getCarRentalById(String id) {
        if (StringUtils.isBlank(id)){
            throw new CustomException("id不能为空");
        }
        CarRental carRental = carRentalMapper.selectById(id);

        return null;
    }
}
