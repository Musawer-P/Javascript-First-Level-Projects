let sbtButton = document.getElementById("submit-btn");

sbtButton.addEventListener("click", addToTable); // Add event listener to button


function addToTable() {
    let nameInput = document.getElementById("name").value;
    let phoneInput = document.getElementById("phone").value;
    let emailInput = document.getElementById("email").value;
    let addressInput = document.getElementById("address").value;
    let ageInput = document.getElementById("age").value;



  

    if (!nameInput && !phoneInput && !emailInput && !addressInput && !ageInput) return;

    let data = JSON.parse(localStorage.getItem("tableData")) || [];

    // Push the data as an array to maintain the structure
    data.push([
        nameInput || "",   // If empty, store as ""
        phoneInput || "",
        emailInput || "",
        addressInput || "",
        ageInput || ""
    ]);
    
    localStorage.setItem("tableData", JSON.stringify(data));

    updateTable();
    
    // Clear the input fields after adding the data
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("age").value = "";



   
}
function updateTable() {
    let table = document.getElementById("dataTable");
    table.innerHTML = "<tr><th>Name</th><th>Phone</th><th>Email</th><th>Address</th><th>Age</th><th>Actions</th></tr>";

    let data = JSON.parse(localStorage.getItem("tableData")) || [];
    
    data.forEach((entry, index) => {  // ✅ Added index parameter
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

        cell6.appendChild(deleteButton);
    });
}

function deleteRow(index) {
    let data = JSON.parse(localStorage.getItem("tableData")) || [];
    data.splice(index, 1);  // ✅ Remove only the specific row
    localStorage.setItem("tableData", JSON.stringify(data));
    updateTable();  // ✅ Update the table to reflect changes
}

window.onload = updateTable; // Load the table when the page is loaded

