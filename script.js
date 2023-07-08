
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const terms = document.getElementById('terms');

// Function to Check Error
function showError(input, message) {
    const subForm = input.parentElement;
    subForm.className = 'sub-Form error';
    const small = subForm.querySelector('small');
    small.innerText = message;
}

// Function to Show Success
function showSuccess(input) {
    const subForm = input.parentElement;
    subForm.className = 'sub-Form success';
  
}

// Check if Email is Valid (regex)
function isEmail(email) {
    const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return valid.test(email);
}

// Check Password Strength (regex)
function passwordStrength(password) {
    const strengthPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return strengthPass.test(password);
}

// Main function
form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkingForm();
});


//Function to check all of input
function checkingForm() {

    // Username
    if (username.value === '') {
      showError(username, 'Username cannot be empty');
    } else {
      showSuccess(username);
    }

    // Email
    if (email.value === '') {
      showError(email, 'Email cannot be empty');
    } else if (!isEmail(email.value)) {
      showError(email, 'Email is not valid');
    } else {
      showSuccess(email);
    }

    // Password
    if (password.value === '') {
      showError(password, 'Password cannot be empty');
    } else if (password.value.length < 8) {
      showError(password, 'Password must be at least 8 characters');
    } else if (!passwordStrength(password.value)) {
      showError(
        password,
        'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
      );
    } else {
      showSuccess(password);
      displayAlert();
    } 

}

// Display an alert to show 'Sign up Successful'
function displayAlert(){
  const name = username.value

  if(username.value !== '' & email.value !== ''){
    Swal.fire({
      title: `Hello, ${name}`,
      text: 'Welcome! We\'re excited to have you join us',
      icon: 'success',
      timer: 3000,               // automatically closed after 3s (time in milliseconds)
      showConfirmButton: false   // don't show confirm button
    });
  }
}
