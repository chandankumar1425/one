// Write code related to Done page here
// get the done list from local storage and parse it as JSON
let doneList = JSON.parse(localStorage.getItem('done-list')) || [];

// function to render the table rows
function renderTableRows(doneList) {
  const tbody = document.querySelector('tbody');
  
  // clear the existing rows
  tbody.innerHTML = '';
  
  // add a row for each task
  doneList.forEach(task => {
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
    
    tbody.appendChild(tr);
  });
}

// render the initial table rows
renderTableRows(doneList);