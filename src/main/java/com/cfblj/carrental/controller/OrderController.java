package com.cfblj.carrental.controller;

import cn.hutool.core.date.DateTime;
import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.model.Order;
import com.cfblj.carrental.model.OrderDetail;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.OrderService;
import com.cfblj.carrental.service.UserService;
import com.cfblj.carrental.utils.Pages;
import com.cfblj.carrental.utils.ReturnObject;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping("/getOrderList")
    public List<Order> getOrderList(){
        List<Order> list = orderService.list();
        return list;
    }

    @RequestMapping("/creat")
    public boolean regist(Order order){
        //生成唯一orderNUm
        DateTime dateTime = new DateTime();
        String orderNum = dateTime.getTime() + "";
        order.setOrderNum(orderNum);
        boolean save = orderService.save(order);

        return save;
    }

    public static void main(String[] args) {

        DateTime dateTime = new DateTime();
        System.out.println(dateTime.getTime());
        System.out.println(dateTime.getTimeZone());
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

    /**
     * 根据id获取订单信息
     * @param id
     * @return
     */
    @RequestMapping("/getOrderById")
    public ReturnObject getOrderById(String id){
        try {
            Order order = orderService.getOrderById(id);
            return new ReturnObject(order);
        }catch (CustomException e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    /**
     * 根据订单id获取订单详情
     * @param orderId
     * @return
     */
    @RequestMapping("/getOrderDetailByOrderId")
    public ReturnObject getOrderDetailByOrderId(String orderId){
        try {
            List<OrderDetail> orderDetailList = orderService.getOrderDetailByOrderId(orderId);
            return new ReturnObject(orderDetailList);
        }catch (CustomException e){
            return new ReturnObject(false, e.getMessage());
        }
    }



}
