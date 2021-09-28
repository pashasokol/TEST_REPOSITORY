// Scope


// let age = 34; // globalt scope


// if(true) {
//     let age = 50;  
//     let name = 'Pavel'; // local scope
//     console.log('inne i 1a kodblocket', age);
//     console.log('inne i 1a kodblocket', name);


//     if(true){

//         let age = 100;
//         let name = 'Jeanette';
//         console.log('inne i kodblock 1.2', age, name);
//         var globalt = 'var';
//     }
// };

// console.log('utanför något block', age);
// console.log('utanför något block', name);




// if(true) {

//     let age = 66;
//     let name = 'Hans';
//     console.log('inne i 1a kodblocket', age);
//     console.log('inne i 1a kodblocket', name);

// }

// console.log('inne i 1a kodblocket', age);
// console.log('inne i 1a kodblocket', name);
// console.log('inne i 1a kodblocket', globalt);


// // Funktioner


// // Deklarera en funktion

// function hej() {
//     console.log('Hej på dig');
// }

// const greet = function() {
//     console.log('hur är läget?')
// }

// // Kalla på en funktion

// hej();
// greet();


// funktion med parametrar

let firstName = 'Pavel';


// const greet = function(name) {

//     console.log(`Hej ${name} hur är läget?`)
// }

// // greet();

// // firstName = 'Hans';

// // greet();

// greet('Pavel');
// greet(firstName);
// greet('Hans');



const func1 = function(firstName, lastName) {
    let _fullName = `${firstName} ${lastName}`
    console.log(_fullName.trim());
}


func1('Pavel','Sakalouski');


// const calc = function(num1, num2) {
//     const sum = Number(num1) + Number(num2)

//     if(sum == 'NaN'){
//         console.log(sum);


//     }
//     else {
//         console.log('you need to add a valid number')
//     }


// }

// const calc = function(num1, num2) {
//     const sum = num1 + num2;
//     console.log(sum);
// }

// calc(5,10);
// calc(15,20);
// calc(15,'hej');



// const calc = function(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
    
// }


// calc(3,5);
// console.log(calc(3,5));


// // Arrow functions


// console.log(this);



// const greet = (name) => {

//     console.log(`Hej ${name} hur är läget?`)
// }

// greet('Pavel');


// const calc = (num1 = 0, num2 = 0) => {

//     const sum = num1 + num2;
//     return sum;

// }

const calc = (num1 = 0, num2 = 0) => num1 + num2;

console.log(calc(5,6));



const greet = name => `Hej ${name} hur är läget?`;


console.log(greet('Pavel'));



// Callback functions

const minFunction = (val, cb) => {
    let sum = val * 2;
    // setTimeout(() =>  {
    //     callbackFunction(sum)
    // }, 3000)
    cb(sum);
}

minFunction(5, summa => {
    console.log(summa);
    // let nySumma = summa * 2;
    // console.log(nySumma);
} )


let names = ['Pavel', 'Sanna', 'Stepa'];

// names.forEach( name => {
//     console.log(name);
// })


// Metoder

let myName = names[0];
console.log(myName);


let upper = myName.toUpperCase();
console.log(upper)


let user = {

    firstName: 'Pavel',
    lastName: 'Sakalouski',
    fullname: function() {
        console.log(this);
        return this.firstName + '  '  + this.lastName;        
    }
}



let userName = user.fullname();

console.log(userName);


