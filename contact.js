document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    // Name Validation
    let name = document.getElementById("name").value;
    let nameError = document.getElementById("nameError");
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Message Validation
    let message = document.getElementById("message").value;
    let messageError = document.getElementById("messageError");
    if (message.trim() === "") {
        messageError.textContent = "Message cannot be empty.";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    // Form Submission & Confirmation
    if (valid) {
        document.getElementById("contactForm").style.transform = "scale(1.05)";
        setTimeout(() => {
            alert("Thank you for contacting us!");
            document.getElementById("contactForm").reset();
            document.getElementById("contactForm").style.transform = "scale(1)";
        }, 500);
    }
});