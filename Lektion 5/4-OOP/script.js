// Constructor



// function Product(name, price, description)  {



//     this.productName = name;
//     this.price = price;
//     this.desc = description;



//     this.summary = function()  {
//         return `The product ${this.productName} costs ${this.price} kr.`
//     }
// }

// const product1 = new Product('Produkt 1', 100, 'this is a product description');
// const product2 = new Product('Produkt 2', 300, 'this is a product description');
// const product3 = new Product('Produkt 3', 100, 'this is a product description');

// console.log(product1);
// console.log(product2.summary());
// console.log(product1.summary());



// Prototypes 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.revised = false;


}

Book.prototype.summary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}


Book.prototype.bokAge = function() {
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
const book1 = new Book('book 1', 'Pavel', '2011');
console.log(book1.summary());


console.log(book1.bokAge());


