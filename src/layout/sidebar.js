import { projectsList } from '../actions/projects';

function sidebarContent() {
  const sidebarTopElements = document.createElement('div');
  const sidebarBottomElements = document.createElement('div');

  sidebarTopElements.setAttribute('id', 'sidebar-projects-list`');
  sidebarTopElements.setAttribute('class', 'text-2xl row-start-1 row-end-5');
  sidebarBottomElements.innerHTML = '';

  // Add the initial projects
  projectsList.forEach((element) => {
    sidebarTopElements.innerHTML += `
                                    <div id="projects">
                                      <h2 class="text-4xl mb-6">Your projects</h2>
                                      <button class="project mb-2 bg-cyan-500 p-2 rounded-md w-full">
                                        ${element.name}
                                      </button>
                                    </div>
                                    `;
  });

  sidebarBottomElements.setAttribute('id', 'sidebar-bottom');
  sidebarBottomElements.setAttribute('class', 'text-2xl row-start-6 self-end');
  sidebarBottomElements.innerHTML = `
                                    <button id="new-project-btn" class="bg-cyan-500 p-3 rounded-md w-full">
                                      New project +
                                    </button>
  `;

  return [sidebarTopElements, sidebarBottomElements];
}

export { sidebarContent };
