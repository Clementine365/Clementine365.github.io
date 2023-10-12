const currentTemp= document.querySelector('#current-temp');
const weatherIcon= document.querySelector('#weather-icon');
const captionDesc= document.querySelector('#figcaption');


const apiKey = '1a98fdfe973bd0187ad8973c43a140f4'; 
const baseUrl = 'https://openweathermap.org/find?utf8=%E2%9C%93&q=kigali%2C+rwanda';
const city = 'kigali'; 
const units = 'imperial';

const url = `https://openweathermap.org/find?utf8=%E2%9C%93&q=kigali%2C+rwanda`;




async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data); 
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch(); 


function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const icon = data.weather[0].icon;
  const iconsrc = `https://openweathermap.org/img/w/${icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}