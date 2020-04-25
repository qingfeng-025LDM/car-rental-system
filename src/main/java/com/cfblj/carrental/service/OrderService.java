package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.Order;
import com.cfblj.carrental.model.OrderDetail;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.utils.Pages;

import java.util.List;

public interface OrderService extends IService<Order> {
    Pages getOrderPage(Order order, int curPage, int size);

    List<OrderDetail> getOrderDetailByOrderId(String orderId);

    Order getOrderById(String id);
}
