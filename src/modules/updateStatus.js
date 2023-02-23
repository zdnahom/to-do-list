import { getTodos ,setTodos} from "./store.js"
export const updateStatus=(id)=>{
    const [statusId] = id.match(/\d+/);
    const todos=getTodos().map(todo=>{
        if(todo.id===statusId){
            return {...todo,completed:!todo.completed}
        }else{
            return todo
        }
    })
    setTodos(todos)
}