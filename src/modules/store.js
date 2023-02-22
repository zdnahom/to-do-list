export const getTodos=()=>{
    return JSON.parse(localStorage.getItem("todos"))
}
export const setTodos=(obj)=>{
   localStorage.setItem("todos",JSON.stringify(obj))
}