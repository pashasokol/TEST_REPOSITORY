const id = new URLSearchParams(window.location.search).get('id');



// const id = params.get('id');

console.log(window.location);
console.log(id);

const output = document.querySelector('#output');


const getPost = async ()  => {
    let url = 'https://jsonplaceholder.typicode.com/posts/' + id;

    let res = await fetch(url);
    let post = await res.json();

    output.innerHTML = `


    <div class="card mt-5">
    <div class="text-center p-3">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
      </div>
  </div>

    `
}

window.addEventListener('DOMContentLoaded', ()  =>  {
    setTimeout(() => {
        getPost();
    }, 1000)

   
});