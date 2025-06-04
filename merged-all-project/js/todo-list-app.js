
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
const submitTodo = document.getElementById("todo-submit");
const insertplaceTodo = document.getElementById("insertplace-todo");
const deleteBtn = document.getElementById("todo-delete-btn");

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