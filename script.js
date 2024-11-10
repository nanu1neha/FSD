// Register Form Validation
function validateRegisterForm() {
    var fullname = document.getElementById('fullname').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    
    if (fullname == "" || contact == "" || email == "" || password == "" || !gender) {
        alert("All fields are required.");
        return false;
    }
    
    var contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contact)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase letter, and one lowercase letter.");
        return false;
    }
    
    return true;
}

// Login Form Validation
function validateLoginForm() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    
    if (email == "" || password == "") {
        alert("Both fields are required.");
        return false;
    }
    
    return true;
}
