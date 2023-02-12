import { headerContent } from './layout/header';
import { sidebarContent } from './layout/sidebar';
import { todoListContent } from './layout/content';
import {
  topHeader, sidebar, todoList, newProjectModal,
} from './layout/layout';
import { openNewProjectModal } from './actions/projects';
import './output.css';

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
document.body.appendChild(baseContainer());
const container = document.getElementById('container');
// append base sections
container.appendChild(topHeader());
container.appendChild(sidebar());
container.appendChild(todoList());
container.appendChild(newProjectModal());

// Append basic content to the base sections
document.querySelector('#section-header').appendChild(headerContent());
document.querySelector('#section-sidebar').appendChild(sidebarContent()[0]);
document.querySelector('#section-sidebar').appendChild(sidebarContent()[1]);
document.querySelector('#section-todolist').appendChild(todoListContent());

// Event listeners
const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', openNewProjectModal);
