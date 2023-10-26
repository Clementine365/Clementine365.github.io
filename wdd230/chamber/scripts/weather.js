const weatherIcon = document.getElementById('weather-icon');
    const currentTemp = document.getElementById('current-temp');

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Kigali&appid=1a98fdfe973bd0187ad8973c43a140f4&units=metric')
        .then(response => response.json())
        .then(data => {
            const iconCode = data.weather[0].icon;
            const temp = data.main.temp;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            
            weatherIcon.setAttribute('src', iconUrl);
            currentTemp.textContent = temp + "°C";
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });






