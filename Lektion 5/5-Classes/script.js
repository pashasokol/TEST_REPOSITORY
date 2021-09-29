class Book {

    constructor(title, author, year) {

        this.title = title;
        this.author = author;
        this.year = year;
        this.revised = false;
    }


    summary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    bookAge() {

        const years = new Date().getFullYear() - this.year;

        switch(years) {
        case 0:
            return `${this.title} is less then 1 year old.`
        case 1:
            return `${this.title} is 1 year old.`  
        default:
            return `${this.title} is ${years} year old.`
        }

    }


}


const book1 = new Book('book 1', 'Pavel', '2011');
const book2 = new Book('Book2', 'Sanna', '2003');


console.log(book1.bookAge());
console.log(book2.year);



class User{
    constructor(name,email) {
        this.firstName = name;
        this.email = email;
        this.loggedin = false;
    }


    login() {
        this.loggedin = true;
        console.log(`${this.firstName} has logged in`)
    }
    logout() {
        this.loggedin = false;
        console.log(`${this.firstName} has logged out`)
    }
}


let userOne = new User('Pavel', 'sokoliklive@gmail.com');

userOne.login();
userOne.logout();

console.log(userOne);



