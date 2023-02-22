import './style.css';
import TodosContainer from './modules/TodosContainer';

const todoLists = [
  { description: 'wash the dishes', completed: false, index: 0 },
  { description: 'complete To Do list project', completed: false, index: 1 },
];

const container=new TodosContainer(); 

const form =document.querySelector('.task-adder form')
const {task}=form.elements

function populateTodos(data) {
  data.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div>
        <input type="checkbox" name="checkbox">
        <span>${element.description}</span>
        </div>
        <button type="button" id=${data.index}>
        <i class="fa-solid fa-trash"></i>
        </button>
        `;
    document.querySelector('.tasks').appendChild(li);
  });
}
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  container.addTodo(task.value)
})
// localStorage.clear()
populateTodos(todoLists);