import { sidebarTop, sidebarProjects, sidebarBottom } from './layout/sidebar';
import { todoListContent } from './layout/content';
import {
  sidebar,
  todoList,
  modal,
  leftPanel,
} from './layout/layout';

import {
  renderProjects,
  openProjectModal,
} from './actions/projects';

import './output.css';
import {
  renderHomeTodos,
  openTaskModal,
} from './actions/todos';
import { toggleNightDayMode } from './actions/content';

// create darkMode variable if not exist
if (!localStorage.getItem('darkMode')) {
  const darkMode = false;
  localStorage.setItem('darkMode', darkMode);
}

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
  const darkMode = JSON.parse(localStorage.getItem('darkMode'));
  // decide if add dark class
  if (darkMode) {
    html.setAttribute('class', 'h-full w-full dark');
  } else {
    html.setAttribute('class', 'h-full w-full');
  }
  body.setAttribute('class', 'h-full w-full box-border bg-white text-slate-700 dark:text-slate-200');

  // Create the base div element
  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  container.setAttribute('class', 'h-full w-full grid-container');
  return container;
}

// append base div cintainer
document.head.appendChild(baseHead());
document.body.appendChild(baseContainer());
const container = document.getElementById('container');

// append base sections
// container.appendChild(topHeader());
container.appendChild(sidebar());
container.appendChild(todoList());
container.appendChild(modal());
container.appendChild(leftPanel());

// Append content to the sections
const sectionSidebar = document.querySelector('#section-sidebar');
document.querySelector('#section-todolist').appendChild(todoListContent());
sectionSidebar.appendChild(sidebarTop());
sectionSidebar.appendChild(sidebarProjects());
sectionSidebar.appendChild(sidebarBottom());
renderProjects();
renderHomeTodos();

// Event listeners
const homeBtn = document.getElementById('home-btn');
const newProjectBtn = document.getElementById('new-project-btn');
const navbarBtnAdd = document.getElementById('navbar-button-add');
const checkboxToggle = document.getElementById('checkbox-toggle');

// projects
homeBtn.addEventListener('click', renderHomeTodos);
newProjectBtn.addEventListener('click', openProjectModal);
navbarBtnAdd.addEventListener('click', openTaskModal);
checkboxToggle.addEventListener('click', toggleNightDayMode);
