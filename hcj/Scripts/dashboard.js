// Write code related to dashboard page here
// get the filter dropdown and task count elements
const filter = document.querySelector('#filter');
const taskCount = document.querySelector('#task-count');

// get the task list from local storage and parse it as JSON
let tasks = JSON.parse(localStorage.getItem('task-list')) || [];

// function to render the table rows
function renderTableRows(tasks) {
  const tbody = document.querySelector('tbody');
  
  // clear the existing rows
  tbody.innerHTML = '';
  
  // add a row for each task
  tasks.forEach((task, index) => {
    const tr = document.createElement('tr');
    
    // add columns for each property of the task object
    const nameTd = document.createElement('td');
    nameTd.textContent = task.name;
    tr.appendChild(nameTd);
    
    const descTd = document.createElement('td');
    descTd.textContent = task.desc;
    tr.appendChild(descTd);
    
    const startTd = document.createElement('td');
    startTd.textContent = task.start;
    tr.appendChild(startTd);
    
    const endTd = document.createElement('td');
    endTd.textContent = task.end;
    tr.appendChild(endTd);
    
    const priorityTd = document.createElement('td');
    priorityTd.textContent = task.priority;
    tr.appendChild(priorityTd);
    
    const addToProgressTd = document.createElement('td');
    addToProgressTd.textContent = 'Add';
    addToProgressTd.classList.add('add');
    tr.appendChild(addToProgressTd);
    
    // add an event listener to the "Add to Progress" column
    addToProgressTd.addEventListener('click', function() {
      // remove the task from the tasks array
      tasks.splice(index, 1);
      
      // save the updated tasks array to local storage
      localStorage.setItem('task-list', JSON.stringify(tasks));
      
      // add the task to the priority list array
      let priorityList = JSON.parse(localStorage.getItem('priority-list')) || [];
      priorityList.push(task);
      localStorage.setItem('priority-list', JSON.stringify(priorityList));
      
      // update the table rows and task count
      renderTableRows(tasks);
      taskCount.textContent = tasks.length;
    });
    
    tbody.appendChild(tr);
  });
}

// render the initial table rows and update the task count
renderTableRows(tasks);
taskCount.textContent = tasks.length;

// add an event listener to the filter dropdown
filter.addEventListener('change', function() {
  const selectedPriority = filter.value;
  
  // filter the tasks by the selected priority
  const filteredTasks = tasks.filter(task => task.priority === selectedPriority);
  
  // render the filtered table rows and update the task count
  renderTableRows(filteredTasks);
  taskCount.textContent = filteredTasks.length;
});