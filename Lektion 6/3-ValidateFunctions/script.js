const form = document.querySelector('#form');


// const validateFirstName = ()  => {
//     const firstName = document.querySelector('#firstName');
//     const firstNameError = document.querySelector('#firstName-error');

//     if(firstName.value.trim() === ''){
//         firstNameError.innerText = 'Du måste ange ett förnamn'

//     }  else if(firstName.value.trim().length < 2) {
//         firstNameError.innerText = 'Du måste ange minst 2 tecken'
//     }

//     else  {
//         firstNameError.innerText = '';
//     }

// }

// const validateLastName = ()  => {

// }


const validate = (id)  =>  {
    const input = document.querySelector(id);
    const error = document.querySelector(id + '-error');

    if(input.value.trim() === '')  {
        error.innerText = 'Du måste ange ett namn'
    } else if(input.value.trim().length < 2) {
        error.innerText = 'Du måste ange minst 2 tecken'

    }  else {
        error.innerText = '';
    }
}



form.addEventListener('submit', e => {
    e.preventDefault();

  //  validateFirstName();
    validate('#firstName');
    validate('#lastName');

})