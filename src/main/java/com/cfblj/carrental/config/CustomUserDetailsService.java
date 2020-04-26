package com.cfblj.carrental.config;

import com.cfblj.carrental.model.Role;
import com.cfblj.carrental.model.User;
import com.cfblj.carrental.service.UserService;
import org.apache.commons.lang3.StringUtils;
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
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;

    CustomUserDetails customUserDetails = new CustomUserDetails();

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (StringUtils.isBlank(username)){
            throw new UsernameNotFoundException("用户名不存在");
        }
        User user = userService.findUserAndRoleByUserId(username);
        if (user != null){
            customUserDetails.setUser(user);

            List<Role> roleList = user.getRoleList();
            customUserDetails.setRoleList(roleList);
        }else {
            throw new UsernameNotFoundException("用户不存在");
        }

        return customUserDetails;
    }
}
