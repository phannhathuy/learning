var $ = function (id) {
    return document.getElementById(id);
};

var calculateMPG = function (miles, gallons) {
    var result = miles / gallons;
    result = result.toFixed(1);
    return result;
};

var processEntry = function () {
    var miles = parseFloat($("miles").value);
    var gallons = parseFloat($("gallons").value);

    mPGResult.value = calculateMPG(miles, gallons);
};

window.onload = function () {
    $("calculate").onclick = processEntry;
};
