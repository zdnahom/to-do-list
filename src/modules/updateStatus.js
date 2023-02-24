import { getTodos, setTodos } from './store.js';
import UI from './UI.js';

export const updateStatus = (id) => {
  const [statusId] = id.match(/\d+/);
  const todos = getTodos().map((todo) => {
    if (todo.id === statusId) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  setTodos(todos);
};
export const clearTodoList = () => {
  const listToNotClear = getTodos()
    .filter((todo) => todo.completed === false)
    .map((todo, index) => ({ ...todo, index: index + 1 }));
  const listToClear = getTodos().filter((todo) => todo.completed === true);

  listToClear.forEach((todo) => {
    UI.remove(todo.id);
  });
  setTodos(listToNotClear);
};
