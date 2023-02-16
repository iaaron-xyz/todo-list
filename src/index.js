import { headerContent } from './layout/header';
import { sidebarContent } from './layout/sidebar';
import { todoListContent } from './layout/content';
import {
  topHeader,
  sidebar,
  todoList,
  newProjectModal,
} from './layout/layout';

import {
  closeNewProjectModal,
  createProject,
  renderProjects,
  deleteProject,
  openNewProjectModal,
} from './actions/projects';

import './output.css';

function baseHead() {
  // header elements
  const linkElement = document.createElement('link');
  // Add google material icons
  linkElement.setAttribute('rel', 'stylesheet');
  linkElement.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

  return linkElement;
}

function baseContainer() {
  // Base classes
  const html = document.getElementsByTagName('html')[0];
  const body = document.getElementsByTagName('body')[0];
  // Set base attributes for the project
  html.setAttribute('class', 'h-full w-full');
  body.setAttribute('class', 'h-full w-full box-border bg-slate-900 text-slate-200');

  // Create the base div element
  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  container.setAttribute('class', 'h-full w-full grid-container');
  // container.innerHTML = '<h1>Hello Todo List!</h1>';
  return container;
}

// appen base div cintainer
document.head.appendChild(baseHead());
document.body.appendChild(baseContainer());
const container = document.getElementById('container');

// append base sections
container.appendChild(topHeader());
container.appendChild(sidebar());
container.appendChild(todoList());
container.appendChild(newProjectModal());

// Append content to the sections
const sectionSidebar = document.querySelector('#section-sidebar');
document.querySelector('#section-header').appendChild(headerContent());
document.querySelector('#section-todolist').appendChild(todoListContent());
sectionSidebar.appendChild(sidebarContent()[0]);
sectionSidebar.appendChild(sidebarContent()[1]);
renderProjects();

// Event listeners
const newProjectBtn = document.getElementById('new-project-btn');
const closeNewProjectBtn = document.getElementById('close-new-btn');
const createProjectBtn = document.getElementById('create-project');
const deleteProjectBtns = Array.from(document.querySelectorAll('.delete-project-btn'));

newProjectBtn.addEventListener('click', openNewProjectModal);
closeNewProjectBtn.addEventListener('click', closeNewProjectModal);
createProjectBtn.addEventListener('click', createProject);
deleteProjectBtns.forEach((btn) => {
  btn.addEventListener('click', deleteProject);
});
