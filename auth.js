  // Logout function
  function logout() {
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-logout').style.display = 'inline-block';
  }
// Login function
function login(event) {
    event.preventDefault();
  
    // Get form inputs
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
  
    // Check if the user exists in local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(function (user) {
      return user.email === email && user.password === password;
    });
  
    // If the user exists, perform the login
    if (user) {
      // Save the logged-in user in local storage
      localStorage.setItem('loggedInUser', JSON.stringify(user));
  
      // Redirect to the dashboard or desired page
      window.location.href = 'index.html';
      logout()
      
    } else {
      // Display an error message for invalid credentials
      alert('Invalid email or password. Please try again.');
    }
  }
  

  
  // Add event listeners to the login and register forms
  document.getElementById('login-form').addEventListener('submit', login);
  document.getElementById('register-form').addEventListener('submit', register);
  
  
  
  
  