import Todo from "./Todo.js"
import {getTodos,setTodos} from "./store.js"
class TodosContainer{
    todos= getTodos()|| [];
    addTodo=(description)=>{
        const todo=new Todo(description);
        this.todos.push(this.todos)
        setTodos(this.todos)
    }
}