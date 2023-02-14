import { appendProject } from '../actions/projects';

function sidebarContent() {
  const sidebarTopElements = document.createElement('div');
  const sidebarBottomElements = document.createElement('div');

  sidebarTopElements.setAttribute('id', 'sidebar-projects-list`');
  sidebarTopElements.setAttribute('class', 'row-start-1 row-end-5');
  sidebarTopElements.innerHTML = `<div id="projects">
                                      <h2 class="text-4xl mb-6">Your projects</h2>
                                    </div>`;

  sidebarBottomElements.setAttribute('id', 'sidebar-bottom');
  sidebarBottomElements.setAttribute('class', 'text-2xl row-start-6 self-end');
  sidebarBottomElements.innerHTML = `
                                    <button id="new-project-btn" class="bg-cyan-500 p-3 rounded-md w-full">
                                      New project +
                                    </button>
  `;

  return [sidebarTopElements, sidebarBottomElements];
}

function renderProjects() {
  // get stored projects
  const projectsList = JSON.parse(localStorage.getItem('projectsList'));
  projectsList.forEach((element) => {
    appendProject(element);
  });
}

export { sidebarContent, renderProjects };
