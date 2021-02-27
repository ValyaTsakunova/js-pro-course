const button = document.getElementById('submit');
const city = document.getElementById('city');
const country = document.getElementById('country');

const weatherBlock = document.querySelector('.weather');
const image = document.querySelector('img');
const temp = document.querySelector('.temp');
const locationElem = document.querySelector('.location');
const time = document.querySelector('.time');
const feelsLike = document.querySelector('.feels-like');
const comment = document.querySelector('.comment');
const windDir = document.querySelector('.wind');
const windSpeed = document.querySelector('.speed');
const pressure = document.querySelector('.pressure');


const getInfo = function(){
    fetch(`http://api.weatherstack.com/current?access_key=09e472f963826a15c0f422d0ca58a536&query=${city.value},${country.value}`).then(response => {
        return response.json()
    }).then(data => {
       const {current, request} = data;

       image.src = current.weather_icons;
       temp.textContent = `${current.temperature}℃`;
       locationElem.textContent = request.query;

       time.textContent = `Time: ${current.observation_time}`;
        feelsLike.textContent = `Feels like: ${current.feelslike}℃`;
       comment.textContent = `Today is ${current.weather_descriptions}`;
        windDir.textContent= `Wind: ${current.wind_dir}`;
        windSpeed.textContent = `Speed: ${current.wind_speed} km/h`;
        pressure.textContent = `Pressure: ${current.pressure} MB`;
    })
}

button.addEventListener('click', function(event){
    event.preventDefault();
    if(city.value){
        weatherBlock.style.display = 'block';
        getInfo();
    }
    
})

