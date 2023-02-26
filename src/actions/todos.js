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

function updateTaskStyle(item, status, context = '') {
  const checkbox = item.childNodes[0].childNodes[0];
  const p = item.childNodes[1].childNodes[0].childNodes[0];
  const btn = item.childNodes[2];
  const icons = item.childNodes[1].childNodes[1];

  console.log(btn);

  // Completed task
  if (status) {
    item.classList.add('bg-gray-300');
    p.classList.add('line-through', 'text-gray-500');
    btn.classList.add('bg-gray-300');
    icons.classList.add('text-gray-500');
    // remove classes
    item.classList.remove('bg-white', 'hover:bg-sky-100');
    icons.classList.remove('text-purple-600');
    if (context === 'onrender') {
      checkbox.checked = true;
    }

  // Active task
  } else {
    item.classList.add('bg-white', 'hover:bg-sky-100');
    btn.classList.add('bg-transparent');
    icons.classList.add('text-purple-600');
    // remove classes
    item.classList.remove('bg-gray-300');
    btn.classList.remove('bg-gray-300');
    p.classList.remove('line-through', 'text-gray-500');
    icons.classList.remove('text-gray-500');
    if (context === 'onrender') {
      checkbox.checked = false;
    }
  }
}

function updateTaskStatus(e) {
  console.log(e.target.id, ': ', e.target.checked);
  const elementId = e.target.id.split('_').pop();
  const projectId = Number(elementId.split('-')[0]);
  const checkedItem = document.getElementById(`todo-container-${elementId}`);
  console.log(checkedItem);

  // Save status
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  for (let i = 0; i < projectsList.length; i += 1) {
    //  find the project
    if (projectsList[i].id === projectId) {
      for (let j = 0; j < projectsList[i].todoElements.length; j += 1) {
        // find the item
        if (projectsList[i].todoElements[j].id === elementId) {
          // Set the status
          projectsList[i].todoElements[j].status = e.target.checked;
        }
      }
    }
  }
  localStorage.setItem('projectsList', JSON.stringify(projectsList));

  updateTaskStyle(checkedItem, e.target.checked);
}

function saveTodoItem() {
  // Get current todo info
  const taskTitle = document.getElementById('title');
  const taskDuedate = document.getElementById('duedate');
  const taskNotes = document.getElementById('notes');
  const taskPriority = document.getElementById('priority');
  const taskProject = document.getElementById('project-name');

  // Get the id of the selected project
  const taskProjectId = Number(taskProject.value.split('-').pop());

  // // get the project from local storage
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));

  // // find current project and append new todo item
  for (let i = 0; i < projectsList.length; i += 1) {
    if (taskProjectId === projectsList[i].id) {
      // Add task with current info to the project
      projectsList[i].todoElements.push(
        new TodoItem(
          `${taskProjectId}-${projectsList[i].itemsCounter}`, // id
          taskTitle.value, // title
          taskPriority.value, // priority
          taskNotes.value, // notes
          taskDuedate.value, // Due date
        ),
      );
      // update items counter
      projectsList[i].itemsCounter += 1;
      console.log(projectsList[i].todoElements);
    }
  }
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
}

function createTodoElement(itemObj) {
  // Create base container
  const todoItem = document.createElement('div');
  todoItem.setAttribute('class', 'task drop-shadow-lg');
  todoItem.setAttribute('id', `todo-container-${itemObj.id}`);

  // label
  const todoLabel = document.createElement('label');
  todoLabel.setAttribute('class', 'todo-checkbox flex-none');
  // input
  const todoCheckbox = document.createElement('input');
  todoCheckbox.setAttribute('type', 'checkbox');
  todoCheckbox.setAttribute('name', 'checkbox');
  todoCheckbox.setAttribute('id', `check_${itemObj.id}`);
  todoCheckbox.addEventListener('click', updateTaskStatus);
  // content
  const todoMainContent = document.createElement('div');
  todoMainContent.setAttribute('class', 'grow w-full');
  // div title
  const todoParagraph = document.createElement('div');
  todoParagraph.setAttribute('class', 'w-full mx-2 mb-1 h-8');
  // button title
  const todoParagraphBtn = document.createElement('button');
  todoParagraphBtn.setAttribute('class', 'todo-item-text text-left');
  todoParagraphBtn.textContent = itemObj.title;
  // details
  const todoDetails = document.createElement('div');
  todoDetails.setAttribute('id', 'todo-details-list');
  todoDetails.setAttribute('class', 'detail-task');
  // button
  const todoBtn = document.createElement('button');
  todoBtn.setAttribute('class', 'self-start flex-none p-2 rounded flex text-rose-500 hover:bg-rose-500 hover:text-white');
  todoBtn.setAttribute('id', `del-item_${itemObj.id}`);
  todoBtn.innerHTML = `
    <span class="material-symbols-rounded" id="del-sym_${itemObj.id}">delete</span>
  `;
  // eslint-disable-next-line no-use-before-define
  todoBtn.addEventListener('click', deleteTodoItem);

  todoParagraph.appendChild(todoParagraphBtn);
  todoLabel.appendChild(todoCheckbox);
  todoMainContent.appendChild(todoParagraph);
  todoMainContent.appendChild(todoDetails);
  todoItem.appendChild(todoLabel);
  todoItem.appendChild(todoMainContent);
  todoItem.appendChild(todoBtn);

  // Append details
  if (itemObj.priority) {
    const detailIcon = document.createElement('button');
    detailIcon.setAttribute('class', 'flex mx-1');
    detailIcon.innerHTML = `
    <span class="bg-orange-400 text-white p-1 rounded-md text-xs font-bold">
      ${itemObj.priority}
    </span>`;
    todoDetails.appendChild(detailIcon);
  }
  if (itemObj.notes) {
    const detailIcon = document.createElement('button');
    detailIcon.setAttribute('class', 'flex mx-1');
    detailIcon.innerHTML = `
    <span class="material-symbols-rounded text-xs">
      description
    </span>`;
    todoDetails.appendChild(detailIcon);
  }
  if (itemObj.dueDate) {
    const detailIcon = document.createElement('button');
    detailIcon.setAttribute('class', 'flex mx-1');
    detailIcon.innerHTML = `
    <span class="material-symbols-rounded text-xs">
      date_range
    </span>`;
    todoDetails.appendChild(detailIcon);
  }

  // Add/remove classes and elementes based on current status
  updateTaskStyle(todoItem, itemObj.status, 'onrender');

  return todoItem;
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

function createTodoItem() {
  saveTodoItem();
  // Refresh the page with the new information
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

function closeTaskModal() {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');

  // hide the modal
  modal.classList.add('hidden');
  // task form content
  modalContent.innerHTML = '';
}

function openTaskModal(e) {
  console.log(e.target.id);
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');

  // close button
  const closeBtn = document.createElement('span');
  closeBtn.setAttribute('id', 'close-modal-btn');
  closeBtn.setAttribute('class', 'close material-symbols-rounded');
  closeBtn.textContent = 'close';
  closeBtn.addEventListener('click', closeTaskModal);

  // Create task form container
  const addTaskForm = document.createElement('div');
  addTaskForm.setAttribute('id', 'create-task-modal');

  // title form h2
  const titleForm = document.createElement('h2');
  titleForm.textContent = 'Add your new task!';
  // form
  const formSection = document.createElement('form');
  formSection.setAttribute('class', 'form-elements flex flex-col');
  formSection.innerHTML = `
    <label for="title">Your task:</label>
    <input type="text" name="title" id="title" class="mb-4" required>

    <label for="duedate">Due date:</label>
    <input type="date" name="duedate" id="duedate" class="mb-4">

    <label for="notes">Notes:</label>
    <textarea rows="4" name="notes" id="notes" class="mb-4"></textarea>

    <label for="priority">Priority</label>
    <select name="priority" id="priority" class="mb-8">
      <option value="low" selected>Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <label for="project-name">Project name:</label>
    <select name="project-name" id="project-name" class="mb-8">
    </select>
    `;

  // button
  const btnSubmit = document.createElement('button');
  btnSubmit.setAttribute('type', 'button');
  btnSubmit.setAttribute('id', 'create-task-btn');
  btnSubmit.setAttribute('class', 'p-4 bg-purple-600');
  btnSubmit.textContent = 'Create task!';
  btnSubmit.addEventListener('click', createTodoItem);

  // Create the DOM elements
  formSection.appendChild(btnSubmit);
  addTaskForm.appendChild(titleForm);
  addTaskForm.appendChild(formSection);
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(addTaskForm);

  // Create list of available projects
  const projectNames = document.getElementById('project-name');
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  projectsList.forEach((prj) => {
    const projectOption = document.createElement('option');
    projectOption.setAttribute('value', `project-${prj.id}`);
    projectOption.textContent = prj.name;
    projectNames.appendChild(projectOption);
  });

  modal.classList.remove('hidden');
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
      projectTitle.setAttribute('class', 'text-2xl text-left my-4 p-2 text-purple-600 font-bold');
      projectTitle.textContent = project.name;
      todosContent.appendChild(projectTitle);
      // append every todo item in the project
      project.todoElements.forEach((item) => {
        todosContent.appendChild(createTodoElement(item));
      });
    }
  });
}

export { renderTodosSection, renderHomeTodos, openTaskModal };
