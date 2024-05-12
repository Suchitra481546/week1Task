function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '619e80b40a03a827b8a40ef378efed95'; // Replace with your API key from OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found. Please enter a valid city name.');
            } else {
                const cityName = document.getElementById('cityName');
                const temperature = document.getElementById('temperature');

                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp} °C`;
            }
        })
        .catch(error => console.error('Error fetching weather:', error));
}
