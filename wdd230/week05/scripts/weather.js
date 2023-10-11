const currentTemp= document.querySelector('#current-temp');
const weatherIcon= document.querySelector('#weather-icon');
const captionDesc= document.querySelector('#figcaption');

// Declare a const variable named "url" with your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const city = 'Trier,DE'; // Replace with your desired location
const units = 'imperial'; // You can change to 'metric' for Celsius

const url = `${baseUrl}?q=${city}&units=${units}&appid=${apiKey}`;



// Define an asynchronous function named "apiFetch()"
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Testing only
      displayResults(data); // Call the displayResults function
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(); // Invoke the apiFetch function

// Build the displayResults function to display weather data
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const icon = data.weather[0].icon;
  const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}