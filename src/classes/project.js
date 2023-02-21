class Project {
  constructor(id, name, description, itemsCounter = 0, todoElements = []) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.todoElements = todoElements;
    this.itemsCounter = itemsCounter;
  }
}

export { Project };
