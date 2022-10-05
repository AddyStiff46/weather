const timeEl = document.getElementById('current-time');
const dateEl = document.getElementById('date');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const apiKey = 'e2f5160ea5f84ab9b3071113220510';

setInterval(() => {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();
    const ampm = hour >=12 ? 'Pm' : 'Am';
    // const hrIn12 = hour >= 13 ? hour %12: hour;
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();


    // timeEl.innerHTML = (hrIn12 < 10? '0' + hrIn12 : hrIn12) + ':' + (min <10? '0' + min: min) + ' ' + `<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month];
    timeEl.innerHTML = (hour < 10? '0' + hour : hour) + ':' + (min <10? '0' + min: min) + ' ' + `<span id="am-pm">${ampm}</span>`


}, 1000);
