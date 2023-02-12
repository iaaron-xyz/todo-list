function sidebarContent() {
  const sidebarTopElements = document.createElement('div');
  const sidebarBottomElements = document.createElement('div');

  sidebarTopElements.setAttribute('id', 'sidebar-projects-list`');
  sidebarTopElements.setAttribute('class', 'text-2xl row-start-1 row-end-5');
  sidebarTopElements.innerHTML = `
                                  <div>
                                    <h2 class="text-4xl mb-6">My projects</h2>
                                    <button class="project mb-2 bg-cyan-500 p-2 rounded-md w-full">
                                      Project name 1
                                    </button>
                                    <button class="project mb-2 bg-cyan-500 p-2 rounded-md w-full">
                                      Project name two
                                    </button>
                                  </div>
  `;

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
