export class UI {
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humid = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    render(weather) {
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = "";
        for (let i = 0; i < weather.weather.length; i++) {
            this.desc.textContent += weather.weather[i].description+ ', ';
        }
        this.desc.textContent = this.desc.textContent.slice(0, this.desc.textContent.length-2);
        this.string.textContent = weather.main.temp + ' °C';
        this.humid.textContent = 'Humidity:' + weather.main.humidity + ' %';
        this.wind.textContent = 'Wind:' + weather.wind.speed + ' m/s';
    }
}