

//Random Password Generator
const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[",
    "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];
const passwordLength = 12;

function generateRandomPassword(){
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];
    }
    return randomPassword;
}

function displayPasswords(){
    document.getElementById("password").value = generateRandomPassword();
}


function getRandomColor() {
    let letters = "CDEF89"; // Possible hex characters
    let color = "#";
    for (let i = 0; i < 6; i++) { // Loop 6 times for a 6-character hex code
        color += letters[Math.floor(Math.random() * letters.length)]; // Pick a random letter/number
    }
    return color;
}

function changeColor() {
    document.body.style.backgroundColor = getRandomColor();
}


let sbtButton = document.getElementById("submit-btn");

sbtButton.addEventListener("click", addToTable); // Add event listener to button


function addToTable() {
    let nameInput = document.getElementById("name").value;
    let phoneInput = document.getElementById("phone").value;
    let emailInput = document.getElementById("email").value;
    let addressInput = document.getElementById("address").value;
    let ageInput = document.getElementById("age").value;
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;




  

    if (!nameInput && !phoneInput && !emailInput && !addressInput && !ageInput && !usernameInput && !passwordInput) return;

    let data = JSON.parse(localStorage.getItem("tableData")) || [];

    // Push the data as an array to maintain the structure
    data.push([
        nameInput || "",   // If empty, store as ""
        phoneInput || "",
        emailInput || "",
        addressInput || "",
        ageInput || "",
        usernameInput || "",
        passwordInput || ""
    ]);
    
    localStorage.setItem("tableData", JSON.stringify(data));

    updateTable();
    
    // Clear the input fields after adding the data
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("age").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function updateTable() {
    let table = document.getElementById("dataTable");
    table.innerHTML = "<tr><th>Name</th><th>Phone</th><th>Email</th><th>Address</th><th>Age</th><th>Username</th><th>Password</th><th>Actions</th><th>Meeting Deadline</th></tr>";

    let data = JSON.parse(localStorage.getItem("tableData")) || [];
    
    data.forEach((entry, index) => {  //  Added index parameter
        let row = table.insertRow();

        let cell1 = row.insertCell(0);
        cell1.textContent = entry[0];

        let cell2 = row.insertCell(1);
        cell2.textContent = entry[1];

        let cell3 = row.insertCell(2);
        cell3.textContent = entry[2];

        let cell4 = row.insertCell(3);
        cell4.textContent = entry[3];

        let cell5 = row.insertCell(4);
        cell5.textContent = entry[4];

        let cell6 = row.insertCell(5);
        cell6.textContent = entry[5];
        
        let cell7 = row.insertCell(6);
        cell7.textContent = entry[6];

        let cell8 = row.insertCell(7);
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.color = "white";
        deleteButton.style.backgroundColor = "red";
        deleteButton.style.border = "none";
        deleteButton.style.padding = "5px 10px";
        deleteButton.style.cursor = "pointer";

        // ✅ Pass index correctly to deleteRow function
        deleteButton.addEventListener("click", function () {
            deleteRow(index);
        });

        cell8.appendChild(deleteButton);

        let cell9 = row.insertCell(8);

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        let savedState = localStorage.getItem('checkboxState');
        if (savedState !== null){
            checkbox.checked = JSON.parse(savedState);
        }
        checkbox.addEventListener("change", function(){
            localStorage.setItem('checkboxState', JSON.stringify(checkbox.checked));

        });

        cell9.appendChild(checkbox);
    });
}

function deleteRow(index) {
    let data = JSON.parse(localStorage.getItem("tableData")) || [];
    data.splice(index, 1);  //  Remove only the specific row
    localStorage.setItem("tableData", JSON.stringify(data));
    updateTable();  //  Update the table to reflect changes
}

window.onload = updateTable; // Load the table when the page is loaded

