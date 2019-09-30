<?php
//数据库连接
// header('content-type:text/html;charset=utf-8');//设置字符编码
// define('HOST','localhost');//本地主机
// define('NAME','root');//数据库的用户名
// define('PASSWORD','');//数据库的密码
// define('DBNAME','huimai');//数据库名称
// $conn=@new mysqli(HOST,NAME,PASSWORD,DBNAME);
// if($conn->connect_error){
//     die('数据库连接失败'.$conn->connect_error);//结束并输出里面的内容
// }



header('content-type:text/html;charset=utf-8');//设置字符编码
//连接数据库
$conn=@mysql_connect('localhost','root','');
if(!$conn){
    //结束并输出里面的内容
    die('数据库连接错误'.mysql_error());
}
//选择数据库
mysql_select_db('huimai');
//设置字符集
mysql_query('SET NAMES UTF8');

