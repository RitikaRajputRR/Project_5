<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$con=mysqli_connect('localhost','root','seedit','studentmanagementsystem');
$q="select * from addcity where marks>30";
$rs=mysqli_query($con, $q);
while($row= mysqli_fetch_assoc($rs))
{
   $r[]=$row;

}
echo json_encode($r);
?> 