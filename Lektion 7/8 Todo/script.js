const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');

console.log(form);

let todos = [];

const fetchTodos = ()  => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=1&_limit=10')
    .then(res => res.json())
    .then(data => {
        todos = data;
        listTodos();
        })
}
fetchTodos();

const listTodos = ()  => {
    output.innerHTML = '';
    todos.forEach(todo => {
//         let _todo = `
        
//     <div class="card p-1 my-2">
//     <div class="d-flex justify-content-between align-items-center">
//     <h3 class="mb-1">${todo.title}</h3>
//     <div class="buttons">
//         <button type="button" data-todo-id="${todo.id}" class="btn btn-danger btn-sm"> X</button>
        
//     </div>
// </div>
// </div>
        
//         `

// output.insertAdjacentHTML('beforeend', _todo);


        newTodo(todo);

    })
}



const removeTodo = (todo) => {


    if(todo.completed) {
        todos = todos.filter(_todo => _todo.id !== todo.id)
        listTodos();

    }



}
const newTodo  = (todo) =>  {

    let card = document.createElement('div');
    card.classList.add('card', 'p-1', 'my-2');

    let innerCard = document.createElement('div');
    innerCard.classList.add('d-flex', 'justify-content-between', 'align-items-center');

    let title = document.createElement('h3');
    title.classList.add('mb-1');

    title.innerText = todo.title;
    if(todo.completed)
        title.classList.add('complete');

    title.addEventListener('click', () => {
        todo.completed = !todo.completed;

        if(todo.completed)
        title.classList.add('complete');
        else
        title.classList.remove('complete');
    } )    

    let buttons = document.createElement('div');

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteBtn.innerText = 'X';

    deleteBtn.addEventListener('click', () => {
        removeTodo(todo)
    })

    buttons.appendChild(deleteBtn)


    innerCard.appendChild(title);
    innerCard.appendChild(buttons);
    card.appendChild(innerCard);
    output.appendChild(card);



}



// output.addEventListener('click', e => {
//     // console.log(e.target.type);
//     if(e.target.type === 'button') {
//         // console.log('det är en knapp')
//         todos = todos.filter(todo => todo.id != e.target.dataset.todoId   
//         )
//         listTodos();
//     }
// })


const createTodo = title => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ 
            title: title,
            completed: false
         })
    }) 
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}





form.addEventListener('submit', e => {
    e.preventDefault();


    if(input.value.trim() !== '') {
        createTodo(input.value);
    }
})




