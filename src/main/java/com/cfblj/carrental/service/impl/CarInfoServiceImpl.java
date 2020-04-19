package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.mapper.CarInfoMapper;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.service.CarInfoService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarInfoServiceImpl extends ServiceImpl<CarInfoMapper, CarInfo> implements CarInfoService {
    @Autowired
    private CarInfoMapper carInfoMapper;

    @Override
    public List<CarInfo> getCarInfoList() {
        List<CarInfo> carInfos = carInfoMapper.selectList(null);
        if (CollectionUtils.isEmpty(carInfos)){
            carInfos = new ArrayList<CarInfo>();
        }
        return carInfos;
    }

    @Transactional
    @Override
    public void addCarInfo(CarInfo carInfo) {
        if (carInfo == null){
            throw new CustomException("添加的车辆信息中无任何数据");
        }
        carInfoMapper.insert(carInfo);
    }

    @Override
    public CarInfo getCarInfoById(String id) {
        if (StringUtils.isBlank(id)){
            throw new CustomException("ID不能为空");
        }
        CarInfo carInfo = carInfoMapper.selectById(id);
        if (carInfo == null){
            return new CarInfo();
        }
        return carInfo;
    }

    @Transactional
    @Override
    public void delCarInfoById(String id) {
        if (StringUtils.isBlank(id)){
            throw new CustomException("ID不能为空");
        }
        int i = carInfoMapper.deleteById(id);
        if (i == 0){
            throw new CustomException("删除失败");
        }
    }

    @Override
    public void delCarInfoByIds(String ids) {
        if (StringUtils.isBlank(ids)){
            throw new CustomException("ID集合不能为空");
        }
        String[] idArr = ids.split(",");
        if (idArr.length <1 || StringUtils.isBlank(idArr[0])){
            throw new CustomException("ID不存在");
        }
        for (String id : idArr) {
            this.delCarInfoById(id);
        }
    }

    @Override
    public void updateCarInfo(CarInfo carInfo) {
        if (carInfo == null){
            throw new CustomException("车辆信息不能为空");
        }
        if (StringUtils.isBlank(carInfo.getId())){
            throw new CustomException("需修改的车辆信息的ID不能为空");
        }
        carInfoMapper.updateById(carInfo);
    }
}
