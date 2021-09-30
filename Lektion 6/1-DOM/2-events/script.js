document.querySelector('#div1').innerText = 'Detta är en text skriven med Javascript';

const div2 = document.querySelector('#div2');



div2.innerHTML = '<p> paragraph </p>';

// document.querySelector('#div1').style.color = '#ff0000';

div2.style.fontSize = '2rem';


document.querySelector('#div1').classList.add('bg-dark');
// document.querySelector('#div1').classList.remove('bg-dark');


div2.style.display = 'none';
div2.style.display = 'block';


// EVENT

// const btn = document.querySelector('#btnAlert');


// btn.addEventListener('click', function() {
//     alert('warning');
// })


// btn.addEventListener('click', () => {
//    if(div2.style.display == 'none') {
//        div2.style.display = 'block';
//    } else {
//        div2.style.display = 'none';
//    }
// })


// btn.addEventListener('dblclick', () => {
//     console.log('dblcklick')
// })
// btn.addEventListener('mousedown', () => {
//     console.log('mousedown')
// })
// btn.addEventListener('mouseup', () => {
//     console.log('mouseup')
// })
// btn.addEventListener('mouseenter', () => {
//     console.log('mouseenter')
//     document.querySelector('#div1').classList.add('bg-dark');
//     // btn.classList.remove('bg-dark');
// })
// btn.addEventListener('mouseleave', () => {
//     console.log('mouseleave')
//     document.querySelector('#div1').classList.remove('bg-dark');
// //    *btn.classList.add('bg-dark');

// })


const form = document.querySelector('#loginForm');
const input = document.querySelector('#firstName');
const btn = document.querySelector('#btn');

// console.log(form['firstName']);

// form['firstName'].addEventListener('keyup', event => {
//     console.log(event.key)
// })


// document.querySelector('#firstName').addEventListener('keydown', e => {
//     console.log(e.key);
// })



form.querySelector('#firstName').addEventListener('focus', function (e) {
    console.log('focus');
    form['firstName'].classList.add('focus');
    // this.classList.add('focus');
})


form.querySelector('#firstName').addEventListener('blur', function(e) {
    // console.log('blur');
    this.classList.remove('focus');
    classList.remove('focus');
})


// btn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e);
//     console.log('klick');
// })


form.addEventListener('submit', e => {

    e.preventDefault();
    console.log('validerar formulär');
    console.log('validering klar! skickar till databasen');
})



