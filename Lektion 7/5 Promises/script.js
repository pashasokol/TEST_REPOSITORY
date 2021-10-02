const doSomething = (value) => {
    return new Promise((resolve, reject) => {
        if(value) {
            resolve('success data');
        } else {
            reject('error');
        }
    })
}


// doSomething(true)
// .then(data => console.log(data))
// .catch(err => console.log(err));







const getRequest = endpoint => {
    return new Promise((resolve,reject) => {
        const http = new XMLHttpRequest();

        http.addEventListener('readystatechange', () => {
        
            if(http.status === 200 && http.readyState === 4){
                // console.log(http.responseText);
                const data = JSON.parse(http.responseText);
                resolve(data)
            } 
            else if(http.readyState === 4) {
                
                // console.log('404 could not fetch data');
                
                reject('404 could not fetch data')
            }
        
        })
        
        // http.open('GET', 'user.json');
        // http.send();
        
            http.open('GET', endpoint);
            http.send();
    })

}

getRequest('user.json')
.then(data => {
    console.log(data);
    return getRequest('todos.json');

})
.then(todos => {
    console.log(todos);
    return getRequest('todos2.json');
})
.then(moreTodos => {
    console.log(moreTodos);
})

.catch(err => {
    console.log(err);
})



