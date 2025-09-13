import { makeAutoObservable } from 'mobx';

class TodoModel {
  todos = [];
  filter = 'all';
  
  constructor() {
    makeAutoObservable(this);
  }
  
  addTodo(text) {
    this.todos.push({
      id: Date.now(),
      text,
      completed: false
    });
  }
  
  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
  
  removeTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
  
  setFilter(filter) {
    this.filter = filter;
  }
  
  get filteredTodos() {
    switch (this.filter) {
      case 'active':
        return this.todos.filter(t => !t.completed);
      case 'completed':
        return this.todos.filter(t => t.completed);
      default:
        return this.todos;
    }
  }
  
  get todoCount() {
    return this.todos.filter(t => !t.completed).length;
  }
}

export default TodoModel;