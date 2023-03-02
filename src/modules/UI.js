export default class UI {
  static remove = (id) => {
    const element = document.getElementById(id);
    const parentToRemove = element.parentNode.parentNode;
    parentToRemove.remove();
  };

  static add = (id, description, status) => {
    const li = document.createElement('li');
    li.className = 'todo';
    li.innerHTML = `
            <div>
            <input type="checkbox" name="checkbox" id="checkbox-${id}">
            <input type="text" name="task_description" id="description-${id}" value="${description}"/>
            </div>
            <button type="button">
            <i class="fa-solid fa-trash" id=${id}></i>
            </button>
            `;

    document.querySelector('.tasks').appendChild(li);
    document.querySelector(`#checkbox-${id}`).checked = status;
    if (document.querySelector(`#checkbox-${id}`).checked) {
      document.querySelector(`#description-${id}`).style.color = 'gray';
      document.querySelector(`#description-${id}`).style.textDecoration = 'line-through';
    } else {
      document.querySelector(`#description-${id}`).style.color = 'black';
      document.querySelector(`#description-${id}`).style.textDecoration = 'none';
    }
  };

  static updateTodo=(id, description) => {
    const updateTaskElement = document.querySelector(`#${id}`);
    updateTaskElement.value = description;
  }

  static updateStatusUI=(id) => {
    const checkbox = document.querySelector(`#checkbox-${id}`);
    const descriptionElement = document.querySelector(`#description-${id}`);
    if (checkbox.checked) {
      descriptionElement.style.color = 'gray';
      descriptionElement.style.textDecoration = 'line-through';
    } else {
      descriptionElement.style.color = 'black';
      descriptionElement.style.textDecoration = 'none';
    }
  }
}
