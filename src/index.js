import './style.css';

const todoLists = [
  { description: 'wash the dishes', completed: false, index: 0 },
  { description: 'complete To Do list project', completed: false, index: 1 },
];
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
populateTodos(todoLists);