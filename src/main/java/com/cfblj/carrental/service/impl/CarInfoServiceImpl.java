package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.mapper.CarInfoMapper;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.service.CarInfoService;
import com.cfblj.carrental.utils.Pages;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CarInfoServiceImpl extends ServiceImpl<CarInfoMapper, CarInfo> implements CarInfoService {
    @Autowired
    private CarInfoMapper carInfoMapper;

    /**
     * 获取所有车辆信息
     * @return
     */
    @Override
    public List<CarInfo> getCarInfoList() {
        List<CarInfo> carInfos = carInfoMapper.selectList(null);
        if (CollectionUtils.isEmpty(carInfos)){
            carInfos = new ArrayList<CarInfo>();
        }
        return carInfos;
    }

    /**
     * 分页查询所有车辆信息
     * @param curPage：当前页
     * @param size：当前页显示数据条数
     * @return
     */
    @Override
    public Pages getCarInfoPage(CarInfo carInfo,int curPage, int size) {
        PageHelper.startPage(curPage, size);
        Page<CarInfo> page = (Page<CarInfo>)carInfoMapper.selectCarInfoList(carInfo);
        return new Pages(page.getTotal(), page.getResult());
    }

    /**
     * 添加车辆信息
     * @param carInfo
     */
    @Transactional
    @Override
    public void addCarInfo(CarInfo carInfo) {
        if (carInfo == null){
            throw new CustomException("添加的车辆信息中无任何数据");
        }
        carInfo.setReleaseTime(new Date());
        carInfoMapper.insert(carInfo);
    }

    /**
     * 根据主键ID获取车辆信息
     * @param id：车辆主键ID
     * @return
     */
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

    /**
     * 根据ID删除车辆信息
     * @param id
     */
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

    /**
     * 根据id批量删除
     * @param ids
     */
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

    /**
     * 修改车辆信息
     * @param carInfo
     */
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
