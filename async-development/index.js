const button = document.getElementById('submit');
const city = document.getElementById('city');
const country = document.getElementById('country');

const weatherBlock = document.querySelector('.weather');
const image = document.querySelector('img');
const temp = document.querySelector('.temp');
const locationElem = document.querySelector('.location');
const time = document.querySelector('.time');
const feelsLike = document.querySelector('.feelsLike');
const comment = document.querySelector('.comment');
const windDir = document.querySelector('.wind');
const windSpeed = document.querySelector('.speed');
const pressure = document.querySelector('.pressure');

const localWeather = document.getElementById('local')
const historyButton = document.getElementById('history');
const weatherHistorySection = document.querySelector('.weatherHistory');
const closeButton = document.querySelector('.close');
const weatherHistoryBlock = document.querySelector('.showWeatherHistory');
const clearButton = document.getElementById('clear');

const getInfo = function(firstOpt, secondOpt){
    fetch(`http://api.weatherstack.com/current?access_key=09e472f963826a15c0f422d0ca58a536&query=${firstOpt},${secondOpt}`).then(response => {
        return response.json()
    }).then(data => {
        getData(data);
        saveHistory(data); 
        
    })  
}

//заполняем поля по результатам поиска
function getData(data){
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
}


//показать блок погоды по поиску
button.addEventListener('click', function(event){
    event.preventDefault();
    if(city.value){
        weatherBlock.style.display = 'block';
        getInfo(city.value, country.value);
        
    }
    weatherHistorySection.style.display = 'none';
    document.querySelector('.message').textContent = '';
})

//определяем погоду в текущей локации
localWeather.addEventListener('click', () => {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getInfo(latitude, longitude);
        weatherBlock.style.display = 'block';
    }
    function error() {
        console.log('error')
    }
    navigator.geolocation.getCurrentPosition(success, error)
})


//сохраняем данные по поиску в локал сторэдж
function saveHistory(data) {
    let weatherHistory = JSON.parse(localStorage.getItem('history')) || {};
     weatherHistory[data.location.name] = {
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temperature,
        pressure: data.current.pressure,
        wind_dir: data.current.wind_dir,
        wind_speed: data.current.wind_speed
    }
    localStorage.setItem('history', JSON.stringify(weatherHistory))
}

historyButton.addEventListener('click', () => {
    weatherBlock.style.display = 'none';
    weatherHistorySection.style.display = 'block';
    let weatherHistory = JSON.parse(localStorage.getItem('history')) || {};
    createHistoryWeather(weatherHistory);
})

closeButton.addEventListener('click', () => {
    weatherHistorySection.style.display = 'none';
})

//заполняем блок с историей поиска
function createHistoryWeather(weatherHistory){
    for(let el in weatherHistory){
        let historyElem = document.createElement('tr');
        historyElem.className = 'historyItem'
        historyElem.innerHTML = `
        <td>${weatherHistory[el].city}, ${weatherHistory[el].country}</td>
        <td>${weatherHistory[el].temperature}℃</td>
        <td>${weatherHistory[el].wind_dir}</td>
        <td>${weatherHistory[el].wind_speed} km/h</td>
        <td>${weatherHistory[el].pressure} MB</td>`
    
    weatherHistoryBlock.append(historyElem);
    }
}

//очистка истории и локал сторэджа
clearButton.addEventListener('click', () => {
    document.querySelectorAll('.historyItem').forEach(item => item.remove());
    document.querySelector('.message').textContent = 'Your history is empty';
    localStorage.removeItem('history');
})
