 // Main page
 const cards = document.querySelectorAll('.card');
  let currentIndex = 1; // Start with center one active

  function updateCards() {
    cards.forEach((card, index) => {
      card.classList.remove('active');
      if (index === currentIndex) {
        card.classList.add('active');
      }
    });
  }

  function navigate(direction) {
    currentIndex = (currentIndex + direction + cards.length) % cards.length;
    updateCards();
  }
// Done

  // Clingy Popup
const mainModal = document.getElementById("main")
const popupModal = document.getElementById("popup")
const popupText = document.getElementById("inside-text")
const loginForm = document.getElementById("login-form")
const closeBtn = document.getElementById("close-btn")
const emailI = document.getElementById("email")
const acceptBtn = document.getElementById("accept-btn")
const declineBtn = document.getElementById("decline-btn")
const button = document.getElementById("button")

setTimeout(function(){
popupModal.style.display = 'block'
},1500)

closeBtn.addEventListener('click', function(){
    popupModal.style.display = 'none'
})


loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    popupText.innerHTML = `<div class="modal-inner-loading">
        <img src="images/loading.gif" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`;

    setTimeout(function() {
        document.getElementById('uploadText').innerText = `Making the sale...`; 
    }, 1500); 

    setTimeout(function(){
        document.getElementById('popup').innerHTML = `<h2 style = "color:white;">Thanks <span class="modal-display-name">${fullName}</span>, you easy target! </h2>
        <p style = "color:white;">We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`; 
        closeBtn.disabled = false
    },3000)

    const formData = new FormData(loginForm)
const fullName = formData.get('name')
});

declineBtn.addEventListener('mouseenter', function(){
    button.classList.toggle('reverse')
})
// Done

// Counter App
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
//Done 
//Emoji Face off
let fighters = ["🐉", "🐥", "🐊", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
  
  let animal = Math.floor(Math.random() * fighters.length)
  let animalTwo = Math.floor(Math.random() * fighters.length)
  stageEl.textContent = (fighters[animal] + " vs " + fighters[animalTwo])
  })

//Done

//Login Project
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


function checkLogin() {
    // Set your desired username & password
    const correctUsername = "admin";
    const correctPassword = "12345";

    // Get entered values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        alert("Login successful!");
        document.getElementById("loginBox").style.display = "none"; // Close the box
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
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
//done

//Digital Clock
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  
//Done