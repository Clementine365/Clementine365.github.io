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
document.addEventListener("DOMContentLoaded", function () {
  // Get the element where you want to display the current date
  const todayDateElement = document.getElementById("today_date");

  // Create a new Date object to get the current date
  const currentDate = new Date();

  // Format the date as desired (e.g., "Month Day, Year")
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  // Set the formatted date in the HTML element
  todayDateElement.textContent = formattedDate;
  
});
