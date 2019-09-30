<?php
//mysqli(本地主机,数据库的用户名,数据库的密码,数据库名称);
define('HOST','localhost');//本地主机
define('NAME','root');//数据库的用户名
define('PASSWORD','');//数据库的密码
define('DBNAME','loginhuimai');//数据库名称
$conn=@new mysqli(HOST,NAME,PASSWORD,DBNAME);
if($conn->connect_error){
    die('数据库连接失败'.$conn->connect_error);//结束并输出里面的内容
}

if(isset($_GET['phone']) && isset($_GET['pass'])){
    $phone=$_GET['phone'];
    $pass=($_GET['pass']);
    //如果phone和pass两个字段的值在mysql中都能找到，返回true
    $result=$conn->query("select * from registerhuimai where phone='$phone' and password='$pass' ");
    if($result->fetch_assoc()){//匹配成功
        echo true;//1
    }else{
        echo false;//空格
    }
}

