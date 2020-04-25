package com.cfblj.carrental.controller;

import com.cfblj.carrental.model.CarBand;
import com.cfblj.carrental.service.CarBandService;
import com.cfblj.carrental.utils.Pages;
import com.cfblj.carrental.utils.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/carBand")
public class CarBandController {

    @Autowired
    private CarBandService carBandService;

    /**
     * 查询汽车品牌列表
     * @return
     */
    @RequestMapping("/getCarBandPage")
    public Pages getCarBandPage(@RequestBody CarBand carBand, int curPage, int size){
        return carBandService.getCarBandPage(carBand, curPage, size);
    }

    /**
     * 添加汽车品牌
     * @param carBand
     * @return
     */
    @RequestMapping("/addCarBand")
    public ReturnObject addCarBand(@RequestBody CarBand carBand){
        try {
            carBandService.addCarBand(carBand);
            return new ReturnObject(true, "添加成功");
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 修改汽车品牌信息
     * @param carBand
     * @return
     */
    @RequestMapping("/updateCarBand")
    public ReturnObject updateCarBand(@RequestBody CarBand carBand){
        try {
            carBandService.updateCarBand(carBand);
            return new ReturnObject(true, "修改成功");
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 根据ID获取汽车品牌信息
     * @return
     */
    @RequestMapping("/getCarBandById")
    public ReturnObject getCarBandById(String id){
        try {
            CarBand carInfo = carBandService.getCarBandById(id);
            return new ReturnObject(carInfo);
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 根据ID删除车辆信息
     * @return
     */
    @RequestMapping("/delCarBandById")
    public ReturnObject delCarBandById(String id){
        try {
            carBandService.delCarBandById(id);
            return new ReturnObject(true, "删除成功");
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 根据ID批量删除车辆信息
     * @return
     */
    @RequestMapping("/delCarBandByIds")
    public ReturnObject delCarBandByIds(String ids){
        try {
            carBandService.delCarBandByIds(ids);
            return new ReturnObject(true, "删除成功");
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }
}
