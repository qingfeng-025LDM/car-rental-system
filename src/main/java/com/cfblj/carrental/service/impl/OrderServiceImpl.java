package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.mapper.CarInfoMapper;
import com.cfblj.carrental.mapper.OrderDetailMapper;
import com.cfblj.carrental.mapper.OrderMapper;
import com.cfblj.carrental.mapper.UserMapper;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.model.Order;
import com.cfblj.carrental.model.OrderDetail;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.OrderService;
import com.cfblj.carrental.service.UserService;
import com.cfblj.carrental.utils.Pages;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl extends ServiceImpl<OrderMapper, Order> implements OrderService {

    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private OrderDetailMapper orderDetailMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private CarInfoMapper carInfoMapper;

    @Override
    public Pages getOrderPage(Order order, int curPage, int size) {
        PageHelper.startPage(curPage, size);
        Page<Order> page = (Page<Order>)orderMapper.selectOrderList(order);
        return new Pages(page.getTotal(), page.getResult());
    }

    @Override
    public List<OrderDetail> getOrderDetailByOrderId(String orderId) {
        if (StringUtils.isBlank(orderId)){
            throw new CustomException("订单ID不存在");
        }
        List<OrderDetail> orderDetailList = orderDetailMapper.selectList(new QueryWrapper<OrderDetail>().eq("order_id", orderId));
        for (OrderDetail orderDetail : orderDetailList) {
            CarInfo carInfo = carInfoMapper.selectOne(new QueryWrapper<CarInfo>().eq("id", orderDetail.getCarId()));
            orderDetail.setCarInfo(carInfo);
        }
        return orderDetailList;
    }

    @Override
    public Order getOrderById(String id) {
        if (StringUtils.isBlank(id)){
            throw new CustomException("订单ID不存在");
        }
        Order order = orderMapper.selectById(id);
        User user = userMapper.selectOne(new QueryWrapper<User>().eq("id", order.getUserId()));
        order.setUser(user);
        return order;
    }
}
