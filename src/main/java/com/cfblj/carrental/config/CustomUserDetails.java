package com.cfblj.carrental.config;


import com.cfblj.carrental.model.Role;
import com.cfblj.carrental.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * 自定义UserDetails
 */
public class CustomUserDetails implements UserDetails {

    private List<Role> roleList;

    private User user;

    public CustomUserDetails(){
    }

    public CustomUserDetails(List<Role> roleList, User user){
        this.roleList = roleList;
        this.user = user;
    }

    public void setRoleList(List<Role> roleList) {
        this.roleList = roleList;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> grantedAuthorityList = new ArrayList<GrantedAuthority>();
        for (Role role : roleList) {
            grantedAuthorityList.add(new SimpleGrantedAuthority(role.getName()));
        }
        return grantedAuthorityList;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getLoginName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
