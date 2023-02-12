function topHeader() {
  const header = document.createElement('section');
  header.setAttribute('id', 'section-header');
  header.setAttribute('class', 'bg-green-900 py-4 px-8 col-span-full row-start-1 flex items-center');
  return header;
}

function sidebar() {
  const sidebarSection = document.createElement('section');
  sidebarSection.setAttribute('id', 'section-sidebar');
  sidebarSection.setAttribute('class', 'bg-cyan-900 p-4 col-start-1 row-start-2 grid grid-rows-6 rounded-lg');
  return sidebarSection;
}

function todoList() {
  const todoListSection = document.createElement('section');
  todoListSection.setAttribute('id', 'section-todolist');
  todoListSection.setAttribute('class', 'bg-pink-900 p-4 col-start-2 row-start-2 rounded-lg');
  return todoListSection;
}

export { topHeader, sidebar, todoList };
