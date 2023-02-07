

function checkLogin() {
    // Get the inputted username and password
    var inputtedUsername = document.getElementById("username").value;
    var inputtedPassword = document.getElementById("password").value;

    // Define the correct credentials
    var correctUsername = "mo";
    var correctPassword = "hacksin";

    // Check if the inputted credentials match the correct credentials
    if (inputtedUsername === correctUsername && inputtedPassword === correctPassword) {
        // If the credentials match, redirect the user to the restricted area
        window.location.href = "main.html";
    } else {
        // If the credentials do not match, display an error message
        alert("Incorrect login credentials. Please try again.");
    }
}

var submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", checkLogin);


