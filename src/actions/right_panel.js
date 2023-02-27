function getProject(id) {
  // query local storage
  const projects = JSON.parse(localStorage.getItem('projectsList'));

  // get project given an id
  let currentProject = {};
  projects.forEach((project) => {
    if (id === project.id) {
      currentProject = project;
    }
  });
  return currentProject;
}

function getTask(id) {
  // filter project id
  const projectId = Number(id.split('-')[0]);
  // get project
  const project = getProject(projectId);
  // find and return item given its id
  for (let i = 0; i < project.todoElements.length; i += 1) {
    if (project.todoElements[i].id === id) {
      return project.todoElements[i];
    }
  }
  // return false if not found
  return false;
}

function closeTaskPanel() {
  // get panel
  const panel = document.getElementById('right-panel');
  // hide panel
  panel.classList.add('hidden');
}

function renderTaskContent(e) {
  // Get task
  const taskId = e.target.id.split('_').pop();
  const currentItem = getTask(taskId);
  console.log(currentItem);

  // get task container
  const taskContainer = document.getElementById('right-panel');
  taskContainer.innerHTML = '';

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('id', 'close-panel-btn');
  closeBtn.setAttribute('class', 'close-panel-btn flex ml-auto');
  closeBtn.innerHTML = '<div class="material-symbols-rounded">close</div>';
  closeBtn.addEventListener('click', closeTaskPanel);
  // title
  const taskTitle = document.createElement('h2');
  taskTitle.setAttribute('class', 'text-3xl mt-4');
  taskTitle.textContent = currentItem.title;

  // Create nodes
  taskContainer.appendChild(closeBtn);
  taskContainer.appendChild(taskTitle);

  // display the panel
  taskContainer.classList.remove('hidden');
}

export { renderTaskContent, getProject, getTask };
