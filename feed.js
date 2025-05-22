document.getElementById("feedbackForm").addEventListener("submit", function(event) {
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

    // Feedback Validation
    let feedback = document.getElementById("feedback").value;
    let feedbackError = document.getElementById("feedbackError");
    if (feedback.trim() === "") {
        feedbackError.textContent = "Feedback cannot be empty.";
        valid = false;
    } else {
        feedbackError.textContent = "";
    }

    // Form Submission & Confirmation
    if (valid) {
        document.getElementById("feedbackForm").style.transform = "scale(1.05)";
        setTimeout(() => {
            alert("Thank you for your feedback!");
            document.getElementById("feedbackForm").reset();
            document.getElementById("feedbackForm").style.transform = "scale(1)";
        }, 500);
    }
});