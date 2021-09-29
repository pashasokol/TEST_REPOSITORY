import Person from './models/User.js';
import UserService from './services/UserService.js';
import { validate, sendMessage } from './functions/functions.js';

const user = new Person('Pavel','Sakalouski','sokoliklive@gmail.com','12345678');

console.log(user);


const { firstName}  = user;


// UserService.signUp(user);
// UserService.signIn(user.email, user.password);


// if(validate(user))
//     UserService.signUp(user);



// 3 === '3' ? console.log('det är sant') : console.log('det är falskt')

validate(user, u => {
    UserService.signUp(u);
})

sendMessage('Hej hur är läget', data => {
    console.log(data);
});