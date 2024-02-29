// What is logic here?
// 1) Take an input
// 2) Store that input
// 3) Display that input

const todoList = [];


function renderTodoList() {
  let taskList = '';
  for (let i=0; i < todoList; i++) {
    const todoTask = todoList[i];

    const html = `
      <p>${todoTask}</p>
    `
    taskList = taskList + html;
    console.log(taskList);
  }
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const task = inputElement.value;
  todoList.push(task);
  renderTodoList();
}
