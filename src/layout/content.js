function todoListContent() {
  const todoItem = document.createElement('div');

  todoItem.setAttribute('id', 'sidebar-projects-list`');
  todoItem.setAttribute('class', 'text-2xl row-start-1 row-end-5');
  todoItem.innerHTML = `
                                  <div>
                                    <h2 class="mb-6 text-xl">Project name 1</h2>
                                    <div class="project mb-2 p-4 bg-cyan-500 rounded-md w-full flex">
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
