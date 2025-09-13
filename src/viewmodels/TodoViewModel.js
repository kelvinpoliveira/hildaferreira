import TodoModel from '../models/TodoModel';

class TodoViewModel {
  constructor() {
    this.model = new TodoModel();
  }
  
  get todos() {
    return this.model.filteredTodos;
  }
  
  get todoCount() {
    return this.model.todoCount;
  }
  
  get filter() {
    return this.model.filter;
  }
  
  handleAddTodo = (text) => {
    if (text.trim()) {
      this.model.addTodo(text.trim());
    }
  }
  
  handleToggleTodo = (id) => {
    this.model.toggleTodo(id);
  }
  
  handleRemoveTodo = (id) => {
    this.model.removeTodo(id);
  }
  
  handleFilterChange = (filter) => {
    this.model.setFilter(filter);
  }
}

export default TodoViewModel;