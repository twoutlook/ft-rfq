var sys顯示模式=0;
function getDdl壓鑄機台() {
    var jsonStr='[{"A": "鋁-3000T ","B": 1200,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-2500T ","B": 1100,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-2000T ","B": 1000,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-1600T ","B": 800,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-1250T ","B": 400,"C": 92.045454545455,"D": 0.58333333333333}, {"A": "鋁-900T ","B": 360,"C": 71.590909090909,"D": 0.58333333333333}, {"A": "鋁-800T ","B": 360,"C": 61.363636363636,"D": 0.58333333333333}, {"A": "鋁-630T/650T ","B": 330,"C": 56.25,"D": 0.58333333333333}, {"A": "鋁-550T/530T ","B": 300,"C": 56.25,"D": 0.58333333333333}, {"A": "鋁-400T ","B": 285,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-350T/340T ","B": 285,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-250T/280T ","B": 265,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-200T ","B": 250,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-150T/160T ","B": 240,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-125T ","B": 240,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋅-500T ","B": 310,"C": 33.75,"D": 0.3}, {"A": "鋅-400T ","B": 290,"C": 33.75,"D": 0.3}, {"A": "鋅-300T ","B": 280,"C": 33.75,"D": 0.3}, {"A": "鋅-250T ","B": 270,"C": 33.75,"D": 0.3}, {"A": "鋅-200T/185T ","B": 250,"C": 33.75,"D": 0.3}, {"A": "鋅-150T ","B": 240,"C": 33.75,"D": 0.3}, {"A": "鋅-80T/100T/120T ","B": 230,"C": 33.75,"D": 0.3}, {"A": "鋅-50T/60T ","B": 200,"C": 25.3125,"D": 0.3}, {"A": "鋅-30T/25T ","B": 180,"C": 16.875,"D": 0.3}, {"A": "鋅-15T/20T ","B": 100,"C": 16.875,"D": 0.3}, {"A": "鋅-10T ","B": 80,"C": 11.25225,"D": 0.3}, {"A": "鋅-快速机/4轴机 ","B": 120,"C": 11.25225,"D": 0.3}, {"A": "鎂-630T/660T ","B": 600,"C": 112.5,"D": 1}, {"A": "鎂-530T ","B": 500,"C": 112.5,"D": 1}, {"A": "鎂-340T/400T ","B": 450,"C": 112.5,"D": 1}, {"A": "鎂-150T ","B": 500,"C": 101.25,"D": 1}]';
    var jsonObj = $.parseJSON(jsonStr);
    var str="";
    str+='<select id="ddl2壓鑄機台">';
    str+='<option value="===">===選擇壓鑄機台===</option>';
    for (var i=0;i<jsonObj.length;i++){
       temp=jsonObj[i]['A']+'|'+jsonObj[i]['B']+'|'+jsonObj[i]['C']+'|'+jsonObj[i]['D'];
       str+= '<option value="'+temp+'">'+jsonObj[i]['A']+'</option>';
    }
    str+="</select>";
    return str;
}
function getDdl材料規格() {
    var jsonStr='[{"A": "A356 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A360 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A380 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A413 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ADC12 ","B": "12.820512820513","C": "10.820512820513"}, {"A": "AlSi10Mg ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ZINC-2 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-3 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-5 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-8 ","B": "14.957264957265","C": "11.957264957265"}]';
    var jsonObj = $.parseJSON(jsonStr);
    var str="";
    str+='<select id="ddl2材料規格">';
    str+='<option value="===">===選擇材質規格===</option>';
    for (var i=0;i<jsonObj.length;i++){
        temp=jsonObj[i]['A']+'|'+jsonObj[i]['B']+'|'+jsonObj[i]['C'];
        str+= '<option value="'+temp+'">'+jsonObj[i]['A']+'</option>';
    }
    str+="</select>";
    return str;
}

         //getDdlSelectId



// 鹽霧實驗 	費率/dm費率/dm
// 24小時 	¥0.35
// 48小時 	¥0.42
// 72小時 	¥0.53
// 96小時 	¥0.70
function getDdl鹽霧實驗(){
  var str="";
  str+='<select id="ddl2鹽霧實驗">';
  str+='<option value="===">===選擇鹽霧實驗===</option>';
  str+='<option value="'+'24小時|0.35'+'">'+'24小時'+'</option>';
  str+='<option value="'+'48小時|0.42'+'">'+'48小時'+'</option>';
  str+='<option value="'+'72小時|0.53'+'">'+'72小時'+'</option>';
  str+='<option value="'+'96小時|0.70'+'">'+'96小時'+'</option>';
  str+="</select>";
  return str;
}

//[傳統][CNC],費率分別設為50和72
function getDdl機加工(){
  var str="";
  str+='<select id="ddl2機加工">';
  str+='<option value="===">===選擇機加工===</option>';
  str+='<option value="'+'傳統機加工|50.00'+'">'+'傳統機加工'+'</option>';
  str+='<option value="'+'CNC機加工|72.00'+'">'+'CNC機加工'+'</option>';

  str+="</select>";
  return str;
}

//噴沙抛丸震動
//噴沙抛丸震動的費率分別為120,80,100。
function getDdl噴沙抛丸震動(){
  var str="";
  str+='<select id="ddl2噴沙抛丸震動">';
  str+='<option value="===">===選擇噴沙抛丸震動===</option>';
  str+='<option value="'+'噴沙|120.00'+'">'+'噴沙'+'</option>';
str+='<option value="'+'抛丸|80.00'+'">'+'抛丸'+'</option>';
str+='<option value="'+'震動|100.00'+'">'+'震動'+'</option>';

  str+="</select>";
  return str;
}





function getDdl語言(){
  var str="";
  str+='<select id="ddl2語言" onchange= "onChangeX()">';
  str+='<option value=0>繁體中文</option>';
  str+='<option value=1>简体中文</option>';
  str+="</select>";
  return str;
}

function getDdl顯示模式(){
  var str="";
  str+='<select id="ddl2顯示模式" onchange= "onChange顯示模式()">';
  str+='<option value=0>正常顯示</option>';
  str+='<option value=1>實際數據</option>';
  str+="</select>";
  return str;
}
function onChange顯示模式(){
  sys顯示模式=document.getElementById("ddl2顯示模式").value
}


function getDdl按鈕(){
  var str="";
  str+='<select id="ddl2按鈕" onchange= "onChangeX()">';
  str+='<option value=0>顯示行號</option>';
  str+='<option value=1>不顯示行號</option>';
  str+="</select>";
  return str;
}
function getDdl品名數(){
  var str="";
  str+='<select id="ddl2品名數"  onchange= "onChangeX()">';
  for (var i=1;i<=submitCnt;i++){
      str+='<option value='+i+'>'+i+'</option>';
  }

  str+="</select>";
  return str;
}
// 表面要求 	費率/dm費率/dm 	烤漆材料/dm烤漆材料/dm
// 液體烤漆-A+級 	¥- 	¥-
// 液體烤漆-A 級 	¥- 	¥-
// 粉體烤漆-B 級 	¥- 	¥-
// 液體烤漆-A+級 	¥- 	¥-
// 液體烤漆-A 級 	¥- 	¥-
// 液體烤漆-B 級 	¥- 	¥-
// 滾鍍-A 級 	¥- 	¥-
// 滾鍍-B 級 	¥- 	¥-
// 掛鍍-A 級 	¥- 	¥-
// 掛鍍-B 級 	¥- 	¥-
// 电泳 	¥- 	¥-
function getDdl表面要求(){
  var str="";
  str+='<select id="ddl2表面要求"  onchange= "onChangeX()">';
  str+='<option value="===">===表面要求===</option>';
  // str+='<option value="'+'液體烤漆-A+級|0.99|0.77'+'">'+'液體烤漆-A+級'+'</option>';
  // str+='<option value="'+'液體烤漆-A 級|0.99|0.77'+'">'+'液體烤漆-A 級'+'</option>';
  // str+='<option value="'+'粉體烤漆-B 級|0.99|0.77'+'">'+'粉體烤漆-B 級'+'</option>';
  // str+='<option value="'+'液體烤漆-A+級|0.99|0.77'+'">'+'液體烤漆-A+級'+'</option>';
  // str+='<option value="'+'液體烤漆-A 級|0.99|0.77'+'">'+'液體烤漆-A 級'+'</option>';
  // str+='<option value="'+'液體烤漆-B 級|0.99|0.77'+'">'+'液體烤漆-B 級'+'</option>';
  // str+='<option value="'+'滾鍍-A 級|0.99|0.77'+'">'+'滾鍍-A 級'+'</option>';
  // str+='<option value="'+'滾鍍-B 級|0.99|0.77'+'">'+'滾鍍-B 級'+'</option>';
  // str+='<option value="'+'掛鍍-A 級|0.99|0.77'+'">'+'掛鍍-A 級'+'</option>';
  // str+='<option value="'+'掛鍍-B 級|0.99|0.77'+'">'+'掛鍍-B 級'+'</option>';
  // str+='<option value="'+'电泳|0.99|0.77'+'">'+'电泳'+'</option>';
  str+='<option value="'+'粉體烤漆-A+級|0.00|0.00'+'">'+'粉體烤漆-A+級'+'</option>';
  str+='<option value="'+'粉體烤漆-A 級|0.00|0.00'+'">'+'粉體烤漆-A 級'+'</option>';
  str+='<option value="'+'粉體烤漆-B 級|0.00|0.00'+'">'+'粉體烤漆-B 級'+'</option>';
  str+='<option value="'+'液體烤漆-A+級|0.00|0.00'+'">'+'液體烤漆-A+級'+'</option>';
  str+='<option value="'+'液體烤漆-A 級|0.00|0.00'+'">'+'液體烤漆-A 級'+'</option>';
  str+='<option value="'+'液體烤漆-B 級|0.00|0.00'+'">'+'液體烤漆-B 級'+'</option>';
  str+='<option value="'+'掛鍍-A+級|0.00|0.00'+'">'+'掛鍍-A+級'+'</option>';
  str+='<option value="'+'掛鍍-A 級|0.00|0.00'+'">'+'掛鍍-A 級'+'</option>';
  str+='<option value="'+'掛鍍-B 級|0.00|0.00'+'">'+'掛鍍-B 級'+'</option>';
  str+='<option value="'+'滾鍍-A 級|0.00|0.00'+'">'+'滾鍍-A 級'+'</option>';
  str+='<option value="'+'滾鍍-B 級|0.00|0.00'+'">'+'滾鍍-B 級'+'</option>';
  str+='<option value="'+'电泳|0.00|0.00'+'">'+'电泳'+'</option>';
  str+='<option value="'+'陽極氧化|0.00|0.00'+'">'+'陽極氧化'+'</option>';
  str+="</select>";
  return str;
}
function onChange表面要求(x,i){
    var val=document.getElementById("ddl表面要求"+x).value;
    
    alert(val);
}

function onChange表面要求V3(x){
    var val=document.getElementById("ddl表面要求"+x).value;
    
    dataStrGrp[x][12]=val.split("|")[0];
    dataStrGrp[x][85]=val.split("|")[0];
    
   // alert(val);
    showSpan(x,12, dataStrGrp[x][12]);
    showSpan(x,85, dataStrGrp[x][85]);
    
}
//document.getElementById('ddl表面要求').onclick = function(){
//  // 你的代码
//    var val=document.getElementById("ddl表面要求").value;
//   alert("onChange表面要求xxx "+" "+val);
//};
function getDdlX表面要求V2(x,i){
  var str="";
//  str+='<select id="ddl表面要求"  onchange= "onChange表面要求('+x+')">';
  str+='<select id="ddl表面要求'+x+'"  onchange= "onChange表面要求('+x+','+i+')">';
  str+='<option value="===">===表面要求===</option>';
  str+='<option value="'+'粉體烤漆-A+級|0.00|0.00'+'">'+'粉體烤漆-A+級'+'</option>';
  str+='<option value="'+'粉體烤漆-A 級|0.00|0.00'+'">'+'粉體烤漆-A 級'+'</option>';
  str+='<option value="'+'粉體烤漆-B 級|0.00|0.00'+'">'+'粉體烤漆-B 級'+'</option>';
  str+='<option value="'+'液體烤漆-A+級|0.00|0.00'+'">'+'液體烤漆-A+級'+'</option>';
  str+='<option value="'+'液體烤漆-A 級|0.00|0.00'+'">'+'液體烤漆-A 級'+'</option>';
  str+='<option value="'+'液體烤漆-B 級|0.00|0.00'+'">'+'液體烤漆-B 級'+'</option>';
  str+='<option value="'+'掛鍍-A+級|0.00|0.00'+'">'+'掛鍍-A+級'+'</option>';
  str+='<option value="'+'掛鍍-A 級|0.00|0.00'+'">'+'掛鍍-A 級'+'</option>';
  str+='<option value="'+'掛鍍-B 級|0.00|0.00'+'">'+'掛鍍-B 級'+'</option>';
  str+='<option value="'+'滾鍍-A 級|0.00|0.00'+'">'+'滾鍍-A 級'+'</option>';
  str+='<option value="'+'滾鍍-B 級|0.00|0.00'+'">'+'滾鍍-B 級'+'</option>';
  str+='<option value="'+'电泳|0.00|0.00'+'">'+'电泳'+'</option>';
  str+='<option value="'+'陽極氧化|0.00|0.00'+'">'+'陽極氧化'+'</option>';
  str+="</select>";
  return str;
}
function getDdlX表面要求V3(x){
  var str="";
//  str+='<select id="ddl表面要求"  onchange= "onChange表面要求('+x+')">';
  str+='<select id="ddl表面要求'+x+'"  onchange= "onChange表面要求V3('+x+')">';
  str+='<option value="===">===表面要求===</option>';
  str+='<option value="'+'粉體烤漆-A+級|0.00|0.00'+'">'+'粉體烤漆-A+級'+'</option>';
  str+='<option value="'+'粉體烤漆-A 級|0.00|0.00'+'">'+'粉體烤漆-A 級'+'</option>';
  str+='<option value="'+'粉體烤漆-B 級|0.00|0.00'+'">'+'粉體烤漆-B 級'+'</option>';
  str+='<option value="'+'液體烤漆-A+級|0.00|0.00'+'">'+'液體烤漆-A+級'+'</option>';
  str+='<option value="'+'液體烤漆-A 級|0.00|0.00'+'">'+'液體烤漆-A 級'+'</option>';
  str+='<option value="'+'液體烤漆-B 級|0.00|0.00'+'">'+'液體烤漆-B 級'+'</option>';
  str+='<option value="'+'掛鍍-A+級|0.00|0.00'+'">'+'掛鍍-A+級'+'</option>';
  str+='<option value="'+'掛鍍-A 級|0.00|0.00'+'">'+'掛鍍-A 級'+'</option>';
  str+='<option value="'+'掛鍍-B 級|0.00|0.00'+'">'+'掛鍍-B 級'+'</option>';
  str+='<option value="'+'滾鍍-A 級|0.00|0.00'+'">'+'滾鍍-A 級'+'</option>';
  str+='<option value="'+'滾鍍-B 級|0.00|0.00'+'">'+'滾鍍-B 級'+'</option>';
  str+='<option value="'+'电泳|0.00|0.00'+'">'+'电泳'+'</option>';
  str+='<option value="'+'陽極氧化|0.00|0.00'+'">'+'陽極氧化'+'</option>';
  str+="</select>";
  return str;
}


function getDdlX表面要求(x,i){
  var str="";
//  str+='<select id="ddl表面要求"  onchange= "onChange表面要求('+x+')">';
  str+='<select id="ddl表面要求"  onchange= "onChange表面要求('+x+','+i+')">';
  str+='<option value="===">===表面要求===</option>';
  str+='<option value="'+'粉體烤漆-A+級|0.00|0.00'+'">'+'粉體烤漆-A+級'+'</option>';
  str+='<option value="'+'粉體烤漆-A 級|0.00|0.00'+'">'+'粉體烤漆-A 級'+'</option>';
  str+='<option value="'+'粉體烤漆-B 級|0.00|0.00'+'">'+'粉體烤漆-B 級'+'</option>';
  str+='<option value="'+'液體烤漆-A+級|0.00|0.00'+'">'+'液體烤漆-A+級'+'</option>';
  str+='<option value="'+'液體烤漆-A 級|0.00|0.00'+'">'+'液體烤漆-A 級'+'</option>';
  str+='<option value="'+'液體烤漆-B 級|0.00|0.00'+'">'+'液體烤漆-B 級'+'</option>';
  str+='<option value="'+'掛鍍-A+級|0.00|0.00'+'">'+'掛鍍-A+級'+'</option>';
  str+='<option value="'+'掛鍍-A 級|0.00|0.00'+'">'+'掛鍍-A 級'+'</option>';
  str+='<option value="'+'掛鍍-B 級|0.00|0.00'+'">'+'掛鍍-B 級'+'</option>';
  str+='<option value="'+'滾鍍-A 級|0.00|0.00'+'">'+'滾鍍-A 級'+'</option>';
  str+='<option value="'+'滾鍍-B 級|0.00|0.00'+'">'+'滾鍍-B 級'+'</option>';
  str+='<option value="'+'电泳|0.00|0.00'+'">'+'电泳'+'</option>';
  str+='<option value="'+'陽極氧化|0.00|0.00'+'">'+'陽極氧化'+'</option>';
  str+="</select>";
  return str;
}