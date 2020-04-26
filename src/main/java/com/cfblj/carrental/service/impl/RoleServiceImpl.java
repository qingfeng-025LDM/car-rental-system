package com.cfblj.carrental.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cfblj.carrental.mapper.RoleMapper;
import com.cfblj.carrental.model.Role;
import com.cfblj.carrental.service.RoleService;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl extends ServiceImpl<RoleMapper, Role> implements RoleService {
}
