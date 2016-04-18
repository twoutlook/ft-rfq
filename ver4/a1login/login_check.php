<?php
// login_check.php

session_start();
 // Session["user"] = "unknown";
 $_SESSION["user"] = "unknown";

// $user_login = $_POST['user_login'];            //帐号
$log = $_POST['log'];
$pwd = $_POST['pwd'];

// echo "<h1>user_login=$user_login</h1>";
// echo "<h1>log=$log</h1>";//pwd
// echo "<h1>pwd=$pwd</h1>";//pwd
if ($log=='user1' && $pwd=='Rfq@2016' ){
    echo "granted!";
    //  Session["user"] = "user1";
      $_SESSION["user"] = "user1";
    header( 'Location: http://120.26.88.32/a1login/portal.php' ) ;
}else{
    echo "user/pass not authorized";
    header( 'Location: http://120.26.88.32/a1login/login_fail.php' ) ;
}
