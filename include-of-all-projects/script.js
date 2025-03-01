document.addEventListener("DOMContentLoaded", function () {
    let sbtButton = document.getElementById("submit-btn");
    let table = document.getElementById("dataTable");

    if (!sbtButton || !table) {
        console.error("Submit button or table not found. Check your HTML IDs.");
        return;
    }

    function addToTable() {
        let nameInput = document.getElementById("name").value.trim() || "N/A";
        let phoneInput = document.getElementById("phone").value.trim() || "N/A";
        let emailInput = document.getElementById("email").value.trim() || "N/A";
        let addressInput = document.getElementById("address").value.trim() || "N/A";
        let ageInput = document.getElementById("age").value.trim() || "N/A";
        let imageInput = document.getElementById("image");

        let data = JSON.parse(localStorage.getItem("tableData")) || [];

        function saveData(imageURL = "") {
            data.push({
                name: nameInput,
                phone: phoneInput,
                email: emailInput,
                address: addressInput,
                age: ageInput,
                image: imageURL
            });

            localStorage.setItem("tableData", JSON.stringify(data));
            updateTable();

            // Clear input fields
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address").value = "";
            document.getElementById("age").value = "";
            document.getElementById("image").value = "";
        }

        if (imageInput.files.length > 0) {
            let reader = new FileReader();
            reader.onload = function (e) {
                saveData(e.target.result);
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            saveData();
        }
    }

    function updateTable() {
        let data = JSON.parse(localStorage.getItem("tableData")) || [];
        table.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Age</th>
                <th>Image</th>
            </tr>`;

        data.forEach((entry, index) => {
            let row = table.insertRow();
            row.insertCell(0).textContent = entry.name;
            row.insertCell(1).textContent = entry.phone;
            row.insertCell(2).textContent = entry.email;
            row.insertCell(3).textContent = entry.address;
            row.insertCell(4).textContent = entry.age;

            let imgCell = row.insertCell(5);
            if (entry.image) {
                let img = document.createElement("img");
                img.src = entry.image;
                img.style.width = "50px";
                img.style.height = "50px";
                imgCell.appendChild(img);
            } else {
                imgCell.textContent = "No Image";
            }

            // Add Delete Button
            let deleteCell = row.insertCell(6);
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.style.color = "red";
            deleteBtn.onclick = function () {
                deleteRow(index);
            };
            deleteCell.appendChild(deleteBtn);
        });
    }

    function deleteRow(index) {
        let data = JSON.parse(localStorage.getItem("tableData")) || [];
        data.splice(index, 1);
        localStorage.setItem("tableData", JSON.stringify(data));
        updateTable();
    }

    // Load stored data on page load
    updateTable();

    // Attach event listener to the button
    sbtButton.addEventListener("click", addToTable);
});
