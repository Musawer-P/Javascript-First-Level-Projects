  document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.getElementById("quantity");
  const itemInput = document.getElementById("item");
  const priceInput = document.getElementById("price");
  const tableBody = document.getElementById("ls-table-body");
  const submitBtn = document.getElementById("ls-submit");
  const deleteBtn = document.getElementById("ls-submit-delete");

  // Function to get saved data from localStorage
  function getCartData() {
    return JSON.parse(localStorage.getItem("cartData")) || [];
  }

  // Function to save data to localStorage
  function saveCartData(data) {
    localStorage.setItem("cartData", JSON.stringify(data));
  }

  // Function to populate the table
  function populateTable() {
    tableBody.innerHTML = "";

    const savedData = getCartData();

    if (savedData.length > 0) {
      savedData.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.quantity}</td>
          <td>${item.item}</td>
          <td>${item.price}</td>
        `;
        tableBody.appendChild(row);
      });
    } else {
      const noDataRow = document.createElement("tr");
      noDataRow.innerHTML = `<td colspan="3">No data found in LocalStorage.</td>`;
      tableBody.appendChild(noDataRow);
    }
  }

  // Save to localStorage on Submit
  submitBtn.addEventListener("click", () => {
    const quantity = quantityInput.value.trim();
    const item = itemInput.value.trim();
    const price = priceInput.value.trim();

    if (quantity && item && price) {
      const newItem = { quantity, item, price };
      const cartData = getCartData();
      cartData.push(newItem);
      saveCartData(cartData);

      quantityInput.value = "";
      itemInput.value = "";
      priceInput.value = "";

      populateTable();
    } else {
      alert("Please fill in all fields!");
    }
  });

  // Delete all data
  deleteBtn.addEventListener("click", () => {
    localStorage.removeItem("cartData");
    populateTable();
    alert("All data deleted.");
  });

  // On page load
  populateTable();
});
