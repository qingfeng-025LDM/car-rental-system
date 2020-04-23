package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.mapper.CarInfoMapper;
import com.cfblj.carrental.mapper.UserMapper;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.CarInfoService;
import com.cfblj.carrental.service.UserService;
import com.cfblj.carrental.utils.Pages;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Wuhz
 * @date 2020-4-20 18:48
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User getUserInfoById(String id) {
        if (StringUtils.isBlank(id)){
            throw new CustomException("id不能为空");
        }
        User user = userMapper.selectById(id);
        return user;
    }

    @Override
    public Pages getUserInfoPage(User user, int curPage, int size) {
        PageHelper.startPage(curPage, size);
        Page<User> page = (Page<User>)userMapper.selectUserInfo(user);
        return new Pages(page.getTotal(), page.getResult());
    }
}
