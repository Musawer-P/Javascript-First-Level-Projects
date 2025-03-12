document.addEventListener("DOMContentLoaded", function() {
    let loginForm = document.getElementById("login-container");  
    let signupForm = document.getElementById("signup-container");
    let loginText = document.getElementById("login-header");
    let signupText = document.getElementById("signup-header");
    let loginTextsignup = document.getElementById("login-header-signup");

    if (loginText && signupText &&loginTextsignup) { 
        loginText.addEventListener('click', function() {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        });

        signupText.addEventListener('click', function() {
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
        });
        
        loginTextsignup.addEventListener('click', function() {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        });
    } else {
        console.error("Elements not found");
    }

    console.log("loginText:", loginText);
console.log("SignupText:", signupText);
});