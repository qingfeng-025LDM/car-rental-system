package com.cfblj.carrental.controller;

import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private UserService userService;

    /**
     * 获取登陆用户
     * @return
     */
    @RequestMapping("/getLoginUser")
    public Map Login(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User loginUser = userService.findUserAndRoleByUserId(username);
        Map<String, User> map = new HashMap<>();
        map.put("user", loginUser);
        return map;
    }

}
