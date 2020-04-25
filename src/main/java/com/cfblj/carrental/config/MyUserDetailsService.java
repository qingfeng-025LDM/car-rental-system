package com.cfblj.carrental.config;

import com.cfblj.carrental.model.Role;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 自定义UserDetailsService
 */
@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;

    MyUserDetails myUserDetails = new MyUserDetails();

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findUserAndRoleByUserId(username);
        if (user != null){
            myUserDetails.setUser(user);

            List<Role> roleList = user.getRoleList();
            myUserDetails.setRoleList(roleList);
        }else {
            throw new UsernameNotFoundException("用户不存在");
        }

        return myUserDetails;
    }
}
