const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[",
    "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];
const passwordLength = 12;

function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];
    }
    document.getElementById("create-password").value = randomPassword; // Display in input field
}


document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("login-container");
    let signupForm = document.getElementById("signup-container");
    let loginText = document.getElementById("login-header");
    let signupText = document.getElementById("signup-header");
    let loginTextsignup = document.getElementById("login-header-signup");

    if (loginText && signupText && loginTextsignup) {
        loginText.addEventListener('click', function () {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        });

        signupText.addEventListener('click', function () {
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
        });

        loginTextsignup.addEventListener('click', function () {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        });
    } else {
        console.error("Elements not found");
    }

    console.log("loginText:", loginText);
    console.log("SignupText:", signupText);
});