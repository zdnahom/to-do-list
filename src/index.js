import './style.css';
import { getTodos } from './modules/store.js';
import populateTodos from './modules/generateTodo.js';
import TodosContainer from './modules/TodosContainer.js';
import { updateStatus, clearTodoList } from './modules/updateStatus.js';

const todoLists = getTodos() || [];
const container = new TodosContainer();

const todoElements = document.querySelector('.tasks');
const form = document.querySelector('.task-adder');
const { task } = form.elements;
const clearButton = document.querySelector('.button-wrapper button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  container.addTodo(task.value);
  task.value = '';
});

todoElements.addEventListener('click', (event) => {
  const { target } = event;
  if (parseInt(target.id, 10)) {
    container.removeTodo(event.target.id);
  } else if (target.id.includes('description')) {
    target.parentNode.parentNode.style.backgroundColor = 'rgb(253, 238, 213)';
    target.addEventListener('blur', () => {
      target.parentNode.parentNode.style.backgroundColor = 'white';
      container.updateDescription(target.id, target.value);
    });
    target.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        target.blur();
      }
    });
  }
});

todoElements.addEventListener('change', (event) => {
  if (event.target.id.includes('checkbox')) {
    updateStatus(event.target.id);
  }
});

clearButton.addEventListener('click', () => {
  clearTodoList();
});

window.addEventListener('DOMContentLoaded', () => {
  populateTodos(todoLists);
});
