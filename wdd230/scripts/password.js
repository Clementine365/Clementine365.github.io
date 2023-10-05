document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMessage = document.getElementById('passwordMessage');

    // Event listener to check password match on input
    confirmPasswordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === confirmPassword) {
            passwordMessage.textContent = 'Passwords match';
            passwordMessage.style.color = 'green';
        } else {
            passwordMessage.textContent = 'Passwords do not match';
            passwordMessage.style.color = 'red';
        }
    });
});