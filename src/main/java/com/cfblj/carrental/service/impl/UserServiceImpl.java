package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.mapper.CarInfoMapper;
import com.cfblj.carrental.mapper.RoleMapper;
import com.cfblj.carrental.mapper.UserMapper;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.model.Role;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.CarInfoService;
import com.cfblj.carrental.service.UserService;
import com.cfblj.carrental.utils.Pages;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Wuhz
 * @date 2020-4-20 18:48
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private RoleMapper roleMapper;

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


    /**
     * 根据用户ID查询用户和权限信息
     * @param username
     * @return
     */
    @Override
    public User findUserAndRoleByUserId(String username) {
        if (StringUtils.isBlank(username)){
            throw new CustomException("用户名不存在");
        }
        User user = userMapper.selectOne(new QueryWrapper<User>().eq("login_name", username));
        if (user != null || StringUtils.isNotBlank(user.getId())){
            List<Role> roleList = roleMapper.selectRolesByUserId(user.getId());
            user.setRoleList(roleList);
        }
        return user;
    }
}
