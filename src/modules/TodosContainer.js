import Todo from './Todo.js';
import { getTodos, setTodos } from './store.js';
import UI from './UI.js';

export default class TodosContainer {
  todos = getTodos() || [];

  addTodo = (description) => {
    if (description.length !== 0) {
      const id = (Math.floor(Math.random() * 100000)).toString();
      const index = this.todos.length + 1;
      const todo = new Todo(id, description, false, index);
      this.todos.push(todo);
      setTodos(this.todos);
      UI.add(id, description);
    }
  };

  removeTodo = (id) => {
    this.todos = this.todos
      .filter((todo) => todo.id !== id)
      .map((todo, index) => ({ ...todo, index: index + 1 }));
    setTodos(this.todos);
    UI.remove(id);
  };
  updateDescription=(id,description)=>{
    id=id.match(/\d+/)[0]
    if(description.length>0){
      this.todos=this.todos.map(todo=>{
        if(id==todo.id){
          return {...todo,description:description}
        }else{
          return todo
        }
      })
      setTodos(this.todos);
    }else{
      this.removeTodo(id)
    }
  }
}
