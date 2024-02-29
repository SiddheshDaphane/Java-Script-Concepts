// What is logic here?
// 1) Take an input
// 2) Store that input
// 3) Display that input

const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const task = inputElement.value;
  todoList.push(task);
  console.log(todoList);
}
