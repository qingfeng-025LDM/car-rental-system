package com.cfblj.carrental.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cfblj.carrental.model.Role;

import java.util.List;

public interface RoleMapper extends BaseMapper<Role> {
    List<Role> selectRolesByUserId(String id);
}
