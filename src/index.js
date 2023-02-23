import './style.css';
import { getTodos } from './modules/store.js';
import TodosContainer from './modules/TodosContainer.js';
import UI from './modules/UI.js';

const todoLists = getTodos() || [];
const container = new TodosContainer();

const form = document.querySelector('.task-adder');
const todoElements = document.querySelector('.tasks');
const { task } = form.elements;

function populateTodos(data) {
  data.forEach((element) => {
    UI.add(element.id, element.description);
  });
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  container.addTodo(task.value);
  task.value = '';
});
todoElements.addEventListener('click', (event) => {
  const { target } = event;
  if (parseInt(target.id)) {
    container.removeTodo(event.target.id);
  } else if (target.id) {

    target.parentNode.parentNode.style.backgroundColor = 'rgb(253, 238, 213)';
    target.addEventListener('blur', () => {
      target.parentNode.parentNode.style.backgroundColor = 'white';
      container.updateDescription(target.id, target.value);
      return
    });

    target.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        target.blur()
        return
      }
    });
  }
});
window.addEventListener('DOMContentLoaded', () => {
  populateTodos(todoLists);
});
