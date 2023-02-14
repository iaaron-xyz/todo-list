import { Project } from '../classes/project';

if (!localStorage.getItem('projectsList')) {
  // Create the base project
  const baseProject = new Project(0, 'Your Tasks', 'This is a general view of all your tasks');
  // The list that will contain all the projects
  const projectsList = [];
  // Push the base project
  projectsList.push(baseProject);
  // save list to local storage using stringify to save it properly
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
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
  const newProject = document.createElement('button');

  // Set attributes and values for the new project
  newProject.setAttribute('class', 'project bg-cyan-500 w-full mb-2 p-2 rounded-md text-left');
  newProject.setAttribute('id', `project${obj.id}`);
  newProject.textContent = `${obj.name}`;

  console.log(projects);

  projects.appendChild(newProject);
}

function createProject() {
  const name = document.getElementById('project-name');
  const description = document.getElementById('project-description');

  // Retrieve the list of projects
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  // Create new project object
  const newProject = new Project(projectsList.length, name.value, description.value);
  projectsList.push(newProject);
  // Store the updated list of projects
  localStorage.setItem('projectsList', JSON.stringify(projectsList));

  // render new project to the DOM
  appendProject(newProject);
  // Close modal
  closeNewProjectModal();
}

export {
  openNewProjectModal, closeNewProjectModal, createProject, appendProject,
};
