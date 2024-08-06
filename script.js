document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name');
    var password = document.getElementById('password');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    
    var nameError = document.getElementById('nameError');
    var passwordError = document.getElementById('passwordError');
    var emailError = document.getElementById('emailError');
    var phoneError = document.getElementById('phoneError');
    
    var isValid = true;
    
    if (!name.value) {
        name.classList.add('error');
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        name.classList.remove('error');
        nameError.textContent = '';
    }
    
    if (!password.value) {
        password.classList.add('error');
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else {
        password.classList.remove('error');
        passwordError.textContent = '';
    }
    
    if (!email.value) {
        email.classList.add('error');
        emailError.textContent = 'Email is required';
        isValid = false;
    } else {
        email.classList.remove('error');
        emailError.textContent = '';
    }
    
    if (!phone.value) {
        phone.classList.add('error');
        phoneError.textContent = 'Phone Number is required';
        isValid = false;
    } else {
        phone.classList.remove('error');
        phoneError.textContent = '';
    }
    
    if (isValid) {
        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h3>Form Submitted Successfully</h3>
            <p><strong>Name:</strong> ${name.value}</p>
            <p><strong>Password:</strong> ${password.value}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Phone Number:</strong> ${phone.value}</p>
        `;
    }
});
