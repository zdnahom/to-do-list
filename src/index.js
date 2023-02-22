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
        <i class="fa-regular fa-square"></i>
        <span>${element.description}</span>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        `;
    document.querySelector('.tasks').appendChild(li);
  });
}
form.addEventListener("submit",(event)=>{
  event.preventDefault()
  container.addTodo(task.value)
})

populateTodos(todoLists);