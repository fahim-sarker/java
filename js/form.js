document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    let errorMessages = [];
  
    // Get the form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validate name (it should not be empty)
    if (name === '') {
      errorMessages.push('Name is required.');
    }
  
    // Validate email (it should not be empty and match the email pattern)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
      errorMessages.push('Email is required.');
    } else if (!emailPattern.test(email)) {
      errorMessages.push('Please enter a valid email address.');
    }
  
    // Validate password (it should not be empty and should be at least 6 characters)
    if (password === '') {
      errorMessages.push('Password is required.');
    } else if (password.length < 6) {
      errorMessages.push('Password should be at least 6 characters.');
    }
  
    // If there are errors, display them; otherwise, submit the form
    const errorMessagesElement = document.getElementById('errorMessages');
    if (errorMessages.length > 0) {
      errorMessagesElement.innerHTML = errorMessages.join('<br>');
    } else {
      // You can submit the form or perform other actions
      // For example, you could submit the form like this:
      // document.getElementById('myForm').submit();
      alert('Form submitted successfully!');
    }
  });
  