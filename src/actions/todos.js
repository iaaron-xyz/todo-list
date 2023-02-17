function renderProjectDescription(project) {
  // Create description base element
  const projectDescription = document.createElement('h2');
  projectDescription.setAttribute('class', 'mb-6 text-xl self-start');
  // Add description content
  if (!project.description) {
    projectDescription.textContent = '';
  } else {
    projectDescription.textContent = project.description;
  }

  return projectDescription;
}

function renderTodoItems(project) {
  // create basic container
  const todoItem = document.createElement('div');
  // Append todo items if any otherwise inform the user
  if (project.todoElements.length === 0) {
    todoItem.setAttribute('class', 'text-center w-full');
    todoItem.textContent = 'No items';
  } else {
    todoItem.setAttribute('class', 'project mb-2 p-4 bg-cyan-500 rounded-md w-full flex');
    todoItem.textContent = 'There are items!';
  }

  return todoItem;
}

function renderAddTodoBtn(project) {
  // Create the container
  const addTodo = document.createElement('button');
  addTodo.setAttribute('id', `add-todo-btn-${project.id}`);
  addTodo.setAttribute('class', 'project text-black bg-lime-900 mb-2 p-4 bg-cyan-500 rounded-md w-6/12 flex items-center');
  addTodo.innerHTML = `
                      <input type="text" placeholder="Your next task!" class="rounded grow mr-4" required/>
                      <button type="button" class="flex-none">Enter!</button>
  `;
  return addTodo;
}

function renderTodosSection(e) {
  console.log(e.target.id);
  // Get id of the current selected project
  const currentProjectId = Number(e.target.id.split('-')[1]);
  // Get todos section
  const contentSection = document.getElementById('todos-content');
  // Get list of existent projects
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  // Get current project
  let currentProject = {};
  projectsList.forEach((project) => {
    if (currentProjectId === project.id) {
      currentProject = project;
    }
  });
  console.log(currentProject.todoElements.length);
  contentSection.innerHTML = '';
  contentSection.appendChild(renderProjectDescription(currentProject));
  contentSection.appendChild(renderAddTodoBtn(currentProject));
  contentSection.appendChild(renderTodoItems(currentProject));
}

export { renderTodosSection };
