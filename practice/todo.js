const todoList = [];

function addToList () {
  const inputTask = document.querySelector('js-name-input');
  const name = inputTask.value;
  todoList.push(name);
  
  const inputDate = document.querySelector('js-due-date-input')
  const date = inputDate.value;
}