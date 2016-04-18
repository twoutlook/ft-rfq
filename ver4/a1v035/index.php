<?php
session_start();                // 首先开启session
?>


<!DOCTYPE HTML>
<html>
    <meta charset="UTF-8">
    <title>Project RFQ ver4</title>
    <script src="js/jquery-1.12.0.min.js"></script>
    <script src="js/accounting.js"></script>


    <script src="../util/Blob.js"></script>
    <script src="../util/canvas-toBlob.js"></script>
    <script src="../util/FileSaver.js"></script>
    <!-- <script src="biz/demo.js"></script> -->

    <!-- <script async="" src="https://cdn.rawgit.com/eligrey/Blob.js/master/Blob.js"/>
    <script async="" src="https://cdn.rawgit.com/eligrey/canvas-toBlob.js/master/canvas-toBlob.js"/>
    <script async="" src="https://cdn.rawgit.com/eligrey/FileSaver.js/master/FileSaver.js"/>
    <script async="" src="https://cdn.rawgit.com/eligrey/FileSaver.js/master/demo/demo.js"/>  -->



    <script src="biz/ddl.js"></script>
    <script src="biz/format.js"></script>
    <!--<script src="biz/remark.js"></script>-->


    <script src="biz/bizInit.js"></script>
    <script src="biz/biz.js"></script>



    <!--<link rel="stylesheet" href="bootstrap/css/bootstrap.css">-->
    <!--<script src="bootstrap/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>-->


    <link rel="stylesheet" href="css/ks.css">

    <body>
        <?php
        if (!($_SESSION['user']=='user1' || $_SESSION['user']=='user2'|| $_SESSION['user']=='user3' || $_SESSION['user']=='jason')){
        echo 'no permision to access this page';
        echo '<h3><a href="http://120.26.88.32/"> to login </a></h3>';
        return;
        }
        ?>

        <div id="logo">
            <img src="fulltech.png" alt="FullTech" />
            <?php
            echo ' | <a target="_blank" href="spec.php"> ver4 spec </a> | ';
            echo '  用戶:'.$_SESSION['user'];
            echo ' <a href="http://120.26.88.32/logout.php"> 登出 </a>';


            ?>
            <br>
        </div><div  id="opt">
            &nbsp;&nbsp;<span style="background-color: lightskyblue">產品</span>
            <input type="checkbox" value="1" checked='checked' name="check" onClick="btnStart()"/>1
            <input type="checkbox" value="2"  checked='checked' name="check" onClick="btnStart()"/>2
            <input type="checkbox" value="3" name="check" onClick="btnStart()"/>3
            <input type="checkbox" value="4" name="check" onClick="btnStart()"/>4
            <input type="checkbox" value="5" name="check" onClick="btnStart()"/>5
            <input type="checkbox" value="5" name="check" onClick="btnStart()"/>6

            &nbsp;&nbsp&nbsp;&nbsp;<span style="background-color: lightskyblue">是否輸入修改</span>
            <input type="radio" value="1" checked='checked' name="checkToEdit" onClick="btnStart()"/>是
            <input type="radio" value="2" name="checkToEdit" onClick="btnStart()"/>否
            &nbsp;&nbsp&nbsp;&nbsp;<span style="background-color: lightskyblue">是否顯示Remark</span>
            <input type="radio" value="1" checked='checked' name="checkShowRemark" onClick="btnStart()"/>是
            <input type="radio" value="2" name="checkShowRemark" onClick="btnStart()"/>否

            <!--<br>-->
            &nbsp;&nbsp;<span style="background-color: lightskyblue">可視行號組</span>
            <input type="radio" value="1" checked='checked' name="checkRowSet" onClick="btnStart()"/>all
<!--            <input type="radio" value="2" name="checkRowSet" onClick="btnStart()"/>業務
            <input type="radio" value="3" name="checkRowSet" onClick="btnStart()"/>模具
            <input type="radio" value="3" name="checkRowSet" onClick="btnStart()"/>各工序
            <input type="radio" value="3" name="checkRowSet" onClick="btnStart()"/>管銷利潤
            <input type="radio" value="3" name="checkRowSet" onClick="btnStart()"/>組裝
            <input type="radio" value="3" name="checkRowSet" onClick="btnStart()"/>總計-->

<!--            <br>
            <input type="radio" value="4" name="checkRowSet" onClick="btnStart()"/>1)材料
            <input type="radio" value="5" name="checkRowSet" onClick="btnStart()"/>2)压铸
            <input type="radio" value="6" name="checkRowSet" onClick="btnStart()"/>3)毛刺处理
            <input type="radio" value="7" name="checkRowSet" onClick="btnStart()"/>4)外观打磨
            <input type="radio" value="8" name="checkRowSet" onClick="btnStart()"/>5)平整度
            <input type="radio" value="9" name="checkRowSet" onClick="btnStart()"/>6)机加工
            <input type="radio" value="10" name="checkRowSet" onClick="btnStart()"/>7)冷喷热烧
            <input type="radio" value="11" name="checkRowSet" onClick="btnStart()"/>8)喷沙抛丸震动
            <input type="radio" value="12" name="checkRowSet" onClick="btnStart()"/>9)皮膜处理
            <input type="radio" value="13" name="checkRowSet" onClick="btnStart()"/>10)粉体液体烤漆丝网印
            <input type="radio" value="14" name="checkRowSet" onClick="btnStart()"/>11)其它特殊
            <input type="radio" value="15" name="checkRowSet" onClick="btnStart()"/>12)气密性测试
            <input type="radio" value="16" name="checkRowSet" onClick="btnStart()"/>13)筛选包装-->

            <!--&nbsp;&nbsp; Show Input<input type="checkbox" name="showInput" value="Car" checked="checked"  onClick="btnStart()" />--> 
        </div>

        <!--<span>顯示格號</span>-->
        <!--<input type="radio" id="showNumNo" checked="checked" name="group1" />否-->
        <!--<input type="radio" id="showNumYes" name="group1" />是-->
        <div id='lang'>

        </div>
        <div id='level1'></div>
        <div id='level2'></div>
        <div id='level3a'></div>
        <div id='level3b'></div>
        <div id='level3c'></div>
        <div id='level3d'></div>
        <div id='level4'></div>
        <div id='inputArea'></div>
        <div id='debugArea'></div>
        <div id='showArea'></div>
        <div id='showArea2'></div>


        <script>
            start();
//      btnStart();


        </script>

    </body>
</html>
