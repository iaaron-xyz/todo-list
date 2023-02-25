function sidebar() {
  const sidebarSection = document.createElement('section');
  sidebarSection.setAttribute('id', 'section-sidebar');
  sidebarSection.setAttribute('class', 'bg-cyan-900 p-4 col-start-1 flex flex-col rounded-lg');
  return sidebarSection;
}

function todoList() {
  const todoListSection = document.createElement('section');
  todoListSection.setAttribute('id', 'section-todolist');
  todoListSection.setAttribute('class', 'bg-pink-900 col-start-2 relative');
  return todoListSection;
}

function modal() {
  const modalSection = document.createElement('div');
  modalSection.setAttribute('id', 'modal');
  modalSection.setAttribute('class', 'modal pt-16 hidden');
  modalSection.innerHTML = '<div class="modal-content bg-white text-black p-4" id="modal-content"></div>;';

  return modalSection;
}

export {
  sidebar, todoList, modal,
};
