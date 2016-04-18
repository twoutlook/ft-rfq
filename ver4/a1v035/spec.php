<?php
session_start();                // 首先开启session



 ?>


<!DOCTYPE HTML>
<html>
    <meta charset="UTF-8">
<title>ver4 Spec</title>

<link rel="stylesheet" href="css/ks.css">
<link rel='stylesheet'   href='div-css.css' />
<body>
  <?php
  if (!($_SESSION['user']=='user1' || $_SESSION['user']=='user2'|| $_SESSION['user']=='user3' || $_SESSION['user']=='jason')){
      echo 'no permision to access this page';
      echo '<h3><a href="http://120.26.88.32/"> to login </a><h3>';
      return;
  }
?>
<div id="Content">
<h1>=== ver4 Spec ===</h1>
<h2>
 
    ===1===<br>
36 1-8）<br>
料柄流道渣包回收价差损失额 ： <br>
（【30】-【35】）*【33】/1000<br>

***修正要除模穴數***<br>
（（【30】-【35】）*【33】/1000）/ 【16】<br>
<ul>
    <li><mark>已完成。</mark>
        <ul>
            <li>biz/biz.js function doEntire整表計算___各工序()</li>
            <li>在ver3【16】模穴數不影響這【36】料柄流道渣包回收价差损失额 。</li>
            <li>在ver4【16】模穴數為2時，【36】料柄流道渣包回收价差损失额的值為一半 。</li>
               
        </ul>
    
</li>
</ul>
<hr>
<br>===2===<br>
37 1-9）<br>
压铸熔炼材料氧化损耗(量）2%<br>
公式計算（【31】+【33】）*【30】 * 0.02/1000<br>
***修正要除模穴數***<br>
（（【31】+【33】）*【30】 * 0.02/1000 ）/【16】<br>
<br>===3===<br>
46 2-7）<br>
熔炼费（能耗）：  <br>
公式計算【133】* 【31】<br>
***刪除該項***<br>
<br>===4===<br>
34  1-6）<br>
料柄流道渣包比率 ：  <br>
公式計算<br>
（【33】/【31】）* 100%<br>
***修正為 料柄流道渣包比率 => 產品重量 / 整模重量  ***<br>
公式計算<br>
(【31】* 【16】) /  ( 【31】* 【16】 +【33】)<br>

<br>===5===<br>
含稅不含稅部份<br>
***只計算不含稅，取消【111】【112】【113】***<br>
<ul>
    <li><mark>已完成。</mark>
        <ul>
            <li>biz/biz.js</li>
            <li>將  viewArr[0] = [3, 4, 6, ..., 131, 106, 107, 108, 109, 110, 111,112,113 114];的111,112,113去掉。</li>
               
        </ul>
    
</li>
</ul>
</h2>
</div>
</body>
</html>
