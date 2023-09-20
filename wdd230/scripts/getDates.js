// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get the last modified date
const lastModified = new Date(document.lastModified);
document.getElementById("lastModified").textContent = lastModified.toDateString();