package com.cfblj.carrental.model;



import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.util.Date;

/**
 * 汽车信息
 */
@TableName("car_info")
public class CarInfo implements Serializable {

    @TableId(type = IdType.UUID)
    private String id;

    @TableField("car_name")
    private String carName;     //名称

    @TableField("license_plate_num")
    private String licensePlateNum;     //车牌号

    @TableField("car_xh")
    private String carXh;       //型号

    @TableField("car_owner_id")
    private String carOwnerId;  //车主ID

    @TableField("is_rented")
    private String isRented;       //是否租用（0否，1是）

    @TableField("car_band_id")
    private String carBandId;       //汽车品牌ID

    @TableField("rent_price")
    private Double rentPrice;       //出租价格

    @TableField("seat_num")
    private Integer seatNum;        //座位数

    @TableField("purpose")
    private String purpose;     //用途

    @TableField("release_time")
    private Date releaseTime;       //发布时间

    @TableField("car_status")
    private String carStatus;       //汽车状态(0禁止出租、1正常、2正在维修，3已删除)

    @TableField("image")
    private String image;       //图片

    @TableField("has_driver")
    private String hasDriver;   //有无代驾(0无、1有)

    @TableField("city")
    private String city;        //所属城市

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getLicensePlateNum() {
        return licensePlateNum;
    }

    public void setLicensePlateNum(String licensePlateNum) {
        this.licensePlateNum = licensePlateNum;
    }

    public String getCarXh() {
        return carXh;
    }

    public void setCarXh(String carXh) {
        this.carXh = carXh;
    }

    public String getCarOwnerId() {
        return carOwnerId;
    }

    public void setCarOwnerId(String carOwnerId) {
        this.carOwnerId = carOwnerId;
    }

    public String getIsRented() {
        return isRented;
    }

    public void setIsRented(String isRented) {
        this.isRented = isRented;
    }

    public String getCarBandId() {
        return carBandId;
    }

    public void setCarBandId(String carBandId) {
        this.carBandId = carBandId;
    }

    public Double getRentPrice() {
        return rentPrice;
    }

    public void setRentPrice(Double rentPrice) {
        this.rentPrice = rentPrice;
    }

    public Integer getSeatNum() {
        return seatNum;
    }

    public void setSeatNum(Integer seatNum) {
        this.seatNum = seatNum;
    }

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

    public Date getReleaseTime() {
        return releaseTime;
    }

    public void setReleaseTime(Date releaseTime) {
        this.releaseTime = releaseTime;
    }

    public String getCarStatus() {
        return carStatus;
    }

    public void setCarStatus(String carStatus) {
        this.carStatus = carStatus;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getHasDriver() {
        return hasDriver;
    }

    public void setHasDriver(String hasDriver) {
        this.hasDriver = hasDriver;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
