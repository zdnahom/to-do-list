import './style.css';
import { getTodos } from './modules/store';
import TodosContainer from './modules/TodosContainer';

const todoLists = getTodos()|| [];
const container=new TodosContainer(); 

const form =document.querySelector('.task-adder form')
const todoElements=document.querySelector('.tasks')
console.log(todoElements)
const {task}=form.elements

function populateTodos(data) {
  data.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div>
        <input type="checkbox" name="checkbox">
        <span>${element.description}</span>
        </div>
        <button type="button">
        <i class="fa-solid fa-trash" id=${element.index}></i>
        </button>
        `;
    document.querySelector('.tasks').appendChild(li);
  });
}
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  container.addTodo(task.value)
})
todoElements.addEventListener("click",(event)=>{
  if(event.target.id){
    container.removeTodo(event.target.id)
  }
})
// localStorage.clear()
populateTodos(todoLists);