package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.mapper.CarBandMapper;
import com.cfblj.carrental.model.CarBand;
import com.cfblj.carrental.service.CarBandService;
import com.cfblj.carrental.utils.Pages;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CarBandServiceImpl extends ServiceImpl<CarBandMapper, CarBand> implements CarBandService {
    @Autowired
    private CarBandMapper carBandMapper;


    /**
     * 添加
     * @param carBand
     */
//    @Transactional
    @Override
    public void addCarBand(CarBand carBand) {
        if (carBand == null){
            throw new CustomException("汽车品牌信息不能为空");
        }
        carBandMapper.insert(carBand);
    }

    /**
     * 修改
     * @param carBand
     */
    @Transactional
    @Override
    public void updateCarBand(CarBand carBand) {
        if (carBand == null){
            throw new CustomException("汽车品牌信息不能为空");
        }
        carBandMapper.updateById(carBand);
    }

    /**
     * 根据id查询详情
     * @param id
     * @return
     */
    @Override
    public CarBand getCarBandById(String id) {
        if (StringUtils.isBlank(id)){
            throw new CustomException("id不能为空");
        }
        return carBandMapper.selectById(id);
    }

    /**
     * 根据id删除
     * @param id
     */
    @Transactional
    @Override
    public void delCarBandById(String id) {
        if (StringUtils.isBlank(id)){
            throw new CustomException("id不能为空");
        }
        carBandMapper.deleteById(id);
    }

    /**
     * 批量删除
     * @param ids
     */
    @Transactional
    @Override
    public void delCarBandByIds(String ids) {
        if (StringUtils.isBlank(ids)){
            throw new CustomException("ID集合不能为空");
        }
        String[] idArr = ids.split(",");
        if (idArr.length <1 || StringUtils.isBlank(idArr[0])){
            throw new CustomException("ID不存在");
        }
        for (String id : idArr) {
            this.delCarBandById(id);
        }
    }

    @Override
    public Pages getCarBandPage(CarBand carBand, int curPage, int size) {
        PageHelper.startPage(curPage, size);
        QueryWrapper<CarBand> wrapper = new QueryWrapper<CarBand>();
        if (StringUtils.isNotBlank(carBand.getBandName())){
            wrapper.like("band_name", carBand.getBandName());
        }
        if (StringUtils.isNotBlank(carBand.getStatus())){
            wrapper.like("status", carBand.getStatus());
        }
        Page<CarBand> page = (Page<CarBand>)carBandMapper.selectList(wrapper);
        return new Pages(page.getTotal(), page.getResult());
    }
}
