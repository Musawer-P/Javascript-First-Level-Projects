let expenseName = document.getElementById("expense-name")
let amountName = document.getElementById("amount")
let dateSelect = document.getElementById("date")
let categoryName = document.getElementById("category")
let addBtn = document.getElementById("submit-add")
let searchBtn = document.getElementById("search")
let tableBody = document.getElementById("table-body")


document.addEventListener("DOMContentLoaded" , () =>{
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.forEach(expense => addToTable(expense));
});

addBtn.addEventListener('click', () => {
    let expenseData = {
        name : expenseName.value,
        amount : amount.value,
        date : date.value,
        category : category.value
    };
    addToTable(expenseData)
    saveToLocalStorage(expenseData)

    expenseName.value = "";
    amount.value = "";
    date.value = "";
    category.value = "";

    });

    function addToTable(expense){
        let row = document.createElement("tr");

        row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.amount}</td>
        <td>${expense.date}</td>
        <td>${expense.category}</td>
        <td><button onclick = "removeExpense(this)">Delete</button>
        `;

        tableBody.appendChild(row);
    }

    function saveToLocalStorage(expense){
        let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    function removeExpense(button){
        let row  = button.parentElement.parentElement;
        let name = row.cells[0].textContent;

        let expenses = JSON.parse(localStorage.getItem(expenses))  || [];
        expenses = expenses.filter(exp => exp.name !== name);
        localStorage.setItem("expenses", JSON.stringify(expenses));

        row.remove()
    }