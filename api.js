function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data));
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

function photoLoader() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotoAlbums(data));
}
function displayPhotoAlbums(data) {
    const img = document.getElementById('img');
    for (photoAlbums of data) {
        // console.log(photoAlbums)
        const src = document.createAttribute('src');
        li.src = data.url;
        img = src;

    }

}
