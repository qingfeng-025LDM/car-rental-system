package com.cfblj.carrental.controller;

import com.cfblj.carrental.model.CarInfo;
import com.cfblj.carrental.model.Result;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin
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
    public Result regist(User user){
        List<User> list = userService.list();
        for (User u : list) {
            if(u.getLoginName().equals(user.getLoginName())){
                return new Result("登录名已存在，请重新选取",false);
            }
        }
        boolean save = userService.save(user);
        return new Result("注册成功！",true);
    }

    @RequestMapping("/login")
    public Result login(String loginName, String password){
        List<User> list = userService.list();
        for (User u : list) {
            if(u.getLoginName().equals(loginName)){
                if(u.getPassword().equals(password)){
                    return new Result("登录成功！！！",true);
                }
            }
        }
        return new Result("账号或密码不正确，请重新登录",false);
    }

    @RequestMapping("/get")
    public String get(String id){
        return "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png";
    }






}
