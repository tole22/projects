const { Weather } = require('./Weather');
const { UI } = require('./UI');

const ui = new UI();
const weather = new Weather('London', 'uk');

require('./index.css');

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    fetchWeather();
    e.preventDefault();
});
document.addEventListener('DOMContentLoaded', fetchWeather);