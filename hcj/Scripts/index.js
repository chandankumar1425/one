// Write code related to Home page here 

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent the form from submitting normally
  
  // get the form values
  const name = document.querySelector('#name').value;
  const desc = document.querySelector('#desc').value;
  const start = document.querySelector('#start').value;
  const end = document.querySelector('#end').value;
  const priority = document.querySelector('#priority').value;
  
  // create a task object with the form values
  const task = {
    name: name,
    desc: desc,
    start: start,
    end: end,
    priority: priority
  };
  
  // save the task object to local storage
  let tasks = JSON.parse(localStorage.getItem('task-list')) || [];
  tasks.push(task);
  localStorage.setItem('task-list', JSON.stringify(tasks));
  
  // clear the form
  form.reset();
});