function sidebarTop() {
  const sidebarTopElements = document.createElement('div');
  const homeSection = document.createElement('div');
  const homeBtn = document.createElement('button');

  // Top section
  sidebarTopElements.setAttribute('id', 'sidebar-projects-list`');
  sidebarTopElements.setAttribute('class', 'flex-none mb-4');
  homeSection.setAttribute('id', 'home-section');
  homeSection.innerHTML = '<h1 class="text-3xl">All.do: Organize better</h1>';
  homeBtn.setAttribute('id', 'home-btn');
  homeBtn.setAttribute('type', 'button');
  homeBtn.setAttribute('class', 'flex items-center text-2xl text-left my-4 p-4 w-full rounded-lg bg-white text-violet-700 hover:bg-violet-200 hover:text-bold dark:bg-slate-800 dark:text-slate-300');
  homeBtn.innerHTML = '<span class="material-symbols-rounded icon-lg mr-2">home</span> Home';

  // Append elements
  sidebarTopElements.appendChild(homeSection);
  homeSection.appendChild(homeBtn);

  return sidebarTopElements;
}

function sidebarProjects() {
  const sidebarProjectElements = document.createElement('div');
  const projects = document.createElement('div');

  // Projects section
  sidebarProjectElements.setAttribute('id', 'sidebar-projects-list');
  sidebarProjectElements.setAttribute('class', 'grow');
  projects.setAttribute('id', 'projects');
  projects.innerHTML = '<h2 class="text-4xl mb-6">Your projects</h2>';

  // Append elements
  sidebarProjectElements.appendChild(projects);

  return sidebarProjectElements;
}

function sidebarBottom() {
  const sidebarBottomElements = document.createElement('div');

  // Bottom section
  sidebarBottomElements.setAttribute('id', 'sidebar-bottom');
  sidebarBottomElements.setAttribute('class', 'flex-none');
  sidebarBottomElements.innerHTML = `
    <button id="new-project-btn" class="bg-violet-600 text-white font-bold p-3 rounded-md w-full drop-shadow-lg hover:bg-violet-700">
      New project +
    </button>`;

  return sidebarBottomElements;
}

export { sidebarTop, sidebarProjects, sidebarBottom };
