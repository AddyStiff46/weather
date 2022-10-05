const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const api = {
    key : 'e2f5160ea5f84ab9b3071113220510',
    base : 'http://api.weatherapi.com/v1'};
const searchBox = document.querySelector('.search-box');
const location = document.getElementById('location');

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
    // timeEl.innerHTML = (hour < 10? '0' + hour : hour) + ':' + (min <10? '0' + min: min) + ' ' + `<span id="am-pm">${ampm}</span>`


}, 1000);

// Base url:http://api.weatherapi.com/v1, required: apiKey, q: query parameter, days(for forecast): 1 -14


searchBox.addEventListener('keypress', setQuery);
function setQuery(evt) {
    if (evt.keyCode == 13) {
        // getResults(searchBox.value);
        console.log(searchBox.value)
    }
}

function getResults (query) {
    fetch(`${api.base}/search.json?key=${api.key}&q=${query}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
}