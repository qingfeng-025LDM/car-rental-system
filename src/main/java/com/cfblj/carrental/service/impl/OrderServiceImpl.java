package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.mapper.OrderMapper;
import com.cfblj.carrental.mapper.UserMapper;
import com.cfblj.carrental.model.Order;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.OrderService;
import com.cfblj.carrental.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, Order> implements OrderService {
}
