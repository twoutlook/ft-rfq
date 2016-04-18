<?php
// login_check.php

session_start();
 // Session["user"] = "unknown";
 $_SESSION["user"] = "unknown";

    header( 'Location: login.php' ) ;
