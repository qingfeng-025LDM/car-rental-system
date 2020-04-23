package com.cfblj.carrental.controller;

import com.cfblj.carrental.model.CarRental;
import com.cfblj.carrental.service.CarRentalService;
import com.cfblj.carrental.utils.Pages;
import com.cfblj.carrental.utils.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 车辆租用
 */
@RestController
@RequestMapping("carRental")
public class CarRentalController {

    @Autowired
    private CarRentalService carRentalService;

    /**
     * 分页查询车辆租用信息
     * @param carRental
     * @param curPage
     * @param size
     * @return
     */
    @RequestMapping("/getCarRentalPage")
    public Pages getCarRentalPage(@RequestBody CarRental carRental, int curPage, int size){
        return carRentalService.getCarRentalPage(carRental, curPage, size);
    }

    /**
     * 根据id查询
     * @param id
     * @return
     */
    @RequestMapping("/getCarRentalById")
    public ReturnObject getCarRentalById(String id){
        try {
            CarRental carRental = carRentalService.getCarRentalById(id);
            return new ReturnObject(carRental);
        }catch (Exception e){
            return new ReturnObject(false, e.getMessage());
        }
    }

}
