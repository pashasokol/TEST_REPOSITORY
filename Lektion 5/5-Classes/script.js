// class Book {

//     constructor(title, author, year) {

//         this.title = title;
//         this.author = author;
//         this.year = year;
//         this.revised = false;
//     }


//     summary() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }

//     bookAge() {

//         const years = new Date().getFullYear() - this.year;

//         switch(years) {
//         case 0:
//             return `${this.title} is less then 1 year old.`
//         case 1:
//             return `${this.title} is 1 year old.`  
//         default:
//             return `${this.title} is ${years} year old.`
//         }

//     }


// }


// const book1 = new Book('book 1', 'Pavel', '2011');
// const book2 = new Book('Book2', 'Sanna', '2003');


// console.log(book1.bookAge());
// console.log(book2.year);



// class User{
//     constructor(name,email) {
//         this.firstName = name;
//         this.email = email;
//         this.loggedin = false;
//     }


//     login() {
//         this.loggedin = true;
//         console.log(`${this.firstName} has logged in`)
//     }
//     logout() {
//         this.loggedin = false;
//         console.log(`${this.firstName} has logged out`)
//     }
// }


// let userOne = new User('Pavel', 'sokoliklive@gmail.com');
// let userTwo = new User('Sanna', 'sanelastark@gmail.com');
// let userThree = new User('Proffs', 'proffs@gmail.com');

// userOne.login();
// userOne.logout();

// console.log(userOne);



// class Admin extends User {
//     constructor(name, email, adminId) {
//         super(name, email)
//         this.AId = adminId
//     }

//     removeUser(user) {
//         users = users.filter( u => {
//             return u.firstName != user.firstName;
//         })
//     }
// }

// let admin = new Admin('Stepa', 'stepa@gmail.com',1);

// let users = [userOne,userTwo,userThree,admin];
// console.log(users);

// admin.removeUser(userThree);

// console.log(users);




// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }



// const p1 = new Person('Pavel','Sakalouski');
// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName());


// p1.fullName = 'Pavlo Sakalov';
// console.log(p1);



// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


// const p1 = new Person('Pavel','Sakalouski');

// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName);

// p1.fullName = 'Paul Sokolov';
// console.log(p1.firstName);
// console.log(p1.lastName);
// console.log(p1.fullName);


// SETTER

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(_value) {
        const parts = _value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];

    }
}


const p1 = new Person('Pavel','Sakalouski');

console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.fullName);

p1.fullName = 'Paul Sokolov';
console.log(p1.firstName);
console.log(p1.lastName);
console.log(p1.fullName);