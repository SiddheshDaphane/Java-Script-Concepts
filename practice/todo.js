// What is logic here?
// 1) Take an input
// 2) Store that input
// 3) Display that input

const todoList = [];

renderTodoList();

function renderTodoList() {
  let taskList = '';
  for (let i=0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const comDate = todoObject.comDate;

    const html = `
      <p>${name} ${comDate}
        <button onclick =   "todoList.splice(${i},1);
        renderTodoList();
        ">Completed</button>
      </p>
    `;
    taskList = taskList + html;
  }
  document.querySelector('.js-todo-list').innerHTML = taskList;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const task = inputElement.value;

  const inputDate = document.querySelector('.js-due-date-input');

  const dueDate = inputDate.value;

  todoList.push({
    name: task,
    comDate: dueDate
  });
  inputElement.value = ''
  renderTodoList();
}
