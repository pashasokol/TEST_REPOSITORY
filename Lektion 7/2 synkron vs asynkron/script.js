const funk = (cb) => {
    setTimeout(() => {
        cb();

    }, 2000)
}

console.log(1);
console.log(2);

for(let i = 0; i<3;i++) {
    console.log('blocking ' + 1);
}

funk(() =>  {
    console.log('callback')
})

console.log(3);
console.log(4);