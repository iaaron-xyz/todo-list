class TodoItem {
  constructor(id, title, priority = 'medium', notes = '', dueDate = '') {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.notes = notes;
    this.dueDate = dueDate;
  }
}

export { TodoItem };
