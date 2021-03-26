var createTaskList = function (displayDiv, deleteClickHandler, editClickHandler) {
  // private variable and function
  var tasks = [];
  var storage = getStorage("tasks"); // create a instance of storage

  var sort = function () {
    tasks.sort();
  };

  // private callback function
  var getTasks = function (storageString) {
    return storageString === "" ? [] : storageString.split("|");
  };
  var setTasks = function (arr) {
    return Array.isArray(arr) ? arr.join("|") : arr;
  };

  // public methods that have access to private variables and methods
  return {
    load: function () {
      if (tasks.length == 0) {
        tasks = storage.get(getTasks);
      }
      return this;
    },
    save: function () {
      storage.set(tasks, setTasks);
      return this;
    },
    add: function (task) {
      tasks.push(task.toString());
      return this;
    },
    // delete task at index i
    delete: function (i) {
      sort();
      tasks.splice(i, 1);
      return this;
    },
    clear: function () {
      tasks.length = 0;
      storage.clear();
      displayDiv.innerHTML = "";
      return this;
    },
    edit: function (i) {
      toggleButton();
      $("task").value = tasks[i];
      $(i).className += " editing";
      return this;
    },
    update: function () {
      var modifiedTask = $("task").value;
      tasks = storage.get(getTasks);
      if (modifiedTask == "") {
        // this.delete(parseInt(document.getElementsByClassName("editing")[0].id));
        alert("Do Nothing!");
      } else {
        tasks[parseInt(document.getElementsByClassName("editing")[0].id)] = modifiedTask;
        storage.clear();
      }
      toggleButton();
      $(parseInt(document.getElementsByClassName("editing")[0].id)).className -= " editing"
      return this;
    },
    display: function () {
      var html = "";
      sort();
      // build task list to display
      for (var i in tasks) {
        html = html.concat("<p>");
        html = html.concat("<a href='#' class='delete' id='", i, "'>Delete</a>");
        html = html.concat(" <a href='#' class='edit' id='", i, "'>Edit</a>");
        html = html.concat("<span> " + tasks[i] + "</span>");
        html = html.concat("</p>");
      }
      displayDiv.innerHTML = html;

      // add delete handler to delete link
      var deletelinks = displayDiv.getElementsByClassName("delete");
      for (var i = 0; i < deletelinks.length; i++) {
        deletelinks[i].onclick = deleteClickHandler;
      }

      var editlinks = displayDiv.getElementsByClassName("edit");
      for (var i = 0; i < editlinks.length; i++) {
        editlinks[i].onclick = editClickHandler;
      }
      return this;
    },
  };
};
