// let taskEl = $('#taskModal');
// let taskName = $('#taskName');
// let taskDate = $('#datepicker');
// let taskDescription = $('#taskDescription');
// let tasksDisplayEl = $('#tasksDisplay');

// Retrieve tasks and nextId from localStorage
// let taskList = JSON.parse(localStorage.getItem("tasks"));
// let nextId = JSON.parse(localStorage.getItem("nextId"));
let tasksInputs = document.querySelector('#tasksInputs');

// let button = document.getElementById('button');
// let taskModal = document.getElementById('taskModal');
// let tasksList = JSON.parse(localStorage.getItem("tasksList")) || [];
const submitButton = document.querySelector("#submitButton");
const taskName = document.querySelector("#taskName");
const taskDate = document.querySelector("#datepicker");
const taskDescription = document.querySelector("#taskDescription");

// let cancelButton = document.getElementById('cancelButton');


$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
      // dateFormat: 'MM-DD-YYY',
    });
  });


// Todo: create a function to generate a unique task id
// function generateTaskId() {
  // id: math floor random, random numbers
  // local storage, save id
// }

// submitButton.onclick = 

submitButton.addEventListener('click', function () {
  const taskNameValue = taskName.value;
  const taskDateValue = taskDate.value;
  const taskDescriptionValue = taskDescription.value;

  if(taskName !== '' && taskDate !== '' && taskDescription !== ''){
    const tasksList = {
          taskName:taskNameValue,
          datepicker:taskDateValue,
          taskDescription:taskDescriptionValue,
          status:'To do',
      }

      let tasksListArr = JSON.parse(localStorage.getItem("tasksList")) || [];
      tasksListArr.push(
        tasksList
      )
      localStorage.setItem("tasksList",JSON.stringify(tasksListArr));
      rendertasksList();
    }
})
  
// cancelButton.onclick = function () {
// taskModal.style.display = 'none';
// }

// // Todo: create a function to create a task card
// // function createTaskCard(task) {}

// function createTaskCard(task) {
//     const cardColumnEl = $('<#todo-cards>');
//     cardColumnEl.addClass('col-12 col-sm-4 col-md-3');

// const cardEl = $('<div>');
//   // Add a class of .custom-card
//   cardEl.addClass('card h-100 custom-card');
//   cardEl.appendTo(cardColumnEl);

//   // Add a class of .custom-card-header
//   const cardName = $('<h5>').addClass('card-header custom-card-header').text(task);
//   cardName.appendTo(cardEl);

//   const cardBodyEl = $('<div>');
//   cardBodyEl.addClass('card-body');
//   cardBodyEl.appendTo(cardEl);

//   const cardComment = $('<p>').addClass('card-text').text(task);
//   cardComment.appendTo(cardBodyEl);

//   tasksDisplayEl.append(cardColumnEl);

// }

//   const handleFormSubmit = function (event) {
//   event.preventDefault();

//   const taskName = taskName.val();
//   const taskDate = taskDate.val();
//   const taskDescription = taskDescription.val();

//   createTaskCard(taskName, taskDate, taskDescription);

//   // reset form
//   // taskName.val('');
//   // taskDate.val('');
//   // taskName.val('');
//   // taskDescription.val('');
// };


// }

// Todo: create a function to render the task list and make cards draggable
function rendertasksList() {
  // handleDeleteTask();
  const tasksList = JSON.parse(localStorage.getItem('tasksList'));
  console.log(tasksList);

  const reviewContainer = document.querySelector('#todo-cards');
  reviewContainer.textContent = '';

  for (let tasksList_i of tasksList) {
    const taskCard = document.createElement('div');
    const taskNameCard = document.createElement('h3');
    // taskCard.setAttribute('class', 'draggable card is-flex is-flex-direction-column tasksInputs-entry m-3 has-background-primary-soft p-3');

    taskCard.setAttribute('class', 'draggable card');
    taskCard.setAttribute('style', 'width: 28rem');
    taskNameCard.setAttribute('class', 'card-header');
    taskNameCard.textContent = tasksList_i.taskName;
    
    const taskDateCard = document.createElement('p');
    const taskDescriptionCard = document.createElement('p');
    taskDateCard.setAttribute('class', 'content mx-4');
    taskDateCard.textContent = tasksList_i.datepicker;
    
    taskDescriptionCard.setAttribute('class', 'content mx-4');
    taskDescriptionCard.textContent = tasksList_i.taskDescription;
    
    // const reviewContainer = document.querySelector('#todo-cards');
    // reviewContainer.textContent = '';

    taskCard.appendChild(taskNameCard);
    taskCard.appendChild(taskDateCard);
    taskCard.appendChild(taskDescriptionCard);
    reviewContainer.appendChild(taskCard);
    const now = dayjs().format('MM/DD/YYYY');
    console.log(now);

    if (tasksList_i.datepicker == now) {
      taskCard.classList.add('bg-warning');
    } 

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
          
          // function handleDeleteTask(event){
          //   const btnClicked = $(event.target);
          //   btnClicked.parent('li').remove();
          // }
          
          // }
          
          // // Todo: create a function to handle dropping a task into a new status lane
          // function handleDrop(event, ui) {
            
            // }
            
            // // Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
        $(document).ready(function () {
          rendertasksList();
          $(".draggable").draggable({
            zIndex:100
          });
          $(".lane").droppable({
            accept: '.draggable',
            drop: function( event, ui ) {
              console.log(ui.draggable)
              console.log(event.target)
            }
          });
        });
// taskEl.on('submit', handleFormSubmit);
