package com.cfblj.carrental.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.model.User;

import java.util.List;


public interface UserMapper extends BaseMapper<User> {

    List<User> selectUserInfo(User user);

    User selectUserAndRoleByUserId(String username);
}
