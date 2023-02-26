class TodoItem {
  constructor(id, title, priority = 'medium', notes = '', dueDate = '', status = false) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.notes = notes;
    this.dueDate = dueDate;
    this.status = status;
  }
}

export { TodoItem };
