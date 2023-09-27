// script.js
document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.getElementById("last-modified");
    const lastModified = new Date(document.lastModified).toLocaleString();
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
});