import UI from './UI.js';

export default function populateTodos(data) {
  data.forEach((element) => {
    UI.add(element.id, element.description, element.completed);
  });
}