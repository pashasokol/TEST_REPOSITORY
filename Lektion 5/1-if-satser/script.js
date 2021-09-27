// Booleans   true / false

// let active = true;
// console.log(active);




let email = 'joakim.wahlstrom@lexicon.se';

// console.log(email.includes('@'));
// console.log(email.includes('2'));

let names = ['Joakim', 'Hans', 'Tommy'];
// console.log(names.includes('Joakim'));
// console.log(names.includes('Jeanette'));


let number = 13;
let string = '13';

// console.log(number == 13);
// console.log(number == 20);
// console.log(number != 13);
// console.log(number != 20);

// // större än
// console.log(number > 13);
// // större eller lika med
// console.log(number >= 13);

// // mindre än
// console.log(number < 14);
// // mindre än eller lika med
// console.log(number <= 13);


//  två = tecken jämför bara värdet
// console.log(string == number);
// // tre = jämför värdet och datatyp
// console.log(string === number);

// console.log(string != number);
// console.log(string !== number);


// if(true) {
//   console.log('Hej');
// }

// if(string == number) {
//   console.log('Det är sant! string == number')
// }
// if(string === number) {
//   console.log('Det är falskt! (string === number)')
// }


let st = '15';
let nr = 13;

// if(st > nr) {
//   console.log('st är större än nr');
// }

// if(typeof st == typeof nr) {
//   console.log('st är samma datatyp som nr');
// }
// else if(typeof st != typeof nr) {
//   console.log('st är INTE samma datatyp som nr');
// }

// if(st > nr && typeof st == typeof nr) {
//   console.log('st är större än nr OCH det är samma datatyp, ALLT måste vara sant')
// }
// if(st > nr || typeof st == typeof nr) {
//   console.log('st är större än nr ELLER det är samma datatyp, EN måste vara sann')
// }

// if(st > nr && typeof st != typeof nr) {
//   console.log('st är större än nr OCH det är inte samma datatyp, ALLT måste vara sant')
// }

// if(st > nr || typeof st != typeof nr) {
//   console.log('st är större än nr ELLER det är inte samma datatyp, EN måste vara sann')
// }



// if(!(st > nr && typeof st == typeof nr)) {
//   console.log('st är större än nr OCH det är samma datatyp, ALLT måste vara sant')
// }

// let active = true;

// if(!active) {
//   // den här koden körs bara om active är false
//   console.log('active är false')
// }



//  if, else if, else

let firstName = 'Tommy';

if(firstName == 'Joakim') {
  console.log('namnet är ' + firstName);
}
if(firstName == 'joakim') {
  console.log('namnet är ' + firstName);
}


if(firstName.toLowerCase() == 'joakim') {
  console.log('namnet är ' + firstName);
} 
else if(firstName == 'Hans') {
  console.log('Hej Hans');
} 
else if(firstName == 'Hans') {
  console.log('Hej Hans');
} 
else if(firstName == 'Jeanette') {
  console.log('Hej Jeanette');
}
else {
  console.log('okänd person');
}