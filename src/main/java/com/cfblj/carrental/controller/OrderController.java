package com.cfblj.carrental.controller;

import com.cfblj.carrental.model.Order;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.OrderService;
import com.cfblj.carrental.service.UserService;
import com.cfblj.carrental.utils.Pages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping("/getOrderList")
    public List<Order> getOrderList(){
        List<Order> list = orderService.list();
        return list;
    }

    @RequestMapping("/creat")
    public boolean regist(Order order){
        boolean save = orderService.save(order);
        return save;
    }

    /**
     * 分页查询
     * @param order
     * @param curPage
     * @param size
     * @return
     */
    @RequestMapping("/getOrderPage")
    public Pages getOrderPage(@RequestBody Order order, int curPage, int size){
        return orderService.getOrderPage(order, curPage, size);
    }




}
