const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('floatingInput').value;
  const password = document.getElementById('floatingPassword').value;

  // Basic input validation (optional, enhance as needed)
  if (!email || !password) {
    errorMessage.textContent = 'Please enter both email and password.';
    return;
  }

  // Encode password for basic security (improve with hashing)
  const encodedPassword = btoa(password); // Base64 encoding

  try {
    const response = await fetch('https://paginas-web-cr.com/Api/apis/AutenticarUsuario.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password: encodedPassword
      })
    });

    if (!response.ok) {
      const errorData = await response.json(); // Parse JSON error response
      errorMessage.textContent = errorData.message; // Display error message
      return;
    }

    const data = await response.json(); // Parse JSON response

    if (data.status === 'success') {
      // Handle successful login
      console.log('Login successful!');
      // Store authentication token in local storage (e.g., sessionStorage)
      localStorage.setItem('authToken', data.token);
      // Redirect to the main application page
      window.location.href = '/home'; // Replace with your actual main page URL
    } else {
      // Handle failed login
      errorMessage.textContent = 'Invalid credentials.';
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.textContent = 'An error occurred. Please try again later.';
  }
});
