export class UI{
    static remove=(element)=>{
        element.parentNode.parentNode.remove()
    }
    static add = (id,description) => {
        const li = document.createElement("li");
        li.innerHTML =`
            <div>
            <input type="checkbox" name="checkbox">
            <span>${description}</span>
            </div>
            <button type="button">
            <i class="fa-solid fa-trash" id=${id}></i>
            </button>
            `;
        document.querySelector(".tasks").appendChild(li);
      };
}