package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.mapper.CarAppointMapper;
import com.cfblj.carrental.mapper.CarInfoMapper;
import com.cfblj.carrental.mapper.UserMapper;
import com.cfblj.carrental.model.CarAppoint;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.CarAppointService;
import com.cfblj.carrental.utils.Pages;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;

@Service
public class CarAppointServiceImpl extends ServiceImpl<CarAppointMapper, CarAppoint> implements CarAppointService {
    @Autowired
    private CarAppointMapper carAppointMapper;
    @Autowired
    private CarInfoMapper carInfoMapper;
    @Autowired
    private UserMapper userMapper;

    /**
     * 分页查询车辆预约
     * @param curPage
     * @param size
     * @return
     */
    @Override
    public Pages getCarAppointPage(CarAppoint carAppoint, int curPage, int size) {
        PageHelper.startPage(curPage, size);
        Page<CarAppoint> page = (Page<CarAppoint>)carAppointMapper.selectCarAppointList(carAppoint);
        return new Pages(page.getTotal(), page.getResult());
    }

    /**
     * 根据id查询车辆预约信息
     * @param id
     * @return
     */
    @Override
    public CarAppoint getCarAppointById(String id) {
        if (StringUtils.isBlank(id)){
            throw new CustomException("ID不能为空");
        }
        CarAppoint carAppoint = carAppointMapper.selectById(id);
        CarInfo carInfo = carInfoMapper.selectOne(new QueryWrapper<CarInfo>().eq("id", carAppoint.getCarId()));
        if (carInfo != null){
            carAppoint.setCarInfo(carInfo);
        }
        User user = userMapper.selectOne(new QueryWrapper<User>().eq("id", carAppoint.getUserId()));
        if (user != null){
            carAppoint.setUser(user);
        }
        if (carAppoint == null){
            return new CarAppoint();
        }
        return carAppoint;
    }

    /**
     * 添加预约信息
     * @param carAppoint
     */
    @Transactional
    @Override
    public void addCarAppoint(CarAppoint carAppoint) {
        if (carAppoint != null){
            throw new CustomException("添加的车辆预约信息中无任何数据");
        }
        carAppointMapper.insert(carAppoint);
    }
}
