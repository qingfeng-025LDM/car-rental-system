package com.cfblj.carrental.controller;

import cn.hutool.core.date.DateTime;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.model.Order;
import com.cfblj.carrental.model.OrderDetail;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.CarInfoService;
import com.cfblj.carrental.service.OrderDetailService;
import com.cfblj.carrental.service.OrderService;
import com.cfblj.carrental.service.UserService;
import com.cfblj.carrental.utils.Pages;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderDetailService orderDetailService;
    @Autowired
    private CarInfoService carInfoService;

    @RequestMapping("/getOrderList")
    public List<Order> getOrderList(){
        List<Order> list = orderService.list();
        return list;
    }

    @RequestMapping("/creat")
    @Transactional
    public void creat(Order order, OrderDetail orderDetail){
        //生成唯一orderNUm
        DateTime dateTime = new DateTime();
        String orderNum = dateTime.getTime() + "";
        order.setOrderNum(orderNum);
        orderService.save(order);
        orderDetailService.save(orderDetail);
        CarInfo carInfoById = carInfoService.getCarInfoById(orderDetail.getCarId());
        carInfoById.setCarStatus("4");
        carInfoService.updateCarInfo(carInfoById);

    }


    /**
     * 分页查询
     * @param order：搜索对象
     * @param curPage
     * @param size
     * @return
     */
    @RequestMapping("/getOrderPage")
    public Pages getOrderPage(@RequestBody Order order, int curPage, int size){
        return orderService.getOrderPage(order, curPage, size);
    }




}
