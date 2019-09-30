/*
Navicat MySQL Data Transfer

Source Server         : hehe
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : huimai

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-09-30 13:56:06
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `piclist`
-- ----------------------------
DROP TABLE IF EXISTS `piclist`;
CREATE TABLE `piclist` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(250) NOT NULL,
  `title` varchar(100) NOT NULL,
  `describe` varchar(50) NOT NULL,
  `price` float(8,2) NOT NULL,
  `urls` varchar(999) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of piclist
-- ----------------------------
INSERT INTO `piclist` VALUES ('1', 'https://assets.ugoshop.com/proimage/864a6535877371d73b9c6ecfe76a2123.jpg!p450', '100%羊毛条纹外搭送针织内搭·驼色-权威质检！可贴身穿的柔软羊毛衫！  驼色', '细密柔软 舒适百搭', '299.00', '');
INSERT INTO `piclist` VALUES ('2', 'https://assets.ugoshop.com/proimage/4abb6ffea25558f073987322c9fdc364.jpg!p450', ' 兆亮珠宝足金999黄金小金鱼吊坠手链转运珠', '黄金锦鲤 鸿运当头', '99.00', '');
INSERT INTO `piclist` VALUES ('3', 'https://assets.ugoshop.com/proimage/2276cd8645a143430b2c838d3c831b0c.jpg!p450', '西驼王多维富硒高钙配方驼奶粉', '每日两杯全面营养', '799.00', '');
INSERT INTO `piclist` VALUES ('4', 'https://assets.ugoshop.com/proimage/a19101fa2be155af803e575d0787e420.jpg!p450', '老冯记18K金镶冰种红纹石水滴吊坠', '高冰红润 艳丽迷人', '399.00', '');
INSERT INTO `piclist` VALUES ('5', 'https://assets.ugoshop.com/proimage/b29d0dcb6078ccd8379019c77750e470.jpg!p450', '云南手工黑糖', '手工制作 醇厚清香', '59.00', '');
INSERT INTO `piclist` VALUES ('6', 'https://assets.ugoshop.com/proimage/eb807225edadf96a00a4e90157987bea.jpg!p450', '家居装饰仿真花花瓶台灯-可注水养花·玫瑰蕾 白色', '节能柔光 创意时尚', '76.00', '');
INSERT INTO `piclist` VALUES ('7', 'https://assets.ugoshop.com/proimage/6c825a8edd85638dfc222467111c5493.jpg!p450', '崇明特产 红烧蹄膀 酱肘子 熟食500g*2袋', '2件8折', '69.00', '');
INSERT INTO `piclist` VALUES ('8', 'https://assets.ugoshop.com/proimage/0b6a2d89c0e953c4edefac5e0e0ca295.jpg!p450', '绮瑞 新款纯棉长袖睡衣套装--权威质检！专柜同款！  男QG38877卡其', '舒适全棉 不同风格', '99.00', 'https://assets.ugoshop.com/proimage/0b6a2d89c0e953c4edefac5e0e0ca295.jpg!p450,https://assets.ugoshop.com/proimage/a56e22c7b5f816dc46db43bbb52d2ff0.jpg!p800,https://assets.ugoshop.com/proimage/59be60e0d1aeae74b449f1e42ddbeabc.jpg!p800,https://assets.ugoshop.com/proimage/a7b51c7d5be230c42fdd4ebc80217be7.jpg!p800,https://assets.ugoshop.com/proimage/4b99cf02485209ad60d235760d0da795.jpg!p800,https://assets.ugoshop.com/proimage/f76a70440769dedfe6b2c4a9d0255049.jpg!p800');
INSERT INTO `piclist` VALUES ('9', 'https://assets.ugoshop.com/proimage/dcf9cd9e54b6451441402a71a771a284.jpg!p450', '韩国进口加压式腌菜坛子密封腌菜盒 8.5L', '自制泡菜 美味加倍', '119.00', '');
INSERT INTO `piclist` VALUES ('10', 'https://assets.ugoshop.com/proimage/16e8272ca1573e03072c4291283ea449.jpg!p450', '金枕巴掌榴莲4-5斤（1-2枚），香甜浓郁，肉厚核小', '口口醇香 香浓滋味', '119.00', '');
INSERT INTO `piclist` VALUES ('11', 'https://assets.ugoshop.com/proimage/b95f11057ca83b1e09dec3116f3431fb.jpg!p450', '空调罩开机不取挂式挂式防尘罩2件组--防尘  ！防止直吹！4色任选！·苏曼粉', '开机不用取 防尘防晒', '39.00', '');
INSERT INTO `piclist` VALUES ('12', 'https://assets.ugoshop.com/proimage/dd2beb48beeba75b1c76fc7e2e849690.jpg!p450', '德世朗 天然鸡翅木筷子套装 10双/20双·木色 ', '好看好用 源自鸡翅木', '35.00', '');
INSERT INTO `piclist` VALUES ('13', 'https://assets.ugoshop.com/proimage/87a705b2eecfbfbbe615ff152a426591.jpg!p450', '四川蒲江红心猕猴桃中果12粒（小果70-90g）', '自然成熟 甜蜜多汁', '29.00', 'https://assets.ugoshop.com/proimage/ade64e03f2a920f16c2d322d970b6549.jpg!p800,https://assets.ugoshop.com/proimage/87a705b2eecfbfbbe615ff152a426591.jpg!p450,https://assets.ugoshop.com/proimage/59169820de99eb93540f16986a713cb9.jpg!p800');
INSERT INTO `piclist` VALUES ('14', 'https://assets.ugoshop.com/proimage/a02f156b229bdabf04e1767cbad65d5c.jpg!p450', '谷小盒 土俗村韩式参鸡汤800g*2盒', '肉质鲜美 汤汁浓郁', '79.00', 'https://assets.ugoshop.com/proimage/a02f156b229bdabf04e1767cbad65d5c.jpg!p450,https://assets.ugoshop.com/proimage/502dba33c743a2fd1cf30ca6a18f38bb.jpg!p800');
INSERT INTO `piclist` VALUES ('15', 'https://assets.ugoshop.com/proimage/e95527ed0ea2768ee8bae224847fc610.jpg!p450', '漫丽依春秋双层棉纱长袖收腰大码纯棉连衣裙·咖啡 3965', '婴儿级面料，全面舒适', '128.00', 'https://assets.ugoshop.com/proimage/e95527ed0ea2768ee8bae224847fc610.jpg!p450,https://assets.ugoshop.com/proimage/53c3c7072a3ba732606f5a50f16e1382.jpg!p800,https://assets.ugoshop.com/proimage/3d72b38c16d4dd6770688eb2174403bd.jpg!p800');
