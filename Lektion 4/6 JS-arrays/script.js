const array = [0,1,2,3,4];

const multiArray = ['12',12,true, {firstName: 'Pavel'}];


const user = [

    {firstName: 'Pavel', lastName: 'Sakalouski', age: 28},
    {firstName: 'Sanela', lastName: 'Nurgaleeva', age: 29},
    {firstName: 'Stepa', lastName: 'Stepanich', age: 0},

]

const names = ['Pavel','Sanela','Stepa'];


console.log(names[0]);
console.log(names[1]);
console.log(user);
console.log(user[1].lastName + ' loves cat ' + user[2].firstName);

names.unshift('popka');
console.log('Med unshift' + names);

names.shift();
console.log('Med shift' + names);

names.push('popka');
console.log('Med push' + names);

names.pop();
console.log('Med pop' + names);

names[2] ='nytt namn';
console.log(' ändrat ' +  names);

// delete  - tar bort värdet från en specifik plats med den tar inte bort platsen

delete names[2];
console.log(names.indexOf('Pavel'));
names[names.indexOf('Sanela')]  = 'Sanna';
console.log(names);


// splice()  - tar bort och / eller lägger till ett värde på en specifik position

names.splice(1, 1);  // ta bort 1 från index plats 1
names.splice(1, 0, 'Pavels', 'Sanelas');
names.splice(1,2, 'Pavsan');

console.log(names);


// Hur lång är en array
console.log(names.length);

// Lägga ihop 2 arrayer

newNames = names.concat(['Juk','jacks']);
console.log(newNames);


/*
newNames.sort();
console.log(newNames);

newNames.reverse();
console.log(newNames);
*/


newNames.splice(2,1,'Snack');

console.log(newNames);
newNames.sort().reverse();
console.log(newNames);

