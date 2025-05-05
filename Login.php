<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$n=$_GET['n'];
$p=$_GET['p'];

$con=mysqli_connect('localhost','root','seedit','studentmanagementsystem');
 $q="select*from registration where name='$n'and password='$p'";
$result=mysqli_query($con,$q);
if($row=mysqli_fetch_array($result))

{

    echo '{"result":"save"}';
}

else{

    echo '{"result":"error"}';
}
?>
