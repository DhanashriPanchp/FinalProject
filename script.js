document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const messageElement = document.getElementById('message');

    form.addEventListener('submit', function (e) {
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

        // Call to Azure Function to register user
        registerUser(email, password);
    });

    function showMessage(msg, isSuccess) {
        messageElement.textContent = msg;
        messageElement.className = isSuccess ? 'success-message' : 'error-message';
    }

    async function registerUser(email, password) {
        try {
            const response = await fetch('https://ashy-pebble-0ec42eb10.5.azurestaticapps.net/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                showMessage('Registration successful! Redirecting to login...', true);
                form.reset();
                setTimeout(() => {
                    window.location.href = 'login.html'; // Redirect to login page
                }, 2000);
            } else {
                const error = await response.json();
                showMessage(error.message || 'Registration failed. Try again.', false);
            }
        } catch (error) {
            showMessage('An error occurred. Please try again later.', false);
        }
    }
});
