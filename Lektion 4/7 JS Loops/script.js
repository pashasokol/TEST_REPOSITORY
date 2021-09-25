const namesArray = ['Pavel', 'Sanna','Stepa','Zorik','Koshka'];


let usersArray = [
    {id: 1, name: 'Pavel', email: 'pavel@mail.com', age:28, status: true},
    {id: 2, name: 'Sanna', email: 'sanna@mail.com', age:29, status: true},
    {id: 3, name: 'Stepa', email: 'stepa@mail.com', age:0, status: false},
    {id: 4, name: 'Zorik', email: 'zorik@mail.com', age:6, status: true},
    {id: 5, name: 'Koshka', email: 'koshka@mail.com', age:5, status: false},
]


let numberOfUsers = 0;


// FOR loopar

// loopar ett givet antal gånger

for(let i=0; i<2; i++) {

    console.log(i, namesArray[i]);
}

for(let i=0; i < namesArray.length; i++) {

    console.log(i, namesArray[i]);
}

// for of


for(let namn of namesArray) {
    console.log(namn);
}

for(let user of usersArray) {

    console.log(user);
}

// while loopar


let i = 1;

while(i < 5) {
    console.log('while: ' + i) ;
    i++;
}

console.log('i är ' + i);

do {
console.log('do while: ' + i);
i++;
}

while(i < 7);

// High order array methods

// foreach loop

namesArray.forEach(function(name){
    console.log(name)
})

namesArray.forEach(name => {
    console.log(name);
})


usersArray.forEach(user => {
    console.log(user.name, user.age, user.email);
    numberOfUsers++;
});


console.log(numberOfUsers);

// MAP

const userEmail = usersArray.map(user => {
    return user.email;
});


console.log(userEmail);


// FILTER

const loggedIn = usersArray.filter(user => {
    return user.status === true;
})

//console.log(loggedIn);

console.log(usersArray);

usersArray = usersArray.filter(user => {
    return user.id !== 4;
})

console.log(usersArray);