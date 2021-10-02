const form = document.querySelector('#form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const tac = document.querySelector('#tac');




const validate = input => {
    switch(input.type) {

        case 'text':
            validateText(input);
            if(validateText(input)){
                return true;
            } else {
                return false;
            }
        case 'email':
            // return validateEmail(input) ? true : false;
            return validateEmail(input);

        case 'password':
            if(input.id !== 'password2' ) {
                
                return validatePassword(input);
            } else {
                return samePassword(password, password2);
            }

        case 'checkbox':
            return validateCheck(input);
         default:
             break;        

              
    }
}



const validateText = input => {
    if(input.value.trim() === '') { 
        setError(input, 'First name cant be ampty')
        return false;
    }  else if(input.value.trim().length  < 2) {
        setError(input, 'First name must be at least 2 characters long')
        return false;
    } else {
        setSuccess(input);
        return true;
    }
}



const validateEmail = input => {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(input.value.trim() === '') {
        setError(input, 'Email address can not be empty')
        return false;
    } else if(!regEx.test(input.value))  {
        setError(input, 'Email address is not valid')
        return false;


    } else {

        setSuccess(input);
        return true;
    }
}



const validatePassword = input => {
    if(input.value.trim() === '') { 
        setError(input, 'Password can not be empty');
        return false;
     }
     else if(input.value.trim().length < 5) {
        setError(input, 'Password must be a least 5 characters long');
        return false;
     }
     else if(!(/\d/.test(input.value))) {
        setError(input, 'Password must contain at least one digit');
        return false;
        
    }
    else {
            setSuccess(input);
            return true;    
        }


}



const samePassword = (pass, repeatPass) =>{
    if(repeatPass.value.trim() === '') { 
        setError(repeatPass, 'Password can not be empty');
        return false;
     }
    else if(pass.value.trim() !== repeatPass.value.trim()) {
        setError(repeatPass, 'Passwords must match');
        return false;
    } else {
        setSuccess(repeatPass);
        return true;
    }
}

const validateCheck = input => {
    if(!input.checked) {
        setError(input, 'You must accept the terms');
        return false;
    } else {
        setSuccess(input);
        return true;
    }

}






const setError = (input, message) => {
    const inputGroup = input.parentElement;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

    const error = inputGroup.querySelector('small');
    error.innerText = message;


}


const setSuccess = input => {
    const inputGroup = input.parentElement;
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');


}


// setError(firstName, 'Du måste ange ett namn');
// setSuccess(lastName);


form.addEventListener('submit', e => {
    e.preventDefault();

    // validate(firstName);
    // validate(lastName);
    // validate(email);
    // validatePassword(password);
    // samePassword(password, password2);
    // validateCheck(tac);

    // if(validateText(firstName)
    // && validateText(lastName)
    // && validateEmail(email)
    // && validatePassword(password)
    // && samePassword(password, password2)
    // &&validateCheck(tac))  {
    //     console.log('success');

    // } else {
    //     console.log('failed')
    // }

    const errors = [];
    for(let i=0; i < form.length; i++) {

        errors[i] = validate(form[i]);
    }

    console.log(errors);


    if(!errors.includes(false)) {
        console.log('success');
    } else {
        console.log('failure');
    }


})