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


//Notes app is on another js file
//done

//Dynamic world clock
function updateClock() {
    // dubai's time offset (GMT+4:30) and Medina's time offset (GMT+3)
    const utcTime = new Date();
    const dubaiOffset = 4.5 * 60 * 60 * 1000; // dubai (GMT +4:30)
    const madinaOffset = 3 * 60 * 60 * 1000;  // Medina (GMT +3)
    const newyorkOffset = -4 * 60 * 60 * 1000;  // Medina (GMT +3)
    const brazilOffset = -3 * 60 * 60 * 1000;  // Medina (GMT +3)
    const madridOffset = 2 * 60 * 60 * 1000;  // Medina (GMT +3)
    const alaskaOffset = -9 * 60 * 60 * 1000  // Medina (GMT +3)

    const dubaiTime = new Date(utcTime.getTime() + dubaiOffset);
    const madinaTime = new Date(utcTime.getTime() + madinaOffset);
    const newyorkTime = new Date(utcTime.getTime() + newyorkOffset);
    const brazilTime = new Date(utcTime.getTime() + brazilOffset);
    const madridTime = new Date(utcTime.getTime() + madridOffset);
    const alaskaTime = new Date(utcTime.getTime() + alaskaOffset);

    // Extract hour and minute for dubai
    const dubaiHours = dubaiTime.getUTCHours().toString().padStart(2, "0");
    const dubaiMinutes = dubaiTime.getUTCMinutes().toString().padStart(2, "0");

    // Extract hour and minute for Medina
    const madinaHours = madinaTime.getUTCHours().toString().padStart(2, "0");
    const madinaMinutes = madinaTime.getUTCMinutes().toString().padStart(2, "0");

    const newyorkHours = newyorkTime.getUTCHours().toString().padStart(2, "0");
    const newyorkMinutes = newyorkTime.getUTCMinutes().toString().padStart(2, "0");

    const brazilHours = brazilTime.getUTCHours().toString().padStart(2, "0");
    const brazilMinutes = brazilTime.getUTCMinutes().toString().padStart(2, "0");

    const madridHours = madridTime.getUTCHours().toString().padStart(2, "0");
    const madridMinutes = madridTime.getUTCMinutes().toString().padStart(2, "0");

    const alaskaHours = alaskaTime.getUTCHours().toString().padStart(2, "0");
    const alaskaMinutes = alaskaTime.getUTCMinutes().toString().padStart(2, "0");

    // Display the time for dubai and Medina in the format HH:MM
    document.getElementById("dubai").innerText = `${dubaiHours}:${dubaiMinutes}`;
    document.getElementById("madina").innerText = `${madinaHours}:${madinaMinutes}`;
    document.getElementById("newyork").innerText = `${newyorkHours}:${newyorkMinutes}`;
    document.getElementById("brazil").innerText = `${brazilHours}:${brazilMinutes}`;
    document.getElementById("madrid").innerText = `${madridHours}:${madridMinutes}`;
    document.getElementById("alaska").innerText = `${alaskaHours}:${alaskaMinutes}`;

}

// Update every minute without API delay
setInterval(updateClock, 60000);
updateClock();
//Done

//Expense tracker
let expenseName = document.getElementById("expense-name")
let amountName = document.getElementById("amount")
let dateSelect = document.getElementById("date")
let categoryName = document.getElementById("category")
let addBtn = document.getElementById("submit-add")
let tableBody = document.getElementById("table-body")
let currentEditingIndex = null; // Track which expense is being edited

document.addEventListener("DOMContentLoaded", () => {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.forEach((expense, index) => addToTable(expense, index)); // Pass index to addToTable
});

addBtn.addEventListener('click', () => {
    let expenseData = {
        name: expenseName.value,
        amount: amountName.value,
        date: dateSelect.value,
        category: categoryName.value
    };

    if (currentEditingIndex === null) {
        // Add new expense if no expense is being edited
        addToTable(expenseData);
        saveToLocalStorage(expenseData);
    } else {
        // Update existing expense
        updateExpenseInStorage(expenseData);
        updateExpenseInTable(expenseData, currentEditingIndex);
    }

    // Clear the form and reset the currentEditingIndex
    expenseName.value = "";
    amountName.value = "";
    dateSelect.value = "";
    categoryName.value = "";
    currentEditingIndex = null; // Reset editing index after update
});

function addToTable(expense, index) {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.amount}</td>
        <td>${expense.date}</td>
        <td>${expense.category}</td>
        <td><button style="padding: 7px 20px 7px 20px; border: none; color: white; background-color: rgb(44, 206, 84);" onclick="editExpense(${index})">Edit</button></td>
        <td><button style="padding: 7px 20px 7px 20px; border: none; color: white; background-color: rgb(243, 64, 19);" onclick="removeExpense(this)">Delete</button></td>
    `;

    tableBody.appendChild(row);
}

function saveToLocalStorage(expense) {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function removeExpense(button) {
    let row = button.parentElement.parentElement;
    let name = row.cells[0].textContent;

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses = expenses.filter(exp => exp.name !== name);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    row.remove();
}

function editExpense(index) {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let expenseToEdit = expenses[index];

    // Populate the form with existing data
    expenseName.value = expenseToEdit.name;
    amountName.value = expenseToEdit.amount;
    dateSelect.value = expenseToEdit.date;
    categoryName.value = expenseToEdit.category;

    // Set the currentEditingIndex to the index of the expense being edited
    currentEditingIndex = index;
}

function updateExpenseInStorage(updatedExpense) {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses[currentEditingIndex] = updatedExpense; // Update the expense at the index
    localStorage.setItem("expenses", JSON.stringify(expenses)); // Save it back to localStorage
}

function updateExpenseInTable(updatedExpense, index) {
    let rows = tableBody.querySelectorAll("tr");
    let row = rows[index];

    row.cells[0].textContent = updatedExpense.name;
    row.cells[1].textContent = updatedExpense.amount;
    row.cells[2].textContent = updatedExpense.date;
    row.cells[3].textContent = updatedExpense.category;
}

document.getElementById("search").addEventListener("input", function() {
    let mysearchQuery = this.value.toLowerCase();
    let mytableRows = document.querySelectorAll("#expense-table tbody tr");

    mytableRows.forEach(row => {
        let rowText = row.textContent.toLowerCase();
        if (rowText.includes(mysearchQuery)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

//Done

//Localstorage Project is on another js file
//Done

//Click to copy

const btn = document.querySelector(".btn");
const input = document.querySelector(".input-txt");

btn.addEventListener("click", copyText);

function copyText () {
    input.select();
    //input.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input.value);
    alert("Copied to Clipboard");
}
//Done

//Instagram post design is on another js file
//Done

//Popup random background
const openPopupBtn = document.getElementById("openPopup");
const closePopupBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const popupContent = document.querySelector(".popup-content");

// Function to generate a random hex color
function getRandomColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Open popup and set random background color
openPopupBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    popupContent.style.backgroundColor = randomColor;
    popup.classList.add("visible");
    popup.classList.remove("hidden");
});

// Close popup
closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("visible");
    setTimeout(() => {
        popup.classList.add("hidden");
    }, 300); // Matches the transition duration for smooth hiding
});

//Done

//To do list app
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { 
    getDatabase, ref, push, onValue, remove, update 
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://to-do-list-70f83-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "todo");

const inputTodo = document.getElementById("input-todo");
const submitTodo = document.getElementById("submit-todo");
const insertplaceTodo = document.getElementById("insertplace-todo");
const deleteBtn = document.getElementById("delete-btn");

// Function to render the todo list with checkboxes
function render(todoList) {
    insertplaceTodo.innerHTML = ""; // Clear the list before rendering

    Object.keys(todoList).forEach((key) => {
        const todoItem = todoList[key];

        // Create a table row
        let row = document.createElement("tr");

        // Create checkbox column
        let checkboxTd = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todoItem.checked || false;
        checkbox.addEventListener("change", function () {
            update(ref(database, `todo/${key}`), { checked: checkbox.checked });
        });

        checkboxTd.appendChild(checkbox);

        // Create text column
        let textTd = document.createElement("td");
        textTd.textContent = todoItem.text;

        // Append columns to row
        row.appendChild(textTd);
        row.appendChild(checkboxTd);


        // Append row to table
        insertplaceTodo.appendChild(row);
    });
}

// Load data from Firebase and render it
onValue(referenceInDB, function (snapshot) {
    if (snapshot.exists()) {
        render(snapshot.val());
    } else {
        insertplaceTodo.innerHTML = "<tr><td colspan='2'>No tasks found</td></tr>";
    }
});

// Submit new todo
submitTodo.addEventListener("click", function () {
    if (inputTodo.value.trim() !== "") {
        push(referenceInDB, { text: inputTodo.value, checked: false });
        inputTodo.value = "";
    }
});

// Delete all todos
deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB);
    insertplaceTodo.innerHTML = "";
});

//Done

//Chrome extension is on another js file
//Done

//Click to copy is on another js file
//Done

//Podcast room
let bulbIcon = document.getElementById("bulb")
let fullBody = document.body
let podcastText = document.getElementById("podcast")
let hostingText = document.getElementById("hosting")
let lightMsg = document.getElementById("light-message")
let podcastBg = document.getElementById("podcast-background")

let toggle = true;


bulbIcon.addEventListener('click', function(){
    if(toggle){
        
fullBody.style.backgroundColor = 'rgb(40, 40, 43)'
podcastBg.style.backgroundColor = 'rgb(40, 40, 43)'
podcastText.style.color = '#fff'
podcastText.style.textShadow = 'none';
hostingText.style.textShadow = 'none';
hostingText.style.color = '#fff'
bulbIcon.style.color = '#fff'
bulbIcon.style.textShadow = 'none';
lightMsg.style.color = '#fff'
lightMsg.textContent = lightMsg.textContent === "OFF" ? "ON" : "OFF";
    }else{

        fullBody.style.backgroundColor = ''
        podcastBg.style.backgroundColor = ''
        podcastText.style.color = ''
        podcastText.style.textShadow = '';
        hostingText.style.textShadow = '';
        hostingText.style.color = ''
        bulbIcon.style.color = ''
        bulbIcon.style.textShadow = '';
        lightMsg.style.color = ''
        lightMsg.textContent = lightMsg.textContent === "ON" ? "OFF" : "ON";

         
    }

toggle = !toggle
})
//Done

