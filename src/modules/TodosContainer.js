import Todo from "./Todo.js";
import { getTodos, setTodos } from "./store.js";
export default class TodosContainer {
  todos = getTodos() || [];
  addTodo = (description) => {
    const index = this.todos.length + 1;
    const todo = new Todo(description, false, index);
    this.todos.push(todo);
    setTodos(this.todos);
  };
  removeTodo = (index) => {
    this.todos = this.todos
      .filter((todo) => todo.index !== parseInt(index))
      .map((todo, index) => {
        return { ...todo, index: index + 1 };
      });
      setTodos(this.todos)
  };
}
