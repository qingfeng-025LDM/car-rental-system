package com.cfblj.carrental.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cfblj.carrental.model.Order;
import com.cfblj.carrental.model.User;

import java.util.List;


public interface OrderMapper extends BaseMapper<Order> {

    List<Order> selectOrderList(Order order);
}
