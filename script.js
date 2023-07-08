const loginPage=document.querySelector(".form-wrapper")
const main= document.querySelector(".main")
const logoutbtn = document.querySelector(".logout-btn")
const loginbtn = document.querySelector(".login-btn")
const signupPage = document.querySelector(".form-register")
const signupbtn = document.querySelector(".signup-btn")


  // Logout function
  function logout() {
    loginPage.classList.remove('hidden');
    main.classList.add('hidden')
    logoutbtn.classList.add('hidden')
    signupbtn.classList.remove('hidden')
  }
// Login function
function login(event) {

    event.preventDefault();
     
    // Get form inputs
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

   
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
      // window.location.href = 'index.html';
      loginbtn.classList.add('hidden')
      logoutbtn.classList.remove('hidden')
      loginPage.classList.add('hidden');
      main.classList.remove('hidden');
      signupPage.classList.add("hidden")
      signupbtn.classList.add("hidden")
       
    } else {
      // Display an error message for invalid credentials
      alert('Invalid email or password. Please try again.');
    }
  }

    document.getElementById('login-form').addEventListener('submit', login);

    // Register function
    function register(event) {
      event.preventDefault();
      // Get form inputs
      var name = document.getElementById('register-name').value;
      var email = document.getElementById('register-email').value;
      var password = document.getElementById('register-password').value;
    
      // Check if the user already exists in local storage
      var users = JSON.parse(localStorage.getItem('users')) || [];
      var userExists = users.some(function (user) {
        return user.email === email;
      });
    
      // If the user already exists, display an error message
      if (userExists) {
        alert('User already exists. Please log in.');
        return;
      }
    
      // Create a new user object
      var newUser = {
        name: name,
        email: email,
        password: password
      };
    
      // Add the new user to the local storage
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      signupPage.classList.add("hidden")
      loginPage.classList.remove("hidden")
     
    
      // Display a success message and redirect to the login page
      alert('Registration successful. Please log in.');
      window.location.href = 'index.html';
    }

  document.getElementById('register-form').addEventListener('submit', register);




document.getElementById('search-form').addEventListener('submit', function(event) 
{
    event.preventDefault();
  
    // Fetch candidates based on location and job role
    const location = document.getElementById('location-input').value;
    const jobRole = document.getElementById('job-role-input').value;
  
    // Simulating candidate fetching with dummy data
    const candidates = fetchCandidates(location, jobRole);
  
    // Display the fetched candidates
    displayCandidates(candidates);
  });
  
  function fetchCandidates(location, jobRole) {
//   dummy data
    const candidates = [
      { name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
      { name: 'Jane Smith', location: 'New York', jobRole: 'UI/UX Designer' },
      { name: 'Michael Johnson', location: 'New York', jobRole: 'Project Manager' },
      { name: 'Danish', location: 'India', jobRole: 'Software Engineer' },
      { name: 'Ram', location: 'India', jobRole: 'UI/UX Designer' },
      { name: 'mohan', location: 'india', jobRole: 'Project Manager' },
      { name: 'sam', location: 'japan', jobRole: 'Software Engineer' },
      { name: 'Smith', location: 'australia', jobRole: 'UI/UX Designer' },
      { name: 'Johnson', location: 'Chicago', jobRole: 'Sales-Executive' },
      { name: 'Rohit', location: 'India', jobRole: 'Software Engineer' },
      { name: 'Raj shori', location: 'India', jobRole: 'Software Engineer' },
      { name: 'Sami Akhtar', location: 'India', jobRole: 'Software Engineer' },
    ];
  
    // Filter candidates based on location and job role
    const filteredCandidates = candidates.filter(candidate => {
      return candidate.location.toLowerCase() === location.toLowerCase() &&
             candidate.jobRole.toLowerCase() === jobRole.toLowerCase();
    });
  
    return filteredCandidates;
  }
  
  function displayCandidates(candidates) {
    const candidateResults = document.getElementById('candidate-results');
  
    if (candidates.length === 0) {
      candidateResults.innerHTML = '<p>No candidates found.</p>';
    } else {
      // Generate HTML for candidate listing
      const candidatesHTML = candidates.map(candidate => {
        return `
          <div class="candidate">
            <h3>${candidate.name}</h3>
            <p>Location: ${candidate.location}</p>
            <p>Job Role: ${candidate.jobRole}</p>
          </div>
        `;
      }).join('');
  
      candidateResults.innerHTML = candidatesHTML;
    }
  }

function showRegister(){
   loginPage.classList.add("hidden")
   signupPage.classList.remove("hidden")
   signupbtn.classList.add("hidden")
   loginbtn.classList.remove("hidden")
  
}
 
function showLogin(){
  loginPage.classList.remove("hidden")
  loginbtn.classList.add("hidden")
  signupbtn.classList.remove("hidden")
  signupPage.classList.add("hidden")
}

