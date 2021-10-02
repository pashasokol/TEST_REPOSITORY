const getRequest = (endpoint, cb) => {
    const http = new XMLHttpRequest();

http.addEventListener('readystatechange', () => {

    if(http.status === 200 && http.readyState === 4){
        // console.log(http.responseText);
        const data = JSON.parse(http.responseText);
        cb(undefined, data);
    } 
    else if(http.readyState === 4) {
        
        // console.log('404 could not fetch data');
        
        cb('404 could not fetch data', undefined)
    }

})

// http.open('GET', 'user.json');
// http.send();

    http.open('GET', endpoint);
    http.send();
}

    getRequest('user.json', (err,data) => {
    console.log(data);

    getRequest('todos.json', (err,data) => {
    console.log(data);

    getRequest('todos2.json', (err,data) => {
    console.log(data);
     
            })
        })

    })


