import { getData, dateBuilder }  from './functions.js';


const apiKey = 'f625dca932cb32e7ce600031d7006ef5';
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const city = document.querySelector('.city');


const displayResults = data => {


    const date = document.querySelector('.date');

    city.innerText = `${data.name}, ${data.sys.country}`;

    let now = new Date();

    date.innerText = dateBuilder(now);

    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}  <span>&degC</span>      `

    document.querySelector('.icon').style.background = `url('http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png')`

    document.querySelector('.weather').innerText = data.weather[0].main;
    document.querySelector('.hi-low').innerHTML = `${Math.round(data.main.temp_max)}&degC / ${Math.round(data.main.temp_min)}&degC`
}




form.addEventListener('submit', e => {
    e.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`

    getData(url)
    .then(data => {
        console.log(data);
        displayResults(data);
        input.value = '';
        input.focus();
    })
})


window.addEventListener('load', () => {
    let lat;
    let lon;

    // if(navigator.geolocation)


    if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition((pos) => {
        // console.log(pos);

        lat = pos.coords.latitude;
        lon = pos.coords.longitude;


        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        getData(url)
        .then(data => {
            displayResults(data);
        })

    })

}    else {
    coty.innerText = 'No geolocation data found'
}
})