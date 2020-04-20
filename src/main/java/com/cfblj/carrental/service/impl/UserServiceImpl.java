package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.mapper.CarInfoMapper;
import com.cfblj.carrental.mapper.UserMapper;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.CarInfoService;
import com.cfblj.carrental.service.UserService;
import org.springframework.stereotype.Service;

/**
 * @author Wuhz
 * @date 2020-4-20 18:48
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
