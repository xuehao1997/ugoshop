/*
Navicat MySQL Data Transfer

Source Server         : hehe
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : loginhuimai

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-09-30 13:56:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `registerhuimai`
-- ----------------------------
DROP TABLE IF EXISTS `registerhuimai`;
CREATE TABLE `registerhuimai` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `phone` bigint(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registerhuimai
-- ----------------------------
INSERT INTO `registerhuimai` VALUES ('1', '13956308574', '123456', null);
INSERT INTO `registerhuimai` VALUES ('2', '15155066308', '199742', null);
INSERT INTO `registerhuimai` VALUES ('3', '13956308522', '123456', '2019-09-03 16:39:25');
INSERT INTO `registerhuimai` VALUES ('4', '15155066344', 'xuehao123456', '2019-09-03 16:40:47');
