package com.cfblj.carrental.controller;

import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.service.CarInfoService;
import com.cfblj.carrental.utils.Pages;
import com.cfblj.carrental.utils.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/carInfo")
public class CarInfoController {

    @Autowired
    private CarInfoService carInfoService;

    /**
     * 获取车辆信息列表
     * @return
     */
    @RequestMapping("/getCarInfoList")
    public List<CarInfo> getCarInfoList(){
        List<CarInfo> carInfoList = carInfoService.getCarInfoList();
        return carInfoList;
    }

    /**
     * 分页查询所有车辆信息
     * @param carInfo:搜索条件对象
     * @param curPage  当前页数
     * @param size  当前页显示数据条数
     * @return
     */
    @RequestMapping("/getCarInfoPage")
    public Pages getCarInfoPage(@RequestBody CarInfo carInfo, int curPage, int size){
        return carInfoService.getCarInfoPage(carInfo, curPage, size);
    }

    /**
     * 添加车辆信息
     * @param carInfo
     * @return
     */
    @RequestMapping("/addCarInfo")
    public ReturnObject addCarInfo(@RequestBody CarInfo carInfo){
        try {
            carInfoService.addCarInfo(carInfo);
            return new ReturnObject(true, "添加汽车信息成功");
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 修改车辆信息
     * @param carInfo
     * @return
     */
    @RequestMapping("/updateCarInfo")
    public ReturnObject updateCarInfo(@RequestBody CarInfo carInfo){
        try {
            carInfoService.updateCarInfo(carInfo);
            return new ReturnObject(true, "修改汽车信息成功");
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 根据ID获取车辆信息
     * @return
     */
    @RequestMapping("/getCarInfoById")
    public ReturnObject getCarInfoById(String id){
        try {
            CarInfo carInfo = carInfoService.getCarInfoById(id);
            return new ReturnObject(carInfo);
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 根据ID删除车辆信息
     * @return
     */
    @RequestMapping("/delCarInfoById")
    public ReturnObject delCarInfoById(String id){
        try {
            carInfoService.delCarInfoById(id);
            return new ReturnObject(true, "删除成功");
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 根据ID批量删除车辆信息
     * @return
     */
    @RequestMapping("/delCarInfoByIds")
    public ReturnObject delCarInfoByIds(String ids){
        try {
            carInfoService.delCarInfoByIds(ids);
            return new ReturnObject(true, "删除成功");
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }
}
