package com.cfblj.carrental.controller;

import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/getUserList")
    public List<User> getUserList(){
        List<User> list = userService.list();
        return list;
    }

    @RequestMapping("/regist")
    public boolean regist(User user){
        boolean save = userService.save(user);
        return save;
    }






}
