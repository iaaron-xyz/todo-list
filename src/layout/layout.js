function sidebar() {
  const sidebarSection = document.createElement('section');
  sidebarSection.setAttribute('id', 'section-sidebar');
  sidebarSection.setAttribute('class', 'h-full bg-white p-4 col-start-1 flex flex-col drop-shaodw-lg dark:bg-slate-800');
  return sidebarSection;
}

function todoList() {
  const todoListSection = document.createElement('section');
  todoListSection.setAttribute('id', 'section-todolist');
  todoListSection.setAttribute('class', 'h-full bg-white col-start-2 sticky');
  return todoListSection;
}

function modal() {
  const modalSection = document.createElement('div');
  modalSection.setAttribute('id', 'modal');
  modalSection.setAttribute('class', 'modal pt-16 hidden');
  modalSection.innerHTML = '<div class="bg-white modal-content text-black p-4 dark:bg-slate-700 dark:text-slate-200" id="modal-content"></div>;';

  return modalSection;
}

function leftPanel() {
  const panelSection = document.createElement('div');
  panelSection.setAttribute('id', 'right-panel');
  panelSection.setAttribute('class', 'panel absolute top-0 right-0 h-full w-4/12 p-4 z-10 bg-violet-200 dark:bg-slate-800 hidden');
  panelSection.innerHTML = 'Task content here';
  return panelSection;
}

export {
  sidebar, todoList, modal, leftPanel,
};
