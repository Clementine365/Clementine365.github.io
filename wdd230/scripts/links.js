const baseURL = "https://clementine365.github.io/wdd230/"; 
const linksURL = "https://clementine365.github.io/wdd230/data/links.json"; 

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

function displayLinks(weeks) {
  const learningActivitiesContainer = document.getElementById('learning-activities');
  let html = '';

  weeks.forEach((week) => {
    html += `<h2>${week.week}</h2>`;
    html += '<ul>';
    
    week.links.forEach((activity) => {
      html += `<li><a href="${baseURL}${activity.url}" target="_blank">${activity.title}</a></li>`;
    });

    html += '</ul>';
  });

  learningActivitiesContainer.innerHTML = html;
}

getLinks();