document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', false);
            return;
        }

        // Password validation
        if (password.length < 8) {
            showMessage('Password must be at least 8 characters long.', false);
            return;
        }

        if (password !== confirmPassword) {
            showMessage('Passwords do not match.', false);
            return;
        }

        // If all validations pass, simulate sending data to the server
        registerUser(email, password);
    });

    function showMessage(msg, isSuccess) {
        messageElement.textContent = msg;
        messageElement.className = isSuccess ? 'success-message' : 'error-message';
    }

    function registerUser(email, password) {
        // Get existing users or initialize an empty array
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if user already exists
        if (users.some(user => user.email === email)) {
            showMessage('An account with this email already exists.', 'error');
            return;
        }

        // Add new user
        users.push({ email, password });

        // Save to localStorage
        localStorage.setItem('users', JSON.stringify(users));

        showMessage('Registration successful! You can now log in.', 'success');
        form.reset(); // Clear the form

        // Redirect to login page after a short delay
        setTimeout(() => {
            window.location.href = 'login.html'; // Make sure you have a login.html page
        }, 2000);
    }

});