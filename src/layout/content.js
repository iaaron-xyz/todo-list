function todoListContent() {
  const todoItem = document.createElement('div');

  todoItem.setAttribute('id', 'todos-list-section`');
  todoItem.setAttribute('class', 'text-xl row-start-1 row-end-5');
  todoItem.innerHTML = `
    <div class="navbar flex bg-orange-700 p-4">
      <h2 class="grow" id="navbar-title">Home</h2>
      <button class="flex-none" id="navbar-button-add">+ New Task</button>
    </div>
    <div id="todos-content" class="px-8 py-4 flex flex-col items-center overflow-auto h-full">
    </div>
  `;

  return todoItem;
}

export { todoListContent };
