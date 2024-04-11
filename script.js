function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;

    // Fetch weather data from JSON database
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            const weatherData = data[location.toLowerCase()];
            if (weatherData) {
                displayWeather(weatherData);
            } else {
                displayError('Location not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayError('An error occurred while fetching data');
        });
}
function updateWeather() {
    const locationInput = document.getElementById('location input');
    const location = locationInput.value;
    getWeatherData(location); // call getWeather with update location
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>${weatherData.location}</h2>
        <p>Temperature: ${weatherData.temperature}°C</p>
        <p>Humidity: ${weatherData.humidity}%</p>
        <p>Wind Speed: ${weatherData.windSpeed} km/h</p>
        <p>Condition: ${weatherData.condition}</p>
    `;
}

function displayError(Deleted) {
    const weatherInfo = document.getElementById('location');
    weatherInfo.innerHTML = `<p>${Message}</p>`;
}

function showUpdateButton() {
    document.getElementById('updateButton').style.display = 'block';
}

function showDeleteButton() {
    document.getElementById('deleteButton').style.display = 'Inner-block';
}


