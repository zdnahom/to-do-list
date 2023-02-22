import Todo from "./Todo.js";
import { getTodos, setTodos } from "./store.js";
export default class TodosContainer {
  todos = getTodos() || [];
  addTodo = (description) => {
    const idRandom = (Math.floor(Math.random() * 100000)).toString();
    const index = this.todos.length + 1;
    const todo = new Todo(idRandom,description, false, index);
    this.todos.push(todo);
    setTodos(this.todos);
  };
  removeTodo = (id) => {
    this.todos = this.todos
      .filter((todo) => todo.id !== id)
      .map((todo, index) => {
        return { ...todo, index: index + 1 };
      });
      setTodos(this.todos)
  };
}
