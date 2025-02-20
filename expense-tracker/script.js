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
