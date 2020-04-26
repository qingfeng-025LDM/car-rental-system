package com.cfblj.carrental.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 使用WebMvcConfigurerAdapter可以来扩展SpringMVC的功能
 */
//@EnableWebMvc   不要接管SpringMVC
@Configuration
public class CustomMvcConfig extends WebMvcConfigurerAdapter {

    @Bean
    public WebMvcConfigurerAdapter webMvcConfigurerAdapter(){
        WebMvcConfigurerAdapter webMvcConfigurerAdapter = new WebMvcConfigurerAdapter() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                registry.addViewController("/loginPage").setViewName("login.html");
                registry.addViewController("/home").setViewName("home.html");
                registry.addViewController("/").setViewName("index.html");
                registry.addViewController("/index").setViewName("index.html");
                //汽车管理
                registry.addViewController("/car/carInfoList").setViewName("car/carinfolist.html");   //跳转到汽车信息页
                registry.addViewController("/car/carAppointList").setViewName("car/carappointlist.html");   //跳转到汽车预约信息页
                registry.addViewController("/car/carRentalList").setViewName("car/carrentallist.html");    //跳转到汽车租用信息页
                registry.addViewController("/car/carBandList").setViewName("car/carband.html");   //跳转到仓库信息页
                registry.addViewController("/car/rentServiceList").setViewName("car/rentservice.html");   //跳转到商品分类信息页
                registry.addViewController("/car/product_list").setViewName("product/product_list.html");   //跳转到商品信息页
                //用户
                registry.addViewController("/user/renterList").setViewName("user/renterlist.html");   //跳转到供应商信息页
                registry.addViewController("/user/carOwnerList").setViewName("user/carownerlist.html");   //跳转到销售信息页
                registry.addViewController("/user/carDriverList").setViewName("user/cardriverlist.html");   //跳转到销售明细页
                //订单
                registry.addViewController("/order/orderList").setViewName("orders/orderInfo.html");   //跳转到销售明细页
                registry.addViewController("/order/orderDetailList").setViewName("orders/orderdetail.html");   //跳转到销售明细页

                //前台
                registry.addViewController("/qt/login").setViewName("qt/login.html");
                registry.addViewController("/qt/index").setViewName("qt/index.html");
                registry.addViewController("/qt/xiangqin").setViewName("qt/xiangqin.html");
            }
        };
        return webMvcConfigurerAdapter;
    }
}
