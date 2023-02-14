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

function newProjectModal() {
  const newProjectModalSection = document.createElement('div');
  newProjectModalSection.setAttribute('id', 'new-project-modal');
  newProjectModalSection.setAttribute('class', 'modal pt-16 hidden');
  newProjectModalSection.innerHTML = `<div class="modal-content bg-black p-4">

                                        <span class="close material-symbols-rounded" id="close-new-btn">close</span>

                                        <div class="modal-main mt-8 p-4 h-full flex flex-col text-center">
                                          <div class="modal-header mb-8">
                                            <h2 id="modal-title" class="text-4xl row-start-1">
                                              Add the info for your new project!
                                            </h2>
                                          </div>

                                          <form method="get" class="modal-form row-span-2 flex flex-col items-center text-indigo-900">
                                            
                                            <input type="text" placeholder="Project name" class="form-input mb-4 w-8/12 rounded-lg" id="project-name" required/>
                                            
                                            <textarea type="text" placeholder="Project description" class="form-input mb-6 w-8/12 rounded-lg" rows="4" id="project-description"></textarea>
                                            
                                            <button type="button" id="create-project" class="p-2 w-6/12 text-white rounded-full bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Create Project</button>

                                          </form>
                                        </div>
                                      </div>`;

  return newProjectModalSection;
}

export {
  topHeader, sidebar, todoList, newProjectModal,
};
