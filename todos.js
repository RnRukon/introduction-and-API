function loadTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => addTodo(data))
}
loadTodo();

function addTodo(data) {
    const todoContainer = document.getElementById('todos-container');
    for (todo of data) {
        const li = document.createElement('div');
        li.classList.add('todo');
        li.innerHTML = `
        <h3>Title: ${todo.title}</h3>
       <h5> User ID : ${todo.userId}</h5>
       <h5> ID : ${todo.id}</h5>
       <h4> completed : ${todo.completed}</h4>
       
                `
        todoContainer.appendChild(li);


    }
}