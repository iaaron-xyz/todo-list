function topHeader() {
  const header = document.createElement('section');
  header.setAttribute('id', 'section-header');
  header.setAttribute('class', 'bg-green-900 p-4 col-span-full row-start-1');
  header.innerHTML = '<h1>Header section</h1>';
  return header;
}

function sidebar() {
  const sidebarSection = document.createElement('section');
  sidebarSection.setAttribute('id', 'section-sidebar');
  sidebarSection.setAttribute('class', 'bg-cyan-900 p-4 col-start-1 row-start-2');
  sidebarSection.innerHTML = '<h2>Sidebar section</h2>';
  return sidebarSection;
}

function mainContent() {
  const mainContentSection = document.createElement('section');
  mainContentSection.setAttribute('id', 'section-sidebar');
  mainContentSection.setAttribute('class', 'bg-pink-900 p-4 col-start-2 row-start-2');
  mainContentSection.innerHTML = '<h2>Main content section</h2>';
  return mainContentSection;
}

export { topHeader, sidebar, mainContent };
