"use strict";
var numberList = [];
var $ = function (id) {
  return document.getElementById(id);
};

var toggleButton = function () {
  var myInputList = document.querySelectorAll("input");
  if (!numberList.length) {
    for (var i = 1; i < myInputList.length; i++) {
      myInputList[i].disabled = true;
    }
  } else {
    for (var i = 1; i < myInputList.length; i++) {
      myInputList[i].disabled = false;
    }
  }
};

var addToList = function () {
  while (true) {
    var a = parseFloat(prompt("Input an integer number: "));
    if (!Number.isInteger(a)) {
      alert("Please input valid data!");
      break;
    } else {
      numberList.push(a);
    }
  }
  toggleButton();
};

var printList = function () {
  alert(numberList.join("\n"));
  toggleButton();
};

var findNumber = function () {
  var a = parseFloat(prompt("Input an integer number: "));
  if (!Number.isInteger(a)) {
    alert("Please input valid data!");
  } else (numberList.indexOf(a) != -1) ? alert(a + " exists in array!") : alert(a + " doesn't exist in array!");
  toggleButton();
};

var findMax = function () {
  var max = Math.max(...numberList);
  alert("Max number of array = " + max);
  toggleButton();
};

var calculateSum = function () {
  var sum = 0;
  for (var i = 0; i < numberList.length; i++) {
    sum += numberList[i];
  }
  alert("Sum of array = " + sum);
  toggleButton();
};

var sortDesc = function () {
  alert(numberList.slice().sort(function (a, b) { return b - a }).join("\n"));
  toggleButton();
};

window.addEventListener("keypress", function(event) {
  if (event.key == 1) {
    addToList();
  }
  if (event.key == 2) {
    printList();
  }
  if (event.key == 3) {
    findNumber();
  }
  if (event.key == 4) {
    findMax();
  }
  if (event.key == 5) {
    calculateSum();
  }
  if (event.key == 6) {
    sortDesc();
  }
  toggleButton();
})

window.onload = function () {
  toggleButton();
  $("add_number").onclick = addToList;
  $("print").onclick = printList;
  $("find_number").onclick = findNumber;
  $("find_max").onclick = findMax;
  $("calculate_sum").onclick = calculateSum;
  $("sort_desc").onclick = sortDesc;
}
