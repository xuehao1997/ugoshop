<?php
 require "conn.php";//引入数据库连接

//  $result=$conn->query("select * from piclist");//查表返回记录集
//  //循环遍历记录集
// $arrdata = Array();

// for($i=0;$i<$result->num_rows;$i++){
//     $arrdata[$i]=$result->fetch_assoc();
// }
// echo json_encode($arrdata);

//获取记录集
$result=mysql_query("select * from piclist");
$arr=array();
//mysql_num_rows():获取记录集的条数
//mysql_fetch_array($result,MYSQL_ASSOC):获取记录的第一条，每执行一次，继续获取下一条。
//MYSQL_ASSOC:获取的数组是字符串下标。
for($i=0;$i<mysql_num_rows($result);$i++){
    $arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
}
echo json_encode($arr);