export const getTodos = () => JSON.parse(localStorage.getItem('todos'));
export const setTodos = (obj) => {
  localStorage.setItem('todos', JSON.stringify(obj));
};