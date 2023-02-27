function todoListContent() {
  const todoItem = document.createElement('div');

  todoItem.setAttribute('id', 'todos-list-section`');
  todoItem.setAttribute('class', 'h-full text-xl row-start-1 row-end-5');
  todoItem.innerHTML = `
    <div class="navbar flex bg-purple-200 p-4">
      <h2 class="grow p-3 text-purple-700 font-bold" id="navbar-title">Home</h2>
      <button class="flex-none p-3 drop-shadow-lg bg-purple-700 text-white font-bold rounded-lg" id="navbar-button-add">+ New Task</button>
    </div>
    <div id="todos-content" class="px-8 py-4 flex flex-col items-center">
    </div>
  `;

  return todoItem;
}

export { todoListContent };
