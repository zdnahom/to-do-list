import "./style.css"

const todoLists=[
    {description:"Take a nap",completed:false,index:0},
    {description:"Workout",completed:false,index:1},
    {description:"Finish today's project",completed:false,index:2},
]
function populateTodos(data){
    data.forEach(element => {
        const li = document.createElement('li')
        li.innerHTML=`
        <div>
        <input type="checkbox" name="" id="">
        <span>${element.description}</span>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        `
        document.querySelector('.tasks').appendChild(li)
    });
}
populateTodos(todoLists)