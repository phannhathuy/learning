"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var taskList;

var addToTaskList = function () {
  var taskTextbox = $("task");
  var newTask = new Task(taskTextbox.value);
  if (newTask.isValid()) {
    // add task to tasklist
    // then save task list to local storage
    // then display tasklist on view
    taskList.add(newTask).save().display();
    taskTextbox.value = "";
  } else {
    alert("Please enter a task");
  }
  taskTextbox.focus();
};

var clearTaskList = function () {
  taskList.clear();
  $("task").focus();
};

var deleteFromTaskList = function () {
  taskList.delete(this.id).save().display(); // this => clicked link
  $("task").focus();
};

var editTaskList = function () {
  taskList.edit(this.id); // this => clicked link
  $("task").focus();
};

var boldExclamationPoints = function bold(node) {
  // recursion on child node
  if (node.childNodes && node.childNodes.length > 0) {
    for (var i in node.childNodes) {
      var childNode = node.childNodes[i];
      // check element node and text node only
      if (childNode.nodeType === 1 || childNode.nodeType === 3) {
        bold(node.childNodes[i]);
      }
    }
  } else {
    // base case: bold text if contains ! character
    if (node.nodeValue && node.nodeValue.indexOf("!") > -1) {
      var span = node.parentNode;
      span.innerHTML = "<b>" + node.nodeValue + "</b>";
    }
  }
};

var updateTask = function () {
  taskList.update(this.id).save().display();
  $("task").focus();
};

var toggleButton = function () {
  if ($("update_task").hidden) {
    $("add_task").disabled = true;
    $("clear_tasks").disabled = true;
    $("bold").disabled = true;
    $("update_task").hidden = false;
    $("cancel").hidden = false;
  } else {
    $("add_task").disabled = false;
    $("clear_tasks").disabled = false;
    $("bold").disabled = false;
    $("update_task").hidden = true;
    $("cancel").hidden = true;
    $("task").value = "";
  }
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  $("bold").onclick = function () {
    boldExclamationPoints($("tasks"));
  };
  $("update_task").onclick = updateTask;
  $("cancel").onclick = toggleButton;

  taskList = createTaskList($("tasks"), deleteFromTaskList, editTaskList);

  // load tasks and display
  taskList.load().display();
  $("task").focus();
};
