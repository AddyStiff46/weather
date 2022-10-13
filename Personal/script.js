const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const locationEl = document.getElementById('location');
const country = document.getElementById('country');
const city = document.getElementById('city');
const api = {
    key : 'e2f5160ea5f84ab9b3071113220510',
    base : 'http://api.weatherapi.com/v1'};

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const ampm = hour >=12 ? 'Pm' : 'Am';
    const hrIn12 = hour >= 13 ? hour %12: hour;
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();

    timeEl.innerHTML = (hrIn12 < 10? '0' + hrIn12 : hrIn12) + ':' + (min <10? '0' + min: min) + ' ' + `<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];

}, 1000);

// Base url:http://api.weatherapi.com/v1, required: apiKey, q: query parameter, days(for forecast): 1 -14

function getWeatherData(weather){
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude, longitude} = success.coords
        let location = latitude + ',' + longitude
    fetch(`${api.base}/forecast.json?key=${api.key}&q=${location}&days=7`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    });
}
getWeatherData();
