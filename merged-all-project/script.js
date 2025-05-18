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

//Black jack game is on another js file
//Done


//Random card picker js is on another file 
//Done

//Random password generator is on another js file
//Done

//Basketball counter app 
//first section
let section_one_button_one = document.getElementById("button_submit_one")
let section_one_button_two = document.getElementById("button_submit_two")
let section_one_button_three = document.getElementById("button_submit_three")
//second section 
let section_two_button_one = document.getElementById("button_submit_one_two")
let section_two_button_two = document.getElementById("button_submit_two_two")
let section_two_button_three = document.getElementById("button_submit_three_two")

let section_one_number = document.getElementById("first_section_number")
//second section 
let section_two_number = document.getElementById("second_section_number")


let section_one_increase = 0
//second section 
let section_two_increase = 0

//first section
function button_one() {
    section_one_increase += 1
    section_one_number.textContent = section_one_increase
    console.log("hi")
}


function button_two() {
    section_one_increase += 2
    section_one_number.textContent = section_one_increase
    console.log("hi")
}


function button_three() {
    section_one_increase += 3
    section_one_number.textContent = section_one_increase
    console.log("hi")
}

//second section 

function button_one_two() {
    section_two_increase += 1
    section_two_number.textContent = section_two_increase
    console.log("hi")
}


function button_two_two() {
    section_two_increase += 2
    section_two_number.textContent = section_two_increase
    console.log("hi")
}


function button_three_two() {
    section_two_increase += 3
    section_two_number.textContent = section_two_increase
    console.log("hi")
}


//Done

//Unit converter
 let buttonConvert = document.getElementById("button-convert")
 let inputMain = document.getElementById("input-main")
 let lenghtEl = document.getElementById("lenght-el")
 let volumeEl = document.getElementById("volume-el")
 let massEl = document.getElementById("mass-el")


 const meterToFeet = 3.281
 const literToGallon = 0.264
 const kiloToPound = 2.204

 buttonConvert.addEventListener("click" , function(){
    let baseValue = inputMain.value

    lenghtEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet.toFixed(3)} feet | ${baseValue} feet = ${baseValue / meterToFeet.toFixed(3)} meter`
    volumeEl.textContent = `${baseValue} liter = ${baseValue * literToGallon.toFixed(3)} gallon | ${baseValue} gallon = ${baseValue / literToGallon.toFixed(3)} liter`
    massEl.textContent = `${baseValue} kilo = ${baseValue * kiloToPound.toFixed(3)} pound | ${baseValue} pound = ${baseValue / kiloToPound.toFixed(3)} kilo`

 }) 
//Done

//Timer
let countdown;
let timeInSeconds = 0;

document.getElementById("set").addEventListener("click", function () {
    timeInSeconds = parseInt(document.getElementById("timeSelect").value);
    updateDisplay(timeInSeconds);
});

document.getElementById("start").addEventListener("click", function () {
    startTimer();
});

function startTimer() {
    clearInterval(countdown); // Stop any existing timer

    countdown = setInterval(() => {
        if (timeInSeconds <= 0) {
            clearInterval(countdown);
            document.getElementById("timerDisplay").style.backgroundColor = "green";
            document.getElementById("timerDisplay").style.color = "white"; 
            alert("Time is up!");
            return;
        }

        updateDisplay(timeInSeconds);
        timeInSeconds--;
    }, 1000);
}

function updateDisplay(seconds) {
    let mins = Math.floor(seconds  / 60);
    let secs = seconds % 60;

    document.getElementById("timerDisplay").innerText =
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
