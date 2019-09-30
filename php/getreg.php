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

//检测手机号是否存在
if(isset($_GET['checkphone'])){
    $userphone=$_GET['checkphone'];
    //通过查询方式来测试是否存在用户名。
    $result=$conn->query("select * from registerhuimai where phone='$userphone'");
    if($result->fetch_assoc()){//存在
        echo true;//1
    }else{//不存在
        echo false;//空隙
    }
}
//前端用户点击了提交按钮，接收前端传入表单的值。
// if(isset($_POST['submit'])){
//     $name=$_POST['username'];
//     $pass=sha1($_POST['password']);//加密
//     $email=$_POST['email'];
//     //添加数据库
//     $conn->query("insert usertable values(null,'$name','$pass','$email',NOW())");
//     //php的跳转
//     header('location:http://localhost/jsDay/Day%2023/loginregister/src/login.html');
// }

if(isset($_GET['finalphone'])){
    $phone = $_GET['finalphone'];
    $pass = $_GET['finalpass'];
    $conn->query("insert registerhuimai values(null,'$phone','$pass',NOW())");
}
// echo $phone;
// echo $pass;
