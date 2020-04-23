package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.Order;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.utils.Pages;

public interface OrderService extends IService<Order> {
    Pages getOrderPage(Order order, int curPage, int size);
}
