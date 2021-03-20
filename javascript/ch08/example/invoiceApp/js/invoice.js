"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var calculateDiscount = function (customerType, invoiceSubtotal) {
    var discountPercent;
    switch (customerType) {
        case "regular": {
            if (subtotal < 100) {
                discountPercent = 0;
            } else if (subtotal < 250) {
                discountPercent = 0.1;
            } else if (subtotal < 500) {
                discountPercent = 0.2;
            } else {
                discountPercent = 0.3;
            }
            break;
        }

        case "loyalty": {
            discountPercent = 0.3;
            break;
        }

        case "honor": {
            discountPercent = subtotal < 500 ? 0.4 : 0.5;
            break;
        }
    }
    return discountPercent;
};

var processEntries = function () {
    var discountAmount;
    var invoiceTotal;
    var discountPercent;

    var customerType = $("type").value;
    var invoiceSubtotal = parseFloat($("subtotal").value);
    $("subtotal").value = invoiceSubtotal.toFixed(2);

    if (isNaN(invoiceSubtotal)) {
        alert("Please input valid data");
    } else {
        discountPercent = calculateDiscount(customerType, invoiceSubtotal);
    }
    discountAmount = invoiceSubtotal * discountPercent;
    invoiceTotal = invoiceSubtotal - discountAmount;
    $("percent").value = (discountPercent * 100).toFixed(2);
    $("amount").value = discountAmount.toFixed(2);
    $("total").value = invoiceTotal.toFixed(2);
};


window.onload = function () {
    $("calculate").onclick = processEntries;
    $("type").focus();
};