setIntArr = [11, 16, 17, 31, 42, 33, 50, 54, 61, 66, 166, 71, 75, 93, 97, 101];
setYieldArr = [47, 57, 68, 168, 89];
setRMBArr = [19, 20, 21, 22, 23, 30, 32, 35, 36, 37, 38, 41, 44, 45, 46, 48, 51, 52, 56, 59, 63, 64, 67, 167, 69, 73, 76, 77, 81, 82, 87, 88, 91, 94, 95, 98, 99, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 132, 133];
setUSDArr = [24, 114];
setTextArr = [6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18, 29, 40, 92];
setPercentArr = [34];
setDecimal1Arr = [43, 90, 160];
setDecimal2Arr = [80, 86];
setRateArr = [131];
//-------------------------------------------------------------------
var isSales = false;
var viewArr = new Array(20);
viewArr[0] = [3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 166, 167, 168, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 160, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 131, 106, 107, 108, 109, 110, 111, 112, 113, 114];
viewArr[1] = [3, 4, 6, 7, 8, 9, 10, 11, 12, 13];
viewArr[2] = [7, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
viewArr[3] = [7, 38, 48, 52, 59, 64, 69, 73, 77, 82, 91, 95, 99, 104, 105];
viewArr[4] = [7, 105, 131, 106];
viewArr[5] = [7, 107, 108, 109];
viewArr[6] = [7, 23, 24, 105, 106, 110, 111, 112, 113, 114];
viewArr材料費 = [7, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
viewArr[7] = [7, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];//材料費
viewArr壓鑄費 = [7, 39, 40, 41, 132, 133, 42, 43, 44, 45, 31, 46, 47, 48];
viewArr[8] = [7, 39, 40, 41, 132, 133, 42, 43, 44, 45, 31, 46, 16, 47, 48];
viewArr[9] = [7, 49, 50, 51, 52];
viewArr[10] = [7, 53, 54, 55, 56, 57, 59];
viewArr[11] = [7, 60, 61, 62, 63, 64];
viewArr[12] = [7, 65, 66, 67, 68, 166, 167, 168, 69];
viewArr[13] = [7, 70, 71, 72, 73];
viewArr[14] = [7, 74, 75, 76, 77];
viewArr[15] = [7, 78, 79, 80, 81, 160, 82];
viewArr[16] = [7, 84, 85, 86, 87, 88, 89, 90, 91];
viewArr[17] = [7, 92, 93, 94, 95];
viewArr[18] = [7, 96, 97, 98, 99];
viewArr[19] = [7, 100, 101, 102, 103, 104];

var arrInputOverheadProfit = [131];
var arrInputYield = [47, 57, 68, 168, 89];
var arrInputRMB = [19, 20, 21, 22, 81, 94, 98, 103, 107, 108, 112];
var arrInputInt = [11, 16, 17, 31, 42, 33, 50, 54, 61, 66, 166, 71, 75, 93, 97, 101];
var arrInputText = [7, 8, 9, 13, 18, 92];
var arrInputFloat = [80, 86, 87, 88, 90, 160];


var arrComputeRMB = [23, 38, 48, 52, 59, 64, 69, 73, 77, 82, 91, 95, 99, 104, 105, 131, 106, 109, 110];
var arrComputeUSD = [24, 114];

var sum模具Arr = [19, 20, 21, 22];


//showArr[38] = [10, 11, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
var sum077Arr = [75];

var sum各工序Arr = [38, 48, 52, 59, 64, 69, 73, 77, 82, 91, 95, 99, 104];

var sum組裝Arr = [107, 108];
var sum合計Arr = [105, 106, 109];


var rateUsRmb = 6.35;

function getSumByArr(item, arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += dataGrp[item][arr[i]];
    }
    return sum;
}
function getDataGrpArray和(item, arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseFloat(dataGrp[item][arr[i]]);
    }
    return sum;
}
function showSpan(item, row, msg) {
    var area = "item" + item + "row" + row;
    var a = "#" + area;
//     $(a).hide(100).show(300);
//    $(a).show(500);
//    console.log(a);
    document.getElementById(area).innerHTML = msg;
}

function getDdlSelectId(id, item) {
    return '<select id="ddl' + id + item + '"  onchange= "onChange' + id + '(' + item + ')">';
}

function getDdlSelectIdLine___IdStr(item, id) {
    return 'ddlItem' + item + "Row" + id;
}
function getDdlSelectIdLine(item, id) {
    var idStr = getDdlSelectIdLine___IdStr(item, id);
    return '<select id="' + idStr + '"  onchange= "onChangeDdl(' + item + ',' + id + ')">';
}


function onChange010(x) {
    var val = document.getElementById("ddl010" + x).value;
//    alert (val);
    dataGrp[x][10] = val.split("|")[0];
    dataStrGrp[x][10] = dataGrp[x][10];

    dataGrp[x][29] = dataGrp[x][10];
    dataStrGrp[x][29] = dataGrp[x][29];

    setValAndShowSpan___RMB(val.split("|")[1], x, 30);
    setValAndShowSpan___RMB(val.split("|")[2], x, 35);
    showSpan(x, 10, dataStrGrp[x][10]);
    showSpan(x, 29, dataStrGrp[x][29]);
    showSpan(x, 30, dataStrGrp[x][30]);
    showSpan(x, 35, dataStrGrp[x][35]);
}
function onChange029(x) {
    var val = document.getElementById("ddl029" + x).value;

    dataGrp[x][10] = val.split("|")[0];
//    dataStrGrp[x][10] = dataGrp[x][10];

    dataGrp[x][29] = val.split("|")[0];
//    dataStrGrp[x][29] = dataGrp[x][29];

//    setValAndShowSpan___RMB(val.split("|")[1], x, 30);
//    setValAndShowSpan___RMB(val.split("|")[2], x, 35);
//    showSpan(x, 10, dataStrGrp[x][10]);
//    showSpan(x, 29, dataStrGrp[x][29]);
//    showSpan(x, 30, dataStrGrp[x][30]);
//    showSpan(x, 35, dataStrGrp[x][35]);

    dataGrp[x][32] = dataGrp[x][30] * dataGrp[x][31] / 1000;
    alert("onChange029: " + dataGrp[x][32]);
//    setValAndShowSpan___RMB(dataGrp[x][32], x, 32);
    setValAndShowSpan___RMB___SameCell(x, 32);
}


function sumUp工序費用AndUpdateData(item) {
    submitGrpIdAll工序費用(item);
    for (var i = 0; i < sum各工序Arr.length; i++) {
        setValAndShowSpan___RMB(dataGrp[item][sum各工序Arr[i]], item, sum各工序Arr[i]);
    }
    setValAndShowSpan___RMB(dataGrp[item][105], item, 105);
//    sum合計(item);
}
function setFirstValAndShowSpan(val, x, row) {
//    dataGrp[x][40] = val.split("|")[0];
//    dataStrGrp[x][40] = dataGrp[x][40];

    dataGrp[x][row] = val.split("|")[0];
    dataStrGrp[x][row] = dataGrp[x][row];
    showSpan(x, row, dataStrGrp[x][row]);
}

function setValAndShowSpan___Text___SameCell(x, row) {
    var val = dataGrp[x][row];
    setValAndShowSpan___Text(val, x, row);
}
function setValAndShowSpan___Text(val, x, row) {
    dataGrp[x][row] = val;
    dataStrGrp[x][row] = dataGrp[x][row];
    showSpan(x, row, dataStrGrp[x][row]);
}
function setValAndShowSpan___Int___SameCell(x, row) {
    var val = dataGrp[x][row];
    setValAndShowSpan___Int(val, x, row);
}
function setValAndShowSpan___Int(val, x, row) {
    dataGrp[x][row] = Math.round(parseFloat(val));
    dataStrGrp[x][row] = dataGrp[x][row];
    showSpan(x, row, dataStrGrp[x][row]);
}
function setValAndShowSpan___Float___SameCell(x, row) {
    var val = dataGrp[x][row];
    setValAndShowSpan___Float(val, x, row);
}
function setValAndShowSpan___Float(val, x, row) {
    dataGrp[x][row] = val;
    dataStrGrp[x][row] = dataGrp[x][row];
    showSpan(x, row, dataStrGrp[x][row]);
}

function setValAndShowSpan___OverheadProfit___SameCell(x, row) {
    var val = dataGrp[x][row];
    setValAndShowSpan___OverheadProfit(val, x, row);
}

function setValAndShowSpan___OverheadProfit(val, x, row) {
    //輸入 95
    //值為 0.95
    //顯示為 95%
//    val = Math.round(val * 100);// 95.6 => 9560
//    val = val / 100;

    dataGrp[x][row] = val / 100;
    dataStrGrp[x][row] = val + "%";
    showSpan(x, row, dataStrGrp[x][row]);
}

function setValAndShowSpan___Yield___SameCell(x, row) {
    var val = dataGrp[x][row];
    setValAndShowSpan___Yield(val, x, row);
}

function setValAndShowSpan___Yield(val, x, row) {
    //輸入 95
    //值為 0.95
    //顯示為 95%
//    val = Math.round(val * 100);// 95.6 => 9560
//    val = val / 100;

    dataGrp[x][row] = val / 100;
    dataStrGrp[x][row] = val + "%";
    showSpan(x, row, dataStrGrp[x][row]);
}

function setValAndShowSpan___Percent___SameCell(x, row) {
    var val = dataGrp[x][row];
    setValAndShowSpan___Percent(val, x, row);
}

function setValAndShowSpan___Percent(val, x, row) {
    val = Math.round(val * 100);
    val = val / 100;

    dataGrp[x][row] = val;
    dataStrGrp[x][row] = (100 * val) + "%";
    showSpan(x, row, dataStrGrp[x][row]);
}

function setValAndShowSpan___RMB___SameCellByArray(x, arr) {
    for (var i = 0; i < arr.length; i++) {
        setValAndShowSpan___RMB___SameCell(x, arr[i]);
    }
}
function setValAndShowSpan___RMB___SameCell(x, row) {
    var val = dataGrp[x][row];
    setValAndShowSpan___RMB(val, x, row);
}
function setValAndShowSpan___RMB(val, x, row) {
//    val = parseFloat(val);
    val = Math.round(100 * val) / 100;
    dataGrp[x][row] = val;
    dataStrGrp[x][row] = accounting.formatMoney(dataGrp[x][row], "¥", 2, ",", ".");
    showSpan(x, row, dataStrGrp[x][row]);
}

function setValAndShowSpan___USD___SameCell(x, row) {
    var val = dataGrp[x][row];
    setValAndShowSpan___USD___SameCell(val, x, row);
}

function setValAndShowSpan___USD(val, x, row) {
    val = parseFloat(val);
    val = Math.round(100 * val) / 100;
    dataGrp[x][row] = val;
    dataStrGrp[x][row] = accounting.formatMoney(dataGrp[x][row], "US$", 2, ",", ".");
    showSpan(x, row, dataStrGrp[x][row]);
}



function onChange074(item) {
    var val = document.getElementById("ddl074" + item).value;
    setFirstValAndShowSpan(val, item, 74);
    setValAndShowSpan___RMB(val.split("|")[1], item, 76);
    do噴沙拋丸震動(item);
//    sumUp工序費用AndUpdateData(x);
}
function onChange079(x) {
    var val = document.getElementById("ddl079" + x).value;
    setValAndShowSpan___Text(val.split("|")[0], x, 79);
//    setFirstValAndShowSpan(val, x, 79);
    sumUp工序費用AndUpdateData(x);
}
function onChange012(x) {
    var val = document.getElementById("ddl012" + x).value;
    setValAndShowSpan___Text(val.split("|")[0], x, 12);
    setValAndShowSpan___Text(val.split("|")[0], x, 85);
    sumUp工序費用AndUpdateData(x);
//    setFirstValAndShowSpan(val, x, 12);
}

function getTxtInputId(item, row) {
    return "txtItem" + item + "Row" + row;
}


var arrYield = [34, 47, 57, 68, 89];
function isValInArray(val, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (val == arr[i]) {
            return true;
        }
    }
    return false;
}
function getInputAsInt(val) {
    try {
        var a = parseInt(val);
    } catch (e) {
        alert(e.message);
        alert("輸入的 " + val + " 並不是整數，請重新輸入!");
        a = 0;
    }
    if (isNaN(a)) {
        alert("輸入的 " + val + " 並不是整數，請重新輸入!");
//        a = 0;
        return 0;
    }
    return a;
}
function onChangeTxt(item, row) {
    var id = getTxtInputId(item, row);          // 獲得輸入框的ID值
    var val = document.getElementById(id).value;// 獲得輸入框的輸入值
    dataGrp[item][row] = val;
    if (isValInArray(row, setIntArr)) {      // 如果該行號是輸入文本
        dataGrp[item][row] = Math.round(parseFloat(val));
    }
    if (isValInArray(row, setYieldArr)) {      // 如果該行號是輸入文本
        dataGrp[item][row] = Math.round(parseFloat(val)) / 100;
    }
    if (isValInArray(row, setRateArr)) {      // 如果該行號是輸入文本
        dataGrp[item][row] = Math.round(parseFloat(val)) / 100;
    }

    if (isValInArray(row, setRMBArr)) {      // 
        dataGrp[item][row] = Math.round(parseFloat(val + "") * 100) / 100;
    }



    btnStart();
}

function getTxtInput(item, row) {
    var value = rowDefault[row];
//    var id="txtItem" + item + "Row" + row ;
    var id = getTxtInputId(item, row);
    var trigger = "onChangeTxt(" + item + "," + row + ")'";
    var str = "&nbsp;<input type='text' onchange='onChangeTxt(" + item + "," + row + ")' maxlength='60' size='8' value='" + value + "' " + "id='" + id + "'   />";
//    var str = "&nbsp;<input type='text' maxlength='60' size='16' value='" + value + "' " + "id='" + id + "'   />";

    var className = "";
 //   str += "<button onclick='" + trigger + "' type='submit' " + className + " > ok </button>";
    return str;
}
function getDdl012(item) {
    var str = getDdlSelectId('012', item);
//  var str="";
////  str+='<select id="ddl表面要求"  onchange= "onChange表面要求('+x+')">';
//  str+='<select id="ddl表面要求'+x+'"  onchange= "onChange表面要求V3('+x+')">';
    str += '<option value="===">===表面要求===</option>';
    str += '<option value="' + '粉體烤漆-A+級|0.00|0.00' + '">' + '粉體烤漆-A+級' + '</option>';
    str += '<option value="' + '粉體烤漆-A 級|0.00|0.00' + '">' + '粉體烤漆-A 級' + '</option>';
    str += '<option value="' + '粉體烤漆-B 級|0.00|0.00' + '">' + '粉體烤漆-B 級' + '</option>';
    str += '<option value="' + '液體烤漆-A+級|0.00|0.00' + '">' + '液體烤漆-A+級' + '</option>';
    str += '<option value="' + '液體烤漆-A 級|0.00|0.00' + '">' + '液體烤漆-A 級' + '</option>';
    str += '<option value="' + '液體烤漆-B 級|0.00|0.00' + '">' + '液體烤漆-B 級' + '</option>';
    str += '<option value="' + '掛鍍-A+級|0.00|0.00' + '">' + '掛鍍-A+級' + '</option>';
    str += '<option value="' + '掛鍍-A 級|0.00|0.00' + '">' + '掛鍍-A 級' + '</option>';
    str += '<option value="' + '掛鍍-B 級|0.00|0.00' + '">' + '掛鍍-B 級' + '</option>';
    str += '<option value="' + '滾鍍-A 級|0.00|0.00' + '">' + '滾鍍-A 級' + '</option>';
    str += '<option value="' + '滾鍍-B 級|0.00|0.00' + '">' + '滾鍍-B 級' + '</option>';
    str += '<option value="' + '电泳|0.00|0.00' + '">' + '电泳' + '</option>';
    str += '<option value="' + '陽極氧化|0.00|0.00' + '">' + '陽極氧化' + '</option>';//清洗，皮膜
    str += '<option value="' + '清洗|0.00|0.00' + '">' + '清洗' + '</option>';//清洗，皮膜
    str += '<option value="' + '皮膜|0.00|0.00' + '">' + '皮膜' + '</option>';//清洗，皮膜

    str += "</select>";
    return str;
}
//function getDdl壓鑄機台() {
function getDdl040(item) {
    var jsonStr = '[{"A": "鋁-3000T ","B": 1200,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-2500T ","B": 1100,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-2000T ","B": 1000,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-1600T ","B": 800,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-1250T ","B": 400,"C": 92.045454545455,"D": 0.58333333333333}, {"A": "鋁-900T ","B": 360,"C": 71.590909090909,"D": 0.58333333333333}, {"A": "鋁-800T ","B": 360,"C": 61.363636363636,"D": 0.58333333333333}, {"A": "鋁-630T/650T ","B": 330,"C": 56.25,"D": 0.58333333333333}, {"A": "鋁-550T/530T ","B": 300,"C": 56.25,"D": 0.58333333333333}, {"A": "鋁-400T ","B": 285,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-350T/340T ","B": 285,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-250T/280T ","B": 265,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-200T ","B": 250,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-150T/160T ","B": 240,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-125T ","B": 240,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋅-500T ","B": 310,"C": 33.75,"D": 0.3}, {"A": "鋅-400T ","B": 290,"C": 33.75,"D": 0.3}, {"A": "鋅-300T ","B": 280,"C": 33.75,"D": 0.3}, {"A": "鋅-250T ","B": 270,"C": 33.75,"D": 0.3}, {"A": "鋅-200T/185T ","B": 250,"C": 33.75,"D": 0.3}, {"A": "鋅-150T ","B": 240,"C": 33.75,"D": 0.3}, {"A": "鋅-80T/100T/120T ","B": 230,"C": 33.75,"D": 0.3}, {"A": "鋅-50T/60T ","B": 200,"C": 25.3125,"D": 0.3}, {"A": "鋅-30T/25T ","B": 180,"C": 16.875,"D": 0.3}, {"A": "鋅-15T/20T ","B": 100,"C": 16.875,"D": 0.3}, {"A": "鋅-10T ","B": 80,"C": 11.25225,"D": 0.3}, {"A": "鋅-快速机/4轴机 ","B": 120,"C": 11.25225,"D": 0.3}, {"A": "鎂-630T/660T ","B": 600,"C": 112.5,"D": 1}, {"A": "鎂-530T ","B": 500,"C": 112.5,"D": 1}, {"A": "鎂-340T/400T ","B": 450,"C": 112.5,"D": 1}, {"A": "鎂-150T ","B": 500,"C": 101.25,"D": 1}]';
    var jsonObj = $.parseJSON(jsonStr);
    var str = getDdlSelectId('040', item);
//    str+='<select id="ddl2壓鑄機台">';
    str += '<option value="===">===選擇壓鑄機台===</option>';
    for (var i = 0; i < jsonObj.length; i++) {
        temp = jsonObj[i]['A'] + '|' + jsonObj[i]['B'] + '|' + jsonObj[i]['C'] + '|' + jsonObj[i]['D'];
        str += '<option value="' + temp + '">' + jsonObj[i]['A'] + '</option>';
    }
    str += "</select>";
    return str;
}
//
//8. 行號79下拉改為,選擇皮膜處理，下拉內容為
//(1)烤漆前清洗皮膜
//(2)一般清洗加皮膜
//(3)特殊要求皮膜
//(4)清洗
//(5)特殊清洗
function getDdl079(item) {
    var str = "";
//    str += '<select id="ddl2噴沙抛丸震動">';
    var str = getDdlSelectId('079', item);
    str += '<option value="===">===選擇皮膜處理===</option>';
    str += '<option value="' + '烤漆前清洗皮膜' + '">' + '烤漆前清洗皮膜' + '</option>';
    str += '<option value="' + '一般清洗加皮膜' + '">' + '一般清洗加皮膜' + '</option>';
    str += '<option value="' + '特殊要求皮膜' + '">' + '特殊要求皮膜' + '</option>';
    str += '<option value="' + '清洗' + '">' + '清洗' + '</option>';
    str += '<option value="' + '特殊清洗' + '">' + '特殊清洗' + '</option>';

    str += "</select>";
    return str;
}

//function getDdl噴沙抛丸震動(){
function getDdl074(item) {
    var str = "";
//    str += '<select id="ddl2噴沙抛丸震動">';
    var str = getDdlSelectId('074', item);
    str += '<option value="===">===選擇噴沙抛丸震動===</option>';
    str += '<option value="' + '噴沙|120.00' + '">' + '噴沙' + '</option>';
    str += '<option value="' + '抛丸|80.00' + '">' + '抛丸' + '</option>';
    str += '<option value="' + '震動|100.00' + '">' + '震動' + '</option>';

    str += "</select>";
    return str;
}
//function getDdl材料規格() {
function getDdl010(item) {
    var jsonStr = '[{"A": "A356 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A360 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A380 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A413 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ADC12 ","B": "12.820512820513","C": "10.820512820513"}, {"A": "AlSi10Mg ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ZINC-2 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-3 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-5 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-8 ","B": "14.957264957265","C": "11.957264957265"}]';
    var jsonObj = $.parseJSON(jsonStr);
    var str = "";
    str += getDdlSelectId('010', item);
    str += '<option value="===">===選擇材質規格===</option>';
    for (var i = 0; i < jsonObj.length; i++) {
        temp = jsonObj[i]['A'] + '|' + jsonObj[i]['B'] + '|' + jsonObj[i]['C'];
        str += '<option value="' + temp + '">' + jsonObj[i]['A'] + '</option>';
    }
    str += "</select>";
    return str;
}
function getDdl029(item) {
    var jsonStr = '[{"A": "A356 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A360 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A380 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A413 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ADC12 ","B": "12.820512820513","C": "10.820512820513"}, {"A": "AlSi10Mg ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ZINC-2 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-3 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-5 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-8 ","B": "14.957264957265","C": "11.957264957265"}]';
    var jsonObj = $.parseJSON(jsonStr);
    var str = "";
    str += getDdlSelectId('029', item);
    str += '<option value="===">===選擇材質規格===</option>';
    for (var i = 0; i < jsonObj.length; i++) {
        temp = jsonObj[i]['A'] + '|' + jsonObj[i]['B'] + '|' + jsonObj[i]['C'];
        str += '<option value="' + temp + '">' + jsonObj[i]['A'] + '</option>';
    }
    str += "</select>";
    return str;
}
function getDdl010V2(item) {
    var jsonStr = '[{"A": "A356 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A360 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A380 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A413 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ADC12 ","B": "12.820512820513","C": "10.820512820513"}, {"A": "AlSi10Mg ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ZINC-2 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-3 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-5 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-8 ","B": "14.957264957265","C": "11.957264957265"}]';
    var jsonObj = $.parseJSON(jsonStr);
    var str = "";
//    str += getDdlSelectId('029', item);
    str += getDdlSelectIdLine(item, 10);

    str += '<option value="===">===選擇材質規格===</option>';
    for (var i = 0; i < jsonObj.length; i++) {
        temp = jsonObj[i]['A'] + '|' + jsonObj[i]['B'] + '|' + jsonObj[i]['C'];
        str += '<option value="' + temp + '">' + jsonObj[i]['A'] + '</option>';
    }
    str += "</select>";
    return str;
}
function getDdl029V2(item) {
    var jsonStr = '[{"A": "A356 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A360 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A380 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "A413 ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ADC12 ","B": "12.820512820513","C": "10.820512820513"}, {"A": "AlSi10Mg ","B": "13.247863247863","C": "11.247863247863"}, {"A": "ZINC-2 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-3 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-5 ","B": "14.957264957265","C": "11.957264957265"}, {"A": "ZINC-8 ","B": "14.957264957265","C": "11.957264957265"}]';
    var jsonObj = $.parseJSON(jsonStr);
    var str = "";
//    str += getDdlSelectId('029', item);
    str += getDdlSelectIdLine(item, 29);

    str += '<option value="===">===選擇材質規格===</option>';
    for (var i = 0; i < jsonObj.length; i++) {
        temp = jsonObj[i]['A'] + '|' + jsonObj[i]['B'] + '|' + jsonObj[i]['C'];
        str += '<option value="' + temp + '">' + jsonObj[i]['A'] + '</option>';
    }
    str += "</select>";
    return str;
}

function getDdl040V2(item) {
    var jsonStr = '[{"A": "鋁-3000T ","B": 1200,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-2500T ","B": 1100,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-2000T ","B": 1000,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-1600T ","B": 800,"C": 102.27272727273,"D": 0.58333333333333}, {"A": "鋁-1250T ","B": 400,"C": 92.045454545455,"D": 0.58333333333333}, {"A": "鋁-900T ","B": 360,"C": 71.590909090909,"D": 0.58333333333333}, {"A": "鋁-800T ","B": 360,"C": 61.363636363636,"D": 0.58333333333333}, {"A": "鋁-630T/650T ","B": 330,"C": 56.25,"D": 0.58333333333333}, {"A": "鋁-550T/530T ","B": 300,"C": 56.25,"D": 0.58333333333333}, {"A": "鋁-400T ","B": 285,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-350T/340T ","B": 285,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-250T/280T ","B": 265,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-200T ","B": 250,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-150T/160T ","B": 240,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋁-125T ","B": 240,"C": 40.909090909091,"D": 0.58333333333333}, {"A": "鋅-500T ","B": 310,"C": 33.75,"D": 0.3}, {"A": "鋅-400T ","B": 290,"C": 33.75,"D": 0.3}, {"A": "鋅-300T ","B": 280,"C": 33.75,"D": 0.3}, {"A": "鋅-250T ","B": 270,"C": 33.75,"D": 0.3}, {"A": "鋅-200T/185T ","B": 250,"C": 33.75,"D": 0.3}, {"A": "鋅-150T ","B": 240,"C": 33.75,"D": 0.3}, {"A": "鋅-80T/100T/120T ","B": 230,"C": 33.75,"D": 0.3}, {"A": "鋅-50T/60T ","B": 200,"C": 25.3125,"D": 0.3}, {"A": "鋅-30T/25T ","B": 180,"C": 16.875,"D": 0.3}, {"A": "鋅-15T/20T ","B": 100,"C": 16.875,"D": 0.3}, {"A": "鋅-10T ","B": 80,"C": 11.25225,"D": 0.3}, {"A": "鋅-快速机/4轴机 ","B": 120,"C": 11.25225,"D": 0.3}, {"A": "鎂-630T/660T ","B": 600,"C": 112.5,"D": 1}, {"A": "鎂-530T ","B": 500,"C": 112.5,"D": 1}, {"A": "鎂-340T/400T ","B": 450,"C": 112.5,"D": 1}, {"A": "鎂-150T ","B": 500,"C": 101.25,"D": 1}]';
    var jsonObj = $.parseJSON(jsonStr);
//    var str = getDdlSelectId('040', item);
    var str = "";
    str += getDdlSelectIdLine(item, 40);
//    str+='<select id="ddl2壓鑄機台">';
    str += '<option value="===">===選擇壓鑄機台===</option>';
    for (var i = 0; i < jsonObj.length; i++) {
        temp = jsonObj[i]['A'] + '|' + jsonObj[i]['B'] + '|' + jsonObj[i]['C'] + '|' + jsonObj[i]['D'];
        str += '<option value="' + temp + '">' + jsonObj[i]['A'] + '</option>';
    }
    str += "</select>";
    return str;
}

var optLang = 1; // 0 繁體 1 簡體
var submitCnt = 6;
var COL_CNT = 7;
//var ROW_CNT = 114;// 
var ROW_CNT = 170;// STARTING FROM 131 
var ROW_BIZ_CNT = 114;// STARTING FROM 131 

var val美金兌人民幣 = 6.5;
String.prototype.trim = function () {
    return this.replace(/(^[\s]*)|([\s]*$)/g, "");
}
String.prototype.lTrim = function () {
    return this.replace(/(^[\s]*)/g, "");
}
String.prototype.rTrim = function () {
    return this.replace(/([\s]*$)/g, "");
}
var jsonStr = '[{},{"A": 1,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 2,"B": null,"C": null,"D": "","E": null,"F": null}, {"A": 3,"B": null,"C": "接受询价日期：","D": null,"E": null,"F": null}, {"A": 4,"B": null,"C": "业务担当：","D": "","E": null,"F": "Remark "}, {"A": 5,"B": null,"C": "简图 ","D": "#1 ","E": null,"F": null}, {"A": 6,"B": null,"C": "产品简图 ","D": null,"E": null,"F": null}, {"A": 7,"B": "","C": "项目 料号 ","D": "五菱电池包底壳-1 ","E": "五菱电池包上盖-2 ","F": null}, {"A": 8,"B": null,"C": "品名 / 图纸版本号：","D": "","E": "","F": null}, {"A": 9,"B": null,"C": "产品外形尺寸","D": "1161*865*111 ","E": "1039*790*152.5 ","F": null}, {"A": 10,"B": null,"C": "材质规格： ","D": "AlSi10Mg ","E": "AlSi10Mg ","F": "請下拉選擇材質套出單價 "}, {"A": 11,"B": null,"C": "产品单重（公斤）：","D": "12.17 ","E": "7.45 ","F": "估價人員輸入單重"}, {"A": 12,"B": null,"C": "表面要求： ","D": "电泳 ","E": "电泳 ","F": "請下拉選擇表面要求 "}, {"A": 13,"B": null,"C": "年需求量：","D": "120,000.00 ","E": "120,000.00 ","F": "估價人員輸入年需求量"}, {"A": 14,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 15,"B": null,"C": "模具费用： ","D": null,"E": null,"F": null}, {"A": 16,"B": null,"C": "模穴数 ","D": "1 ","E": "1 ","F": "估價人員輸入模穴數 "}, {"A": 17,"B": null,"C": "侧滑模数/油压抽芯数 ","D": null,"E": null,"F": null}, {"A": 18,"B": null,"C": "模具寿命：","D": "100,000 ","E": "100,000 ","F": "估價人員輸入模具壽命"}, {"A": 19,"B": null,"C": "压铸模费用： ","D": "1600000","E": "1200000","F": "估價人員輸入模具壓鑄模費用 "}, {"A": 20,"B": null,"C": "切边模费用： ","D": "","E": "","F": "估價人員輸入切邊模費用 "}, {"A": 21,"B": null,"C": "加工夹治具费用： ","D": "","E": "","F": "估價人員輸入加工夾治具模費用 "}, {"A": 22,"B": null,"C": "烤漆夹治具费用： ","D": "","E": "","F": "估價人員輸入模具壓鑄模費用 "}, {"A": 23,"B": null,"C": "模具总价（人民币）： ","D": "1600000","E": "1200000","F": null}, {"A": 24,"B": null,"C": "模具总价（USD）： ","D": null,"E": null,"F": null}, {"A": 25,"B": null,"C": "","D": "","E": "","F": null}, {"A": 26,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 27,"B": null,"C": "产品单价： ","D": null,"E": null,"F": null}, {"A": 28,"B": "* ","C": "1)材料费 ： ","D": null,"E": null,"F": null}, {"A": 29,"B": "1-1） ","C": "材质规格：","D": "AlSi10Mg","E": "AlSi10Mg","F": null}, {"A": 30,"B": "1-2） ","C": "材料单价/KG :","D": "#N/A","E": "#N/A","F": "由sheet2自動帶出"}, {"A": 31,"B": "1-3） ","C": "单重（公斤）：","D": "12.17 ","E": "7.45 ","F": null}, {"A": 32,"B": "1-4） ","C": "产品材料费（净重价格）： ","D": "#N/A","E": "#N/A","F": null}, {"A": 33,"B": "1-5） ","C": "料柄流道渣包等废料重量(公斤)： ","D": "8.5 ","E": "8.0 ","F": "估價人員輸入廢料重量"}, {"A": 34,"B": "1-6） ","C": "料柄流道渣包比率 ： ","D": "0.69843878389482","E": "1.0738255033557","F": null}, {"A": 35,"B": "1-7） ","C": "料柄流道渣包等废料价格/Kg： ","D": "#N/A","E": "#N/A","F": "由sheet2自動帶出"}, {"A": 36,"B": "1-8） ","C": "料柄流道渣包回收价差损失额 ： ","D": "#N/A","E": "#N/A","F": null}, {"A": 37,"B": "1-9） ","C": "压铸熔炼材料氧化损耗(量） 2% ","D": "#N/A","E": "#N/A","F": null}, {"A": 38,"B": null,"C": "材料费 小计： ","D": "#N/A","E": "#N/A","F": null}, {"A": 39,"B": "* ","C": "2)压铸费(含切边）： ","D": null,"E": null,"F": null}, {"A": 40,"B": "2-1） ","C": "适用机型： ","D": "鋁-3000T ","E": "鋁-3000T ","F": "請下拉選擇壓鑄機台機型 "}, {"A": 41,"B": "2-2） ","C": "设备费率/H： ","D": "#N/A","E": "#N/A","F": "由sheet2自動帶出"}, {"A": 42,"B": "2-3） ","C": "工时（分）/只 ：","D": "4.50 ","E": "3.50 ","F": "估價人員輸入壓鑄每只需幾分鐘"}, {"A": 43,"B": "2-4） ","C": "产能 只/H ：","D": "13 ","E": "17 ","F": null}, {"A": 44,"B": "2-5） ","C": "设备费/只： ","D": "#N/A","E": "#N/A","F": null}, {"A": 45,"B": "2-6） ","C": "人工费/只： ","D": "#N/A","E": "#N/A","F": "由sheet2自動帶出"}, {"A": 46,"B": "2-7） ","C": "熔炼费（能耗）： ","D": "#N/A","E": "#N/A","F": "由sheet2自動帶出"}, {"A": 47,"B": "2-8） ","C": "良品率： ","D": "0.9","E": "0.95","F": "估價人員輸入估計良品率"}, {"A": 48,"B": null,"C": "小计： ","D": "#N/A","E": "#N/A","F": null}, {"A": 49,"B": "* ","C": "3)毛刺处理费（含粗磨） ","D": "","E": "","F": null}, {"A": 50,"B": "3-1） ","C": "工时（分）/只 ： ","D": "1.00 ","E": "1.00 ","F": "估價人員輸入去料每只需幾分鐘 "}, {"A": 51,"B": "3-2) ","C": "人工费率/H： ","D": "¥0.00 ","E": "¥0.00 ","F": "由sheet2自動帶出"}, {"A": 52,"B": null,"C": "小计： ","D": "¥0.00 ","E": "¥0.00 ","F": null}, {"A": 53,"B": "* ","C": "4)外观打磨费（入/溢料口, 分模线及一般外观瑕疵等部位做打磨） ","D": "","E": "","F": null}, {"A": 54,"B": "4-1） ","C": "工时（分）/只 ： ","D": "1.00 ","E": "1.00 ","F": "估價人員輸入打磨每只需幾分鐘 "}, {"A": 55,"B": "4-2) ","C": "人工费率/H： ","D": "¥0.00 ","E": "¥0.00 ","F": "由sheet2自動帶出"}, {"A": 56,"B": "4-3) ","C": "打磨费： ","D": "¥0.00 ","E": "¥0.00 ","F": null}, {"A": 57,"B": "4-4） ","C": "良品率： ","D": "0.99","E": "0.99","F": "估價人員輸入估計良品率"}, {"A": 58,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 59,"B": null,"C": "小计： ","D": "¥0.00 ","E": "¥0.00 ","F": null}, {"A": 60,"B": "* ","C": "5)平整度 整形费 ","D": null,"E": null,"F": null}, {"A": 61,"B": "5-1） ","C": "工时 分/只： ","D": "1.00 ","E": "1.00 ","F": "估價人員輸入平整每只需幾分鐘 "}, {"A": 62,"B": "5-2) ","C": "人工费率/H： ","D": "¥0.00 ","E": "¥0.00 ","F": "由sheet2自動帶出"}, {"A": 63,"B": "5-3） ","C": "人工费/只 ","D": "¥0.00 ","E": "¥0.00 ","F": null}, {"A": 64,"B": null,"C": "小计： ","D": "¥0.00 ","E": "¥0.00 ","F": null}, {"A": 65,"B": "* ","C": "6)机加工 ","D": "","E": "","F": null}, {"A": 66,"B": "6-1) ","C": "工时（分）/只 ： ","D": "3.00 ","E": "1.00 ","F": "估價人員輸入機加工每只需幾分鐘 "}, {"A": 67,"B": "6-2) ","C": "加工费率/H： ","D": "¥0.00 ","E": "¥0.00 ","F": "由sheet2自動帶出"}, {"A": 68,"B": "6-3） ","C": "良品率： ","D": "0.985","E": "0.985","F": "估價人員輸入估計良品率"}, {"A": 69,"B": null,"C": "小计： ","D": "#NAME?","E": "#NAME?","F": null}, {"A": 70,"B": "* ","C": "7)冷喷.热烧毛刺 &费率/分： ","D": null,"E": null,"F": null}, {"A": 71,"B": "7-1） ","C": "工时 分/只： ","D": "1.00 ","E": "1.00 ","F": "估價人員輸入機冷噴每只需幾分鐘 "}, {"A": 72,"B": "7-2） ","C": "加工费率/H： ","D": "¥0.00 ","E": "¥0.00 ","F": "由sheet2自動帶出"}, {"A": 73,"B": null,"C": "小计： ","D": "#NAME?","E": "#NAME?","F": null}, {"A": 74,"B": "* ","C": "8)喷沙.抛丸.震动研磨 &费率 ","D": null,"E": null,"F": null}, {"A": 75,"B": "8-1） ","C": "工时 分/只： ","D": "1.00 ","E": "1.00 ","F": "估價人員輸入機噴砂每只需幾分鐘 "}, {"A": 76,"B": "8-2） ","C": "加工费率/H： ","D": "¥0.00 ","E": "¥0.00 ","F": "由sheet2自動帶出"}, {"A": 77,"B": null,"C": "小计： ","D": "#NAME?","E": "#NAME?","F": null}, {"A": 78,"B": "* ","C": "9)皮膜处理 &费率 ","D": null,"E": null,"F": null}, {"A": 79,"B": "9-1) ","C": "耐腐蝕鹽霧實驗時間要求： ","D": "72小時 ","E": "96小時 ","F": "請下拉選擇鹽霧時間 "}, {"A": 80,"B": "9-2） ","C": "工件表面面积 (算单面） DM2： ","D": "1 ","E": "1 ","F": "估價人員輸入表面面積dm2 "}, {"A": 81,"B": "9-3） ","C": "加工费率/H： ","D": "#N/A","E": "#N/A","F": "由sheet2自動帶出"}, {"A": 82,"B": null,"C": "小计： ","D": "#N/A","E": "#N/A","F": null}, {"A": 83,"B": null,"C": null,"D": "","E": "","F": null}, {"A": 84,"B": "* ","C": "10)粉体烤漆.液体烤漆.丝网印： ","D": null,"E": null,"F": null}, {"A": 85,"B": "10-1） ","C": "表面要求","D": "电泳","E": "电泳","F": null}, {"A": 86,"B": "10-2） ","C": "工件表面积(算需喷漆面积）DM2： ","D": "1 ","E": "1 ","F": "估價人員輸入噴漆面積dm2"}, {"A": 87,"B": "10-3） ","C": "漆材料费/dm： ","D": "0","E": "0","F": "由sheet2自動帶出"}, {"A": 88,"B": "10-4） ","C": "烤漆设备+人工費率/dm： ","D": "0","E": "0","F": "由sheet2自動帶出"}, {"A": 89,"B": "10-5） ","C": "良品率： ","D": "0.93","E": "0.93","F": "估價人員輸入估計良品率"}, {"A": 90,"B": "10-6） ","C": "产品难度系数 K 值：K = 0.8-1.5 ","D": "1.0 ","E": "1.0 ","F": "估價人員輸入難度係數"}, {"A": 91,"B": null,"C": "小计： ","D": "#N/A","E": "#N/A","F": null}, {"A": 92,"B": "* ","C": "11)其它特殊处理： ","D": null,"E": null,"F": null}, {"A": 93,"B": "11-1） ","C": "工时 分/只： ","D": null,"E": null,"F": null}, {"A": 94,"B": "11-2） ","C": "费用/只 ","D": null,"E": null,"F": "無上述估價項目自行增列"}, {"A": 95,"B": null,"C": "小计： ","D": "¥0.00 ","E": "¥0.00 ","F": null}, {"A": 96,"B": "* ","C": "12)气密性测试 ： ","D": null,"E": null,"F": null}, {"A": 97,"B": "12-1） ","C": "工时 分/只： ","D": "1","E": "1","F": "估價人員輸入气测工时（分）"}, {"A": 98,"B": "12-2） ","C": "气测费/只 ","D": "¥1.00 ","E": "¥1.00 ","F": null}, {"A": 99,"B": null,"C": "小计： ","D": "¥1.00 ","E": "¥1.00 ","F": null}, {"A": 100,"B": "* ","C": "13)筛选包装 & 费率 /H： ","D": null,"E": null,"F": null}, {"A": 101,"B": "13-1） ","C": "工时 分/只： ","D": "1.0 ","E": "1.0 ","F": "估價人員輸入篩選包裝每只需幾分鐘"}, {"A": 102,"B": "13-2) ","C": "人工费/只 ","D": "¥0.00 ","E": "¥0.00 ","F": "由sheet2自動帶出"}, {"A": 103,"B": "13-3) ","C": "包材费： ","D": "¥1.00 ","E": "¥1.00 ","F": "估價人員輸入每只包材費"}, {"A": 104,"B": null,"C": "小计： ","D": "¥1.00 ","E": "¥1.00 ","F": null}, {"A": 105,"B": null,"C": "Sub-Total 合计： ","D": "#N/A","E": "#N/A","F": null}, {"A": 106,"B": "* ","C": "管销（Overhead 10%）+（利润profit5%） = 15% ","D": "#N/A","E": "#N/A","F": null}, {"A": 107,"B": "* ","C": "其他五金配件： ","D": "¥10.00 ","E": "¥0.00 ","F": "估價人員輸入每只需要五金配件"}, {"A": 108,"B": "* ","C": "组装费： ","D": "¥20.00 ","E": "¥0.00 ","F": "估價人員輸入每只組裝費"}, {"A": 109,"B": null,"C": "组装 小计： ","D": "¥30.00 ","E": "¥0.00 ","F": null}, {"A": 110,"B": null,"C": "总计（未税）： ","D": "#N/A","E": "#N/A","F": null}, {"A": 111,"B": null,"C": "VAT 税金：17% ","D": "#N/A","E": "#N/A","F": null}, {"A": 112,"B": null,"C": "海外运输费用： ","D": "¥0.00 ","E": "¥0.00 ","F": ""}, {"A": 113,"B": "","C": "总计（含税）： ","D": "#N/A","E": "#N/A","F": ""}, {"A": 114,"B": "","C": "总计（美元）： ","D": "#N/A","E": "#N/A","F": null}, {"A": 1,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 2,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 3,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 4,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 5,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 6,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 7,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 8,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 9,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 10,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 11,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 12,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 13,"B": "年需求量","C": "年需求量","D": null,"E": null,"F": null}, {"A": 14,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 15,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 16,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 17,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 18,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 19,"B": null,"C": "压铸模费用：","D": null,"E": null,"F": null}, {"A": 20,"B": null,"C": "切边模费用：","D": null,"E": null,"F": null}, {"A": 21,"B": null,"C": "加工夹治具费用：","D": null,"E": null,"F": null}, {"A": 22,"B": null,"C": "烤漆夹治具费用：","D": null,"E": null,"F": null}, {"A": 23,"B": "模具總價","C": "模具总价","D": null,"E": null,"F": null}, {"A": 24,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 25,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 26,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 27,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 28,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 29,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 30,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 31,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 32,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 33,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 34,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 35,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 36,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 37,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 38,"B": "材料费","C": "材料费","D": null,"E": null,"F": null}, {"A": 39,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 40,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 41,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 42,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 43,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 44,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 45,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 46,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 47,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 48,"B": "压铸费","C": "压铸费","D": null,"E": null,"F": null}, {"A": 49,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 50,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 51,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 52,"B": "毛刺处理费","C": "毛刺处理费","D": null,"E": null,"F": null}, {"A": 53,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 54,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 55,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 56,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 57,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 58,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 59,"B": "4)外观打磨费","C": "4)外观打磨费","D": null,"E": null,"F": null}, {"A": 60,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 61,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 62,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 63,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 64,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 65,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 66,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 67,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 68,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 69,"B": "机加工","C": "机加工","D": null,"E": null,"F": null}, {"A": 70,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 71,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 72,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 73,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 74,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 75,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 76,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 77,"B": "冷喷.热烧毛刺","C": "冷喷.热烧毛刺","D": null,"E": null,"F": null}, {"A": 78,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 79,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 80,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 81,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 82,"B": "皮膜处理","C": "皮膜处理","D": null,"E": null,"F": null}, {"A": 83,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 84,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 85,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 86,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 87,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 88,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 89,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 90,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 91,"B": "粉体液体烤漆丝网","C": "粉体液体烤漆丝网印","D": null,"E": null,"F": null}, {"A": 92,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 93,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 94,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 95,"B": "其它特殊处理","C": "其它特殊处理","D": null,"E": null,"F": null}, {"A": 96,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 97,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 98,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 99,"B": "气密性测试","C": "气密性测试","D": null,"E": null,"F": null}, {"A": 100,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 101,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 102,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 103,"B": null,"C": null,"D": null,"E": null,"F": null}, {"A": 104,"B": "筛选包装","C": "筛选包装","D": null,"E": null,"F": null}, {"A": 105,"B": "Sub-Tota","C": "Sub-Total 合计","D": null,"E": null,"F": null}, {"A": 106,"B": "管销（Overh","C": "管销（Overhead） 10% +（利润）profit5% = 15% ","D": null,"E": null,"F": null}, {"A": 107,"B": "其他五金配件：","C": "其他五金配件：","D": null,"E": null,"F": null}, {"A": 108,"B": "组装费：","C": "组装费：","D": null,"E": null,"F": null}, {"A": 109,"B": "组装 小计：","C": "组装 小计：","D": null,"E": null,"F": null}, {"A": 110,"B": "总计（未税）：","C": "总计（未税）：","D": null,"E": null,"F": null}, {"A": 111,"B": "VAT 税金：1","C": "VAT 税金：17%","D": null,"E": null,"F": null}, {"A": 112,"B": "海外运输费用：","C": "海外运输费用：","D": null,"E": null,"F": null}, {"A": 113,"B": "总计（含税）：","C": "总计（含税）：","D": null,"E": null,"F": null}, {"A": 114,"B": "总计（美元）：","C": "总计（美元）：","D": null,"E": null,"F": null}]';
jsonObj = $.parseJSON(jsonStr);
// c9.btnStr
// alert(jsonObj)
var btnStr = '[{},{"A": 1,"B": null,"C": null,"D": ""}, {"A": 2,"B": null,"C": null,"D": ""}, {"A": 3,"B": null,"C": null,"D": ""}, {"A": 4,"B": null,"C": null,"D": ""}, {"A": 5,"B": null,"C": null,"D": ""}, {"A": 6,"B": null,"C": null,"D": ""}, {"A": 7,"B": null,"C": null,"D": "string "}, {"A": 8,"B": null,"C": null,"D": ""}, {"A": 9,"B": null,"C": null,"D": "string"}, {"A": 10,"B": null,"C": null,"D": "string"}, {"A": 11,"B": null,"C": null,"D": "number"}, {"A": 12,"B": null,"C": null,"D": "string"}, {"A": 13,"B": "年需求量","C": "年需求量","D": "number"}, {"A": 14,"B": null,"C": null,"D": ""}, {"A": 15,"B": null,"C": null,"D": ""}, {"A": 16,"B": null,"C": null,"D": "number"}, {"A": 17,"B": null,"C": null,"D": ""}, {"A": 18,"B": null,"C": null,"D": "number"}, {"A": 19,"B": "壓鑄模費用","C": "压铸模费用","D": "number"}, {"A": 20,"B": "切邊模費用","C": "切边模费用","D": "number"}, {"A": 21,"B": "加工夾治具費用","C": "加工夹治具费用","D": "number"}, {"A": 22,"B": "烤漆夾治具費用","C": "烤漆夹治具费用","D": "number"}, {"A": 23,"B": "模具總價","C": "模具总价","D": "number"}, {"A": 24,"B": null,"C": null,"D": "number"}, {"A": 25,"B": null,"C": null,"D": ""}, {"A": 26,"B": null,"C": null,"D": ""}, {"A": 27,"B": null,"C": null,"D": ""}, {"A": 28,"B": null,"C": null,"D": ""}, {"A": 29,"B": null,"C": null,"D": "string"}, {"A": 30,"B": null,"C": null,"D": "number"}, {"A": 31,"B": null,"C": null,"D": "number"}, {"A": 32,"B": null,"C": null,"D": "number"}, {"A": 33,"B": null,"C": null,"D": "number"}, {"A": 34,"B": null,"C": null,"D": "number"}, {"A": 35,"B": null,"C": null,"D": "number"}, {"A": 36,"B": null,"C": null,"D": "number"}, {"A": 37,"B": null,"C": null,"D": "number"}, {"A": 38,"B": "材料費","C": "材料费","D": "number"}, {"A": 39,"B": null,"C": null,"D": ""}, {"A": 40,"B": null,"C": null,"D": "string"}, {"A": 41,"B": null,"C": null,"D": "number"}, {"A": 42,"B": null,"C": null,"D": "number"}, {"A": 43,"B": null,"C": null,"D": "number"}, {"A": 44,"B": null,"C": null,"D": "number"}, {"A": 45,"B": null,"C": null,"D": "number"}, {"A": 46,"B": null,"C": null,"D": "number"}, {"A": 47,"B": null,"C": null,"D": "number"}, {"A": 48,"B": "壓鑄費 ","C": "压铸费","D": "number"}, {"A": 49,"B": null,"C": null,"D": ""}, {"A": 50,"B": null,"C": null,"D": "number"}, {"A": 51,"B": null,"C": null,"D": "number"}, {"A": 52,"B": "毛刺處理費 ","C": "毛刺处理费","D": "number"}, {"A": 53,"B": null,"C": null,"D": ""}, {"A": 54,"B": null,"C": null,"D": "number"}, {"A": 55,"B": null,"C": null,"D": "number"}, {"A": 56,"B": null,"C": null,"D": "number"}, {"A": 57,"B": null,"C": null,"D": "number"}, {"A": 58,"B": null,"C": null,"D": ""}, {"A": 59,"B": "外觀打磨費 ","C": "4)外观打磨费","D": "number"}, {"A": 60,"B": null,"C": null,"D": ""}, {"A": 61,"B": null,"C": null,"D": "number"}, {"A": 62,"B": null,"C": null,"D": "number"}, {"A": 63,"B": null,"C": null,"D": "number"}, {"A": 64,"B": "平整度整形費 ","C": "平整度 整形费","D": "number"}, {"A": 65,"B": null,"C": null,"D": ""}, {"A": 66,"B": null,"C": null,"D": "number"}, {"A": 67,"B": null,"C": null,"D": "number"}, {"A": 68,"B": null,"C": null,"D": "number"}, {"A": 69,"B": "機加工 ","C": "机加工","D": "number"}, {"A": 70,"B": null,"C": null,"D": ""}, {"A": 71,"B": null,"C": null,"D": "number"}, {"A": 72,"B": null,"C": null,"D": "number"}, {"A": 73,"B": "冷噴熱燒毛刺 ","C": "冷喷.热烧毛刺","D": "number"}, {"A": 74,"B": null,"C": null,"D": ""}, {"A": 75,"B": null,"C": null,"D": "number"}, {"A": 76,"B": null,"C": null,"D": "number"}, {"A": 77,"B": "噴沙抛丸震動研磨 ","C": "噴沙抛丸震動研磨 ","D": "number"}, {"A": 78,"B": null,"C": null,"D": ""}, {"A": 79,"B": null,"C": null,"D": "string"}, {"A": 80,"B": null,"C": null,"D": "number"}, {"A": 81,"B": null,"C": null,"D": "number"}, {"A": 82,"B": "皮膜處理","C": "皮膜处理","D": "number"}, {"A": 83,"B": null,"C": null,"D": ""}, {"A": 84,"B": null,"C": null,"D": ""}, {"A": 85,"B": null,"C": null,"D": "string"}, {"A": 86,"B": null,"C": null,"D": "number"}, {"A": 87,"B": null,"C": null,"D": "number"}, {"A": 88,"B": null,"C": null,"D": "number"}, {"A": 89,"B": null,"C": null,"D": "number"}, {"A": 90,"B": null,"C": null,"D": "number"}, {"A": 91,"B": "粉體液體烤漆絲網印 ","C": "粉体液体烤漆丝网印","D": "number"}, {"A": 92,"B": null,"C": null,"D": ""}, {"A": 93,"B": null,"C": null,"D": "number"}, {"A": 94,"B": null,"C": null,"D": "number"}, {"A": 95,"B": "其它特殊處理","C": "其它特殊处理","D": "number"}, {"A": 96,"B": null,"C": null,"D": ""}, {"A": 97,"B": null,"C": null,"D": "number"}, {"A": 98,"B": null,"C": null,"D": "number"}, {"A": 99,"B": "氣密性測試","C": "气密性测试","D": "number"}, {"A": 100,"B": null,"C": null,"D": ""}, {"A": 101,"B": null,"C": null,"D": "number"}, {"A": 102,"B": null,"C": null,"D": "number"}, {"A": 103,"B": null,"C": null,"D": "number"}, {"A": 104,"B": "篩選包裝","C": "筛选包装","D": "number"}, {"A": 105,"B": "Sub-Total 合計","C": "Sub-Total 合计","D": "number"}, {"A": 106,"B": "管銷（Overhead） 10% + 利潤（profit）5% = 15% ","C": "管销（Overhead） 10% +（利润）profit5% = 15% ","D": "number"}, {"A": 107,"B": "其他五金配件","C": "其他五金配件：","D": "number"}, {"A": 108,"B": "組裝費","C": "组装费：","D": "number"}, {"A": 109,"B": "組裝 小計","C": "组装 小计：","D": "number"}, {"A": 110,"B": "總計（未税）：","C": "总计（未税）：","D": "number"}, {"A": 111,"B": "VAT 税金：17%","C": "VAT 税金：17%","D": "number"}, {"A": 112,"B": "海外運輸費用：","C": "海外运输费用：","D": "number"}, {"A": 113,"B": "總計（含税）：","C": "总计（含税）：","D": "number"}, {"A": 114,"B": "總計（美元）：","C": "总计（美元）：","D": "number"}]';
var btnObj = $.parseJSON(btnStr);

var strSeg = new Array(1 + ROW_CNT);
for (i = 1; i <= ROW_CNT; i++) {
    strSeg[i] = '';

}

var showArr = new Array(1 + ROW_CNT);
for (i = 1; i <= ROW_CNT; i++) {
    showArr[i] = new Array();
    showArr[i].push(i);
}

var rowDefault = new Array(1 + ROW_CNT);
for (i = 1; i <= ROW_CNT; i++) {
    rowDefault[i] = 0;
}

var rowAlign = new Array(1 + ROW_CNT);
for (i = 1; i <= ROW_CNT; i++) {
    rowAlign[i] = 0; //數字
}
//rowAlign[7] = 1; //文字
//rowAlign[8] = 1;
//rowAlign[9] = 1;
//rowAlign[10] = 1;
//rowAlign[29] = 1;

function setAlign(arr, val) {
    for (i = 0; i < arr.length; i++) {
        rowAlign[arr[i]] = val; //數字
    }
}
setAlign([7, 8, 9, 10, 12, 29, 40, 65, 79, 85], 1);


var strRowText = new Array(1 + ROW_CNT);
for (i = 1; i <= ROW_CNT; i++) {
    strRowText[i] = "";
}

var strRowTextCn = new Array(1 + ROW_CNT);
for (i = 1; i <= ROW_CNT; i++) {
    strRowTextCn[i] = "";
}

var strBtnTitleCn = new Array(1 + ROW_CNT);
for (i = 1; i <= ROW_CNT; i++) {
    strBtnTitleCn[i] = "";
}

var strBtnTitle = new Array(1 + ROW_CNT);
for (i = 1; i <= ROW_CNT; i++) {
    strBtnTitle[i] = "";
}

var strRem = new Array(1 + ROW_CNT);
for (i = 1; i <= ROW_CNT; i++) {
    strRem[i] = "<td>...</td>";
}

var dataGrp = new Array(1 + COL_CNT);
var data = new Array(1 + ROW_CNT);
var dataStrGrp = new Array(1 + COL_CNT);
var compGrp = new Array(1 + COL_CNT);
var dataStr = new Array(1 + ROW_CNT);

var lookup篩選包裝費率 = 35.00;
var dataX46 = 0;

bizInit();


for (var i = 0; i <= COL_CNT; i++) {
    compGrp[i] = new Array(1 + ROW_CNT);
    dataGrp[i] = new Array(1 + ROW_CNT);
    dataStrGrp[i] = new Array(1 + ROW_CNT);
    for (var j = 0; j <= ROW_CNT; j++) {
        compGrp[i][j] = "";
        dataGrp[i][j] = 0;
        dataStrGrp[i][j] = "";
    }


    // 下拉欄位以 ===
    function setDllDefault(arr, val) {
        for (idx = 0; idx < arr.length; idx++) {
//            rowAlign[arr[i]] = val; //數字
            dataGrp[i][arr[idx]] = val;
        }
    }
    setDllDefault([10, 12, 29, 40, 65, 74, 79, 85], "===");

    //  初值
    //  dataGrp[i][131] = 0.15; // overhead + profit
    dataGrp[i][16] = 1; // 模穴數
    dataGrp[i][51] = 35.00;
    dataGrp[i][55] = 45.00;
    dataGrp[i][62] = 45.00;
    // setLookupVal(67, 60.00);
    dataGrp[i][72] = 35.00;
//    dataGrp[i][76] = 120.00;
    dataGrp[i][90] = 1.0;

    // 良率
    dataGrp[i][47] = 0.95;
    dataGrp[i][57] = 0.95;
    dataGrp[i][68] = 0.95;
    dataGrp[i][89] = 0.95;

    dataGrp[i][100] = 35.00;//
    dataGrp[i][13] = 12000;//



}

function getDataGrp(item, row) {
    return dataGrp[i][row];
}


function hideInputArea() {
    // alert(" to hide")

    $("inputArea").show();
}
function get小點2位(x) {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
        // alert('function:changeTwoDecimal->parameter error');
        return x;
    }
    var f_x = Math.round(x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}

function sum() {
    sum總計();
}

function getFinalTableGrp(rowFrom, rowTo) {
    //setValStr();
    var str = "";
    str += "<table>";
    str += "<tr><td></td><td></td><td></td>";

    for (var i = 1; i <= submitCnt; i++) {
        str += "<th>" + i + "</th>";

    }
    str += "<td></td>";
    str += "</tr>";

    for (var i = rowFrom; i <= rowTo; i++) {
        str += "<tr>";
        str += getA(i);
        str += getB(i); //actual data value
        str += getC(i);
        // str += getD(i);
        // str += getValFormatted(i);

        for (var k = 1; k <= submitCnt; k++) {
            // str+="<td>"+k+"</td>";
            // str+="<td>"+dataGrp[k][i]+"</td>";
            if (rowAlign[i] == 0) {
                if (sys顯示模式 == 1) {
                    str += "<td class='tdNumber'>" + dataGrp[k][i] + "</td>";
                }
                str += "<td class='tdNumber'>" + dataStrGrp[k][i] + "</td>";

            } else if (rowAlign[i] == 1) {
                if (sys顯示模式 == 1) {
                    str += "<td class='tdText'>" + dataGrp[k][i] + "</td>";
                }
                str += "<td class='tdText'>" + dataStrGrp[k][i] + "</td>";

            } else {
                if (sys顯示模式 == 1) {
                    str += "<td >" + dataGrp[k][i] + "</td>";
                }
                str += "<td>" + dataStrGrp[k][i] + "</td>";
                // str+="<td class='tdNumber'>"+dataStrGrp[k][i]+"</td>"; //DEBUG
            }

        }

        str += strRem[i];
        str += "</tr>";
    }
    str += "</table>";
    return str;
}



function getFinalTableGrpByArray(arr) {
    //setValStr();
    var str = "";
    str += "<table>";
    str += "<tr><td></td><td></td><td></td>";

    for (var i = 1; i <= submitCnt; i++) {
        if (sys顯示模式 == 1) {
            str += "<th>" + i + "數據</th>";
        }
        str += "<th>" + i + "</th>";

    }
    str += "<td></td>";
    str += "</tr>";

    for (var i = 0; i < arr.length; i++) {
        str += "<tr>";
        str += getA(arr[i]);
        str += getB(arr[i]);
        str += getC(arr[i]);// //actual data value
        // str += getD(arr[i]);
        // str += getValFormatted(arr[i]);

        for (var k = 1; k <= submitCnt; k++) {
            // for (var k=0;k<submitCnt;k++){
            // str+="<td>"+k+"</td>";
            // str+="<td>"+dataStrGrp[k][arr[i]]+"</td>";
            var row = arr[i];
            if (rowAlign[row] == 0) {
                // str+="<td class='tdNumber'>"+dataStrGrp[k][i]+"</td>";
                if (sys顯示模式 == 1) {
                    str += "<td class='tdNumber'>" + dataGrp[k][row] + "</td>";
                }

                str += "<td class='tdNumber'>" + dataStrGrp[k][row] + "</td>";

            } else if (rowAlign[i] == 1) {
                if (sys顯示模式 == 1) {
                    str += "<td class='tdText'>" + dataGrp[k][row] + "</td>";
                }

                str += "<td class='tdText'>" + dataStrGrp[k][row] + "</td>";

            } else {
                if (sys顯示模式 == 1) {
                    str += "<td>" + dataGrp[k][row] + "</td>";
                }
                // str+="<td class='tdNumber'>"+dataStrGrp[k][i]+"</td>"; //DEBUG
                str += "<td>" + dataStrGrp[k][row] + "</td>";
            }

        }



        str += strRem[arr[i]];
        str += "</tr>";
    }
    str += "</table>";
    return str;
}



function getA(i) {
    return  '<th>' + i + '</th>';
//    if (jsonObj[i]['A'] == null) {
//        return '<th></th>';
//    }
//    return  '<th>' + jsonObj[i]['A'] + '</th>';
}

function getSegInTd(i) {
    return  '<td>' + strSeg[i] + '</td>';
}

function getB(i) {
    return  '<th>' + strSeg[i] + '</th>';
}
function getRem(i) {
//    return  '<td>' + strRem[i] + '</td>';
    return  strRem[i];
}


function isAlignRight(i) {
    //   data[105]=data[38]+data[48]+data[52]+data[59]+data[64]
    //+data[69]+data[73]+data[77]+data[82]+data[91]+data[95]+data[99]+data[104];

    if (i == 38)
        return true;
    if (i == 48)
        return true;
    if (i == 52)
        return true;
    if (i == 59)
        return true;
    if (i == 64)
        return true;
    if (i == 69)
        return true;
    if (i == 73)
        return true;
    if (i == 77)
        return true;
    if (i == 82)
        return true;
    if (i == 91)
        return true;
    if (i == 95)
        return true;
    if (i == 99)
        return true;
    if (i == 104)
        return true;
    if (i == 105)
        return true;
    if (i == 109)
        return true;
    if (i == 110)
        return true;
    if (i == 113)
        return true;

    return false;
}
function getRowText(i) {
    return strRowTextCn[i];
//    if (optLang == 1) {
//        return strRowTextCn[i];
//    }
//    return strRowText[i];
}



function getC(i) {
    var content = getRowText(i);
    if (content == null) {
        return '<td></td>';
    }
    if (isAlignRight(i)) {
        // return  '<td class="tdNumber">' + jsonObj[i]['C'] + '</td>';
        return  '<td class="tdNumber">' + content + '</td>';

    }

    // return  '<td>' + jsonObj[i]['C'] + '</td>';

    return  '<td>' + content + '</td>';
}

//function getValFormatted(i) {
//    if (isNumberCell(i)) {
//        return '<td  class="tdNumber">' + dataStr[i] + '</td>';
//
//    }
//    return '<td  class="tdText">' + dataStr[i] + '</td>';
//}

function getD(i) {
    if (isNumberCell(i)) {
        return '<td  class="tdNumber">' + data[i] + '</td>';
    }//
    return '<td  class="tdText">' + data[i] + '</td>';
    // return '<td  align="center">' + data[i] + '</td>';

}
function getX(x, i) {
    if (jsonObj[i][x] == null) {
        return '<td></td>';
    }
    return  '<td>' + jsonObj[i][x] + '</td>';
}



function getInputWithLabel(label, id, value) {
    var str = '&nbsp;' + label + '&nbsp;';
    str += "<input type='text' maxlength='12' size='12' value='" + value + "' " + "id='" + id + "'   />";
    return str;
}

function getInputId(id) {
    var label = strRowText[id];
    if (optLang == 1) {
        label = strRowTextCn[id]
    }
    var val = rowDefault[id];

    return getInputWithLabel(label, "txtId" + id, val);
}
function getInputIdRemark(id) {
    var label = strRowText[id];
    if (optLang == 1) {
        label = strRowTextCn[id];
    }
    var val = rowDefault[id];

    // label+=strRem[id];
    //，、。．﹔‧？！︰
    // return getInputWithLabel(label,"txtId"+id,val);
    // var rem="<h3>&nbsp;提示︰"+strRem[id]+"</h3>";
    var rem = "<b>&nbsp;提示︰" + strRem[id] + "</b>";
    // return rem+getInputWithLabel(label,"txtId"+id,val);
    return rem + getInputWithLabel("&nbsp;&nbsp;", "txtId" + id, val);
}

function getSubmitBtn(id, title) {
    var str = "<button onclick='" + id + "()' type='submit'  >" + "提交" + "</button>";
    return str;
}

function getSubmitBtnGrpCore(id, seq, title) {
    var str = "<button onclick='" + id + "Grp(" + seq + ")' type='submit'  >" + "提交" + seq + "</button>";
    return str;
}



function readInputToFixed2(id) {
    //alert ("readInputToFixed2:"+id);
    return parseFloat(parseFloat(document.getElementById("txtId" + id).value).toFixed(2)); //C31

}
function readInput(id) {
    // alert ("readInputToFixed2:"+id);

    if (id == 10) {
        return document.getElementById("ddl2材料規格").value;
    }
    if (id == 12) {
        return document.getElementById("ddl2表面要求").value;
    }
    if (id == 65) {
        return document.getElementById("ddl2機加工").value;
    }
    if (id == 74) {                     //ddl2鹽霧實驗
        return document.getElementById("ddl2噴沙抛丸震動").value;
    }
    if (id == 79) {                     //ddl2鹽霧實驗
        return document.getElementById("ddl2鹽霧實驗").value;
    }

    return document.getElementById("txtId" + id).value; //C31

}
function readInputToFixedX(id, x) {
    // alert ("readInputToFixed2:"+id);
    return parseFloat(parseFloat(document.getElementById("txtId" + id).value).toFixed(x)); //C31

}

function submitGrpId外觀打磨計算(grp) {
// 57  （【54】 / 60 ) * 【55】
//
// 59		外觀打磨費　小計： 		【56】* （ 1 + (1 - 【57】 ））
    dataGrp[grp][56] = (dataGrp[grp][54] / 60) * dataGrp[grp][55];
    dataGrp[grp][59] = dataGrp[grp][56] * (1 + (1 - dataGrp[grp][57]));
    dataGrp[grp][59] = dataGrp[grp][59].toFixed(2);
//--------------------
    dataStrGrp[grp][56] = dataGrp[grp][56];
    dataStrGrp[grp][57] = dataGrp[grp][57];
    dataStrGrp[grp][59] = "¥" + dataGrp[grp][59];


}
function sum工序費用() {
    // alert("submitCnt= "+submitCnt);
    for (var i = 1; i <= submitCnt; i++) {
        // alert("computeAll i="+i);
        submitGrpIdAll工序費用(i);
    }
    sum();
}
function computeTotal() {
    // alert("submitCnt= "+submitCnt);
    for (var i = 1; i <= submitCnt; i++) {
        // alert("computeAll i="+i);
        computeGrpTotal(i);
    }
    sum總計();
}
function computeGrpTotal(grp) {
    dataStrGrp[grp][13] = getTwoDecimal(dataGrp[grp][13]);

    // dataStrGrp[grp][110] = "¥" + getTwoDecimal(dataGrp[grp][110]);
}
function sum模具總價() {
    for (var i = 1; i <= submitCnt; i++) {
        sumGrp模具總價(i);
    }
    sum總計();
}
function sumGrp模具總價(grp) {
    dataGrp[grp][23] = sumUpArr(grp, [19, 20, 21, 22]);

    dataGrp[grp][24] = dataGrp[grp][23] / val美金兌人民幣;
    // dataStrGrp[grp][23] = "¥"+dataGrp[grp][23] ;
    // dataStrGrp[grp][24] = "US$"+dataGrp[grp][24] ;

}
function sum組裝費用() {
    for (var i = 1; i <= submitCnt; i++) {
        sumGrp組裝費用(i);
    }
    sum總計();
}
function sumGrp組裝費用(grp) {
    dataGrp[grp][109] = dataGrp[grp][107] + dataGrp[grp][108];
    dataStrGrp[grp][109] = dataGrp[grp][109];
}
function sum管銷利潤() {
    for (var i = 1; i <= submitCnt; i++) {
        sumGrp管銷利潤(i);
    }
    sum總計();
}
function sumGrp管銷利潤(grp) {
    dataGrp[grp][106] = (dataGrp[grp][131] / 100 * dataGrp[grp][105]).toFixed(2);
    // dataStrGrp[grp][106] = "¥"+dataGrp[grp][106] ;
}
function sum總計() {
    for (var i = 1; i <= submitCnt; i++) {
        sumGrp總計(i);
    }
    setDataStrFormat();
}
function sumGrp總計(grp) {
    dataGrp[grp][23] = sumUpArr(grp, [19, 20, 21, 22])
    dataGrp[grp][106] = dataGrp[grp][131] * dataGrp[grp][105];
    dataGrp[grp][110] = dataGrp[grp][23] + dataGrp[grp][13] * (sumUpArr(grp, [105, 106, 109]));
    dataGrp[grp][111] = dataGrp[grp][110] * 0.17;
    dataGrp[grp][113] = sumUpArr(grp, [110, 111, 112]);
    dataGrp[grp][114] = dataGrp[grp][113] / val美金兌人民幣;
}

function submitGrpIdAll工序費用(grp) {
    submitGrpId材料計算(grp); // 1
    submitGrpId壓鑄計算(grp); // 2
    submitGrpId毛刺處理(grp); // 3
    submitGrpId外觀打磨計算(grp); //4
    submitGrpId平整度整形計算(grp); //5
    submitGrpId機加工計算(grp); //6
    submitGrpId冷噴熱燒毛刺計算(grp); // 7
    submitGrpId噴沙拋丸震動研磨(grp); // 8
    submitGrpId皮膜處理計算(grp); // 9
    submitGrpId粉體液體烤漆絲網印計算(grp); // 10
    submitGrpId其它特殊處理計算(grp); // 11
    submitGrpId氣密性測試(grp); // 12
    submitGrpId篩選包裝(grp); // 13
    submitGrpId各工序費用(grp); // 13
//    sum管銷利潤();
}

//7
function submitGrpId冷噴熱燒毛刺計算(grp) {
    dataGrp[grp][73] = (dataGrp[grp][71] / 60) * dataGrp[grp][72];
}

// 8
function submitGrpId噴沙拋丸震動研磨(grp) {
    dataGrp[grp][77] = (dataGrp[grp][75] / 60) * dataGrp[grp][76];
}

// 9
function submitGrpId皮膜處理計算(grp) {
    dataGrp[grp][82] = dataGrp[grp][80] * dataGrp[grp][81];
}

// 10
function submitGrpId粉體液體烤漆絲網印計算(grp) {
    dataGrp[grp][91] = ((dataGrp[grp][87] + dataGrp[grp][88]) * dataGrp[grp][86]) * (1 + (1 - dataGrp[grp][89])) * dataGrp[grp][90];
}

// 11
function submitGrpId其它特殊處理計算(grp) {
    dataGrp[grp][95] = dataGrp[grp][94];
}


// 12
function submitGrpId氣密性測試(grp) {
    dataGrp[grp][99] = dataGrp[grp][98];
}

// 13
function submitGrpId篩選包裝(grp) {
    //(【101】/ 60 ) *【篩選包裝費率】
    dataGrp[grp][102] = dataGrp[grp][101] / 60 * dataGrp[grp][100];
//     【102】+【103】
    dataGrp[grp][104] = dataGrp[grp][102] + dataGrp[grp][103];
    // dataGrp[grp][104]=999.99;
    //---
//  dataStrGrp[grp][104] = "¥" + getTwoDecimal(dataGrp[grp][104]);
}
function submitGrpId管銷利潤(grp) {
    // dataGrp[grp][104]=999.99;
    //---
//  dataStrGrp[grp][104] = "¥" + getTwoDecimal(dataGrp[grp][104]);
}


// 1 - 13
function submitGrpId各工序費用(grp) {
    dataGrp[grp][105] = sumUpArr(grp, [38, 48, 52, 59, 64, 69, 73, 77, 82, 91, 95, 99, 104]);
}
function sumUpArr(grp, arr) {
//    alert(arr);
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
//        if (grp === 0)
//            console.log(i + " " + grp + " " + arr[i] + " " + dataGrp[grp][arr[i]]);
        var oneVal = dataGrp[grp][arr[i]];
        if (isNaN(oneVal)) {
//            if (grp === 0)
//                console.log(i + " " + grp + " " + arr[i] + " " + dataGrp[grp][arr[i]] + "   <<<<<<<<<<<<<<,");
        } else {
            temp += parseFloat(oneVal + "");
//            if (grp === 0)
//                console.log(" current sum is " + temp);
        }
    }
    return temp;
}


function submitGrpId毛刺處理(grp) {
    dataGrp[grp][52] = (dataGrp[grp][50] / 60) * dataGrp[grp][51];

}

//
function submitGrpId機加工計算(grp) {
    //	((【66】/60 ) *【67】) * ( 1 + (1-【68】))
    dataGrp[grp][69] = (dataGrp[grp][66] / 60) * dataGrp[grp][67] * (1 + 1 - dataGrp[grp][68]);
    dataGrp[grp][69] = dataGrp[grp][69].toFixed(2);

}

function submitGrpId平整度整形計算(grp) {
    // 63 人工費/只 		公式計算（【61】 / 60） *【62】
    // 64		平整度整形費　小計： 		公式計算（【61】 / 60） *【62】
    // dataGrp[grp][62]=parseFloat(dataGrp[grp][62]);

    dataGrp[grp][63] = (dataGrp[grp][61] / 60) * dataGrp[grp][62];
    dataGrp[grp][64] = (dataGrp[grp][61] / 60) * dataGrp[grp][62];
    dataGrp[grp][64] = dataGrp[grp][64].toFixed(2);

}

function submitGrpId壓鑄計算(grp) {
    dataGrp[grp][43] = 60 / dataGrp[grp][42];
    dataGrp[grp][43] = dataGrp[grp][43].toFixed(4);
    dataGrp[grp][44] = dataGrp[grp][41] / dataGrp[grp][43];
    dataGrp[grp][45] = dataGrp[grp][132] / dataGrp[grp][43];
    dataGrp[grp][46] = dataGrp[grp][133] * dataGrp[grp][31];

// (【46】+【45】+【44】)*(1+(1-【47】)) /【16】

    var temp1 = dataGrp[grp][44] + dataGrp[grp][45] + dataGrp[grp][46];
    var temp2 = temp1 * (2 - dataGrp[grp][47]);
    var temp3 = temp2 / dataGrp[grp][16];
    dataGrp[grp][48] = temp3;
//    if (isNaN(dataGrp[grp][48])) {
//        dataGrp[grp][48] = 0;
//    }

}
function submitGrpId材料計算(grp) {
    // alert("submitGrpId材料計算(grp) "+grp);
    dataGrp[grp][32] = dataGrp[grp][30] * dataGrp[grp][31];
    dataGrp[grp][34] = dataGrp[grp][33] / dataGrp[grp][31];

//36 （【30】-【35】）*【33】
    dataGrp[grp][36] = (dataGrp[grp][30] - dataGrp[grp][35]) * dataGrp[grp][33];
//37  公式計算（【31】+【33】）*【30】 * 0.02
    dataGrp[grp][37] = (dataGrp[grp][31] + dataGrp[grp][33]) * dataGrp[grp][30] * 0.02;
//38		材料費　小計： 			公式計算（【32】+【36】+【37】）
    dataGrp[grp][32] = parseFloat(dataGrp[grp][32]).toFixed(2);
    dataGrp[grp][36] = parseFloat(dataGrp[grp][36]).toFixed(2);
    dataGrp[grp][37] = parseFloat(dataGrp[grp][37]).toFixed(2);

// dataGrp[grp][36]=getTwoDecimal(dataGrp[grp][36]);
// dataGrp[grp][37]=getTwoDecimal(dataGrp[grp][37]);

    dataGrp[grp][32] = parseFloat(dataGrp[grp][32]);
    dataGrp[grp][36] = parseFloat(dataGrp[grp][36]);
    dataGrp[grp][37] = parseFloat(dataGrp[grp][37]);

    dataGrp[grp][38] = dataGrp[grp][32] + dataGrp[grp][36] + dataGrp[grp][37];
    dataGrp[grp][38] = parseFloat(dataGrp[grp][38]).toFixed(2);

}


function getSubmitBtnGrpCoreV2(id, seq) {
    var str = "<button onclick='submitIdGrp(" + id + "," + seq + ")' type='submit'  >" + "z提交" + seq + "</button>";
    return str;
}
function getSubmitIdExtGrp(grp, id) {
    var str = "<button onclick='submitGrpId(" + grp + "," + id + ")' type='submit'  >" + "提交" + grp + "</button>";
    return str;
}
function getSubmitBtnGrp(id, title) {
    var str = "";

    for (var i = 1; i <= submitCnt; i++) {
        str += getSubmitBtnGrpCore(id, i, title)
    }
    return str;
}

function getSubmitBtnGrpV2(id) {
    var str = "";

    for (var i = 1; i <= submitCnt; i++) {
        str += getSubmitBtnGrpCoreV2(id, i)
    }
    return str;
}

function getSubmitId(id) {
    var str = "";

    for (var i = 1; i <= submitCnt; i++) {
        // str+=getSubmitBtnGrpCoreV2(id,i)
        str += getSubmitIdExtGrp(i, id)

    }
    return str;
}


// function submit019() {
//     data[19] = parseFloat(parseFloat(document.getElementById("txt2壓鑄模費用").value).toFixed(2)); //C31
//     dataStr[19] = data[19];
//     sum();
//     showMsg("showArea", getFinalTable(19, 19));
// }
function submit019Grp(seq) {
    // alert("submit019Grp(seq)"+seq);
    dataGrp[seq][19] = parseFloat(parseFloat(document.getElementById("txt2壓鑄模費用").value).toFixed(2)); //C31
    dataStrGrp[seq][19] = dataGrp[seq][19];
    sum();

    // showMsg("showArea", getFinalTable(19, 19));
    showMsg("showArea", getFinalTableGrp(19, 19));

}
function submit107() {
    data[107] = parseFloat(parseFloat(document.getElementById("txt2其他五金配件").value).toFixed(2)); //C31
    sum();
    showMsg("showArea", getFinalTable(107, 107));
}
function submit108() {
    data[108] = parseFloat(parseFloat(document.getElementById("txt2組裝費").value).toFixed(2)); //C31
    sum();
    showMsg("showArea", getFinalTableGrp(108, 108));
}
function submit109() {
    data[107] = parseFloat(parseFloat(document.getElementById("txt2其他五金配件").value).toFixed(2)); //C31
    data[108] = parseFloat(parseFloat(document.getElementById("txt2組裝費").value).toFixed(2)); //C31
    sum();
    showMsg("showArea", getFinalTableGrp(107, 109));
}
function submit112() {
    data[112] = parseFloat(parseFloat(document.getElementById("txt2海外運輸費用").value).toFixed(2)); //C31
    // var str="[19]壓鑄模費用="+data[19] ;
    // showMsg("showArea","");
//   alert("submit019 "+data[19]);

    sum();
    showMsg("showArea", getFinalTableGrp(112, 112));

}
function sum壓鑄費() {
    dataX46 = data[46] * data[31];
// (【46】+【45】+【44】)*(1+(1-【47】)) /【16】
    data[48] = (dataX46 + data[45] + data[44]) * (1 + (1 - data[47])) / data[16];
}

function submit052() {
    data[50] = parseFloat(parseFloat(document.getElementById("txt2毛刺處理工時").value).toFixed(2)); //C31
    data[51] = 35.00;
    data[52] = (data[50] / 60) * data[51];

    dataStr[50] = data[50];
    dataStr[51] = "¥" + data[51];
    dataStr[52] = "¥" + getTwoDecimal(data[52]);

    showMsg("showArea", getFinalTableGrp(49, 52));
}

function submit048() {
    data[16] = parseFloat(parseFloat(document.getElementById("txt2模穴數").value).toFixed(2)); //C31
    // data[42] = parseFloat(parseFloat(document.getElementById("txt2壓鑄費工時").value).toFixed(2)); //C31
    data[47] = parseFloat(parseFloat(document.getElementById("txt2壓鑄費良品率").value).toFixed(2)); //C31

    //ver002
    data[42] = parseFloat(document.getElementById("txt2壓鑄費工時").value); //C31
    data[42] = data[42] / 60;
    // data[42] =get小數點3位(data[42] );

    data[43] = 60 / data[42];
    data[47] = data[47] / 100;
//ddl2壓鑄機台
    var temp = document.getElementById("ddl2壓鑄機台").value;

    // str+="材料規格: "+val材料規格.split("|")[0]+"<br>";
    // str+="材料價格/kg: "+val材料規格.split("|")[1]+"<br>";//
    // str+="廢料價格/kg: "+val材料規格.split("|")[2]+"<br>";//
    data[40] = temp.split("|")[0];
    data[41] = temp.split("|")[1];
    data[45] = temp.split("|")[2];
    data[46] = temp.split("|")[3];
    // data[46]=temp.split("|")[3];
    data[44] = data[41] / data[43];
    data[45] = data[45] / data[43];
//     data[46]=data[46] * data[31];
// // (【46】+【45】+【44】)*(1+(1-【47】)) /【16】
// data[48]=(data[46]+data[45]+data[44])*(1+(1-data[47])) /data[16];

    sum壓鑄費();
    dataStr[16] = data[16];
    dataStr[31] = data[31];

    dataStr[40] = data[40];
    dataStr[41] = data[41];
    // dataStr[42] = data[42];

    dataStr[43] = getTwoDecimal(data[43]);
    dataStr[44] = data[44];
    dataStr[45] = getTwoDecimal(data[45]);
    dataStr[46] = getTwoDecimal(data[46]);
    dataStr[47] = data[47] * 100 + "%";
// dataStr[48]=getTwoDecimal(  data[48]);
    // sum();


    var arr = [16, 31, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
    showMsg("showArea", getFinalTableGrpByArray(arr));

}

function submit059() {//txt2打磨工時
    sum();
    data[54] = parseFloat(parseFloat(document.getElementById("txt2打磨工時").value).toFixed(2)); //C31
    data[57] = parseFloat(parseFloat(document.getElementById("txt2打磨良品率").value).toFixed(2)); //C31
    data[57] = data[57] / 100;
    data[56] = (data[54] / 60) * data[55];
    data[59] = data[56] * (1 + (1 - data[57]));
    // E56*(1+(1-E57))
    sum();
    var arr = [53, 54, 55, 56, 57, 59];
    showMsg("showArea", getFinalTableGrpByArray(arr));
}
function submit069() {//txt2打磨工時
    sum();
    data[66] = parseFloat(parseFloat(document.getElementById("txt2機加工工時").value).toFixed(2)); //C31
    data[68] = parseFloat(parseFloat(document.getElementById("txt2機加工良品率").value).toFixed(2)); //C31
    data[68] = data[68] / 100;
    //((【66】/60 ) *【67】) * ( 1 + (1-【68】))
    data[69] = ((data[66] / 60) * data[67]) * (1 + (1 - data[68]))
    // E56*(1+(1-E57))
    sum();
    showMsg("showArea", getFinalTableGrp(65, 69));
}
function submit073() {//txt2打磨工時
    sum();
    data[71] = parseFloat(parseFloat(document.getElementById("txt2冷噴工時").value).toFixed(2)); //C31
    //（【71】 / 60） *【72】
    data[73] = (data[71] / 60) * data[72];
    sum();
    showMsg("showArea", getFinalTableGrp(70, 73));
}
function submit077() {//txt2打磨工時
    sum();
    data[75] = parseFloat(parseFloat(document.getElementById("txt2噴砂工時").value).toFixed(2)); //C31
    //（【75】 / 60） *【76】
    data[77] = (data[75] / 60) * data[76];
    sum();
    showMsg("showArea", getFinalTableGrp(75, 77));
}
function submit082() {//txt2打磨工時
    var temp = document.getElementById("ddl2鹽霧實驗").value;
    data[79] = temp.split("|")[0];
    data[81] = temp.split("|")[1];
    data[80] = parseFloat(parseFloat(document.getElementById("txt2皮膜處理表面積").value).toFixed(2)); //C31
    data[82] = data[80] * data[81];
    showAreaSumFirst(getFinalTableGrp(78, 82));
}
function submit091() {//txt2打磨工時
    var temp = document.getElementById("ddl2表面要求").value;
    data[85] = temp.split("|")[0];
    data[87] = temp.split("|")[1];
    data[88] = temp.split("|")[2];
    data[86] = parseFloat(parseFloat(document.getElementById("txt2表面要求工件表面積").value).toFixed(2)); //C31
    data[89] = parseFloat(parseFloat(document.getElementById("txt2表面要求良品率").value).toFixed(2)); //C31
    data[90] = parseFloat(parseFloat(document.getElementById("txt2表面要求產品難度系數").value).toFixed(2)); //C31
    // data[82]=data[80]*data[81];
    //公式計算 ***((D87+D88)*D86)*(1+(1-D89))*D90

    dataStr[85] = data[85]

    data[87] = parseFloat(data[87]);
    data[88] = parseFloat(data[88]);
    data[89] = data[89] / 100;
    data[91] = ((data[87] + data[88]) * data[86]) * (1 + (1 - data[89])) * data[90];
    showAreaSumFirst(getFinalTableGrp(84, 91));
}
function submit095() {//txt2打磨工時

    data[93] = parseFloat(parseFloat(document.getElementById("txt2其它特殊處理工時").value).toFixed(2)); //C31
    data[94] = parseFloat(parseFloat(document.getElementById("txt2其它特殊處理費用").value).toFixed(2)); //C31
    data[95] = data[94];
    showAreaSumFirst(getFinalTableGrp(92, 95));
}
function submit099() {//txt2打磨工時

    data[97] = parseFloat(parseFloat(document.getElementById("txt2氣密性測試工時").value).toFixed(2)); //C31
    data[98] = parseFloat(parseFloat(document.getElementById("txt2氣密性測試費用").value).toFixed(2)); //C31
    data[99] = data[98];
    showAreaSumFirst(getFinalTableGrp(96, 99));
}
function submit104() {//txt2打磨工時

    data[101] = parseFloat(parseFloat(document.getElementById("txt2篩選包裝工時").value).toFixed(2)); //C31
    data[103] = parseFloat(parseFloat(document.getElementById("txt2篩選包裝包材費").value).toFixed(2)); //C31
    data[102] = (data[101] / 60) * lookup篩選包裝費率;
    data[104] = data[102] + data[103];
    showAreaSumFirst(getFinalTableGrp(100, 104));
}
function submit064() {//txt2打磨工時
    sum();
    data[61] = parseFloat(parseFloat(document.getElementById("txt2平整度整形费工時").value).toFixed(2)); //C31
    data[63] = (data[61] / 60) * data[62];
    data[64] = (data[61] / 60) * data[62];


    sum();

    showMsg("showArea", getFinalTableGrp(60, 64));
}
function hideShowArea() {
    return;
    //   $("#inputArea").hide(200).show(500);
    //  $("#showArea").hide(200).show(500);
}


function btnCaseA(id) {
    sum();
    showLevel3('A');
    var str = "";
    // str += getInputId(id);//WithLabel('壓鑄模費用', 'txt2壓鑄模費用', '0');
    str += getInputIdRemark(id);//WithLabel('壓鑄模費用', 'txt2壓鑄模費用', '0');
    str += getSubmitId(id);
    showMsg("inputArea", str)
//    showMsg("showArea", getFinalTableGrpByArray(showArr[id]));

    showAreaByStdArr(id);
    // showMsg("showArea", getFinalTableGrp(id, id));
}

function btnSimpleInputShowArr(id, arr) {
    var str = "";
    str += getInputIdRemark(id);
    str += getSubmitId(id);
    showMsg("inputArea", str)
    // var arr = [21];
    showMsg("showArea", getFinalTableGrpByArray(arr));
    // showMsg("showArea", getFinalTableGrp(id, id));

}



function btnCaseB(id) {
//    sum();
    var str = "";

    str += getInputIdRemark(id);
    str += getSubmitId(id);
    showMsg("inputArea", str);

    showAreaByStdArr(id);

}

function setValStrCaseRMB2Decimal(id) {
    for (var i = 1; i <= submitCnt; i++) {
        dataStrGrp[i][id] = "¥" + getTwoDecimal(dataGrp[i][id]);
    }
}
function setValStrCaseTextOrInteger(id) {
    for (var i = 1; i <= submitCnt; i++) {
        dataStrGrp[i][id] = dataGrp[i][id];
    }
}
function setValStrCasePercent(id) {
    for (var i = 1; i <= submitCnt; i++) {
        dataStrGrp[i][id] = (100 * dataGrp[i][id]) + "%";
    }
}
function setValStrCaseUSD2Decimal(id) {
    for (var i = 1; i <= submitCnt; i++) {
        dataStrGrp[i][id] = "US$" + getTwoDecimal(dataGrp[i][id]);
    }
}


function setDataStrFormat() {

    // 1. data for biz
    var arrText = [7, 8, 9, 10, 12, 16, 29, 31, 40, 65, 71, 74, 79, 80, 85];
    var arrRMB2 = [132, 133, 19, 20, 21, 22, 23, 30, 32, 35, 36, 37, 38, 41, 45, 46, 48, 51, 52, 55, 56, 59, 62, 63, 64, 67, 69, 72, 73, 76, 77, 81, 82, 87, 88, 91, 94, 95, 98, 99, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113];
    var arrPercent0 = [34, 47, 57, 68, 89, 131];
    var arrPercent2 = [];

    var arrUSD2 = [24, 114];
    var arrDecimal0 = [13];
    var arrDecimal1 = [42, 50, 54, 61, 66, 71, 75, 86, 90, 93, 97, 101]; //工時
    var arrDecimal2 = [43, 44];
    var arrDecimal3 = [11, 31, 33];
    var arrDecimal4 = [];
    var temp;

    // 2 define local function
    // Number.POSITIVE_INFINITY
    function checkNaN(num) {
        if (isNaN(num)) {
            return 0;
        }
        if (num === Number.POSITIVE_INFINITY) {
            return 0;
        }

        return num;
    }
    function setDataStr___Text(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var grp = 1; grp <= submitCnt; grp++) {
                dataStrGrp[grp][arr[i]] = dataGrp[grp][arr[i]];
            }
        }
    }

    function setDataStr___DecimalX(arr, x) {
        for (var i = 0; i < arr.length; i++) {
            for (var grp = 1; grp <= submitCnt; grp++) {
                //            dataStrGrp[grp][arr[i]] = getTwoDecimal(checkNaN(dataGrp[grp][arr[i]]));
//                dataStrGrp[grp][arr[i]] = checkNaN(dataGrp[grp][arr[i]]);
//                dataStrGrp[grp][arr[i]] = parseFloat(dataStrGrp[grp][arr[i]]).toFixed(x);
                temp = checkNaN(dataGrp[grp][arr[i]]);
                dataStrGrp[grp][arr[i]] = parseFloat(temp).toFixed(x);
//                dataStrGrp[grp][arr[i]] = accounting.formatMoney(temp, "", x, ".", ",");
                dataStrGrp[grp][arr[i]] = accounting.formatMoney(temp, "", x, ",", ".");

            }
        }
    }


//// European formatting (custom symbol and separators), can also use options object as second parameter:
//accounting.formatMoney(4999.99, "€", 2, ".", ","); // €4.999,99
    function setDataStr___RMB2(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var grp = 1; grp <= submitCnt; grp++) {
//                if (isNaN(dataGrp[grp][arr[i]])) {
//                    dataStrGrp[grp][arr[i]] = "¥0.00";
//                } else {
//                    dataStrGrp[grp][arr[i]] = "¥" + getTwoDecimal(dataGrp[grp][arr[i]]);
//                }
                temp = checkNaN(dataGrp[grp][arr[i]]);
                dataStrGrp[grp][arr[i]] = accounting.formatMoney(temp, "¥", 2, ",", ".");

            }
        }
    }

    function setDataStr___USD2(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var grp = 1; grp <= submitCnt; grp++) {
//                if (isNaN(dataGrp[grp][arr[i]])) {
//                    dataStrGrp[grp][arr[i]] = "US$0.00";
//                } else {
//                    dataStrGrp[grp][arr[i]] = "US$" + getTwoDecimal(dataGrp[grp][arr[i]]);
////                 dataStrGrp[i][id] = "¥" + getTwoDecimal(dataGrp[i][id]);
//                }
                temp = checkNaN(dataGrp[grp][arr[i]]);
                dataStrGrp[grp][arr[i]] = accounting.formatMoney(temp, "US$", 2, ",", ".");
            }
        }
    }
    function setDataStr___Percent0(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var grp = 1; grp <= submitCnt; grp++) {
                dataStrGrp[grp][arr[i]] = Math.round(checkNaN(dataGrp[grp][arr[i]] * 100)) + "%";
//                 dataStrGrp[i][id] = "¥" + getTwoDecimal(dataGrp[i][id]);
            }
        }
    }



    function setDataStr___Percent2(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var grp = 1; grp <= submitCnt; grp++) {
                dataStrGrp[grp][arr[i]] = getTwoDecimal(checkNaN(dataGrp[grp][arr[i]] * 100)) + "%";
//                 dataStrGrp[i][id] = "¥" + getTwoDecimal(dataGrp[i][id]);
            }
        }
    }

    // 3. action 
    setDataStr___Text(arrText);
    setDataStr___RMB2(arrRMB2);
    setDataStr___USD2(arrUSD2);
    setDataStr___Percent0(arrPercent0);
    setDataStr___Percent2(arrPercent2);
//    setDataStr___Decimal1(arrDecimal1);
//    setDataStr___Decimal2(arrDecimal2);
    setDataStr___DecimalX(arrDecimal0, 0);
    setDataStr___DecimalX(arrDecimal1, 1);
    setDataStr___DecimalX(arrDecimal2, 2);
    setDataStr___DecimalX(arrDecimal3, 3);
    setDataStr___DecimalX(arrDecimal4, 4);


}

function showAreaByStdArr(id) {
    sum();
    var msg = getFinalTableGrpByArray(showArr[id]);
    var area = "showArea";
    var a = "#" + area;
    // $(a).hide(100).show(300);
    $(a).show(500);
    document.getElementById(area).innerHTML = "<h3>" + msg + "</h3>";
}

function showMsg(area, msg) {
    var a = "#" + area;
    // $(a).hide(100).show(300);
    $(a).show(500);
    document.getElementById(area).innerHTML = "<h3>" + msg + "</h3>";
}
function showMsgCore(area, msg) {
    document.getElementById(area).innerHTML = "<h3>" + msg + "</h3>";
}
function showAreaSumFirst(msg) {
    sum();
    var area = 'showArea';
    var a = "#" + area;
    $(a).hide(200).show(500);
    document.getElementById(area).innerHTML = "<h3>" + msg + "</h3>";
}


var toShowNum = true;

// alert("index_biz.js");
function getBtnTitle(i) {
    // 【模穴數】

    // return btnObj[i]['B'];
    if (optLang == 0) {
        return strBtnTitle[i];
    }
    if (optLang == 1) {
        return strBtnTitleCn[i];
    }
    // defualt 繁體
    return strBtnTitle[i];
}

function getRowText(i) {
    // return btnObj[i]['B'];
    if (optLang == 0) {
        return strRowText[i];
    }
    if (optLang == 1) {
        return strRowTextCn[i];
    }
    // defualt 繁體
    return strRowText[i];
}


function onChangeX() {
    var t1 = 600;
    $("#level1").hide(t1);
    $("#level2").hide(t1);
    $("#level3a").hide(t1);
    $("#level3b").hide(t1);
    $("#level3c").hide(t1);
    $("#level4").hide(t1);

    $("#inputArea").hide(t1);
    $("#showArea").hide(t1);

}


function toStart() {
    var t1 = 600;
    $("#level1").show(t1);
    $("#level2").show(t1);
    $("#level3a").hide(t1);
    $("#level3b").hide(t1);
    $("#level3c").hide(t1);
    $("#level4").hide(t1);


    $("#inputArea").hide(t1);
    $("#showArea").hide(t1);

}


function showLevel1Btns() {
    var str = "";
    // str+=showBtnColor('btn113','title113',999);
    // str+=showBtnColor('btn113',btnObj[113]['B'],999);
    str += "&nbsp;" + showBtnColor('btn014', "輸入基礎資料", 3);
    str += showBtnColor('btn113', getBtnTitle(113), 999);
    alert(str);
    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn110', getBtnTitle(110), 1);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn111', getBtnTitle(111), 1);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn112', getBtnTitle(112), 1);
    showMsg('level1', str);
}
function showLevel1BtnsCore() {
    var str = "";
    // str+=showBtnColor('btn113','title113',999);
    // str+=showBtnColor('btn113',btnObj[113]['B'],999);
    // str+="&nbsp;"+showBtnColor('btn014',"輸入基礎資料",3);
    str += showBtnColor('btn113', getBtnTitle(113), 999);

    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn110', getBtnTitle(110), 1);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn111', getBtnTitle(111), 1);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn112', getBtnTitle(112), 1);
    showMsgCore('level1', str);
}

function showLevel2Btns() {
    var str = "";
    str += showBtnColor('btn110', getBtnTitle(110), 1);
    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn023', getBtnTitle(23), 3);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn013', getBtnTitle(13), 3);
    str += showBtnColor('btn___', ' * ', 0);
    str += showBtnColor('btn___', ' ( ', 0);
    str += showBtnColor('btn105', getBtnTitle(105), 3);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn106', getBtnTitle(106), 3);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn109', getBtnTitle(109), 3);
    str += showBtnColor('btn___', ' ) ', 0);
    showMsg('level2', str);
}

function get三位整數(id) {
    if (id < 10) {

        strId = "00" + id;
    }
    if (id < 100 && id >= 10) {
        strId = "0" + id;
    }
    if (id >= 100) {
        strId = id;
    }
    return strId;
}

function get工序費用(id, arr) {
    var str = "";
    str += showBtnColor('btn105', getBtnTitle(105), 3);
    str += showBtnIdTitleColor("btn" + get三位整數(id), getBtnTitle(id), 2);
    str += showBtnColor('btn___', ' : ', 0);
    var strId;
    for (var i = 0; i < arr.length; i++) {
        strId = get三位整數(arr[i]);
        str += showBtnIdTitleColor("btn" + strId, getBtnTitle(arr[i]), 4);
    }
    return str;
}

function getCheckDdl(id, arr) {
    var str = "";
//    str += showBtnColor('btn105', getBtnTitle(105), 3);
//    str += showBtnIdTitleColor("btn" + get三位整數(id), getBtnTitle(id), 2);
//    str += showBtnColor('btn___', ' : ', 0);
    var strId;
    for (var i = 0; i < arr.length; i++) {
        strId = get三位整數(arr[i]);
        str += showBtnIdTitleColor("btn" + strId, getBtnTitle(arr[i]), 4);
    }
    return str;
}

function get基礎資料(arr) {
    var str = "";
    // str+=showBtnColor('btn105',getBtnTitle(105),3);
    // str+=showBtnIdTitleColor("btn"+get三位整數(id),getBtnTitle(id),2);
    // str+=showBtnColor('btn___',' : ',0);
    var strId;
    for (var i = 0; i < arr.length; i++) {
        strId = get三位整數(arr[i]);
        str += showBtnIdTitleColor("btn" + strId, getBtnTitle(arr[i]), 4);
    }
    return str;
}


function showLevel4Btns(id) {
    // var str="<hr><hr>";
    setFocus(id);
    showMsgCore('inputArea', "");
    var str = "";
    var arr;
    if (id == 14) {
        arr = [7, 8, 9, 10, 11, 12, 13, 16];
        str += get基礎資料(arr);
    }
    if (id == 38) {
        arr = [10, 11, 33];
        str += get工序費用(id, arr);
    }
    if (id == 48) {
        arr = [11, 16, 40, 42, 47];
        str += get工序費用(id, arr);
    }
    if (id == 52) {
        arr = [50];
        str += get工序費用(id, arr);
    }
    if (id == 59) {
        arr = [54, 57];
        str += get工序費用(id, arr);
    }
    if (id == 64) {
        arr = [61];
        str += get工序費用(id, arr);
    }
    if (id == 69) {
        arr = [65, 66, 68];
        str += get工序費用(id, arr);
    }
    if (id == 73) {
        arr = [71];
        str += get工序費用(id, arr);
    }
    if (id == 77) {
        arr = [74, 75];
        str += get工序費用(id, arr);
    }
    if (id == 82) {
        arr = [79, 80];
        str += get工序費用(id, arr);
    }
    if (id == 91) {
        arr = [12, 86, 87, 88, 89, 90];
        str += get工序費用(id, arr);
    }
    if (id == 95) {
        arr = [93, 94];
        str += get工序費用(id, arr);
    }
    if (id == 99) {
        arr = [97, 98];
        str += get工序費用(id, arr);
    }
    if (id == 104) {
        arr = [101, 103];
        str += get工序費用(id, arr);
    }
    if (id == 130) {// check all ddl
        arr = [10, 12, 40, 65, 74, 79];
        str += getCheckDdl(id, arr);
    }
    showMsgCore('level4', str);
}

function showLevel2BtnsCore() {
    var str = "";
    str += showBtnColor('btn110', getBtnTitle(110), 1);
    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn023', getBtnTitle(23), 3);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn013', getBtnTitle(13), 3);
    str += showBtnColor('btn___', ' * ', 0);
    str += showBtnColor('btn___', ' ( ', 0);
    str += showBtnColor('btn105', getBtnTitle(105), 3);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn106', getBtnTitle(106), 3);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn109', getBtnTitle(109), 3);
    str += showBtnColor('btn___', ' ) ', 0);
    showMsgCore('level2', str);
}

function start() {
    $("#level1").show(1000);
    $("#level2").hide(1000);
    showLevel3('X');
    $("#level4").hide(1000);

    showLangBtns();

}
function btnLogo() {
    $("#logo").toggle(200);
}
function btnOpt() {
    $("#opt").toggle(200);
}
function setFocus(id) {
    var t1 = 1000;
    var t2 = 1000;

    if (id == 14) {
        $("#logo").hide(1000);//logo
        $("#level1").hide(1000);
        $("#level2").hide(1000);
        showLevel3('X');
        $("#level4").show(1000);

        //  showMsg("inputArea", '');
    }
    if (id == 19) {
        $("#logo").hide(1000);//logo
        $("#level1").hide(1000);
        $("#level2").hide(1000);
        showLevel3('A');
        //  showMsg("inputArea", '');
    }

    if (id == 23) {
        $("#logo").hide(1000);//logo
        $("#level1").hide(1000);
        $("#level2").show(600);
        showLevel3('A');
        showMsg("inputArea", '');
    }
    if (id == 109) {

        $("#logo").hide(t2);//logo
        $("#level1").show(t2);
        $("#level2").show(t2);
        showLevel3('C');
        // showLevel3('X');
        // $("#level3a").hide(t2);
        // $("#level3b").hide(t2);
        // $("#level3c").show(t2);
        // $("#level3d").hide(t2);
        // $("#level4").hide(t2);
    }

    if (id == 106) {

        $("#logo").hide(t2);//logo
        $("#level1").show(t2);
        $("#level2").show(t2);
        // showLevel3('B');
        // showLevel3('X');
        $("#level3a").hide(t2);
        $("#level3b").hide(t2);
        $("#level3c").hide(t2);
        $("#level3d").show(t2);  // ADD IT LATE, TO BE 3d
        $("#level4").hide(t2);
    }
    if (id == 38 || id == 48 || id == 52 || id == 59 || id == 64 || id == 69 || id == 73 || id == 77 || id == 82 || id == 91 || id == 95 || id == 99 || id == 104) {
        $("#level4").show(t2);
        $("#logo").hide(t2);//logo
        $("#level1").hide(t2);
        $("#level2").hide(t2);
        // showLevel3('B');
        showLevel3('X');
        // $("#level3a").hide(t2);
        // $("#level3b").hide(t2);
        // $("#level3c").hide(t2);




        //  showMsg("inputArea", '');
    }//showLevel3("B");
    if (id == 31 || id == 33) {
        $("#level4").show(t2);
        $("#logo").hide(t2);//logo
        $("#level1").hide(t2);
        $("#level2").hide(t2);
        // showLevel3('B');
        // showLevel3('X');
        $("#level3a").hide(t2);
        $("#level3b").hide(t2);
        $("#level3c").hide(t2);




        //  showMsg("inputArea", '');
    }//s
    if (id == 105) {
        $("#logo").hide(1000);//logo
        $("#level1").show(1000);
        $("#level2").show(1000);
        showLevel3('B');
        $("#level4").hide(1000);

        //  showMsg("inputArea", '');
    }
    if (id == 110) {
        $("#logo").hide(1000);//logo
        $("#level1").show(1000);
        $("#level2").show(1000);
        showLevel3('X');
        //  showMsg("inputArea", '');
    }

    // $("#level3a").hide(1000);
    // $("#level3b").hide(1000);
    // $("#level3c").hide(1000);


}
function btnFocus1() {
    $("#logo").hide(1000);//logo
    $("#level1").hide(1000);
    $("#level2").hide(1000);
    // $("#level3a").hide(1000);
    // $("#level3b").hide(1000);
    // $("#level3c").hide(1000);


}
function btnFocus1Undo() {
    var t1 = 600;
    $("#logo").show(t1);//logo
    $("#level1").show(t1);
    $("#level2").show(t1);
    $("#level3a").show(t1);
    $("#level3b").show(t1);
    $("#level3c").show(t1);
    $("#level4").show(t1);


}

function btnSaveJson() {
//    var jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
//    var data = JSON.parse(jsontext);


    var str = JSON.stringify(dataGrp);
    var data = JSON.parse(str);

    var blob = new Blob([JSON.stringify(data)], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "data.json");

}

function btnSaveHtml() {
    var htmlArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 166, 167, 168, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 131, 106, 107, 108, 109, 110, 111, 112, 113, 114];


//----------------------
    OpenWindow = window.open("", "newwin", "height=640, width=800,toolbar=no,scrollbars=yes,menubar=no");
//写成一行
    OpenWindow.document.write("<TITLE>A001</TITLE>");
    OpenWindow.document.write("<BODY BGCOLOR=#ffffff>");
// OpenWindow.document.write("<h1>Hello!中文</h1>");
// OpenWindow.document.write("New window opened!");
// width: 200px;
    var strCss = '<style type="text/css"> \
        table \
        { \
            border-collapse: collapse; \
            border: none; \
            \
        } \
        td \
        { \
            border: solid #000 1px; \
        } \
    </style> \
    ';
    OpenWindow.document.write(strCss);

    var str = "<table>";
    var row = 0;
//    for (var row = 1; row <= ROW_BIZ_CNT; row++) {
    for (var i = 0; i < htmlArr.length; i++) {
        row = htmlArr[i];
        str += "<tr>";

        str += '<td style="width:100px">' + row + '</td>';
        str += '<td style="width:160px">' + strSeg[row] + '</td>';
//        str += getSegInTd(row);
        str += '<td style="width:800px">' + getRowText(row) + '</td>';
        for (var col = 0; col < submitCnt; col++) {
//            str += '<td style="width:400px">' + dataStrGrp[col][row] + '</td>';
            str += '<td style="width:400px">' + dataGrp[col][row] + '</td>';
        }
        str += "</tr>";
    }

    OpenWindow.document.write(str);
    OpenWindow.document.write("</BODY>");
    OpenWindow.document.write("</HTML>");
    OpenWindow.document.close();
}
function xxxbtnSave() {

    var myCsv = "Col1,Col2,Col3\nval1,val2,val3";
    var str = "";

    for (var row = 1; row <= ROW_CNT; row++) {

        str += '"' + getRowText(row) + '"';
        for (var col = 1; col <= submitCnt; col++) {

            str += '"' + dataStrGrp[col][row] + '"';
            if (col == submitCnt) {
                str += "\n";
            } else {
                str += ",";
            }
        }
    }
    //
    // str.replace("¥","￥");
    str.replace("¥", "");

    myCsv = str;
// ￥   ¥

    window.open('data:text/csv;charset=utf-8,' + escape(myCsv));
    // window.open('data:text/csv;charset=utf-8,' + myCsv);
    // window.open('data:text/plain;charset=utf-8,' + escape(myCsv));

}
function showLangBtns() {
    var str = "";
    var temp = toShowNum;

//    str += "語言";
//    str += getDdl語言();
//    str += "&nbsp;品名數";
//    str += getDdl品名數();
    // str+="按鈕";
    // str+=getDdl按鈕();
    toShowNum = false;
//    str += "&nbsp;" + showBtnColor('btn014', "輸入基礎資料", 3);

    str += "&nbsp;" + showBtnColor('btnStart', "Start", 999);
//    str += "&nbsp;" + showBtnColor('btnInit', "Init", 999);
//    str += "&nbsp;" + showBtnColor('btnCheck1', "各工序合計", 999);


//    str += "&nbsp;" + showBtnColor('btnStartDdl', "check DDL", 999);

//    str += "&nbsp;顯示模式";
//    str += getDdl顯示模式();
//    str += "&nbsp;" + showBtnColor('btnFocus1Undo', "顯示 logo", 3);
    str += "&nbsp;" + showBtnColor('btnSaveHtml', "Save html/pdf", 3);
    str += "&nbsp;" + showBtnColor('btnSaveJson', "Save json", 3);
    str += "&nbsp;" + showBtnColor('btnLogo', "Logo", 3);
    str += "&nbsp;" + showBtnColor('btnOpt', "Opt", 3);

//    str += "&nbsp;" + showBtnColor('btnStartDdl2', "檢查下拉", 4);

//    str += "&nbsp;" + showBtnColor('btn130', "所有下拉", 3);


    // str+="&nbsp;"+showBtnColor('btnFocus1',"專注",999);

    // str+=showBtnColor('btnLang0',"繁體",999);
    // str+=showBtnColor('btnLang1',"简体",999);
    toShowNum = temp;


    showMsg('lang', str);

}


function getItemCnt() {
    var val品名數 = document.getElementById("ddl2品名數").value; //C31
    return parseInt(val品名數);
}
function updateLang() {
    var val品名數 = document.getElementById("ddl2品名數").value; //C31
    submitCnt = val品名數;
    var val語言 = document.getElementById("ddl2語言").value; //C31
    if (val語言 == 0) {
        // btnLang0();
        optLang = 0;
    }
    if (val語言 == 1) {
        // btnLang1();
        optLang = 1;
    }
}

function doA等於B乘C(item, a, b, c) {
    dataGrp[item][a] = dataGrp[item][b] * dataGrp[item][c];
}
function doA等於B減C(item, a, b, c) {
    dataGrp[item][a] = dataGrp[item][b] - dataGrp[item][c];
}
function doA等於B除C(item, a, b, c) {
    if (dataGrp[item][c] === 0) {
        dataGrp[item][a] = 0;
        return;
    }
    dataGrp[item][a] = dataGrp[item][b] / dataGrp[item][c];
}
function do毛刺處理(item) {
    dataGrp[item][52] = dataGrp[item][50] / 3600 * dataGrp[item][51];
    setValAndShowSpan___RMB___SameCell(item, 102);
}
function do各工序(item) {
    dataGrp[item][105] = getSumByArr(item, sum各工序Arr);
    setValAndShowSpan___RMB___SameCell(item, 105);

}
function  do平整度整形(item) {
    // 63 人工費/只 		公式計算（【61】 / 60） *【62】
    // 64		平整度整形費　小計： 		公式計算（【61】 / 60） *【62】
    // dataGrp[grp][62]=parseFloat(dataGrp[grp][62]);

    dataGrp[item][63] = (dataGrp[item][61] / 3600) * dataGrp[item][62];
    dataGrp[item][64] = (dataGrp[item][61] / 3600) * dataGrp[item][62];
    dataGrp[item][64] = dataGrp[item][64].toFixed(2);
    setValAndShowSpan___RMB___SameCell(item, 63);
    setValAndShowSpan___RMB___SameCell(item, 64);
    do各工序(item);

}
function do打磨費(item) {
// 57  （【54】 / 60 ) * 【55】
//
// 59		外觀打磨費　小計： 		【56】* （ 1 + (1 - 【57】 ））
    dataGrp[item][56] = (dataGrp[item][54] / 3600) * dataGrp[item][55];
    dataGrp[item][59] = dataGrp[item][56] * (1 + (1 - dataGrp[item][57]));
    dataGrp[item][59] = dataGrp[item][59].toFixed(2);

    setValAndShowSpan___RMB___SameCell(item, 56);
    setValAndShowSpan___RMB___SameCell(item, 59);
    do各工序(item);
}
function do冷噴熱燒毛(item) {
    dataGrp[item][73] = (dataGrp[item][71] / 3600) * dataGrp[item][72];
    setValAndShowSpan___RMB___SameCell(item, 73);
    do各工序(item);
}
function do噴沙拋丸震動(item) {
    dataGrp[item][77] = (dataGrp[item][75] / 3600) * dataGrp[item][76];
    setValAndShowSpan___RMB___SameCell(item, 77);
    do各工序(item);
}


function do皮膜處理(item) {
    dataGrp[item][82] = dataGrp[item][80] * dataGrp[item][81];
    setValAndShowSpan___RMB___SameCell(item, 82);
    do各工序(item);
}
//壓鑄費
function do壓鑄費(item) {
//    doA等於B乘C(item, 32, 30, 31);
    dataGrp[item][43] = 3600 / dataGrp[item][42];

    doA等於B除C(item, 44, 41, 43);
    doA等於B除C(item, 45, 132, 43);
    doA等於B乘C(item, 46, 133, 31);
    setValAndShowSpan___RMB___SameCell(item, 43);
    setValAndShowSpan___RMB___SameCell(item, 44);
    setValAndShowSpan___RMB___SameCell(item, 45);
    setValAndShowSpan___RMB___SameCell(item, 46);

    var temp1 = dataGrp[item][44] + dataGrp[item][45] + dataGrp[item][46];
    var temp2 = temp1 * (2 - dataGrp[item][47]);

    var temp3 = temp2 / dataGrp[item][16];
//    dataGrp[item][48] = temp3;
    dataGrp[item][48] = temp3;

    setValAndShowSpan___RMB___SameCell(item, 48);

    do各工序(item);
}
function do材料費(item) {
//    doA等於B乘C(item, 32, 30, 31);
    dataGrp[item][32] = (dataGrp[item][30] * dataGrp[item][31]) / 1000;
    setValAndShowSpan___RMB___SameCell(item, 32);
//    doA等於B除C(item, 34, 33, 31);
    dataGrp[item][34] = (dataGrp[item][33] / dataGrp[item][31]);

    setValAndShowSpan___Percent___SameCell(item, 34);
    dataGrp[item][36] = (dataGrp[item][30] - dataGrp[item][35]) * dataGrp[item][33] / 1000;
    dataGrp[item][37] = (dataGrp[item][31] + dataGrp[item][33]) * dataGrp[item][30] * 0.02 / 1000;
//    dataGrp[item][37] = getDataGrpArray和(31,33) ;

    dataGrp[item][38] = dataGrp[item][32] + dataGrp[item][36] + dataGrp[item][37];

    setValAndShowSpan___RMB___SameCell(item, 36);
    setValAndShowSpan___RMB___SameCell(item, 37);
    setValAndShowSpan___RMB___SameCell(item, 38);

    do各工序(item);
}
function doEntire整表計算___模具() {
    for (var item = 0; item < submitCnt; item++) {
        // 模具
        dataGrp[item][23] = getSumByArr(item, sum模具Arr);
        dataGrp[item][24] = dataGrp[item][23] / rateUsRmb;
    }
}
function doEntire整表計算___組裝() {
    for (var item = 0; item < submitCnt; item++) {
        // 模具
        dataGrp[item][109] = getSumByArr(item, [107, 108]);

    }
}// doEntire整表計算___總計();
function doEntire整表計算___總計() {
    for (var item = 0; item < submitCnt; item++) {
        // 模具
        dataGrp[item][110] = getSumByArr(item, [105, 106, 109]);
        dataGrp[item][111] = dataGrp[item][110] * .17;
        dataGrp[item][113] = getSumByArr(item, [110, 111, 112]);
        dataGrp[item][114] = dataGrp[item][110] / 6.35;



    }
}// doEntire整表計算___總計();


function doEntire整表計算___管銷利潤() {
    for (var item = 0; item < submitCnt; item++) {
        // 模具
        dataGrp[item][106] = dataGrp[item][105] * dataGrp[item][131];

    }
}

function doEntire整表計算___各工序() {
    for (var item = 0; item < submitCnt; item++) {
        // 模具
        dataGrp[item][23] = getSumByArr(item, sum模具Arr);
        dataGrp[item][24] = dataGrp[item][23] / rateUsRmb;

        // 1) 材料費
        dataGrp[item][32] = (dataGrp[item][30] * dataGrp[item][31]) / 1000;
        dataGrp[item][34] = (dataGrp[item][33] / dataGrp[item][31]);
        dataGrp[item][34] = dataGrp[item][34].toFixed(2);

        dataGrp[item][36] = (dataGrp[item][30] - dataGrp[item][35]) * dataGrp[item][33] / 1000;
        dataGrp[item][37] = (dataGrp[item][31] + dataGrp[item][33]) * dataGrp[item][30] * 0.02 / 1000;
        //DEBUG    TEXT NUMBER PROBLEM
        //dataGrp[item][37] = dataGrp[item][31] + dataGrp[item][33];

        dataGrp[item][38] = dataGrp[item][32] + dataGrp[item][36] + dataGrp[item][37];

        // 2) 壓鑄費
        dataGrp[item][43] = 3600 / dataGrp[item][42];
        doA等於B除C(item, 44, 41, 43);
        doA等於B除C(item, 45, 132, 43);
        doA等於B乘C(item, 46, 133, 31);
        var temp1 = dataGrp[item][44] + dataGrp[item][45] + dataGrp[item][46];
        var temp2 = temp1 * (2 - dataGrp[item][47]);
        var temp3 = temp2 / dataGrp[item][16];
        dataGrp[item][48] = temp3;

        // 3) 毛刺處理
        dataGrp[item][52] = dataGrp[item][50] / 3600 * dataGrp[item][51];

        // 4) 打磨費
        dataGrp[item][56] = (dataGrp[item][54] / 3600) * dataGrp[item][55];
        dataGrp[item][59] = dataGrp[item][56] * (1 + (1 - dataGrp[item][57]));
        dataGrp[item][59] = dataGrp[item][59].toFixed(2);

        // 5) 平整度整形
        dataGrp[item][63] = (dataGrp[item][61] / 3600) * dataGrp[item][62];
        dataGrp[item][64] = (dataGrp[item][61] / 3600) * dataGrp[item][62];
        dataGrp[item][64] = dataGrp[item][64].toFixed(2);

        //strRem[69] = "<td>公式計算 ((【66】/3600 ) *【67】) * ( 1 + (1-【68】)) + <br> ((【166】/3600 ) *【167】) * ( 1 + (1-【168】))</td>";
        var g1 = ((dataGrp[item][66] / 3600) * dataGrp[item][67]) * (1 + (1 - dataGrp[item][68]));
        var g2 = ((dataGrp[item][166] / 3600) * dataGrp[item][167]) * (1 + (1 - dataGrp[item][168]));
        dataGrp[item][69] = g1 + g2;




        // 7) 冷噴熱燒毛
        dataGrp[item][73] = (dataGrp[item][71] / 3600) * dataGrp[item][72];

        // 8) 噴沙拋丸震動
        dataGrp[item][77] = (dataGrp[item][75] / 3600) * dataGrp[item][76];

        // 9) 皮膜處理
        dataGrp[item][82] = dataGrp[item][80] * dataGrp[item][81] * dataGrp[item][160];

        // 10) 烤漆
        dataGrp[item][91] = ((dataGrp[item][87] + dataGrp[item][88]) * dataGrp[item][86]) * (1 + (1 - dataGrp[item][89])) * dataGrp[item][90];

        // 11) 特殊處理
        dataGrp[item][95] = dataGrp[item][94];

        // 12) 氣密測試
        dataGrp[item][99] = dataGrp[item][98];

        // 13) 篩選包裝(item) {
        //【篩選包裝費率】=35.00
        dataGrp[item][102] = dataGrp[item][101] / 3600 * 35.00;
        dataGrp[item][104] = dataGrp[item][102] + dataGrp[item][103];

        // 各工序加總
        dataGrp[item][105] = sumUpArr(item, [38, 48, 52, 59, 64, 69, 73, 77, 82, 91, 95, 99, 104]);
    }
}

function doEntire整表計算() {
    doEntire整表計算___模具();
    doEntire整表計算___各工序();
    doEntire整表計算___管銷利潤();
    doEntire整表計算___組裝();
    doEntire整表計算___總計();

}
function do模具sum() {
    for (var item = 0; item < submitCnt; item++) {
        dataGrp[item][23] = getSumByArr(item, sum模具Arr);
        dataGrp[item][24] = dataGrp[item][23] / rateUsRmb;
    }
}
function do模具(item) {
    dataGrp[item][23] = getSumByArr(item, sum模具Arr);
//    setValAndShowSpan___RMB(dataGrp[item][23], item, 23);
    dataGrp[item][24] = dataGrp[item][23] / rateUsRmb;
//    setValAndShowSpan___USD(dataGrp[item][24], item, 24);
    setValAndShowSpan___RMB___SameCellByArray(item, [19, 20, 21, 22, 23]);
    setValAndShowSpan___USD___SameCell(item, 24);

}
function do烤漆(item) {
    dataGrp[item][91] = ((dataGrp[item][87] + dataGrp[item][88]) * dataGrp[item][86]) * (1 + (1 - dataGrp[item][89])) * dataGrp[item][90];
    setValAndShowSpan___RMB___SameCell(item, 91);

    do各工序(item);
}

// 11
function do特殊處理(item) {
    dataGrp[item][95] = dataGrp[item][94];
    setValAndShowSpan___RMB___SameCell(item, 95);

    do各工序(item);
}


// 12
function do氣密測試(item) {
    dataGrp[item][99] = dataGrp[item][98];
    setValAndShowSpan___RMB___SameCell(item, 99);

    do各工序(item);
}

// 13
function do篩選包裝(item) {
    //(【101】/ 60 ) *【篩選包裝費率】
    dataGrp[item][102] = dataGrp[item][101] / 3600 * 35.00;
////     【102】+【103】
    dataGrp[item][104] = dataGrp[item][102] + dataGrp[item][103];
    setValAndShowSpan___RMB___SameCell(item, 102);
    setValAndShowSpan___RMB___SameCell(item, 104);

//
    do各工序(item);
    // dataGrp[item][104]=999.99;
    //---
//  dataStritem[item][104] = "¥" + getTwoDecimal(dataGrp[item][104]);
}


function onChangeDdl(item, row) {
    var id = getDdlSelectIdLine___IdStr(item, row);
//     alert("----onChangeDdl id is " + id);
    var val = document.getElementById(id).value;
//    alert("----onChangeDdl val is " + val);

    if (row === 10 || row === 29) {

        dataGrp[item][29] = val.split("|")[0];
        dataGrp[item][10] = val.split("|")[0];

        dataGrp[item][30] = val.split("|")[1];
        dataGrp[item][35] = val.split("|")[2];
    }
    if (row === 40) {
        dataGrp[item][40] = val.split("|")[0];
        dataGrp[item][41] = val.split("|")[1];
        dataGrp[item][132] = val.split("|")[2];
        dataGrp[item][133] = val.split("|")[3];

    }
    btnStart();
}
function setMainGrp() {
    for (var item = 0; item < COL_CNT; item++) {
//        setMain(item, 10, getDdl010(item));
        setMain(item, 10, getDdl010V2(item));
        

//        setMain(item, 29, getDdl029V2(item));

        setMain(item, 12, getDdl012(item));
        setMain(item, 40, getDdl040V2(item));
        setMain(item, 74, getDdl074(item));
        setMain(item, 79, getDdl079(item));

        //Yield

        for (var i = 0; i < arrInputOverheadProfit.length; i++) {
            setMain(item, arrInputOverheadProfit[i], getTxtInput(item, arrInputOverheadProfit[i]));
        }
        for (var i = 0; i < arrInputYield.length; i++) {
            setMain(item, arrInputYield[i], getTxtInput(item, arrInputYield[i]));
        }

        for (var i = 0; i < arrInputRMB.length; i++) {
            setMain(item, arrInputRMB[i], getTxtInput(item, arrInputRMB[i]));
        }
        for (var i = 0; i < arrInputText.length; i++) {
            setMain(item, arrInputText[i], getTxtInput(item, arrInputText[i]));
        }
        for (var i = 0; i < arrInputFloat.length; i++) {
            setMain(item, arrInputFloat[i], getTxtInput(item, arrInputFloat[i]));
        }
//        alert(arrInputInt);
        for (var i = 0; i < arrInputInt.length; i++) {

            setMain(item, arrInputInt[i], getTxtInput(item, arrInputInt[i]));
        }

//        setMain(item, 47, getTxtInput(item, 47));
//        setMain(item, 57, getTxtInput(item, 57));
//        setMain(item, 68, getTxtInput(item, 68));
//        setMain(item, 89, getTxtInput(item, 89));

    }
}
function setMain(item, row, content) {
    compGrp[item][row] = content;
}

function getMainTableGrpByArray計算() {
    doEntire整表計算();
}
function getMainTableGrpByArray格式() {
    function setRMB(arr) {
        for (var item = 0; item < submitCnt; item++) {
            for (var i = 0; i < arr.length; i++) {
                var row = arr[i];
                dataStrGrp[item][row] = accounting.formatMoney(dataGrp[item][row], "¥", 2, ",", ".");// CORE TO CHANGE
            }
        }
    }
    function setUSD(arr) {
        for (var item = 0; item < submitCnt; item++) {
            for (var i = 0; i < arr.length; i++) {
                var row = arr[i];
                dataStrGrp[item][row] = accounting.formatMoney(dataGrp[item][row], "US$", 2, ",", ".");// CORE TO CHANGE
            }
        }
    }
    function setText(arr) {
        for (var item = 0; item < submitCnt; item++) {
            for (var i = 0; i < arr.length; i++) {
                var row = arr[i];
                dataStrGrp[item][row] = dataGrp[item][row];// CORE TO CHANGE
            }
        }
    }
    function setInt(arr) {
        for (var item = 0; item < submitCnt; item++) {
            for (var i = 0; i < arr.length; i++) {
                var row = arr[i];
                var temp = parseInt(dataGrp[item][row]);
//                var temp = dataGrp[item][row];

                dataStrGrp[item][row] = temp;// CORE TO CHANGE
            }
        }
    }
    function setDecimal1(arr) {
        for (var item = 0; item < submitCnt; item++) {
            for (var i = 0; i < arr.length; i++) {
                var row = arr[i];
                var temp = Math.round(dataGrp[item][row] * 10) / 10;
                dataStrGrp[item][row] = temp;// CORE TO CHANGE
            }
        }
    }
    function setDecimal2(arr) {
        for (var item = 0; item < submitCnt; item++) {
            for (var i = 0; i < arr.length; i++) {
                var row = arr[i];
                var temp = Math.round(dataGrp[item][row] * 100) / 100;
                dataStrGrp[item][row] = temp;// CORE TO CHANGE
            }
        }
    }
    function setPercent(arr) {
        for (var item = 0; item < submitCnt; item++) {
            for (var i = 0; i < arr.length; i++) {
                var row = arr[i];
                var temp = Math.round(dataGrp[item][row] * 100);
                temp = temp / 100;
                dataStrGrp[item][row] = 100 * dataGrp[item][row] + "%";// CORE TO CHANGE
            }
        }
    }
    function setRate(arr) {
        for (var item = 0; item < submitCnt; item++) {
            for (var i = 0; i < arr.length; i++) {
                var row = arr[i];
                var temp = Math.round(dataGrp[item][row] * 100);
                temp = temp / 100;
                dataStrGrp[item][row] = 100 * dataGrp[item][row] + "%";// CORE TO CHANGE
            }
        }
    }
    function setYield(arr) {
        for (var item = 0; item < submitCnt; item++) {
            for (var i = 0; i < arr.length; i++) {
                var row = arr[i];
                var temp = Math.round(dataGrp[item][row] * 100);
                temp = temp / 100;
                dataStrGrp[item][row] = 100 * dataGrp[item][row] + "%";// CORE TO CHANGE
            }
        }
    }
    //

    setRate(setRateArr);
    setRMB(setRMBArr);
    setUSD(setUSDArr);
    setText(setTextArr);
    setPercent(setPercentArr);
    setYield(setYieldArr);
    setDecimal1(setDecimal1Arr);
    setDecimal2(setDecimal2Arr);
    setInt(setIntArr);

}


function getMainTableGrpByArray(arr) {
    getMainTableGrpByArray計算();
    getMainTableGrpByArray格式();


    var checkToEdit = true;
    var checkShowRemark = true;
    var checkArr = document.getElementsByName("check"); //顯示那幾個產品
    var radios = document.getElementsByName('checkToEdit'); //是否編輯
    var radio2 = document.getElementsByName('checkShowRemark'); //是否顯示remark

    if (radios[1].checked) {
        checkToEdit = false;
    }
    if (radio2[1].checked) {
        checkShowRemark = false;
    }

    var str = "";
    str += "<table>";
    str += "<tr><td></td><td></td><td></td>";
    for (var i = 0; i < checkArr.length; i++) {
        if (checkArr[i].checked === true) {
            str += "<th >" + (1 + i) + "</th>";
        }
    }

    // Remark TD as TH
    if (checkShowRemark) {
        str += "<td></td>";
    }
    str += "</tr>";

    var rowDataAlign = new Array(1 + ROW_CNT);
    for (i = 1; i <= ROW_CNT; i++) {
        rowDataAlign[i] = 0; //數字
    }

    //DOING NEvar tdClass="<td class='tdNumber'>"
    var tdClass = new Array(2);
    tdClass[0] = "<td class='tdNumber'>";
    tdClass[1] = "<td class='tdText'>";
    var textArr = [7, 8, 9, 10, 12, 13, 16, 17, 18, 29, 40, 79, 85 ];

    for (var i = 0; i < arr.length; i++) {
        str += "<tr>";
        str += getA(arr[i]);
        str += getB(arr[i]);
        str += getC(arr[i]);// //actual data value
        for (var item = 0; item < checkArr.length; item++) {
            if (checkArr[item].checked === true) {
                var tdStart = tdClass[0];
                if (isValInArray(arr[i], textArr)) {
                    var tdStart = tdClass[1];
                }
//                str += "<td >" + item+" "+arr[i] +" "+ compGrp[item][arr[i]]+"</td>";
                if (checkToEdit) {
                    if (compGrp[item][arr[i]].length > 0) {
//                        if (!isSales && arr[i] === 7) { //雖然顯示 项目 料号 ,但不給編輯
                        if (!isSales && arr[i] === 777) { //NOTE by Mark, 2016-4-5, disable 7 case
                            str += tdStart + "<b><span id='item" + item + "row" + arr[i] + "'> " + dataStrGrp[item][arr[i]] + "</span></b></td>";

                        } else {
                            str += tdStart + compGrp[item][arr[i]] + "<br><span id='item" + item + "row" + arr[i] + "'> " + dataStrGrp[item][arr[i]] + "</span></td>";

                        }
//                        str += "<td class='tdNumber'>" + compGrp[item][arr[i]] + "<br><span id='item" + item + "row" + arr[i] + "'> " + dataStrGrp[item][arr[i]] + "</span></td>";
                    } else {
//                        str += "<td class='tdNumber' >" + compGrp[item][arr[i]] + "<span id='item" + item + "row" + arr[i] + "'> " + dataStrGrp[item][arr[i]] + "</span></td>";
                        str += tdStart + compGrp[item][arr[i]] + "<span id='item" + item + "row" + arr[i] + "'> " + dataStrGrp[item][arr[i]] + "</span></td>";
                    }
                } else {
//                    str += "<td  class='tdNumber'>" + "<span id='item" + item + "row" + arr[i] + "'> " + dataStrGrp[item][arr[i]] + "</span></td>";
                    str += tdStart + "<span id='item" + item + "row" + arr[i] + "'> " + dataStrGrp[item][arr[i]] + "</span></td>";

                }
            }
        }
        if (checkShowRemark) {
            str += getRem(arr[i]);
        }
//        str += strRem[arr[i]];
        str += "</tr>";
    }
    str += "</table>";
    return str;
}



function showMain(msg) {
    var area = "showArea";
    var a = "#" + area;
    // $(a).hide(100).show(300);
    $(a).show(500);
    document.getElementById(area).innerHTML = msg;
}


function btnInitSample(item, json) {
    for (var key in json) {
        var row = parseInt(key);
        var val = json[key];
        dataGrp[item][row] = val;
    }
}
function btnInitOld() {
    for (var item = 0; item < submitCnt; item++) {
        for (var row = 1; row <= ROW_CNT; row++) {
//            if (isValInArray(row, [90])) {
//                dataGrp[item][row] = 1.0;
//                dataStrGrp[item][row] = "1.0";
//            }
            //良率
            if (isValInArray(row, setYieldArr)) {
                dataGrp[item][row] = 0.95;
                dataStrGrp[item][row] = "95%";
            }
            if (isValInArray(row, setRateArr)) {
                dataGrp[item][row] = 0.20;
                dataStrGrp[item][row] = "20%";
            }
//            

            //
            if (isValInArray(row, setDecimal1Arr)) {
                dataGrp[item][row] = 0.0;
                dataStrGrp[item][row] = "0.0";
            }
            //
            if (isValInArray(row, setDecimal2Arr)) {
                dataGrp[item][row] = 0.00;
                dataStrGrp[item][row] = "0.00";
            }

            //輸入金額
            if (isValInArray(row, setRMBArr)) {
                dataGrp[item][row] = 0;
                dataStrGrp[item][row] = "¥0.00";
            }

            if (isValInArray(row, setUSDArr)) {
                dataGrp[item][row] = 0;
                dataStrGrp[item][row] = "US$0.00";
            }
//
//            //計算金額
//            if (isValInArray(row, sum模具Arr)) {
//                dataGrp[item][row] = 0;
//                dataStrGrp[item][row] = "¥0.00";
//            }

            if (isValInArray(row, setTextArr)) {
                dataGrp[item][row] = '...';
                dataStrGrp[item][row] = "...";
            }
            if (isValInArray(row, setIntArr)) {
                dataGrp[item][row] = '0';
                dataStrGrp[item][row] = "0";
            }

            //KNOW RATE
            if (row === 51) {
                dataGrp[item][row] = "35.00";
                dataStrGrp[item][row] = "¥35.00";
            }
            if (row === 55) {
                dataGrp[item][row] = "45.00";
                dataStrGrp[item][row] = "¥45.00";
            }
            if (row === 62) {
                dataGrp[item][row] = "45.00";
                dataStrGrp[item][row] = "¥45.00";
            }
            if (row === 72) {
                dataGrp[item][row] = "35.00";
                dataStrGrp[item][row] = "¥35.00";
            }
            if (row === 90) {
                dataGrp[item][row] = "1.0";
                dataStrGrp[item][row] = "1.0";
            }
            //5. 機加工,由單項改為下拉[傳統][CNC],費率分別設為50和72。<br>
            if (row === 67) {
                dataGrp[item][row] = "50.00";
                dataStrGrp[item][row] = "¥50.00";
            }
            if (row === 167) {
                dataGrp[item][row] = "72.00";
                dataStrGrp[item][row] = "¥72.00";
            }
            if (row === 160) {
                dataGrp[item][row] = "1.0";
                dataStrGrp[item][row] = "1.0";
            }

        }
    }

}
function btnInit() {
    btnInitOld();
    var sample0 = {'6': '<img src="img/img1.png" width="160" alt="img1" />', '7': "(1)12-00620-00003_R6", '8': 'REV 6', '9': '41.25*29*29', '13': '40K', '18': '100K', 19: 71500, '20': 12000, '21': 8000, '22': 8000};
    var sample1 = {'6': '<img src="img/img2.png" width="160" alt="img2" />', '7': "(2)12-00621-00003_R6", '8': 'REV 6', '9': '36.2*29*29', '13': '40K', '18': '100K', 19: 0, '20': 0, '21': 8000, '22': 8000};
    btnInitSample(0, sample0);
    btnInitSample(1, sample1);

    btnInitSample(0, {'16': 1, "17": 2});
    btnInitSample(1, {'16': 1, "17": 2});

    btnInitSample(0, {'66': 30, "166": 15});

    var sample0a = {'31': 13, '33': 350, '42': 30, '50': 82, '54': 150, '57': 0.99, '61': 60, '71': 60, '75': 60, '80': 0.99, '81': 0.88};
    var sample0b = {'86': 6, '87': 0.1, '88': 0.6, '89': 0.95, '90': 1.2, '93': 12, '94': 0.34, '97': 56, '98': 0.78, '101': 21, '103': 0.35};
    var sample0c = {'107': 0.12, '108': 0.23};

    btnInitSample(0, sample0a);
    btnInitSample(0, sample0b);
    btnInitSample(0, sample0c);

    var sample1a = {'31': 0, '33': 0, '42': 30, '50': 60};
    btnInitSample(1, sample1a);

}
var isInit = false;
function btnStart() {
    if (!isInit) {
        btnInit();
        isInit = true;
    }
//    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 131, 106, 107, 108, 109, 110, 111, 112, 113, 114];
    var radios = document.getElementsByName('checkRowSet');
    isSales = false;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var arr = viewArr[i];
            if (i === 1) {
                isSales = true;
            }
            break;
        }
    }
    setMainGrp();
    showMain(getMainTableGrpByArray(arr));
}
function btnCheck1() {
    setMainGrp();
//    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114];
    showMain(getMainTableGrpByArray(showArr[105]));
}

function btnStartDdl() {
    setMainGrp();
    var arr = [10, 12, 40, 74, 79];
    showMain(getMainTableGrpByArray(arr));
//    showMsg("showArea", getMainTableGrpByArray(arr));
}
function btnStartDdl2() {



    var arr = [10, 29, 30, 35, 12, 85, 40, 41, 132, 133, 74, 76, 79];
    showMain(getMainTableGrpByArray(arr));
//    showMsg("showArea", getMainTableGrpByArray(arr));
}



function showLevel3aBtns() {
    var str = "";
    str += showBtnColor('btn023', getBtnTitle(23), 3);
    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn019', getBtnTitle(19), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn020', getBtnTitle(20), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn021', getBtnTitle(21), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn022', getBtnTitle(22), 2);
    showMsg('level3a', str);
}
function showLevel3aBtnsCore() {
    var str = "";
    str += showBtnColor('btn023', getBtnTitle(23), 3);
    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn019', getBtnTitle(19), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn020', getBtnTitle(20), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn021', getBtnTitle(21), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn022', getBtnTitle(22), 2);
    showMsgCore('level3a', str);
}
function showLevel3bBtns() {
    var str = "";
    // str+=showBtnColor('btn023',getBtnTitle(23),3);

    str += showBtnColor('btn105', getBtnTitle(105), 3);
    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn038', getBtnTitle(38), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn048', getBtnTitle(48), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn052', getBtnTitle(52), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn059', getBtnTitle(59), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn064', getBtnTitle(64), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn069', getBtnTitle(69), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn073', getBtnTitle(73), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn077', getBtnTitle(77), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn082', getBtnTitle(82), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn091', getBtnTitle(91), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn095', getBtnTitle(95), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn099', getBtnTitle(99), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn104', getBtnTitle(104), 2);


    showMsg('level3b', str);
}

function showLevel3(x) {
    if (x == 'A') {
        $("#level3a").show(600);
        $("#level3b").hide(600);
        $("#level3c").hide(600);
        $("#level3d").hide(600);
    }
    if (x == 'B') {
        $("#level3a").hide(600);
        $("#level3b").show(600);
        $("#level3c").hide(600);
        $("#level3d").hide(600);
    }
    if (x == 'C') {
        $("#level3a").hide(600);
        $("#level3b").hide(600);
        $("#level3c").show(600);
        $("#level3d").hide(600);
    }
    if (x == 'D') {
        $("#level3a").hide(600);
        $("#level3b").hide(600);
        $("#level3c").hide(600);
        $("#level3d").show(600);
    }
    if (x == 'X') {
        $("#level3a").hide(600);
        $("#level3b").hide(600);
        $("#level3c").hide(600);
        $("#level3d").hide(600);
    }
}


function showLevel3bBtnsCore() {
    var str = "";
    // str+=showBtnColor('btn023',getBtnTitle(23),3);

    str += showBtnColor('btn105', getBtnTitle(105), 3);
    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn038', getBtnTitle(38), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn048', getBtnTitle(48), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn052', getBtnTitle(52), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn059', getBtnTitle(59), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn064', getBtnTitle(64), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn069', getBtnTitle(69), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn073', getBtnTitle(73), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn077', getBtnTitle(77), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn082', getBtnTitle(82), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn091', getBtnTitle(91), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn095', getBtnTitle(95), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn099', getBtnTitle(99), 2);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn104', getBtnTitle(104), 2);


    showMsgCore('level3b', str);
}


function showLevel3cBtnsCore() {
    var str = "";
    // str+=showBtnColor('btn023',getBtnTitle(23),3);

    str += showBtnColor('btn109', getBtnTitle(109), 3);
    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn107', getBtnTitle(107), 4);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn108', getBtnTitle(108), 4);


    showMsgCore('level3c', str);
}
function showLevel3dBtns() {
    var str = "";
    // str+=showBtnColor('btn023',getBtnTitle(23),3);

    str += showBtnColor('btn106', getBtnTitle(106), 3);
    str += showBtnColor('btn___', ' : ', 0);
    str += showBtnColor('btn001', getBtnTitle(1), 4);

    showMsgCore('level3d', str);
}
function showLevel3dBtnsCore() {
    var str = "";
    // str+=showBtnColor('btn023',getBtnTitle(23),3);

    str += showBtnColor('btn106', getBtnTitle(106), 3);
    str += showBtnColor('btn___', ' : ', 0);
    str += showBtnColor('btn131', getBtnTitle(131), 4);

    showMsgCore('level3d', str);
}
function showLevel3cBtns() {
    var str = "";
    // str+=showBtnColor('btn023',getBtnTitle(23),3);

    str += showBtnColor('btn109', getBtnTitle(109), 3);
    str += showBtnColor('btn___', ' = ', 0);
    str += showBtnColor('btn107', getBtnTitle(107), 4);
    str += showBtnColor('btn___', ' + ', 0);
    str += showBtnColor('btn108', getBtnTitle(108), 4);


    showMsg('level3c', str);
}

function showBtnColor(id, title, colorId) {

    var idNum = '';
    if (toShowNum) {
        if (id == 'btn___') {
            idNum = '';
        } else {
            // idNum=substr(id,3,3);

            idNum = id.substr(3, 3);

            // $idNum="[".$idNum."]";//【38】
            idNum = "【" + idNum + "】";//【38】
        }
    } else {
        idNum = "";
    }


    var className = " class='bgRed'";
    if (colorId == 0) {
        className = " class='bgGray'";
        // echo "<button onclick='$id()' type='submit' class='bgGray'>$idNum $title</button>";
        // return;
    }
    if (colorId == 1) {
        className = " class='bgYellow'";
        // echo "<button onclick='$id()' type='submit' class='bgYellow'>$idNum $title</button>";
        // return;
    }
    if (colorId == 2) {
        className = " class='bgSeaGreen'";
        // echo "<button onclick='$id()' type='submit' class='bgSeaGreen'>$idNum $title</button>";
        // return;
    }
    if (colorId == 3) {
        className = " class='bgRoyalBlue'";
        // echo "<button onclick='$id()' type='submit' class='bgRoyalBlue'>$idNum $title</button>";
        // return;
    }
    if (colorId == 4) {
        className = " class='bgBrown'";
        // echo "<button onclick='$id()' type='submit' class='bgBrown'>$idNum $title</button>";
        // return;
    }
    // console.log("className="+className);

    // var str= "<button onclick='"+id+"()' type='submit' "+ className +" > " + idNum +" "+ title+ "</button>";
    var str = "<button onclick='" + id + "()' type='submit' " + className + " > " + idNum + "" + title + "</button>";
    return str;
}
function showBtnIdTitleColor(id, title, colorId) {

    var idNum = '';
    // if (toShowNum){
    //   if (id=='btn___'){
    //       idNum='';
    //   }else{
    //     // idNum=substr(id,3,3);
    //
    //     idNum=id.substr(3,3);
    //
    //       // $idNum="[".$idNum."]";//【38】
    //       idNum="【"+ idNum+ "】";//【38】
    //   }
    // }else{
    //     idNum="";
    // }


    var className = " class='bgRed'";
    if (colorId == 0) {
        className = " class='bgGray'";
        // echo "<button onclick='$id()' type='submit' class='bgGray'>$idNum $title</button>";
        // return;
    }
    if (colorId == 1) {
        className = " class='bgYellow'";
        // echo "<button onclick='$id()' type='submit' class='bgYellow'>$idNum $title</button>";
        // return;
    }
    if (colorId == 2) {
        className = " class='bgSeaGreen'";
        // echo "<button onclick='$id()' type='submit' class='bgSeaGreen'>$idNum $title</button>";
        // return;
    }
    if (colorId == 3) {
        className = " class='bgRoyalBlue'";
        // echo "<button onclick='$id()' type='submit' class='bgRoyalBlue'>$idNum $title</button>";
        // return;
    }
    if (colorId == 4) {
        className = " class='bgBrown'";
        // echo "<button onclick='$id()' type='submit' class='bgBrown'>$idNum $title</button>";
        // return;
    }
    // console.log("className="+className);

    // var str= "<button onclick='"+id+"()' type='submit' "+ className +" > " + idNum +" "+ title+ "</button>";
    var idStr = "【" + get三位整數(id) + "】"
    var str = "<button onclick='" + id + "()' type='submit' " + className + " > " + idStr + title + "</button>";
    return str;
}

