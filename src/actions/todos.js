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
  const todoItemsList = document.createElement('div');
  todoItemsList.setAttribute('class', 'w-full');

  // Append todo items if any otherwise inform the user
  if (project.todoElements.length === 0) {
    todoItemsList.setAttribute('class', 'text-center w-full mt-16');
    todoItemsList.textContent = 'No items';

  // Render list of todo items
  } else {
    for (let i = 0; i < project.todoElements.length; i += 1) {
      const todoItem = document.createElement('div');
      todoItem.setAttribute('class', 'project mb-2 p-4 bg-cyan-500 rounded-md w-full flex');
      todoItem.innerHTML = `
      <label class="todo-checkbox flex-none">
      <input type="checkbox" name="checkbox" checked/>
      </label>
      <p class="grow mx-2 h-8 todo-item-text">${project.todoElements[i].title}</p>
      <button class="self-end flex-none bg-rose-800 p-2 rounded">
        Delete
      </button>
      `;
      todoItemsList.appendChild(todoItem);
    }
  }

  console.log(todoItemsList);
  return todoItemsList;
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
  // eslint-disable-next-line no-use-before-define
  addTodoBtn.addEventListener('click', createTodoItem);

  addTodo.appendChild(addTodoTitle);
  addTodo.appendChild(addTodoBtn);

  return addTodo;
}

function renderTodosSection(e) {
  console.log(e.target.id);
  // Get id of the current selected project
  const currentProjectId = Number(e.target.id.split('-').pop());
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

function createTodoItem(e) {
  saveTodoItem(e);
  renderTodosSection(e);
}

export { renderTodosSection };
