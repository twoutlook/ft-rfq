

function btn材料费() {

    var temp材料規格 = document.getElementById("ddl材料規格").value;
    var val單重 = parseFloat(parseFloat(document.getElementById("txt單重").value).toFixed(2)); //C31
    var val廢料重量 = parseFloat(parseFloat(document.getElementById("txt廢料重量").value).toFixed(2)); //C33

    var val材質規格 = temp材料規格.split("|")[0];             // C29
    var val材料價格 = parseFloat(temp材料規格.split("|")[1]).toFixed(2);// C30
    var val廢料價格 = parseFloat(temp材料規格.split("|")[2]).toFixed(2); // C35
    var val淨重價格 = parseFloat((val材料價格 * val單重).toFixed(2)); // C32

    var val廢料比率 = Math.round(100 * (val廢料重量 / val單重), 0); // C34 


    // 36 料柄流道渣包回收价差损失额 ：(C30-C35)*ROUND(C33;1)

    var val回收差價損失 = (val材料價格 - val廢料價格) * val廢料重量; // C36
    // val回收差價損失=val回收差價損失.toFixed(2);
    //  1-9） 	 压铸熔炼材料氧化损耗(量） 2% 	¥5.48 	¥4.09 		 (C31+C33)*C30*0.02 																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
    var val氧化損耗 = (val單重 + val廢料重量) * val材料價格 * 0.02; // C37
    val氧化損耗 = parseFloat(val氧化損耗.toFixed(2));

    //	 材料费 小计： 	#NAME?	#NAME?		 C32+C36+C37 																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
    var val材料費小計 = val淨重價格 + val回收差價損失 + val氧化損耗;   // C38  
    val材料費小計 = parseFloat(val材料費小計.toFixed(2));
    var str = "";


    c28 = "";
    c29 = val材質規格;
    c30 = getTwoDecimal(val材料價格);
    c31 = getTwoDecimal(val單重);
    c32 = getTwoDecimal(val淨重價格);
    c33 = getTwoDecimal(val廢料重量);
    c34 = val廢料比率;
    c35 = getTwoDecimal(val廢料價格);
    c36 = getTwoDecimal(val回收差價損失);
    c37 = getTwoDecimal(val氧化損耗);
    c38 = getTwoDecimal(val材料費小計);


    str += "<table>";
    str += getA001Tr('28', '*', '1)材料费 ： ', c28, str28);
    str += getA001Tr('29', '1-1）', '材质规格：', c29, str29);
    str += getA001TrNum('30', '1-2）', '材料单价/KG :', "¥" + c30, str30);
    str += getA001TrNum('31', '1-3）', '单重（公斤）：', c31, str31);
    str += getA001TrNum('32', '1-4）', '产品材料费（净重价格）： ', "<b>¥" + c32 + "</b>", str32);
    str += getA001TrNum('33', '1-5）', '料柄流道渣包等废料重量(公斤)：', c33, str33);
    str += getA001TrNum('34', '1-6）', '料柄流道渣包比率 ：', c34 + "%", str34);
    str += getA001TrNum('35', '1-7）', '料柄流道渣包等废料价格/Kg：', "¥" + c35, str35);
    str += getA001TrNum('36', '1-8）', '料柄流道渣包回收价差损失额 ：', "<b>¥" + c36 + "</b>", str36);
    str += getA001TrNum('37', '1-9）', '压铸熔炼材料氧化损耗(量） 2% ', "<b>¥" + c37 + "</b>", str37);
    str += getA001Tr小計('38', '', '<b>材料费 小计： </b>', "<b>¥" + c38 + "</b>", str38);


    str += "</table>";

    document.getElementById("showArea").innerHTML = str;
}

function btn模具费() {
    var val壓鑄模費用 = parseFloat(parseFloat(document.getElementById("txt壓鑄模費用").value).toFixed(2)); //C31
    var val切邊模費用 = parseFloat(parseFloat(document.getElementById("txt切邊模費用").value).toFixed(2)); //C31
    var val加工夾治具費用 = parseFloat(parseFloat(document.getElementById("txt加工夾治具費用").value).toFixed(2)); //C31
    var val烤漆夾治具費用 = parseFloat(parseFloat(document.getElementById("txt烤漆夾治具費用").value).toFixed(2)); //C31

    // 切邊模費用   加工夾治具費用   烤漆夾治具費用
    c19 = val壓鑄模費用;
    c20 = val切邊模費用;
    c21 = val加工夾治具費用;
    c22 = val烤漆夾治具費用;


    c23 = c19 + c20 + c21 + c22;


    var str = "";
    str += "<table>";
    str += getA001TrNum('19', '', '壓鑄模費用：', "¥" + c19, str19);
    str += getA001TrNum('20', '', '切邊模費用：', "¥" + c20, str20);
    str += getA001TrNum('21', '', '加工夾治具費：', "¥" + c21, str21);
    str += getA001TrNum('22', '', '烤漆夾治具費用：', "¥" + c22, str22);
    str += getA001Tr小計('23', '', '模具總價：', "¥" + c23, str23);
    // str += getA001TrNum('19', '', '壓鑄模費用：',  c19, str19);

    str += "</table>";
    document.getElementById("showArea").innerHTML = str;
}

//btn計算3至13
function btn計算9皮膜處理() {
    var temp鹽霧實驗 = document.getElementById("ddl鹽霧實驗").value;
    var val皮膜處理工件表面面積 = parseFloat(parseFloat(document.getElementById("txt皮膜處理工件表面面積").value).toFixed(2)); //C31
  
    var val鹽霧實驗 = temp鹽霧實驗.split("|")[0];            
    var val鹽霧實驗費率 = parseFloat(temp鹽霧實驗.split("|")[1]).toFixed(2);
    
    c79=val鹽霧實驗;
    c80=val皮膜處理工件表面面積;
    c81=val鹽霧實驗費率;
    c82=getTwoDecimal(c80*c81);
    /* global c82 */
    if (isNaN(c82)){
       c82= getTwoDecimal(0);
    }
    
//     78	* 	9)皮膜处理 &费率 																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
// 79	9-1) 	耐腐蝕鹽霧實驗時間要求： 	72小時 	96小時 	請下拉選擇鹽霧時間 																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
// 80	9-2） 	工件表面面积 (算单面） DM2： 	1 	1 	估價人員輸入表面面積dm2 																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
// 81	9-3） 	加工费率/H： 	0.525	0.7	由sheet2自動帶出																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
// 82		小计： 	#NAME?	#NAME?																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																											

    var str = "";
    str += getA001TrNum('78', '*', ' 9)皮膜处理 &费率：', "", str78);
    str += getA001TrNum('79', '9-1）', '&nbsp;&nbsp;&nbsp;耐腐蝕鹽霧實驗時間要求：  ：', c79, str79);
    str += getA001TrNum('80', '9-2）', '&nbsp;&nbsp;&nbsp;工件表面面积 (算单面） DM2：', "¥" + c80, str80);
    str += getA001TrNum('81', '9-2）', '&nbsp;&nbsp;&nbsp;加工费率/H： ', "¥" + c81, str81);
    str += getA001Tr小計('82', '', '小計：', "¥" + c82, str82);
    
    return str;
}

function btn計算10表面要求() {

    
    
    var temp表面要求 = document.getElementById("ddl表面要求").value;
//   $biz->showInputWithLabel('工件表面積','txt粉體烤漆液體烤漆絲網印工件表面積','0');
// $biz->showInputWithLabel('良品率','txt粉體烤漆液體烤漆絲網印工件良品率','0');
// $biz->showInputWithLabel('產品難度系數','txt粉體烤漆液體烤漆絲網印產品難度系數','0');
    var val粉體烤漆液體烤漆絲網印工件表面積 = parseFloat(parseFloat(document.getElementById("txt粉體烤漆液體烤漆絲網印工件表面積").value).toFixed(2)); //C31
    var val粉體烤漆液體烤漆絲網印工件良品率 = parseFloat(parseFloat(document.getElementById("txt粉體烤漆液體烤漆絲網印工件良品率").value).toFixed(2)); //C31
    var val粉體烤漆液體烤漆絲網印產品難度系數 = parseFloat(parseFloat(document.getElementById("txt粉體烤漆液體烤漆絲網印產品難度系數").value).toFixed(2)); //C31
  
    var val表面要求= temp表面要求.split("|")[0];            
    var val表面要求費率 = parseFloat(temp表面要求.split("|")[1]).toFixed(2);
    var val表面要求烤漆材料 = parseFloat(temp表面要求.split("|")[1]).toFixed(2);
    
    
    c85=val表面要求;
    c86=val粉體烤漆液體烤漆絲網印工件表面積;
    c87=val表面要求烤漆材料;
    c88=val表面要求費率;
    c89=val粉體烤漆液體烤漆絲網印工件良品率/100;
    c90=val粉體烤漆液體烤漆絲網印產品難度系數;
    
    
    

    
//     84	* 	10)粉体烤漆.液体烤漆.丝网印：  																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
// 85	10-1） 	表面要求	电泳	电泳																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																											
// 86	10-2） 	工件表面积(算需喷漆面积）DM2： 	1 	1 	估價人員輸入噴漆面積dm2																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
// 87	10-3） 	漆材料费/dm： 	¥- 	¥- 	由sheet2自動帶出																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
// 88	10-4） 	烤漆设备+人工費率/dm： 	¥- 	¥- 	由sheet2自動帶出																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
// 89	10-5） 	良品率： 	93%	93%	估價人員輸入估計良品率																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
// 90	10-6） 	产品难度系数  K 值：K = 0.8-1.5 	1.0 	1.0 	估價人員輸入難度係數																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
// 91		小计： 	#NAME?	#NAME?																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																											
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										

    var str = "";
    str += getA001TrNum('84', '*', '10)粉体烤漆.液体烤漆.丝网印：', "", str84);
    str += getA001TrNum('85', '10-1）', '&nbsp;&nbsp;&nbsp;表面要求：', c85, str85);
    str += getA001TrNum('86', '10-2）', '&nbsp;&nbsp;&nbsp;工件表面积(算需喷漆面积）DM2：', c86, str86);
    str += getA001TrNum('87', '10-3）', '&nbsp;&nbsp;&nbsp;漆材料费/dm：', c87, str87);
    str += getA001TrNum('88', '10-4）', '&nbsp;&nbsp;&nbsp;烤漆设备+人工費率/dm： ', c88, str88);
    str += getA001TrNum('89', '10-5）', '&nbsp;&nbsp;&nbsp;良品率： ', c89*100+"%", str89);
    str += getA001TrNum('90', '10-6）', '&nbsp;&nbsp;&nbsp;产品难度系数 ', c90, str90);
    str += getA001Tr小計('91', '', '小計：', "¥" + c91, str91);
    
    return str;
}

function btn計算組裝費() {

    var val其他五金配件 = parseFloat(parseFloat(document.getElementById("txt其他五金配件").value).toFixed(2)); 
    var val其他五金配件組裝費 = parseFloat(parseFloat(document.getElementById("txt其他五金配件組裝費").value).toFixed(2)); 
    c107=val其他五金配件;                                                    //txt其他五金配件組裝費
    c108=val其他五金配件組裝費;
    c109=c107+c108;

    var str = "";
    str += getA001TrNum('107', '*', '其他五金配件：', "¥" + c107, str107);
    str += getA001TrNum('108', '*', '组装费：', "¥" + c108, str108);
    str += getA001Tr小計('109', '', '组装  小计：', "¥" + c109, str109);
    return str;
}
function btn計算總計() {

    
    var str = "";
    str += getA001Tr小計('110', '', '	总计（未税）', "¥" + c110, str110);
    str += getA001TrNum('111', '*', 'VAT 税金：17% ', "¥" + c111, str111);
    str += getA001TrNum('112', '*', '组海外运输费用装费：', "¥" + c112, str112);
    str += getA001Tr小計('113', '', '总计（含税）：', "¥" + c113, str113);
    str += getA001TrNum('114', '*', '总计（美元）：', "" + c114, str114);
    return str;
}


function btn計算3至13() {
    var val毛刺處理費工時 = parseFloat(parseFloat(document.getElementById("txt毛刺處理費工時").value).toFixed(2)); //C31
    c50 = getTwoDecimal(val毛刺處理費工時);
    c51 == getTwoDecimal(c51);
    c52 = getTwoDecimal((c50 / 60) * c51);

    var val外觀打磨費工時 = parseFloat(parseFloat(document.getElementById("txt外觀打磨費工時").value).toFixed(2)); //C31
    var val外觀打磨費良品率 = parseFloat(parseFloat(document.getElementById("txt外觀打磨費良品率").value).toFixed(2)); //C31

    // c54 = getTwoDecimal(val外觀打磨費工時);

    //(D54/60)*D55
    c54 = getTwoDecimal(val外觀打磨費工時);

    c57 = val外觀打磨費良品率 / 100;
    c57 = getTwoDecimal(c57);
    c56 = getTwoDecimal((c54 / 60) * c55);
//  D56*(1+(1-D57))
    c59 = getTwoDecimal(c56 * (1 + (1 - c57)));

    var val平整度整形費工時 = parseFloat(parseFloat(document.getElementById("txt平整度整形費工時").value).toFixed(2)); //C31
    c61 = val平整度整形費工時;
    //公式計算（【61】 / 60) *【62】）
    c63= (c61 / 60 ) * c62;
    c64= (c61 / 60 ) * c62;
    
    var val機加工工時 = parseFloat(parseFloat(document.getElementById("txt機加工工時").value).toFixed(2)); 
    var val機加工良品率 = parseFloat(parseFloat(document.getElementById("txt機加工良品率").value).toFixed(2)); 
   
    c66=val機加工工時;
    c68=val機加工良品率/100;
    // ((【66】/60 ) *【67】) * ( 1 + (1-【68】))
    c69=((c66/60)*c67)*(1+(1-c68));
    c69=getTwoDecimal(c69);
    
    var val冷噴熱燒毛刺工時 = parseFloat(parseFloat(document.getElementById("txt冷噴熱燒毛刺工時").value).toFixed(2)); 
    c71=val冷噴熱燒毛刺工時;
// 公式計算（【71】 / 60） *【72】
    c73=getTwoDecimal((c71/60)*c72);
    
    var val噴沙抛丸震動研磨工時 = parseFloat(parseFloat(document.getElementById("txt噴沙抛丸震動研磨工時").value).toFixed(2)); 
    c75=val噴沙抛丸震動研磨工時;
    c77=getTwoDecimal((c75/60)*c76);
    
    
    
    
    var str = "";
    str += "<table>";
    str += getA001TrNum('49', '*', ' 3)毛刺处理费（含粗磨）：', "", str49);
    str += getA001TrNum('50', '3-1）', '&nbsp;&nbsp;&nbsp;工时（分）/只  ：', c50, str50);
    str += getA001TrNum('51', '3-2）', '&nbsp;&nbsp;&nbsp;人工费率/H：', "¥" + c51, str51);
    str += getA001Tr小計('52', '', '小計：', "¥" + c52, str52);
    str += getA001TrNum('53', '*', ' 4)外观打磨费（入/溢料口, 分模线<br>&nbsp;&nbsp;&nbsp;及一般外观瑕疵等部位做打磨）', "", str53);


    str += getA001TrNum('54', '4-1）', '&nbsp;&nbsp;&nbsp;工时（分）/只  ：', c54, str54);
    str += getA001TrNum('55', '4-2）', '&nbsp;&nbsp;&nbsp;人工费率/H：  ：', "¥" + c55, str55);
    str += getA001TrNum('56', '4-3）', '&nbsp;&nbsp;&nbsp;打磨費：', "¥" + c56, str56);

    str += getA001TrNum('57', '4-4）', '&nbsp;&nbsp;&nbsp;良品率：', (100 * c57) + "%", str57);
    str += getA001Tr小計('59', '', '小計：', "¥" + c59, str59);

    str += getA001TrNum('60', '*', ' 5)平整度 整形费', c60, str60);
    str += getA001TrNum('61', '5-1）', '&nbsp;&nbsp;&nbsp;工时 分/只：', c61, str61);
    str += getA001TrNum('62', '5-2）', '&nbsp;&nbsp;&nbsp;人工费率/H：', "¥" +  c62, str62);
    str += getA001TrNum('63', '5-3）', '&nbsp;&nbsp;&nbsp;人工费/只', "¥" +  c63, str63);
    str += getA001Tr小計('64', '', '小计：', "¥" +  c64, str64);
    
    str += getA001TrNum('65', '*', ' 6)机加工', "", str65);
    str += getA001TrNum('66', '6-1）', '&nbsp;&nbsp;&nbsp;工时（分）/只  ：', c66, str66);
    str += getA001TrNum('67', '6-2）', '&nbsp;&nbsp;&nbsp;加工费率/H：  ：', "¥" + c67, str67);
    str += getA001TrNum('68', '6-3）', '&nbsp;&nbsp;&nbsp;良品率：', (100 * c68) + "%", str68);
    str += getA001Tr小計('69', '', '小計：', "¥" + c69, str69);

    str += getA001TrNum('70', '*', ' 7)冷喷.热烧毛刺 &  &费率/分：', "", str70);
    str += getA001TrNum('71', '7-1）', '&nbsp;&nbsp;&nbsp;工时（分）/只  ：', c71, str71);
    str += getA001TrNum('72', '7-2）', '&nbsp;&nbsp;&nbsp;加工费率/H：  ：', "¥" + c72, str72);
    str += getA001Tr小計('73', '', '小計：', "¥" + c73, str73);

    str += getA001TrNum('74', '*', ' 8)喷沙.抛丸.震动研磨 &费率', "", str74);
    str += getA001TrNum('75', '8-1）', '&nbsp;&nbsp;&nbsp;工时（分）/只  ：', c75, str75);
    str += getA001TrNum('76', '8-2）', '&nbsp;&nbsp;&nbsp;加工费率/H：  ：', "¥" + c76, str76);
    str += getA001Tr小計('77', '', '小計：', "¥" + c77, str77);

    str+=btn計算9皮膜處理();
    str+=btn計算10表面要求();

//Sub-Total 合计：
    c105=parseFloat(c38)+parseFloat(c48)+parseFloat(c52)+parseFloat(c59)+parseFloat(c64)+parseFloat(c69);
    c105+=parseFloat(c73)+parseFloat(c77)+parseFloat(c82)+parseFloat(c91)+parseFloat(c95)+parseFloat(c99)+parseFloat(c104);
    str += getA001Tr小計('105', '', 'Sub-Total 合计', "¥" + c105, str105);

// D105*0.15
    c106=c105*0.15;
    str += getA001Tr小計('106', '', '管销（Overhead 10%）<br>+（利润profit5%） <br>= 15% ', "¥" + c106, str106);



//     var val其他五金配件 = parseFloat(parseFloat(document.getElementById("txt其他五金配件").value).toFixed(2)); 
//     var val其他五金配件組裝費 = parseFloat(parseFloat(document.getElementById("txt其他五金配件組裝費").value).toFixed(2)); 
//     c107=val其他五金配件;                                                    //txt其他五金配件組裝費
//     c108=val其他五金配件組裝費;
//     c109=c107+c108;

// str += getA001TrNum('107', '*', '其他五金配件：', "¥" + c107, str107);
// str += getA001TrNum('108', '*', '组装费：', "¥" + c108, str108);
// str += getA001Tr小計('109', '', '组装  小计：', "¥" + c109, str109);

    str+=btn計算組裝費();

    str+=btn計算總計();
//


    str += "</table>";
    document.getElementById("showArea").innerHTML = str;
}

function btn壓鑄費() {
    btn模具费();
    btn材料费();
    var ddl壓鑄機台 = document.getElementById("ddl壓鑄機台").value;
    var val適用機型 = ddl壓鑄機台.split("|")[0];
    var val壓鑄機台費率 = parseFloat(ddl壓鑄機台.split("|")[1]);
    var val人工費率 = parseFloat(parseFloat(ddl壓鑄機台.split("|")[2]).toFixed(1));
    var val熔炼费 = ddl壓鑄機台.split("|")[3];
    val熔炼费 = get小數點3位(parseFloat(val熔炼费));


    var val工時 = parseFloat(parseFloat(document.getElementById("txt工時").value).toFixed(2)); //C31
    var val良品率 = parseFloat(parseFloat(document.getElementById("txt良品率").value).toFixed(2)); //C33
    var val模穴數 = Math.round(document.getElementById("txt模穴數").value); //C16
    c16 = val模穴數

    c39 = "";
    c40 = val適用機型;
    c41 = val壓鑄機台費率;
    c42 = val工時;
    c43 = Math.round(60 / c42);
    c44 = getTwoDecimal(c41 / c43);
    c45 = getTwoDecimal(val人工費率 / c43);
    c46 = getTwoDecimal(val熔炼费 * c31);
    c47 = val良品率 / 100;
    c48 = 1 + (1 - c47);//(【46】+【45】+【44】)*(1+(1-【47】))/【16】
    sum444546 = parseFloat(c44) + parseFloat(c45) + parseFloat(c46);

    c48 = sum444546 * c48;
    c48 = c48 / parseFloat(c16);
    c48 = getTwoDecimal(c48);



    var str = "";
    str += "<table>";
    str += getA001TrNum('16', '', '模穴數：', c16, str16);
    str += getA001TrNum('31', '1-3）', '单重（公斤）：', c31, str31);

    str += getA001Tr('39', '*', '2)压铸费(含切边）：', c39, str39);
    str += getA001Tr('40', '2-1）', '适用机型：', c40, str40);
    str += getA001TrNum('41', '2-2）', '设备费率/H：:', c41, str41);
    str += getA001TrNum('42', '2-3）', '工时（分）/只 ：', c42, str42);
    str += getA001TrNum('43', '2-4）', '产能 只/H ： ', c43, str43);
    str += getA001TrNum('44', '2-5）', '设备费/只：', c44, str44);
    str += getA001TrNum('45', '2-6）', '人工费/只：', c45, str45);
    str += getA001TrNum('46', '2-7）', '熔炼费（能耗）：', c46, str46);
    str += getA001TrNum('47', '2-8）', '良品率：', c47 * 100 + "%", str47);
    str += getA001Tr小計('48', '', '<b>小计： </b>', c48, str48);

    str += "</table>";

    document.getElementById("showArea").innerHTML = str;
}

function btnHideInput() {
    // alert(" to hide")
    
      $("#divInput").hide();
}
function btnShowInput() {

    //   alert(" to show")
      $("#divInput").show();
}