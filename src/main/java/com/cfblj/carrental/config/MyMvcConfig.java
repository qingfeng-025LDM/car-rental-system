package com.cfblj.carrental.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

//使用WebMvcConfigurerAdapter可以来扩展SpringMVC的功能
//@EnableWebMvc   不要接管SpringMVC
@Configuration
public class MyMvcConfig extends WebMvcConfigurerAdapter {

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
                registry.addViewController("/login/updatePwd").setViewName("emp/password_update.html");   //跳转到修改密码页
                registry.addViewController("/dept/list").setViewName("dept/dept_list.html");    //跳转到部门信息页
                registry.addViewController("/supplier/supplier_list").setViewName("supplier/supplier_list.html");   //跳转到供应商信息页
                registry.addViewController("/stock/stock_list").setViewName("admin/stock.html");   //跳转到仓库信息页
                registry.addViewController("/category/category_list").setViewName("product/productCategory_list.html");   //跳转到商品分类信息页
                registry.addViewController("/product/product_list").setViewName("product/product_list.html");   //跳转到商品信息页
                registry.addViewController("/sell/sellInfo_list").setViewName("sell/sellInfo_list.html");   //跳转到销售信息页
                registry.addViewController("/sellItem/sellItem_list").setViewName("sell/sellItem_list.html");   //跳转到销售明细页
                registry.addViewController("/purchase/purchaseOrder_list").setViewName("purchase/purchaseOrder_list.html");   //跳转到采购订单页
                registry.addViewController("/purOrderItem/purchaseOrderItem_list").setViewName("purchase/purchaseOrderItem_list.html");   //跳转到采购明细页
                registry.addViewController("/tempRepSheet/tempRepProductDetails").setViewName("replenishment/tempRepProductDetails.html");  //跳转到商品补货页
                registry.addViewController("/repSheet/repSheet_list").setViewName("replenishment/replenishmentSheet_list.html");  //跳转到商品补货单页
                registry.addViewController("/reports/sellReport").setViewName("sellReport.html");  //跳转到商品补货单页
            }
        };
        return webMvcConfigurerAdapter;
    }
}
