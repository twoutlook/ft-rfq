<?php
// login_check.php

session_start();
 // Session["user"] = "unknown";
 $_SESSION["user"] = "unknown";

    header( 'Location: http://120.26.88.32/login.php' ) ;
