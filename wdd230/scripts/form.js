const pageRating = document.getElementById('pageRating');
const ratingValue = document.getElementById('ratingValue');

pageRating.addEventListener('input', function() {
    ratingValue.textContent = pageRating.value;
});

