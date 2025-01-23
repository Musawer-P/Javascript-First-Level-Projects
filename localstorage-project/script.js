const saveForm = document.getElementById("save-form");
const quantityInput = document.getElementById("quantity");
const itemInput = document.getElementById("item");
const priceInput = document.getElementById("price");
const tableBody = document.getElementById("table-body");

// Function to populate the table with data from localStorage
function populateTable() {
  // Clear the table body first
  tableBody.innerHTML = "";

  // Retrieve data from localStorage
  const savedQuantity = localStorage.getItem("quantity");
  const savedItem = localStorage.getItem("item");
  const savedPrice = localStorage.getItem("price");

  if (savedQuantity && savedItem && savedPrice) {
    // Create a new table row
    const newRow = document.createElement("tr");

    // Create and populate table cells
    const quantityCell = document.createElement("td");
    quantityCell.textContent = savedQuantity;

    const itemCell = document.createElement("td");
    itemCell.textContent = savedItem;

    const priceCell = document.createElement("td");
    priceCell.textContent = savedPrice;

    newRow.appendChild(quantityCell);
    newRow.appendChild(itemCell);
    newRow.appendChild(priceCell);

    tableBody.appendChild(newRow);
  } else {
    // If no data, display a message
    const noDataRow = document.createElement("tr");
    const noDataCell = document.createElement("td");
    noDataCell.setAttribute("colspan", 3);
    noDataCell.textContent = "No data found in LocalStorage.";
    noDataRow.appendChild(noDataCell);
    tableBody.appendChild(noDataRow);
  }
}

// Event listener for the form submit
saveForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Save data to localStorage
  const quantity = quantityInput.value;
  const item = itemInput.value;
  const price = priceInput.value;

  localStorage.setItem("quantity", quantity);
  localStorage.setItem("item", item);
  localStorage.setItem("price", price);

  alert("Data saved to localStorage successfully!");

  // Repopulate the table with updated data
  populateTable();
});

// Populate the table on page load
populateTable();