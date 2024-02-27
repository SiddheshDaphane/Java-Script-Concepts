const todoList = [{
  name: "make dinner",
  dueDate: '2022-12-22'},
  { name: "wash dishes",
    dueDate: '2022-12-22'}];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';
    for (let i=0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      const name = todoObject.name;
      const dueDate = todoObject.dueDate
      const html = `
      <p>
        ${name} ${dueDate} 
        <button onclick="
          todoList.splice(${i},1);
          renderTodoList();
        ">Delete</button> 
      </p>`;
      todoListHTML += html;
    }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  // document is a global object representing the entire HTML document.
  // querySelector('.js-name-input') is a method that is used to select the first element in the document that matches a specified CSS selector. In this case, it's looking for an element with the class name js-name-input.
  // The selected element (presumably an input element) is then stored in the variable inputElement using the const keyword, which declares a constant variable.

  // inputElement now holds a reference to the selected input element.
  // inputElement.value retrieves the current value entered or selected in the input element. It is then assigned to the variable name.
  // Assuming inputElement refers to an input field where a user can type their name, the name variable now contains the text entered by the user in that input field.

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate
  });

  inputElement.value = '';
  renderTodoList();
}

