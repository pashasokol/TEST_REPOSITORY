// const getData = async ()  => {

// }

// const test = getData();
// console.log(test);


const getJson = async url => {
    const res = await fetch(url);
    console.log(res);

    if(res.status !== 200) {
        throw new Error('cant fetch the data');
    }

    const data = await res.json();
    return data;
}

getJson('user.json')
.then(data => console.log(data))
.catch(err => console.log(err));
