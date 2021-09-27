// Scope


let age = 34; // globalt scope


if(true) {
    let age = 50;  
    let name = 'Pavel'; // local scope
    console.log('inne i 1a kodblocket', age);
    console.log('inne i 1a kodblocket', name);


    if(true){

        let age = 100;
        let name = 'Jeanette';
        console.log('inne i kodblock 1.2', age, name);
        var globalt = 'var';
    }
};

console.log('utanför något block', age);
console.log('utanför något block', name);




if(true) {

    let age = 66;
    let name = 'Hans';
    console.log('inne i 1a kodblocket', age);
    console.log('inne i 1a kodblocket', name);

}

console.log('inne i 1a kodblocket', age);
console.log('inne i 1a kodblocket', name);
console.log('inne i 1a kodblocket', globalt);


// Funktioner


// Deklarera en funktion

function hej() {
    console.log('Hej på dig');
}

const greet = function() {
    console.log('hur är läget?')
}

hej();
greet();



// Kalla på en funktion

