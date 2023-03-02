import TodosContainer from './modules/TodosContainer.js';
import { getTodos } from './modules/store.js';
import { updateStatus, clearTodoList } from './modules/updateStatus.js';

// Set up our document body
document.body.innerHTML = `
<ul class="tasks">
</ul>
`;

describe('Test Add todo', () => {
  it('Add a valid todo', () => {
    // arrange
    const container = new TodosContainer();

    // act
    container.addTodo('read books');
    container.addTodo('dance');
    container.addTodo('code for 1 hour');
    container.addTodo('Eat salad');
    const tasks = document.querySelectorAll('.tasks li');

    // assert
    expect(tasks).toHaveLength(4);
  });

  it('Add empty todo', () => {
    // arrange
    const container = new TodosContainer();

    // act
    container.addTodo('  ');
    const tasks = document.querySelectorAll('.tasks li');

    // assert
    expect(tasks).toHaveLength(4);
  });
});

describe('Test Remove todo', () => {
  it('Remove a todo with id=1', () => {
    // arrange
    const container = new TodosContainer();
    let tasks = document.querySelectorAll('.tasks li');
    const task = tasks[0].querySelector('i');

    // act
    container.removeTodo(task.id);
    tasks = document.querySelectorAll('.tasks li');

    // assert
    expect(tasks).toHaveLength(3);
  });
});

describe('Test Update todo', () => {
  it('Update todo item description', () => {
    // arrange
    const container = new TodosContainer();
    const tasks = document.querySelectorAll('.tasks li');
    const task = tasks[0].querySelector('input[type="text"]');

    // act
    container.updateDescription(task.id, 'Read more books');

    // assert
    expect(task.value).toEqual('Read more books');
  });

  it('Update todo item description with empty string', () => {
    // arrange
    const container = new TodosContainer();
    let tasks = document.querySelectorAll('.tasks li');
    const task = tasks[0].querySelector('input[type="text"]');

    // act
    container.updateDescription(task.id, '');
    tasks = document.querySelectorAll('.tasks li');

    // assert
    expect(tasks).toHaveLength(2);
  });
});

describe('Test for completed status', () => {
  it('change todo list status to true', () => {
    // arrange
    const tasks = document.querySelectorAll('.tasks li');
    const task1 = tasks[0].querySelector('input[type="checkbox"]');
    const task2 = tasks[1].querySelector('input[type="checkbox"]');

    // act
    updateStatus(task1.id);
    updateStatus(task2.id);

    // assert
    expect(getTodos()[0].completed).toBe(true);
  });
  it('change todo list status to false', () => {
    // arrange
    const tasks = document.querySelectorAll('.tasks li');
    const task = tasks[0].querySelector('input[type="checkbox"]');

    // act
    updateStatus(task.id);

    // assert
    expect(getTodos()[0].completed).toBe(false);
  });
});

describe('Test for Clear completed', () => {
  it('clear completed tasks', () => {
    // arrange
    let tasks = document.querySelectorAll('.tasks li');

    // act
    clearTodoList();
    tasks = document.querySelectorAll('.tasks li');

    // assert
    expect(tasks).toHaveLength(1);
  });
});
