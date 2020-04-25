package com.cfblj.carrental.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.utils.Pages;

public interface UserService extends IService<User> {
    User getUserInfoById(String id);

    Pages getUserInfoPage(User user, int curPage, int size);

    User findUserAndRoleByUserId(String username);
}
