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
  if (event.target.id) {
    container.removeTodo(event.target.id);
  }
});
window.addEventListener('DOMContentLoaded', () => {
  populateTodos(todoLists);
});
