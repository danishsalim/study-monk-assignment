document.getElementById('search-form').addEventListener('submit', function(event) {
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
    // This is where you would make an actual API request to fetch the candidates based on location and job role
    // For now, let's simulate it with dummy data
    const candidates = [
      { name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
      { name: 'Jane Smith', location: 'San Francisco', jobRole: 'UI/UX Designer' },
      { name: 'Michael Johnson', location: 'Chicago', jobRole: 'Project Manager' },
      { name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
      { name: 'Jane Smith', location: 'San Francisco', jobRole: 'UI/UX Designer' },
      { name: 'Michael Johnson', location: 'Chicago', jobRole: 'Project Manager' },
      { name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
      { name: 'Jane Smith', location: 'San Francisco', jobRole: 'UI/UX Designer' },
      { name: 'Michael Johnson', location: 'Chicago', jobRole: 'Project Manager' },
      // Add more dummy candidates here
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
  