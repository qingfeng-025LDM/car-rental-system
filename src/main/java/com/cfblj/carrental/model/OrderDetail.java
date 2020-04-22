package com.cfblj.carrental.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.util.Date;

@TableName("order_detail")
public class OrderDetail {

    @TableId(type = IdType.UUID)
    private String id;

    @TableField("orderId")
    private String order_id;

    @TableField("rentPrice")
    private Double rent_price;

    @TableField("personNum")
    private int person_num;

    private Double duration;
    @TableField("startTime")
    private Date start_time;

    @TableField("endTime")
    private Date end_time;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOrder_id() {
        return order_id;
    }

    public void setOrder_id(String order_id) {
        this.order_id = order_id;
    }

    public Double getRent_price() {
        return rent_price;
    }

    public void setRent_price(Double rent_price) {
        this.rent_price = rent_price;
    }

    public int getPerson_num() {
        return person_num;
    }

    public void setPerson_num(int person_num) {
        this.person_num = person_num;
    }

    public Double getDuration() {
        return duration;
    }

    public void setDuration(Double duration) {
        this.duration = duration;
    }

    public Date getStart_time() {
        return start_time;
    }

    public void setStart_time(Date start_time) {
        this.start_time = start_time;
    }

    public Date getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
    }
}
