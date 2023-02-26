function sidebar() {
  const sidebarSection = document.createElement('section');
  sidebarSection.setAttribute('id', 'section-sidebar');
  sidebarSection.setAttribute('class', 'bg-white p-4 col-start-1 flex flex-col drop-shaodw-lg');
  return sidebarSection;
}

function todoList() {
  const todoListSection = document.createElement('section');
  todoListSection.setAttribute('id', 'section-todolist');
  todoListSection.setAttribute('class', 'bg-violet-200 col-start-2 relative');
  return todoListSection;
}

function modal() {
  const modalSection = document.createElement('div');
  modalSection.setAttribute('id', 'modal');
  modalSection.setAttribute('class', 'modal pt-16 hidden');
  modalSection.innerHTML = '<div class="bg-white modal-content text-black p-4" id="modal-content"></div>;';

  return modalSection;
}

export {
  sidebar, todoList, modal,
};
