const timeEl = document.getElementById('time');
const city = document.getElementById('city');
const temp_f = document.querySelector('.current-temp');
const feelslike_f = document.querySelector('.feels-like');
const precip = document.querySelector('.total-precip');
const WeatherData = document.querySelector('.weather-data');
const moonStuff = document.querySelector('.moon-data');
const moon_illumination = document.querySelector('.illum');
const moon_phase = document.querySelector('.moon-phase');
const moonrise = document.querySelector('.moon-rise');
const moonset = document.querySelector('.moon-set');
const sunset = document.querySelector('.sunset');
const sunrise = document.querySelector('.sunrise');
let icon = document.getElementById('current-image');
const api = {
    key : 'e2f5160ea5f84ab9b3071113220510',
    base : 'https://api.weatherapi.com/v1'};

// Base url:http://api.weatherapi.com/v1, required: apiKey, q: query parameter, days(for forecast): 1 -14

async function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude, longitude} = success.coords
        let location = latitude + ',' + longitude
    fetch(`${api.base}/forecast.json?key=${api.key}&q=${location}&days=7`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            currentWeatherData(data)
        })
    });
}
getWeatherData();

function currentWeatherData(data) {
    city.innerHTML = data.location.name;
    timeEl.innerHTML = data.location.localtime;
    

    let {temp_f, feelslike_f, precip_in} = data.current;
    let {icon, text} = data.current.condition;

    WeatherData.innerHTML = 
    `<div>
        <img src="${icon}" alt="${text}" id="current-image" height="auto" width="175px">
    </div>
    <div class="current-temp" id="current-temp">
        ${temp_f}&#176; <span class="metric-imperial">F</span>
    </div>
    <div class="feels-like">
        Feels like <span class="feels-temp" id="feels-temp">${feelslike_f}&#176;</span>
    </div>
    <div class="total-precip">
        ${precip_in} <span id="in-cm">inches☔️</span>
    </div>`
}

async function getAstroData(){
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude, longitude} = success.coords
        let location = latitude + ',' + longitude
    fetch(`${api.base}/astronomy.json?key=${api.key}&q=${location}`)
        .then(response => response.json())
        .then(astro => {
            console.log(astro)
            moonData(astro)
        })
    });
}
getAstroData();

function moonData(astro) {
    sunrise.innerHTML = astro.astronomy.astro.sunrise;
    sunset.innerHTML = astro.astronomy.astro.sunset;
    moon_phase.innerHTML = astro.astronomy.astro.moon_phase;
    moon_illumination.innerHTML = astro.astronomy.astro.moon_illumination;
    moonrise.innerHTML = astro.astronomy.astro.moonrise;
    moonset.innerHTML = astro.astronomy.astro.moonset;

    // let {moon_illumination, moonrise, moonset} = astro.astronomy.astro;

    // moonData.innerHTML = 
    // `<div class="moon-phase">
    // ${moon_phase}
    // </div>
    // <div class="moon-illumination">
    // <span class="illum" id="illum">${moon_illumination}%</span> Illuminated
    // </div>
    // <div class="moon-rise">Moonrise: <span >${moonrise}</span></div>
    // <div class="moon-set">Moonset: <span >${moonset}</span></div>`
}