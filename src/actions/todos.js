import { TodoItem } from '../classes/item';

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

function saveTodoItem(prId) {
  console.log(prId);
  // get value input
  const todoTitleInput = document.getElementById('todo-title-input');
  console.log(todoTitleInput.value);
  // get the project from local storage
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  // find current project and append new todo item
  for (let i = 0; i < projectsList.length; i += 1) {
    if (prId === projectsList[i].id) {
      projectsList[i].todoElements.push(new TodoItem(
        `${prId}-${projectsList[i].itemsCounter}`,
        todoTitleInput.value,
      ));
      // update items counter
      projectsList[i].itemsCounter += 1;
      console.log(projectsList[i]);
    }
  }
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
}

function createTodoElement(itemObj) {
  // Create base container
  const todoItem = document.createElement('div');
  todoItem.setAttribute('class', 'project mb-2 p-4 bg-cyan-500 rounded-md w-full flex');
  todoItem.setAttribute('id', `todo-container-${itemObj.id}`);

  // label
  const todoLabel = document.createElement('label');
  todoLabel.setAttribute('class', 'todo-checkbox flex-none');
  // input
  const todoInput = document.createElement('input');
  todoInput.setAttribute('type', 'checkbox');
  todoInput.setAttribute('name', 'checkbox');
  // paragraph
  const todoParagraph = document.createElement('p');
  todoParagraph.setAttribute('class', 'grow mx-2 h-8 todo-item-text');
  todoParagraph.textContent = itemObj.title;
  // button
  const todoBtn = document.createElement('button');
  todoBtn.setAttribute('class', 'self-end flex-none bg-rose-800 p-2 rounded flex');
  todoBtn.setAttribute('id', `del-item_${itemObj.id}`);
  todoBtn.innerHTML = `
    <span class="material-symbols-rounded" id="del-sym_${itemObj.id}">delete</span>
  `;
  // eslint-disable-next-line no-use-before-define
  todoBtn.addEventListener('click', deleteTodoItem);

  todoLabel.appendChild(todoInput);
  todoItem.appendChild(todoLabel);
  todoItem.appendChild(todoParagraph);
  todoItem.appendChild(todoBtn);

  return todoItem;
}

function appendNewItem(prId) {
  // get parent of todo-items
  const todoList = document.getElementById('todo-list');

  // get associated project
  const project = getProject(prId);

  // get the last created item in the list
  const latestItem = project.todoElements[project.todoElements.length - 1];

  // remove no-items sign for new projects
  if (project.todoElements.length === 1) {
    todoList.innerHTML = '';
  }

  // Create todo item
  todoList.appendChild(createTodoElement(latestItem));
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
  todoItemsList.setAttribute('class', 'todos-list text-base');
  todoItemsList.setAttribute('id', 'todo-list');

  // Append todo items if any otherwise inform the user
  if (project.todoElements.length === 0) {
    todoItemsList.setAttribute('class', 'text-center w-full mt-16');
    todoItemsList.textContent = 'No items';

  // Render list of todo items
  } else {
    for (let i = 0; i < project.todoElements.length; i += 1) {
      todoItemsList.appendChild(createTodoElement(project.todoElements[i]));
    }
  }

  return todoItemsList;
}

function renderTodosSection(e) {
  // Get id of the current selected project
  const currentProjectId = Number(e.target.id.split('-').pop());
  // Get todos section
  const contentSection = document.getElementById('todos-content');

  // Get current project
  const currentProject = getProject(currentProjectId);

  contentSection.innerHTML = '';
  contentSection.appendChild(renderProjectDescription(currentProject));
  contentSection.appendChild(renderTodoItems(currentProject));
}

function createTodoItem(e) {
  // get project id
  const projectId = Number(e.target.id.split('-').pop());
  saveTodoItem(projectId);
  appendNewItem(projectId);
}

function deleteTodoItem(e) {
  const itemIdList = e.target.id.split('_').pop().split('-');

  // remove from local storage
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  projectsList.every((element) => {
    if (element.id === Number(itemIdList[0])) {
      for (let i = 0; i < element.todoElements.length; i += 1) {
        if (e.target.id.split('_').pop() === element.todoElements[i].id) {
          element.todoElements.splice(i, 1);
        }
      }
      // break
      return false;
    }
    // continue
    return true;
  });
  // update local storage
  localStorage.setItem('projectsList', JSON.stringify(projectsList));

  // remove from DOM
  const itemId = e.target.id.split('_').pop();
  const currentItem = document.getElementById(`todo-container-${itemId}`);
  currentItem.remove();
}

function renderHomeTodos() {
  // get the element to insert the items
  const todosContent = document.getElementById('todos-content');
  todosContent.innerHTML = '';
  // get available projects from localStorage
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  // iterate over every todoList on every project
  projectsList.forEach((project) => {
    if (project.todoElements.length) {
      // Render the title for the project todo-list
      const projectTitle = document.createElement('h2');
      projectTitle.setAttribute('class', 'text-2xl text-left my-4 p-2');
      projectTitle.textContent = project.name;
      todosContent.appendChild(projectTitle);
      // append every todo item in the project
      project.todoElements.forEach((item) => {
        todosContent.appendChild(createTodoElement(item));
      });
    }
  });
}

export { renderTodosSection, renderHomeTodos };
