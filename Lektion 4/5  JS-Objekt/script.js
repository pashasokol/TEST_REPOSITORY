const user = {
    firstName: 'Pavel',
    lastName: 'Sakalouski',
    age: 28,
    address: {
        street: 'en gata',
        nr: 12,
        zipCode: '72345',
        city: 'Stockholm'
    },
    phoneNumbers: [
         0738787453,
         0739588987
    ],
    isActive: true
}


let key = 'lastName';

//console.log(user);

/*console.log(`${user.address.city} ${user.phoneNumbers[0]}`);
console.log(user['lastName']);
console.log(user[key]);


console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}`);

user.firstName = 'Paul';
console.log(`Användaren heter ${user.firstName} och bor i ${user.address.city}`);

*/
user.email = 'sokoliklive@gmail.com';
user.pets = {
    dog: 'Kira',
    cat: 'stepa',
    cow: 'fanky'
}

console.log(user);

// console.log(user);

// Destructure 


const { firstName, lastName, address: { city }  }  = user;

console.log(firstName);
console.log(lastName);
console.log(city);





