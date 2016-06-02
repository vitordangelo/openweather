<?php 

$http_origin = $_SERVER['HTTP_ORIGIN'];

if ($http_origin == "http://www.agroeasy.agr.br" || $http_origin == "http://php-vitorwebsystem.rhcloud.com")
{  
    header("Access-Control-Allow-Origin: $http_origin");
}


?>