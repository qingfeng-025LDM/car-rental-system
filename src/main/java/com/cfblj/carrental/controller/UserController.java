package com.cfblj.carrental.controller;

import com.cfblj.carrental.exception.CustomException;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.UserService;
import com.cfblj.carrental.utils.Pages;
import com.cfblj.carrental.utils.ReturnObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
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
    public boolean regist(User user){
        boolean save = userService.save(user);
        return save;
    }

    /**
     * 根据id查询
     * @param id
     * @return
     */
    @RequestMapping("/getUserInfoById")
    public ReturnObject getUserInfoById(String id){
        try {
            User user = userService.getUserInfoById(id);
            return new ReturnObject(user);
        }catch (CustomException e){
            return new ReturnObject(false, e.getMessage());
        }
    }

    @RequestMapping("/getUserInfoPage")
    public Pages getUserInfoPage(@RequestBody User user, int curPage, int size){
        return userService.getUserInfoPage(user, curPage, size);
    }


}
