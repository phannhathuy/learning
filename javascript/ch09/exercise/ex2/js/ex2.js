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
  var n = parseFloat(prompt("Input an integer number of row: "));
  var m = parseFloat(prompt("Input an integer number of column: "));
  if (!Number.isInteger(n) || !Number.isInteger(m)) {
    alert("Please input valid data!");
  } else {
    for (var i = 0; i < m; i++) {
      numberList[i] = [];
      for (var j = 0; j < n; j++) {
        var a = i + 1, b = j + 1;
        var x = parseFloat(prompt("Input a number at row " + a + " column " + b));
        if (Number.isNaN(x)) {
          alert("Please input valid data!");
        } else {
          numberList[i].push(x);
        }
      }
    }
  }
  toggleButton();
};

var printList = function () {
  alert(numberList.join(",\n"));
  toggleButton();
};

var findNumber = function () {
  var a = parseFloat(prompt("Input an integer number: "));
  if (!Number.isInteger(a)) {
    alert("Please input valid data!");
  } else {
    var positionList = [];
    for (var i = 0; i < numberList.length; i++) {
      positionList.push(numberList[i].indexOf(a));
    }
    positionList.every(x => x == -1) ? alert(a + " doesn't exist in array!") : alert(a + " exists in array!");
  }
  toggleButton();
};

var findMax = function () {
  var maxArr = [];
  for (var i = 0; i < numberList.length; i++) {
    maxArr.push(Math.max(...numberList[i]));
  }
  var max = Math.max(...maxArr);
  alert("Max number of array = " + max);
  toggleButton();
};

var calculateSum = function () {
  var sum = 0;
  for (var i = 0; i < numberList.length; i++) {
    for (var j = 0; j < numberList[i].length; j++)
      sum += numberList[i][j];
  }
  alert("Sum of array = " + sum);
  toggleButton();
};

var sortAsc = function () {
  var arr = [];
  for (var i = 0; i < numberList.length; i++) {
    arr = arr.concat(numberList[i]);
  }
  arr.sort(function (a, b) { return a - b });
  var newList = [];
  for (var i = 0; i < numberList.length; i++) {
    newList.push(arr.splice(0, numberList[i].length));
  }
  alert(newList.join(",\n"));
  toggleButton();
};

window.addEventListener("keypress", function (event) {
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
    sortAsc();
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
  $("sort_asc").onclick = sortAsc;
}
