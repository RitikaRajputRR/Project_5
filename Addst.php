<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$r=$_GET['r'];
$n=$_GET['n'];
$b=$_GET['b'];
$s=$_GET['s'];
$m=$_GET['m'];
$con=mysqli_connect('localhost','root','seedit','studentmanagementsystem');
$q="insert into addstudent values('$r','$n','$b','$s','$m')";
$rs=mysqli_query($con,$q);
if($rs){
    
    echo '{"result":"save"}';
}
else {
    
    echo '{"result":"error"}';
}
?>