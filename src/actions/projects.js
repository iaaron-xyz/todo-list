import { Project } from '../classes/project';

import { renderTodosSection } from './todos';

if (!localStorage.getItem('projectsList')) {
  // Set the increment id
  let idProject = 0;
  localStorage.setItem('idProject', idProject);

  // Create the base project
  const baseProject = new Project(0, 'Your Tasks', 'This is a general view of all your tasks');
  // The list that will contain all the projects
  const projectsList = [];
  // Push the base project
  projectsList.push(baseProject);

  // save list to local storage using stringify to save it properly
  idProject += 1;
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
  localStorage.setItem('idProject', idProject);
}

function openNewProjectModal() {
  // display on the new project modal
  const newProjectModal = document.getElementById('new-project-modal');
  // hidden => display: none;
  newProjectModal.classList.remove('hidden');
}

function closeNewProjectModal() {
  // Hide the new project modal -- hidden => display: none;
  document.getElementById('new-project-modal').classList.add('hidden');
  // clear input fields
  document.getElementById('project-name').value = '';
  document.getElementById('project-description').value = '';
}

function appendProject(obj) {
  // get the projects section to append append a new one
  const projects = document.getElementById('projects');
  // Create a new project container element
  const newProject = document.createElement('div');

  // Set attributes and values for the new project
  newProject.setAttribute('class', 'project-element bg-cyan-500 w-full mb-2 p-2 rounded-md text-left flex');
  newProject.setAttribute('id', `project${obj.id}`);

  // name project section
  const projectName = document.createElement('button');
  projectName.setAttribute('class', 'project');
  projectName.setAttribute('id', `pr-${obj.id}`);
  projectName.textContent = `${obj.name}`;
  projectName.addEventListener('click', renderTodosSection);

  // project delete button section
  const projectDelete = document.createElement('button');
  projectDelete.setAttribute('class', 'ml-auto bg-rose-700 delete-project-btn rounded-lg flex p-1');
  projectDelete.setAttribute('id', `pr-${obj.id}`);
  projectDelete.innerHTML = `<span class="material-symbols-rounded" id="pr-${obj.id}">delete</span>`;
  // eslint-disable-next-line no-use-before-define
  projectDelete.addEventListener('click', deleteProject);

  newProject.appendChild(projectName);
  newProject.appendChild(projectDelete);
  projects.appendChild(newProject);
}

function createProject() {
  const name = document.getElementById('project-name');
  const description = document.getElementById('project-description');

  // Retrieve the list of projects
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  let idProject = Number(localStorage.getItem('idProject'));
  // Create new project object
  const newProject = new Project(idProject, name.value, description.value);
  projectsList.push(newProject);
  // Store the updated updated values
  idProject += 1;
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
  localStorage.setItem('idProject', idProject);

  // render new project to the DOM
  appendProject(newProject);
  // Close modal
  closeNewProjectModal();
}

function renderProjects() {
  // Remove old projects
  document.getElementById('projects').innerHTML = '<h2 class="text-4xl mb-6">Your projects</h2>';
  // get stored projects and add the updated project list
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  projectsList.forEach((element) => {
    appendProject(element);
  });
}

function deleteProject(e) {
  console.log(e.target.id);
  // Get all existent projects in localStorage
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  // Get id of the current selected project
  const currentProjectId = Number(e.target.id.split('-')[1]);
  // Remove the project from the local storage that match the id
  for (let i = 0; i < projectsList.length; i += 1) {
    if (projectsList[i].id === currentProjectId) {
      projectsList.splice(i, 1);
      break;
    }
  }
  // update local storage
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
  // update DOM
  renderProjects();
}

export {
  openNewProjectModal,
  closeNewProjectModal,
  createProject,
  appendProject,
  renderProjects,
  deleteProject,
};
