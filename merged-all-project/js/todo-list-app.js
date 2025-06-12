

// ✅ todolist.js
import { ref, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
import { todoDB } from "./firebase.js";

const referenceInDB = ref(todoDB, "todo");

const inputTodo = document.getElementById("input-todo");
const submitTodo = document.getElementById("todo-submit");
const insertplaceTodo = document.getElementById("insertplace-todo");
const deleteBtn = document.getElementById("todo-delete-btn");

function render(todoList) {
    insertplaceTodo.innerHTML = "";
    Object.keys(todoList).forEach((key) => {
        const todoItem = todoList[key];

        let row = document.createElement("tr");

        let checkboxTd = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todoItem.checked || false;
        checkbox.addEventListener("change", function () {
            update(ref(todoDB, `todo/${key}`), { checked: checkbox.checked });
        });

        checkboxTd.appendChild(checkbox);

        let textTd = document.createElement("td");
        textTd.textContent = todoItem.text;

        row.appendChild(textTd);
        row.appendChild(checkboxTd);

        insertplaceTodo.appendChild(row);
    });
}

onValue(referenceInDB, function (snapshot) {
    if (snapshot.exists()) {
        render(snapshot.val());
    } else {
        insertplaceTodo.innerHTML = "<tr><td style='padding-top:15px;' colspan='2'>No tasks found</td></tr>";
    }
});

submitTodo.addEventListener("click", function () {
    if (inputTodo.value.trim() !== "") {
        push(referenceInDB, { text: inputTodo.value, checked: false });
        inputTodo.value = "";
    }
});

deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB);
    insertplaceTodo.innerHTML = "";
});
