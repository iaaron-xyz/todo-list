import { Project } from '../classes/project';

// Create the base project
const baseProject = new Project('Your Tasks', 'This is a general view of all your tasks');

// The list that will contain all the projects
const projectsList = [];
// Push the base project
projectsList.push(baseProject);

function openNewProjectModal() {
  // display on the new project modal
  const newProjectModal = document.getElementById('new-project-modal');
  newProjectModal.classList.remove('hidden');
}

function closeNewProjectModal() {
  // Hide the new project modal -- hidden => display: none;
  document.getElementById('new-project-modal').classList.add('hidden');
  // clear input fields
  document.getElementById('project-name').value = '';
  document.getElementById('project-description').value = '';
}

export { openNewProjectModal, closeNewProjectModal, projectsList };
