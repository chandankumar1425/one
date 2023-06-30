// Write code for the Progress page here
// get the priority list from local storage and parse it as JSON
let priorityList = JSON.parse(localStorage.getItem('priority-list')) || [];

// function to render the table rows
function renderTableRows(priorityList) {
  const tbody = document.querySelector('tbody');
  
  // clear the existing rows
  tbody.innerHTML = '';
  
  // add a row for each task
  priorityList.forEach((task, index) => {
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
    
    const addToDoneTd = document.createElement('td');
    addToDoneTd.textContent = 'Add';
    addToDoneTd.classList.add('add');
    tr.appendChild(addToDoneTd);
    
    // add an event listener to the "Add to Done" column
    addToDoneTd.addEventListener('click', function() {
      // remove the task from the priority list array
      priorityList.splice(index, 1);
      
      // save the updated priority list array to local storage
      localStorage.setItem('priority-list', JSON.stringify(priorityList));
      
      // add the task to the done list array
      let doneList = JSON.parse(localStorage.getItem('done-list')) || [];
      doneList.push(task);
      localStorage.setItem('done-list', JSON.stringify(doneList));
      
      // update the table rows
      renderTableRows(priorityList);
    });
    
    tbody.appendChild(tr);
  });
}

// render the initial table rows
renderTableRows(priorityList); 