function todoListContent() {
  const todoItem = document.createElement('div');

  todoItem.setAttribute('id', 'todos-list-section`');
  todoItem.setAttribute('class', 'text-xl row-start-1 row-end-5');
  todoItem.innerHTML = `
                                  <div id="todos-content" class="px-8 py-4 flex flex-col items-center overflow-auto h-full">
                                  </div>
  `;

  return todoItem;
}

export { todoListContent };
