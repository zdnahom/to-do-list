import TodosContainer from "./modules/TodosContainer";

// Set up our document body
document.body.innerHTML = `
<ul class="tasks">
<li>
<div>
<input type="checkbox" name="checkbox" id="checkbox-1">
<input type="text" name="task_description" id="description-1" value="Swim"/>
</div>
<button type="button">
<i class="fa-solid fa-trash" id="1"></i>
</button>
</li>
</ul>
`;

describe("Test Add todo", () => {
  it("Add a valid todo", () => {
    //arrange
    const container = new TodosContainer();

    //act
    container.addTodo("read books");
    container.addTodo("dance");
    container.addTodo("code for 1 hour");
    const tasks = document.querySelectorAll(".tasks li");

    //assert
    expect(tasks).toHaveLength(4);
  });

  it("Add empty todo", () => {
    //arrange
    const container = new TodosContainer();

    //act
    container.addTodo("  ");
    const tasks = document.querySelectorAll(".tasks li");

    //assert
    expect(tasks).toHaveLength(4);
  });
});

describe("Test Remove todo", () => {
  it("Remove a todo with id=1", () => {
    //arrange
    const container = new TodosContainer();
    //act
    container.removeTodo("1");
    const tasks = document.querySelectorAll(".tasks li");
    //assert
    expect(tasks).toHaveLength(3);
  });
});
    
