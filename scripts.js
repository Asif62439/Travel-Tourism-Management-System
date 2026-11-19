
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let destination = document.getElementById("destination").value;

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    let travelDate = document.getElementById("travelDate").value;

    let contactName = document.getElementById("contactName").value.trim();
    let relationship = document.getElementById("relationship").value;
    let phone = document.getElementById("emergencyPhone").value.trim();

    let terms = document.getElementById("terms").checked;

    let message = document.getElementById("message");

    let specialChar = /[!@#$%^&*]/;
    let upperCase = /[A-Z]/;
    let phonePattern = /^01[0-9]{9}$/;

    if (name === "") {
        message.innerHTML = "Name is required!";
        message.style.color = "red";
        return false;
    }

    if (name.length < 2) {
        message.innerHTML = "Name needs at least 2 characters!";
        message.style.color = "red";
        return false;
    }

    if (email === "") {
        message.innerHTML = "Email is required!";
        message.style.color = "red";
        return false;
    }

    

    if (age === "" || Number(age) < 1) {
        message.innerHTML = "Please enter a valid age!";
        message.style.color = "red";
        return false;
    }

    if (dob === "") {
        message.innerHTML = "Please enter your date of birth!";
        message.style.color = "red";
        return false;
    }

    if (destination === "") {
        message.innerHTML = "Please select a destination!";
        message.style.color = "red";
        return false;
    }
    if (!document.querySelector('input[name="gender"]:checked')) {
    message.innerHTML = "Please select your gender!";
    message.style.color = "red";
    return false;
}
    
    if (!document.querySelector('input[name="travelType"]:checked')) {
        message.innerHTML = "Please select your travel type!";
        message.style.color = "red";
        return false;
    }

    if (travelDate === "") {
        message.innerHTML = "Please select your travel date!";
        message.style.color = "red";
        return false;
    }

    if (username === "") {
        message.innerHTML = "Username is required!";
        message.style.color = "red";
        return false;
    }

    if (password.length < 6) {
        message.innerHTML = "Minimum 6 characters needed!";
        message.style.color = "red";
        return false;
    }

    if (!upperCase.test(password)) {
        message.innerHTML = "Password needs at least one uppercase letter!";
        message.style.color = "red";
        return false;
    }

    if (!specialChar.test(password)) {
        message.innerHTML = "Password needs at least one special character!";
        message.style.color = "red";
        return false;
    }

    if (confirm === "") {
        message.innerHTML = "Please confirm your password!";
        message.style.color = "red";
        return false;
    }

    if (password !== confirm) {
        message.innerHTML = "Passwords do not match!";
        message.style.color = "red";
        return false;
    }

    if (!terms) {
        message.innerHTML = "Please accept Terms & Conditions!";
        message.style.color = "red";
        return false;
    }

    if (contactName === "") {
        message.innerHTML = "Emergency contact name is required!";
        message.style.color = "red";
        return false;
    }

    if (relationship === "") {
        message.innerHTML = "Please select your relationship!";
        message.style.color = "red";
        return false;
    }

    if (phone === "") {
        message.innerHTML = "Emergency phone number is required!";
        message.style.color = "red";
        return false;
    }

    if (!phonePattern.test(phone)) {
        message.innerHTML = "Enter a valid Bangladesh phone number!";
        message.style.color = "red";
        return false;
    }

    message.innerHTML = "Registration Successful!";
    message.style.color = "green";

    return false;
}
