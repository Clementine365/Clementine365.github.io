document.addEventListener("DOMContentLoaded", function () {
  const visitMessage = document.querySelector(".visits");
  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const now = new Date();
    const daysSinceLastVisit = Math.floor(
      (now - new Date(lastVisit)) / (1000 * 60 * 60 * 24)
    );

    if (daysSinceLastVisit === 1) {
      visitMessage.textContent = "You last visited 1 day ago.";
    } else if (daysSinceLastVisit < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else {
      visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    }
  }

  // Store the current visit date in localStorage
  localStorage.setItem("lastVisit", new Date().toString());
});
const msToDays = 84600000;
// today's date
const theDateToday = new Date();

// initialize display elements
const todayElement = document.querySelector("#today");

// processing
const today = Date.now();
let today_date = Date(Date.UTC(theDateToday.getFullYear(),


  today_dateElement.textContent = today_date;
  document.querySelector('.today').textContent = Date.now();