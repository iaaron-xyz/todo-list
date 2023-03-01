function todoListContent() {
  const todoItem = document.createElement('div');

  todoItem.setAttribute('id', 'todos-list-section`');
  todoItem.setAttribute('class', 'h-full text-xl row-start-1 row-end-5 bg-slate-200 dark:bg-slate-900');
  todoItem.innerHTML = `
    <div class="navbar flex bg-slate-200 p-4">
      <h2 class="grow p-3 text-purple-700 font-bold" id="navbar-title">Home</h2>
      <div class="flex-none flex items-center">
        <label class="label-toggle">
          <input type="checkbox" id="checkbox-toggle">
          <span class="switch-theme"></span>
        </label>
        <button class="ml-6 p-3 drop-shadow-lg bg-purple-700 text-white font-bold rounded-lg" id="navbar-button-add">+ New Task</button>
      </div>
    </div>
    <div id="todos-content" class="px-8 py-4 flex flex-col items-center">
    </div>
  `;

  return todoItem;
}

export { todoListContent };
