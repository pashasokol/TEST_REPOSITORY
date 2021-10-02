

const getRequest = (endpoint, cb) => {
    const http = new XMLHttpRequest();

http.addEventListener('readystatechange', () =>{
    // console.log(http, http.readyState);
    
    // if(http.readyState === 4) {
    //     console.log(http.responseText);
    // }

    if(http.status === 200 && http.readyState === 4){
        // console.log(http.responseText);
        const data = JSON.parse(http.responseText);
        cb(undefined, data)
    } 
    else if(http.readyState === 4) {
        
        // console.log('404 could not fetch data');
        
        cb('404 could not fetch data', undefined)
    }

})

// http.open('GET', 'user.json');
// http.send();

    http.open('GET', 'user.json');
    http.send();
}

console.log(1);
console.log(2);




getRequest('user.json', (err,data) => {

    if(err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(JSON.parse(data));
    }



});


console.log(3);
console.log(4);