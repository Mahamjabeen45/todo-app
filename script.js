// add item
var newItem = document.getElementById("newItem");
var ul = document.getElementById("ul");

function addItem() {
  if (newItem.value === "") {
    alert("Enter your task");
  } else {
    // console.log(newItem.value);
    var li = document.createElement("li"); // new item
    var newTask = document.createTextNode(newItem.value);
    li.appendChild(newTask);

    var editBtn = document.createElement("button"); // edit button
    var editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick", "aditTodo(this)");
    li.appendChild(editBtn);

    var deleteBtn = document.createElement("button"); // delete button
    var deleteBtnText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");
    li.appendChild(deleteBtn);

    ul.appendChild(li);
  }

  newItem.value = "";
}

//  delete all

function deleteAll() {
  ul.innerHTML = "";
}

// edit Todo

function aditTodo(y) {
  //  console.log( y.parentNode.firstChild.nodeValue);
  var oldVal = y.parentNode.firstChild.nodeValue;
  var newTodo = prompt("Edit todo", oldVal);
  y.parentNode.firstChild.nodeValue = newTodo;
}

//  delete todo

function deleteTodo(x) {
  // console.log(x);
  // console.log(x.parentNode);

  x.parentNode.remove();
}