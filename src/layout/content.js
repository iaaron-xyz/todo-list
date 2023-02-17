function todoListContent() {
  const todoItem = document.createElement('div');

  todoItem.setAttribute('id', 'todos-list-section`');
  todoItem.setAttribute('class', 'text-xl row-start-1 row-end-5');
  todoItem.innerHTML = `
                                  <div id="todos-content" class="px-8 py-4 flex flex-col items-center">
                                    <h2 class="mb-6 text-xl self-start">Project name 1</h2>
                                    <div class="project mb-2 p-4 bg-cyan-500 rounded-md w-full flex" id="todo-item">
                                      <label class="todo-checkbox flex-none">
                                        <input type="checkbox" name="checkbox" checked/>
                                      </label>
                                      <p class="grow mx-2">To do item 1</p>
                                      <button class="self-end flex-none bg-rose-800 p-2 rounded">
                                        Delete
                                      </button>
                                    </div>
                                    <div class="project mb-2 p-4 bg-cyan-500 rounded-md w-full flex">
                                      <label class="todo-checkbox flex-none">
                                        <input type="checkbox" name="checkbox"/>
                                      </label>
                                      <p class="grow mx-2 h-8 todo-item-text">To do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum To do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum o do item 2: lorem ipsum</p>
                                      <button class="self-end flex-none bg-rose-800 p-2 rounded">
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                  
  `;

  return todoItem;
}

export { todoListContent };
