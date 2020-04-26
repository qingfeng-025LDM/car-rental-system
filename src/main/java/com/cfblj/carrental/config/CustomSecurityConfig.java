package com.cfblj.carrental.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.annotation.Resource;

/**
 * 自定义安全访问配置类
 */
@Configuration
@EnableWebSecurity
public class CustomSecurityConfig extends WebSecurityConfigurerAdapter {

    @Resource
    private CustomAuthenticationProvider customAuthenticationProvider;      //自定义登录认证

    //配置资源的访问权限
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();      //关闭csrf验证，否则拒绝处理提交的post请求
        //定制请求的授权规则
        http.authorizeRequests()
                .antMatchers("/login", "/angularjs/**", "/css/**","/static/images/**",
                        "/jQuery/**","/js/**", "/webjars/**")      //定义不需要认证就可以访问
                .permitAll()                                        //无条件允许访问
                .antMatchers("/car/**", "/user/**", "/index", "/home", "/", "/order/**")
                .authenticated();      //其他url需要身份认证(公共部分)

        //开启自动配置的登录功能
        http.formLogin()   //开启登录
                .loginPage("/loginPage")        //登录页面
                .loginProcessingUrl("/login")   //自定义登录请求路径(post)
                .successForwardUrl("/index")        //登录成功后的页面
                .defaultSuccessUrl("/index", true)
                .failureUrl("/loginPage");
        //.permitAll();

        //开启自动配置的退出
        http.logout()       //注销，清空session
                .logoutUrl("/logout")       //自定义注销请求url
                .logoutSuccessUrl("/loginPage")   //注销成功后来到登录页面
                .permitAll();

        http.headers().frameOptions().sameOrigin();
    }

    //配置身份认证来源，设置用户权限
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(customAuthenticationProvider);
    }
}
