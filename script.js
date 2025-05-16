// Button Click
document.getElementById('clickMe').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  // Color Change
  document.getElementById('colorChanger').addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
  }
  
  // Keypress
  document.addEventListener('keypress', (e) => {
    console.log(You pressed: ${e.key});
  });
  
  // Tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
      document.getElementById(tab.dataset.target).style.display = 'block';
    });
  });
  
  // Form Validation
  const form = document.getElementById('signupForm');
  const feedback = document.getElementById('formFeedback');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    if (password.length < 8) {
      feedback.textContent = 'Password must be at least 8 characters!';
      feedback.style.color = 'red';
    } else {
      feedback.textContent = 'Form submitted successfully!';
      feedback.style.color = 'green';
    }
  });