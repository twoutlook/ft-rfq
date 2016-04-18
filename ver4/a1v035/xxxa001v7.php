<?php
session_start();                // 首先开启session



 ?>


<!DOCTYPE HTML>
<html>
    <meta charset="UTF-8">
<title>A001</title>
<script src="js/jquery-1.12.0.min.js"></script>

<script src="a001_biz_js_util_format.js"></script>
<script src="a001_biz_js_util_remark.js"></script>

<script src="a001_biz_js_util.js"></script>
<script src="a001_biz_demo_ddl.js"></script>
<script src="a001_biz_demo.js"></script>
<script src="index_biz.js"></script>




<!--<link rel="stylesheet" href="bootstrap/css/bootstrap.css">-->
<!--<script src="bootstrap/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>-->


<link rel="stylesheet" href="css/ks.css">

<body>
  <?php
  if (!($_SESSION['user']=='user1' || $_SESSION['user']=='user2'|| $_SESSION['user']=='user3' || $_SESSION['user']=='jason')){
      echo 'no permision to access this page';
      echo '<h3><a href="http://120.26.88.32/login.php"> to login </a><h3>';
      return;
  }
?>


<img src="fulltech.png" alt="FullTech" />
<?php

    echo ' 用戶:'.$_SESSION['user'];
    echo ' <a href="http://120.26.88.32/logout.php"> 登出 </a>';


?>
<!--<span>顯示格號</span>-->
<!--<input type="radio" id="showNumNo" checked="checked" name="group1" />否-->
<!--<input type="radio" id="showNumYes" name="group1" />是-->

<div id='level1'>
  <hr>
  level1
</div>
<div id='level2'>
  <hr>
  level2
</div>
<script>
// showBtnColor('btn113','title113',999);
showLevel1Btns();
// showLevel2Btns();
</script>

<div id='level3a'>
  <hr>
  level3a
</div>
<div id='level3b'>
  <hr>
  level3b
</div>

<div id='level3c'>
  <hr>
  level3c
</div>
<hr>
<div id='inputArea'>
  <hr>

</div>
<div id='debugArea'>

</div>
<hr>
<div id='showArea'>

</div>

<script>
start();
showLevel2Btns();
showLevel3aBtns();
showLevel3bBtns();
showLevel3cBtns();


</script>

</body>
</html>
