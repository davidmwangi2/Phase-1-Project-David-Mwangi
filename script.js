function fetchWeather() {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('weatherData').innerText = JSON.stringify(data);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function updateWeather() {
    console.log('Weather updated');
}

function deleteWeather() {
    document.getElementById('weatherData').innerText = '';
}


