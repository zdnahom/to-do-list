export default class UI {
  static remove = (id) => {
    const element = document.getElementById(id);
    element.parentNode.parentNode.remove();
  };

  static add = (id, description) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <div>
            <input type="checkbox" name="checkbox" id="checkbox">
            <input type="text" name="task_description" id="description-${id}" value="${description}"/>
            </div>
            <button type="button">
            <i class="fa-solid fa-trash" id=${id}></i>
            </button>
            `;
    document.querySelector(".tasks").appendChild(li);
  };
}
