/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.60-log : Database - car-rental-system
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`car-rental-system` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `car-rental-system`;

/*Table structure for table `car_appoint` */

DROP TABLE IF EXISTS `car_appoint`;

CREATE TABLE `car_appoint` (
  `id` varchar(255) NOT NULL,
  `car_id` varchar(255) DEFAULT NULL COMMENT '汽车ID',
  `start_time` datetime DEFAULT NULL COMMENT '预约起始时间',
  `end_time` datetime DEFAULT NULL COMMENT '预约结束时间',
  `user_id` varchar(255) DEFAULT NULL COMMENT '预约客户ID',
  `status` varchar(2) DEFAULT NULL COMMENT '状态(0预约中、1正在租用、2已超期、3已取消)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `car_appoint` */

insert  into `car_appoint`(`id`,`car_id`,`start_time`,`end_time`,`user_id`,`status`) values ('1','45b4dd16af4e4f01a356395c0e871426','2020-04-15 23:04:03','2020-04-22 23:04:08','1','1');

/*Table structure for table `car_band` */

DROP TABLE IF EXISTS `car_band`;

CREATE TABLE `car_band` (
  `id` varchar(255) NOT NULL,
  `band_name` varchar(255) DEFAULT NULL COMMENT '汽车品牌名称',
  `status` varchar(2) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `car_band` */

insert  into `car_band`(`id`,`band_name`,`status`) values ('f0e8d781e37da250908bc65982ff6a2a','大众','1');

/*Table structure for table `car_info` */

DROP TABLE IF EXISTS `car_info`;

CREATE TABLE `car_info` (
  `id` varchar(255) NOT NULL COMMENT '主键ID',
  `car_name` varchar(2000) DEFAULT NULL COMMENT '名称',
  `license_plate_num` varchar(50) DEFAULT NULL COMMENT '车牌号',
  `car_xh` varchar(255) DEFAULT NULL COMMENT '型号',
  `car_owner_id` varchar(255) DEFAULT NULL COMMENT '车主ID',
  `is_rented` varchar(2) DEFAULT NULL COMMENT '是否租用（0否，1是）',
  `car_band_id` varchar(255) DEFAULT NULL COMMENT '汽车品牌ID',
  `rent_price` double DEFAULT NULL COMMENT '出租价格',
  `seat_num` int(11) DEFAULT NULL COMMENT '座位数',
  `purpose` varchar(2000) DEFAULT NULL COMMENT '用途',
  `release_time` datetime DEFAULT NULL COMMENT '发布时间',
  `car_status` varchar(2) DEFAULT NULL COMMENT '汽车状态(0禁止出租、1正常状态、2正在维修、3已删除)',
  `image` varchar(1024) DEFAULT NULL COMMENT '图片',
  `has_driver` varchar(2) DEFAULT NULL COMMENT '有无代驾(0无、1有)',
  `city` varchar(255) DEFAULT NULL COMMENT '所属城市',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `car_info` */

insert  into `car_info`(`id`,`car_name`,`license_plate_num`,`car_xh`,`car_owner_id`,`is_rented`,`car_band_id`,`rent_price`,`seat_num`,`purpose`,`release_time`,`car_status`,`image`,`has_driver`,`city`) values ('45b4dd16af4e4f01a356395c0e871426','第一辆车','A22433224','AAAA1','1','1',NULL,22,4,'22','2020-04-25 15:37:19','2',NULL,NULL,NULL),('56c9778653254bcc9b5a29935ea704de','第二辆车','B534432532','AAAA2','1','1',NULL,111,3,'333','2020-04-23 15:37:21','2',NULL,NULL,NULL),('7b5e6c3b828b4598b404777d6daf7329','第三辆车','A432432432','AAAA3','1','1',NULL,111,11,'11','2020-04-15 15:37:24','1',NULL,NULL,NULL);

/*Table structure for table `car_order` */

DROP TABLE IF EXISTS `car_order`;

CREATE TABLE `car_order` (
  `id` varchar(255) NOT NULL,
  `order_num` varchar(255) DEFAULT NULL COMMENT '订单号',
  `total_price` double DEFAULT NULL COMMENT '总金额',
  `status` varchar(2) DEFAULT NULL COMMENT '订单状态（0未付款、1已付款、2交易完成、3订单异常、4交易关闭）',
  `user_id` varchar(255) DEFAULT NULL COMMENT '客户ID',
  `create_time` varchar(20) DEFAULT NULL COMMENT '生成时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `car_order` */

insert  into `car_order`(`id`,`order_num`,`total_price`,`status`,`user_id`,`create_time`) values ('1','1111111',120,'1','1','2020-03-04');

/*Table structure for table `car_rental` */

DROP TABLE IF EXISTS `car_rental`;

CREATE TABLE `car_rental` (
  `id` varchar(255) NOT NULL,
  `car_id` varchar(255) DEFAULT NULL COMMENT '汽车ID',
  `start_time` datetime DEFAULT NULL COMMENT '租用起始时间',
  `end_time` datetime DEFAULT NULL COMMENT '租用结束时间',
  `user_id` varchar(255) DEFAULT NULL COMMENT '租用客户ID',
  `status` varchar(2) DEFAULT NULL COMMENT '出租状态（0未归还、1已归还、2正在租用）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `car_rental` */

insert  into `car_rental`(`id`,`car_id`,`start_time`,`end_time`,`user_id`,`status`) values ('1','56c9778653254bcc9b5a29935ea704de','2020-04-15 23:04:42','2020-04-22 23:04:45','1','1');

/*Table structure for table `car_service` */

DROP TABLE IF EXISTS `car_service`;

CREATE TABLE `car_service` (
  `id` varchar(255) NOT NULL,
  `car_id` varchar(255) DEFAULT NULL COMMENT '汽车信息ID',
  `rental_service_id` varchar(255) DEFAULT NULL COMMENT '租用服务ID',
  `status` varchar(2) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `car_service` */

/*Table structure for table `order_detail` */

DROP TABLE IF EXISTS `order_detail`;

CREATE TABLE `order_detail` (
  `id` varchar(255) NOT NULL,
  `order_id` varchar(255) DEFAULT NULL COMMENT '订单ID',
  `rent_price` double DEFAULT NULL COMMENT '租金',
  `person_num` int(2) DEFAULT NULL COMMENT '人数',
  `duration` double DEFAULT NULL COMMENT '时长',
  `start_time` datetime DEFAULT NULL COMMENT '租用起始时间',
  `end_time` datetime DEFAULT NULL COMMENT '租用结束时间',
  `car_id` varchar(255) DEFAULT NULL COMMENT '车辆信息id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `order_detail` */

insert  into `order_detail`(`id`,`order_id`,`rent_price`,`person_num`,`duration`,`start_time`,`end_time`,`car_id`) values ('1','1',22,2,NULL,'2020-04-22 18:47:33','2020-04-25 18:47:31','45b4dd16af4e4f01a356395c0e871426');

/*Table structure for table `rental_service` */

DROP TABLE IF EXISTS `rental_service`;

CREATE TABLE `rental_service` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '服务名称',
  `business_scope` varchar(2000) DEFAULT NULL COMMENT '经营范围',
  `status` varchar(2) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `rental_service` */

/*Table structure for table `role` */

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '角色名称',
  `status` varchar(2) DEFAULT NULL COMMENT '状态(0无效、1有效)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `role` */

/*Table structure for table `user_info` */

DROP TABLE IF EXISTS `user_info`;

CREATE TABLE `user_info` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `sex` varchar(2) DEFAULT NULL COMMENT '性别',
  `address` varchar(2000) DEFAULT NULL COMMENT '家庭地址',
  `birthday` varchar(20) DEFAULT NULL COMMENT '出生日期',
  `phone` varchar(20) DEFAULT NULL COMMENT '手机号',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `is_member` varchar(2) DEFAULT NULL COMMENT '是否会员',
  `login_name` varchar(500) DEFAULT NULL COMMENT '登录名',
  `password` varchar(50) DEFAULT NULL COMMENT '密码',
  `status` varchar(2) DEFAULT NULL COMMENT '用户状态(0表示正常、1禁用、2表示异常)',
  `account` varchar(0) DEFAULT NULL COMMENT '账户金额',
  `user_type` varchar(2) DEFAULT NULL COMMENT '用户类型(0表示普通用户、1表示车主、2表示司机)',
  `car_num` int(11) DEFAULT NULL COMMENT '发布车辆数(用户类型为1)',
  `driving_license_image` varchar(2000) DEFAULT NULL COMMENT '驾照图片(用户类型为2)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_info` */

insert  into `user_info`(`id`,`name`,`sex`,`address`,`birthday`,`phone`,`email`,`is_member`,`login_name`,`password`,`status`,`account`,`user_type`,`car_num`,`driving_license_image`) values ('1','张三','1','江西南昌','1999-02-23','12356452','1354256@qq.com','1',NULL,NULL,'1','','1',NULL,NULL);

/*Table structure for table `user_role` */

DROP TABLE IF EXISTS `user_role`;

CREATE TABLE `user_role` (
  `id` varchar(255) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL COMMENT '用户ID',
  `role_id` varchar(255) DEFAULT NULL COMMENT '角色ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_role` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
