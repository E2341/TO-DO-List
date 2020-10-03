// TO-DO !
/*
 * 1) TODO'ya tekrar basılınca, todo durumu eski haline gelsin
 *    İpucu (Tek bir satırda değişiklik yapılacak)
 *
 * 2) Todo silme operasyonu
 **/
const todoList = [];
const todoListElement = document.querySelector("#myUL");
document.querySelector("#todo_button").addEventListener("click", addTodo);
function addTodo() {
  const todoText = document.querySelector("#myInput").value;
  const todoObject = {
    // id: todoList.length * 5,
    id: todoList.length,
    todoText: todoText,
    isDone: false,
    isRemove: false,    // new property for removing...
  };
  todoList.push(todoObject);
  displayTodos();
}
function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  // todoList[selectedTodoIndex].isDone = true;
  todoList[selectedTodoIndex].isDone = (todoList[selectedTodoIndex].isDone == false) ? true : false;
  // unchecked..
  displayTodos();
}
// Remove Function
function removeTodo(removeId) {
  const selectedTodoIndex2 = todoList.findIndex((item) => item.id == removeId);
  todoList[selectedTodoIndex2].isRemove = true;
  displayTodos();
}
function displayTodos() {
  todoListElement.innerHTML = "";
  document.querySelector("#myInput").value = "";
  todoList.forEach((item) => {
    const listElement = document.createElement("li");
    const buttonElement = document.createElement("button");  // add ButtonElements....
    listElement.innerText = item.todoText;
    listElement.setAttribute("data-id", item.id);
    buttonElement.innerText = "X";                           // innerText for buttonElements..
    buttonElement.setAttribute("data-id", item.id);         // id for buttonElements..
    if (item.isDone) {
      listElement.classList.add("checked");
    }
    if (item.isRemove) {                                // Condition for removing of listElements (Li)...
      listElement.classList.add("remove");
    }
    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
      doneTodo(selectedId);
    });
    buttonElement.addEventListener("click", function (e) {     // Click method for buttonElements...
      const selectedId = e.target.getAttribute("data-id");
      removeTodo(selectedId);
    });
    todoListElement.appendChild(listElement);
    listElement.appendChild(buttonElement);               // append of buttons..
  });
}
// added style for removing :
// 1.
// ul li.remove {
//   display: none;
// }
//2.
// ul li button {    
//   float: right;
// }
