<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');

$i=$_GET['i'];
$n=$_GET['n'];
$m=$_GET['m'];
$a=$_GET['a'];
$d=$_GET['d'];
$p=$_GET['p'];
 $con=mysqli_connect('localhost','root','seedit','studentmanagementsystem');
 $q="insert into registration value('$i','$n','$m','$a','$d','$p')";
 $rs=mysqli_query($con, $q);
if($rs)
{
    
    echo '{"result":"save"}';
}
else {
    
    echo '{"result":"error"}';
}
?>
