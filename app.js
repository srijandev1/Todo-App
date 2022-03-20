// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(event) {
  // Prevent Form from SUBMITTING
  event.preventDefault();
  //Creating a TODO DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //   Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //   Check Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //   Append to LIST
  todoList.appendChild(todoDiv);
  // Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    // This is what we use when we want our item to be deleted after the transition or aimation
    // Just write end after them
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    // todo.remove();
  }

  //CHECK MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
