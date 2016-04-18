<?php
session_start();                // 首先开启session



 ?>


<!DOCTYPE HTML>
<html>
    <meta charset="UTF-8">
<title>ver3 Spec</title>

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
<h1>=== ver3 Spec ===</h1>
<h2>
 
&nbsp;1. WebApp 要仿 Excel 樣式，讓使用者直觀使用，能看到整頁，品項數定為6，如有超過6，以第兩份處理。</br>
&nbsp;2. 行號11、31、33以公克輸入也以公克顯示。</br>
&nbsp;3. 行號12下拉表面要求，增列兩項: 清洗，皮膜。</br>
&nbsp;4. 美金滙率使用6.35。</br>
&nbsp;5. 行號42，以秒輸入，也以秒顯示，其它相同部份均按此要求。</br>
&nbsp;6. 行號43，產能只/H，取小數點1位，其它相同部份均按此要求。</br>
&nbsp;7. 機加工部分，分列傳統機加工工時和CNC機加工工時，傳統機加工良率和CNC機加工良率。</br>
&nbsp;8. 行號79下拉改為,選擇皮膜處理，下拉內容為</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1)烤漆前清洗皮膜</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(2)一般清洗加皮膜</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(3)特殊要求皮膜</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(4)清洗</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(5)特殊清洗</br>
&nbsp;9. 在行號81和82之間，插入難度係數，預設值為1。</br>
10.行號92，11)其它特殊處理，新增輸入文字說明。</br>
11.VAT要做成選項。實務上美金不含稅，人民幣含稅。</br>
12.行號110，改為合計。</br>
13.以1pc計算。</br>
</h2>
</div>
</body>
</html>
