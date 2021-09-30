const regForm = document.querySelector('#regForm');
const email = document.querySelector('#email');
const inputs = document.querySelectorAll('input');


console.log(regForm);

const validate = (id) => {
    let input = document.querySelector(id);


    if(input.value.trim() === ''  || input.value.trim().length < 2) {

        input.classList.add('is-invalid');

        input.focus();
        return false;

    } 

    input.classList.remove('is-invalid');
    input.classList.add('is-valid');

    return true;

}



const validateEmail = (email)  =>  {

    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        return true;
    }

    email.classList.add('is-invalid');
    email.focus();
    return false;

}



inputs.forEach(input =>  {
    if(input.type === 'text') {

        input.addEventListener('keyup', () => {
            validate('#' + input.id)
        })

        
    }
})


email.addEventListener('keyup', () => {
    validateEmail(email);
})






regForm.addEventListener('submit', function(e)   {

    e.preventDefault();

    // validate('#firstName')
    // validate('#lastName')
    // // validate('#email')
    // validateEmail(email);



    for(let i = 0; i < e.currentTarget.length; i++)  {
        if(e.currentTarget[i].type === 'text') {

            validate('#'+e.currentTarget[i].id);
        }
            else 
            
                validateEmail(email); 
            

            
        



    }

    if(validate('#firstName') && validate('#lastName') && validateEmail(email)) {
        console.log('Success')
    } else {
        console.log('nope')
    }




})