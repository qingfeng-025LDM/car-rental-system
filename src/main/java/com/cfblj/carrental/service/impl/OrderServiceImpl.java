package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.mapper.OrderMapper;
import com.cfblj.carrental.mapper.UserMapper;
import com.cfblj.carrental.model.Order;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.OrderService;
import com.cfblj.carrental.service.UserService;
import com.cfblj.carrental.utils.Pages;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, Order> implements OrderService {

    @Autowired
    private OrderMapper orderMapper;

    @Override
    public Pages getOrderPage(Order order, int curPage, int size) {
        PageHelper.startPage(curPage, size);
        Page<Order> page = (Page<Order>)orderMapper.selectOrderList(order);
        return new Pages(page.getTotal(), page.getResult());
    }
}
