import { TodoItem } from '../classes/item';

function saveTodoItem(e) {
  // get current project ID
  const projectId = Number(e.target.id.split('-').pop());
  // Get the current todo item title
  const todoTitleInput = document.getElementById(`todo-title-${projectId}`);
  const todoTitle = todoTitleInput.value;
  // Get the list of projects
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  // Find the current project-object
  projectsList.every((project) => {
    // Create a new TodoITem and link it to the current project
    if (project.id === projectId) {
      // Create a new TodoItem object
      const newItem = new TodoItem(
        `${project.id}-${project.todoElements.length}`,
        todoTitle,
      );
      // Append the new item to the current project list of todos
      project.todoElements.push(newItem);
      return false;
    }
    return true;
  });
  // Clean input field
  todoTitleInput.value = '';
  // save updated list of projects
  console.log(projectsList);
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
}

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
  // item input value
  const addTodoTitle = document.createElement('input');
  addTodoTitle.setAttribute('type', 'text');
  addTodoTitle.setAttribute('placeholder', 'Your next Task!');
  addTodoTitle.setAttribute('class', 'rounded grow mr-4');
  addTodoTitle.setAttribute('id', `todo-title-${project.id}`);
  addTodoTitle.required = true;
  // Add Todo Item btn
  const addTodoBtn = document.createElement('button');
  addTodoBtn.setAttribute('type', 'button');
  addTodoBtn.setAttribute('id', `add-todo-btn-${project.id}`);
  addTodoBtn.setAttribute('class', 'flex-none');
  addTodoBtn.textContent = '+ Add';
  addTodoBtn.addEventListener('click', saveTodoItem);

  addTodo.appendChild(addTodoTitle);
  addTodo.appendChild(addTodoBtn);

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
