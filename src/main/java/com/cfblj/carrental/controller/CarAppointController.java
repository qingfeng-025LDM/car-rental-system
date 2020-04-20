package com.cfblj.carrental.controller;

import com.cfblj.carrental.model.CarAppoint;
import com.cfblj.carrental.service.CarAppointService;
import com.cfblj.carrental.utils.Pages;
import com.cfblj.carrental.utils.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 汽车预约
 */
@RestController
@RequestMapping("/carAppoint")
public class CarAppointController {

    @Autowired
    private CarAppointService carAppointService;

    /**
     * 分页查询汽车预约
     * @param curPage
     * @param size
     * @return
     */
    @RequestMapping("/getCarAppointPage")
    public Pages getCarAppointPage(int curPage, int size){
        return carAppointService.getCarAppointPage(curPage, size);
    }

    /**
     * 根据ID获取车辆信息
     * @return
     */
    @RequestMapping("/getCarAppointById")
    public ReturnObject getCarAppointById(String id){
        try {
            CarAppoint carAppoint = carAppointService.getCarAppointById(id);
            return new ReturnObject(carAppoint);
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 添加车辆信息
     * @param carAppoint
     * @return
     */
    @RequestMapping("/addCarAppoint")
    public ReturnObject addCarAppoint(@RequestBody CarAppoint carAppoint){
        try {
            carAppointService.addCarAppoint(carAppoint);
            return new ReturnObject(true, "添加汽车预约信息成功");
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

}
