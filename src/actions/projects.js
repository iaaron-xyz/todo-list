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

function closeProjectModal() {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  // hide the modal
  modal.classList.add('hidden');
  // task form content
  modalContent.innerHTML = '';
}

function openProjectModal() {
  // Get modal container
  const newProjectModal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');

  // close button
  const closeBtn = document.createElement('span');
  closeBtn.setAttribute('id', 'close-modal-btn');
  closeBtn.setAttribute('class', 'close material-symbols-rounded hover:bg-violet-100');
  closeBtn.textContent = 'close';
  closeBtn.addEventListener('click', closeProjectModal);

  // Create project form container
  const addProjectForm = document.createElement('div');
  addProjectForm.setAttribute('id', 'create-project-modal');
  // title form h2
  const titleForm = document.createElement('h2');
  titleForm.setAttribute('class', 'text-xl font-bold mb-4');
  titleForm.textContent = 'Create your new Project';
  // form
  const formSection = document.createElement('form');
  formSection.setAttribute('class', 'form-elements flex flex-col');
  formSection.innerHTML = `
    <label for="name">Your Project:</label>
    <input type="text" name="name" id="name" class="form-input mb-4 rounded-lg border-0 bg-violet-100 dark:bg-slate-500 dark:text-white" placeholder="Project name" required>

    <label for="description">Description:</label>
    <textarea rows="4" name="description" id="description" class="form-input mb-4 rounded-lg border-0 bg-violet-100 dark:bg-slate-500 dark:text-white"></textarea>
    `;
  // button
  const btnSubmit = document.createElement('button');
  btnSubmit.setAttribute('type', 'button');
  btnSubmit.setAttribute('id', 'create-project-btn');
  btnSubmit.setAttribute('class', 'p-4 bg-purple-600 text-white rounded-lg font-bold');
  btnSubmit.textContent = 'Create Project!';
  // eslint-disable-next-line no-use-before-define
  btnSubmit.addEventListener('click', createProject);

  // Append Elements to DOM
  formSection.appendChild(btnSubmit);
  addProjectForm.appendChild(titleForm);
  addProjectForm.appendChild(formSection);
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(addProjectForm);

  // hidden => display: none;
  newProjectModal.classList.remove('hidden');
}

function appendProject(obj) {
  // get the projects section to append append a new one
  const projects = document.getElementById('projects');
  // Create a new project container element
  const newProject = document.createElement('div');

  // Set attributes and values for the new project
  newProject.setAttribute('class', 'project-element bg-violet-100 w-full mb-2 p-2 rounded-md text-left flex drop-shadow-md hover:bg-violet-400 hover:text-white hover:font-bold dark:bg-slate-700');
  newProject.setAttribute('id', `project${obj.id}`);

  // name project section
  const projectName = document.createElement('button');
  projectName.setAttribute('class', 'project');
  projectName.setAttribute('id', `pr-${obj.id}`);
  projectName.textContent = `${obj.name}`;
  projectName.addEventListener('click', renderTodosSection);

  // project delete button section
  const projectDelete = document.createElement('button');
  projectDelete.setAttribute('class', 'ml-auto bg-transparent delete-project-btn rounded-lg flex p-1 hover:bg-rose-500 hover:text-white');
  projectDelete.setAttribute('id', `pr-delbtn-${obj.id}`);
  projectDelete.innerHTML = `<span class="material-symbols-rounded" id="pr-delicon-${obj.id}">delete</span>`;
  // eslint-disable-next-line no-use-before-define
  projectDelete.addEventListener('click', deleteProject);

  newProject.appendChild(projectName);
  newProject.appendChild(projectDelete);
  projects.appendChild(newProject);
}

function createProject() {
  const name = document.getElementById('name');
  const description = document.getElementById('description');

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
  closeProjectModal();
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
  const currentProjectId = Number(e.target.id.split('-')[2]);
  // Remove the project from the local storage that match the id
  for (let i = 0; i < projectsList.length; i += 1) {
    if (projectsList[i].id === currentProjectId) {
      projectsList.splice(i, 1);
      break;
    }
  }
  // update local storage
  localStorage.setItem('projectsList', JSON.stringify(projectsList));

  // remove from DOM
  document.getElementById(`project${currentProjectId}`).remove();
}

export {
  openProjectModal,
  closeProjectModal,
  createProject,
  appendProject,
  renderProjects,
  deleteProject,
};
