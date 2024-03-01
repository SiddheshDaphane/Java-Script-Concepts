// What is logic here?
// 1) Take an input
// 2) Store that input
// 3) Display that input

// Step by step explanation in Marathi

const todoList = []; // saglyat pahile me 'Array' declear kela karan mala sagle 'todo task' yachya madhe store karayche ahet.


// Eak function create karto ahe jyachya madhun me 'task' ani 'date' array madhe store karu shakel.
function addTodo() {
  const inputElement = document.querySelector('.js-name-input'); // querySelector use karun HTML cha element select kela. 
  const task = inputElement.value; // tya element madhli value 'task' madhe takli.

  const inputDate = document.querySelector('.js-due-date-input'); // same date input element sobat varchya sarkhac kela.

  const dueDate = inputDate.value;

  // Array madhe eak 'object' takla jyachya madhe 'name' and 'comDate' ashe variables gheun tyana save kela and push kela.
  todoList.push({  
    name: task,
    comDate: dueDate
  });

  inputElement.value = ''; // Add kelay nantar punha empty string keli.
  inputDate.value = '';
  renderTodoList(); // render karna mhanje web-page var dakhavna. Khalcha function call kela.
}


// Aplyala 'Array' display karav lagel. Tyachya sathi he function banavla ahe.

function renderTodoList() {
  let taskList = ''; // eak 'string' declear keli. 
  for (let i=0; i < todoList.length; i++) { // atta array madhe saglya value ahet tya aplyala iterate karav lagtil dakhavnya sathi mhanun loop vaprav lagel.
    const todoObject = todoList[i]; // atta apan 'object' push kela ahe 'array' madhe so purna object iterate hoil. 
    const name = todoObject.name; // eaka varibale madhe object name
    const comDate = todoObject.comDate; // eaka variable madhe date

    // khalil variable madhe me 'name' and 'date' display karto ahe. and also 'completed' button takla ahe. Ithe khup IMP he baghnya sarkha ahe te mhanje 'button' madhe 'renderTodoList()' function me call karrto ahe karan jenvha completed var click kela tenvha toh task delete hote. 
    const html = `
      <p>${name} ${comDate} 
        <button onclick =   "todoList.splice(${i},1);
        alert('Keep Going');
        renderTodoList();
        ">Completed</button>
      </p>
    `;
    taskList = taskList + html; // Ji list saglyat pahile declear keli hoti tyachya madhe me 'html' chi value takli. 
  }
  document.querySelector('.js-todo-list').innerHTML = taskList; // 'taskList' madhli ji pan value ahe ti aplyala 'div' madhe takav lagel na mhanun hi step.
}


