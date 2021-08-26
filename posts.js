// get-------------------------------

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}
loadPosts();
function displayPosts(posts) {
    const postContainer = document.getElementById('posts');
    for (post of posts) {
        const div = document.createElement('ol');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}<p/>
        `
        postContainer.appendChild(div);
        console.log(post);
    }
}


// post----------------------------

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset==UTF=8',
        },
    })
        .then((Response) => Response.json())
        .then((data) => console.log(data));
}