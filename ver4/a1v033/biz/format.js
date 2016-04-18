
var showRemark = true;
// var showRemark = false;

function getA001Tr(f1, f2, f3, f4, f5) {
    if (showRemark) {
        var str = " <tr><th>" + f1 + "</th><th>" + f2 + "</th><td>" + f3 + "</td><td>" + f4 + "</td>" + f5 + "</tr>";
    } else {
        var str = " <tr><th>" + f1 + "</th><th>" + f2 + "</th><td>" + f3 + "</td><td>" + f4 + "</td>" + "</tr>";
    }

    return str;
}
//class='tdNumber'
function getA001TrNum(f1, f2, f3, f4, f5) {
    // var str=   " <tr><th>"+f1+"</th><th>"+f2+"</th><td>"+f3+"</td><td class='tdNumber'>"+f4+"</td>"+f5+"</tr>";
    // var str=   " <tr><th>"+f1+"</th><th>"+f2+"</th><td>"+f3+"</td><td class='tdNumber'>"+f4+"</td>"+"</tr>";
    if (showRemark) {
        var str = " <tr><th>" + f1 + "</th><th>" + f2 + "</th><td>" + f3 + "</td><td class='tdNumber'>" + f4 + "</td>" + f5 + "</tr>";
    } else {
        var str = " <tr><th>" + f1 + "</th><th>" + f2 + "</th><td>" + f3 + "</td><td class='tdNumber'>" + f4 + "</td>" + "</tr>";
    }

    return str;
}
function getA001Tr小計(f1, f2, f3, f4, f5) {
    // var str=   " <tr><th>"+f1+"</th><th>"+f2+"</th><td>"+f3+"</td><td class='tdNumber'>"+f4+"</td>"+f5+"</tr>";
    // var str=   " <tr><th>"+f1+"</th><th>"+f2+"</th><td>"+f3+"</td><td class='tdNumber'>"+f4+"</td>"+"</tr>";
    if (showRemark) {
        var str = " <tr><th>" + f1 + "</th><th>" + f2 + "</th><td  class='tdNumber'>" + f3 + "</td><td class='tdNumber'>" + f4 + "</td>" + f5 + "</tr>";
    } else {
        var str = " <tr><th>" + f1 + "</th><th>" + f2 + "</th><td  class='tdNumber'>" + f3 + "</td><td class='tdNumber'>" + f4 + "</td>" + "</tr>";
    }

    return str;
}


function getTwoDecimal(x) {
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

function get小數點3位(x) {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
        // alert('function:changeTwoDecimal->parameter error');
        return x;
    }
 
    var f_x = Math.round(x * 1000) / 1000;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 3) {
        s_x += '0';
    }
    return s_x;
}
