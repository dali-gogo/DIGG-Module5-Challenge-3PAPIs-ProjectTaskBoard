let taskEl = $('#taskModal');
let taskName = $('#taskName');
let taskDate = $('#datepicker');
let taskDescription = $('#taskDescription');
let tasksDisplayEl = $('#tasksDisplay');

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let tasksInputs = document.querySelector('#tasksInputs');

let button = document.getElementById('button');
let taskModal = document.getElementById('taskModal');
let tasksList = JSON.parse(localStorage.getItem("tasksList")) || [];
let submitButton = document.getElementById('submitButton');
let cancelButton = document.getElementById('cancelButton');


$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });


// Todo: create a function to generate a unique task id
// function generateTaskId() {
// }

// submitButton.onclick = 

function generateTaskId (event) {
    console.log();
    event.preventDefault();
    let taskName = document.querySelector("#taskName").value;
    let taskDate = document.querySelector("#datepicker").value;
    let taskDescription = document.querySelector("#taskDescription").value;

    if(taskName !== '' && taskDate !== '' && taskDescription !== ''){
      
        tasksList.push({
            taskName:taskName,
            datePicker:taskDate,
            taskDescription:taskDescription,
        })

        localStorage.setItem("tasksList",JSON.stringify(tasksList));
        document.querySelector("#taskName").value = '';
        document.querySelector("#datepicker").value = '';
        document.querySelector("#taskDescription").value = '';
        taskModal.style.display = 'none';
        rendertasksList();
      }
  
  }
  
cancelButton.onclick = function () {
taskModal.style.display = 'none';
}

// // Todo: create a function to create a task card
// function createTaskCard(task) {}

function createTaskCard(task) {
    const cardColumnEl = $('<#todo-cards>');
    cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

const cardEl = $('<div>');
  // Add a class of .custom-card
  cardEl.addClass('card h-100 custom-card');
  cardEl.appendTo(cardColumnEl);

  // Add a class of .custom-card-header
  const cardName = $('<h5>').addClass('card-header custom-card-header').text(task);
  cardName.appendTo(cardEl);

  const cardBodyEl = $('<div>');
  cardBodyEl.addClass('card-body');
  cardBodyEl.appendTo(cardEl);

  const cardComment = $('<p>').addClass('card-text').text(task);
  cardComment.appendTo(cardBodyEl);

  tasksDisplayEl.append(cardColumnEl);

}

  const handleFormSubmit = function (event) {
  event.preventDefault();

  const taskName = taskName.val();
  const taskDate = taskDate.val();
  const taskDescription = taskDescription.val();

  createTaskCard(taskName, taskDate, taskDescription);

  // reset form
  taskName.val('');
  taskDate.val('');
  taskName.val('');
  taskDescription.val('');
};


// }

// Todo: create a function to render the task list and make cards draggable
function rendertasksList() {
  handleDeleteTask();
  const tasksList = JSON.parse(localStorage.getItem('currentTasks'));
  for (let tasksList_i of tasksList) {
    const taskCard = document.createElement('div');
    const taskNameCard = document.createElement('h3');
    const taskDateCard = document.createElement('p');
    const taskDescriptionCard = document.createElement('p');
    
    taskCard.setAttribute('class', 'card is-flex is-flex-direction-column tasksInputs-entry m-3 has-background-primary-soft p-3');
    
    taskNameCard.setAttribute('class', 'content mx-5');
    taskNameCard.textContent = tasksList_i.taskName;
    
    taskDateCard.setAttribute('class', 'content mx-4');
    taskDateCard.textContent = tasksList_i.datepicker;
    
    taskDescriptionCard.setAttribute('class', 'content mx-4');
    taskDescriptionCard.textContent = tasksList_i.taskDescription;
    
    reviewContainer.appendChild(taskNameCard);
    reviewContainer.appendChild(taskDateCard);
    reviewContainer.appendChild(taskDescriptionCard);
    tasksInputs.appendChild(taskCard);
  }
}


// Todo: create a function to handle adding a new task

// const taskInfo = $('#taskInfo');
// const todoCards = $('#todo-cards');

// function handleAddTask(event) {
  //   event.preventDefault();
  //   const taskItem = $('input[name="taskName"]').val();
  
  //   if (!taskItem) {
    //     console.log('No task filled out in form!');
    //     return;
    //   }
    
    //   const taskListItemEl = $(
      //     '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
      //   );
      //   taskListItemEl.text(taskItem);
      
      //   taskListItemEl.append(
        //     '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
        //   );
        
        //   todoCards.append(taskListItemEl);
        
        //   $('input[name="taskName"]').val('');
        // }
        
        // // Todo: create a function to handle deleting a task
        // function handleDeleteTask(event){
          
          function handleDeleteTask(event){
            const btnClicked = $(event.target);
            btnClicked.parent('li').remove();
          }
          
          // }
          
          // // Todo: create a function to handle dropping a task into a new status lane
          // function handleDrop(event, ui) {
            
            // }
            
            // // Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
            // $(document).ready(function () {
              
              // });

taskEl.on('submit', handleFormSubmit);
