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
  projectsList.forEach((pr) => {
    if (prId === pr.id) {
      pr.todoElements.push(new TodoItem(
        `${prId}-${pr.todoElements.length}`,
        todoTitleInput.value,
      ));
    }
  });
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
}

function appendNewItem(prId) {
  // get parent of todo-items
  const todoList = document.getElementById('todo-list');

  // get associated project
  const project = getProject(prId);

  console.log(project);

  // get the last created item in the list
  const latestItem = project.todoElements[project.todoElements.length - 1];

  // remove no-items sign for new projects
  if (project.todoElements.length === 1) {
    todoList.innerHTML = '';
  }

  // Create todo item
  const todoItem = document.createElement('div');
  todoItem.setAttribute('class', 'project mb-2 p-4 bg-cyan-500 rounded-md w-full flex');
  todoItem.setAttribute('id', `todo-container-${latestItem.id}`);
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
  todoParagraph.textContent = latestItem.title;
  // button
  const todoBtn = document.createElement('button');
  todoBtn.setAttribute('class', 'self-end flex-none bg-rose-800 p-2 rounded flex');
  todoBtn.setAttribute('id', `del-item_${latestItem.id}`);
  todoBtn.innerHTML = `
    <span class="material-symbols-rounded" id="del-sym_${latestItem.id}">delete</span>
  `;
  // eslint-disable-next-line no-use-before-define
  todoBtn.addEventListener('click', deleteTodoItem);

  todoLabel.appendChild(todoInput);
  todoItem.appendChild(todoLabel);
  todoItem.appendChild(todoParagraph);
  todoItem.appendChild(todoBtn);

  // appen new todo in todo-list
  todoList.appendChild(todoItem);
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
      const todoItem = document.createElement('div');
      todoItem.setAttribute('class', 'project mb-2 p-4 bg-cyan-500 rounded-md w-full flex');
      todoItem.setAttribute('id', `todo-container-${project.todoElements[i].id}`);
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
      todoParagraph.textContent = project.todoElements[i].title;
      // button
      const todoBtn = document.createElement('button');
      todoBtn.setAttribute('class', 'self-end flex-none bg-rose-800 p-2 rounded flex');
      todoBtn.setAttribute('id', `del-item_${project.todoElements[i].id}`);
      todoBtn.innerHTML = `
        <span class="material-symbols-rounded" id="del-sym_${project.todoElements[i].id}">delete</span>
      `;
      // eslint-disable-next-line no-use-before-define
      todoBtn.addEventListener('click', deleteTodoItem);

      todoLabel.appendChild(todoInput);
      todoItem.appendChild(todoLabel);
      todoItem.appendChild(todoParagraph);
      todoItem.appendChild(todoBtn);

      todoItemsList.appendChild(todoItem);
    }
  }

  return todoItemsList;
}

function renderAddTodoBtn(project) {
  // get parent container
  const sectionTodo = document.getElementById('section-todolist');
  // Create the container
  const addTodo = document.createElement('button');
  addTodo.setAttribute('id', `add-todo-btn-${project.id}`);
  addTodo.setAttribute('class', 'project text-black bg-lime-900 mb-2 p-4 bg-cyan-500 rounded-md flex items-center w-6/12 absolute bottom-0 left-0 right-0 ml-auto mr-auto');
  addTodo.innerHTML = `
    <input type="text" class="rounded grow mr-4" id="todo-title-input" placeholder="My new task" required>
  `;
  sectionTodo.appendChild(addTodo);

  // // Add Todo Item btn
  const addTodoBtn = document.createElement('button');
  addTodoBtn.setAttribute('type', 'button');
  addTodoBtn.setAttribute('id', `add-todo-btn-${project.id}`);
  addTodoBtn.setAttribute('class', 'flex-none');
  addTodoBtn.textContent = '+ Add';
  // eslint-disable-next-line no-use-before-define
  addTodoBtn.addEventListener('click', createTodoItem);

  addTodo.appendChild(addTodoBtn);

  // return addTodo;
}

function renderTodosSection(e) {
  // Get id of the current selected project
  const currentProjectId = Number(e.target.id.split('-').pop());
  // Get todos section
  const contentSection = document.getElementById('todos-content');
  // contentSection.setAttribute('class', 'relative h-full');
  // Get list of existent projects
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  // Get current project
  let currentProject = {};
  projectsList.forEach((project) => {
    if (currentProjectId === project.id) {
      currentProject = project;
    }
  });
  contentSection.innerHTML = '';
  renderAddTodoBtn(currentProject);
  contentSection.appendChild(renderProjectDescription(currentProject));
  contentSection.appendChild(renderTodoItems(currentProject));
}

function createTodoItem(e) {
  // get project id
  const projectId = Number(e.target.id.split('-').pop());
  saveTodoItem(projectId);
  // get pdirect parent fo todo items
  // const todoList = document.getElementById('todo-list');
  // renderTodosSection(e);
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

export { renderTodosSection };
