
// ✅ note.js
import { ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";
import { notesDB } from "./firebase.js";

const referenceInDB = ref(notesDB, "notes");

const addNotes = document.getElementById("add-notes");
const notesPlace = document.getElementById("notes-place");
const themeToggleBtn = document.getElementById("notes-theme-toggle");
const notesDate = document.getElementById("notes-date");
const notesSubmit = document.getElementById("notes-submit");
const deleteBtn = document.getElementById("notes-delete-btn");
const searchIcon = document.getElementById("notes-search-icon");
const searchBox = document.getElementById("notes-search-box");
const searchInput = document.getElementById("notes-search-input");
const closeBtn = document.getElementById("notes-close-btn");

let allNotes = [];

function getFormattedDateTime() {
    const now = new Date();
    return now.toISOString().split("T")[0] + " " + now.toLocaleTimeString();
}

function updateDateTimeDisplay() {
    notesDate.textContent = getFormattedDateTime();
}
setInterval(updateDateTimeDisplay, 1000);

function render(notes) {
    let listNotes = "";
    notes.forEach((noteObj) => {
        listNotes += `
            <div class="note-card">
                <p class="note-text">${noteObj.note}</p>
                <p class="note-date">${noteObj.date}</p>
            </div>
        `;
    });
    notesPlace.innerHTML = listNotes;
}

onValue(referenceInDB, (snapshot) => {
    if (snapshot.exists()) {
        allNotes = Object.values(snapshot.val());
        render(allNotes);
    } else {
        notesPlace.innerHTML = "<p style='color: white; margin-left: 5px;' >No Notes Yet.</p>";
        allNotes = [];
    }
});

notesSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    const note = addNotes.value.trim();
    const date = notesDate.textContent;
    if (note) {
        push(referenceInDB, { note, date })
            .then(() => { addNotes.value = ""; })
            .catch((error) => { console.error("Error adding note:", error); });
    } else {
        alert("Please enter a note.");
    }
});

deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB)
        .then(() => {
            notesPlace.innerHTML = "<p style='color: white;'>No Notes Yet.</p>";
        })
        .catch((error) => { console.error("Error deleting notes:", error); });
});

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredNotes = allNotes.filter(noteObj =>
        noteObj.note.toLowerCase().includes(searchTerm) ||
        noteObj.date.toLowerCase().includes(searchTerm)
    );
    render(filteredNotes);
});

searchIcon.addEventListener("click", function () {
    searchBox.classList.add("show");
    searchInput.focus();
});

closeBtn.addEventListener("click", function () {
    searchBox.classList.remove("show");
    searchInput.value = "";
    render(allNotes);
});

themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggleBtn.innerHTML = isDark ? "🌙" : "☀️";
});

window.addEventListener("load", function () {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    document.body.classList.toggle("dark-mode", isDark);
    themeToggleBtn.innerHTML = isDark ? "🌙" : "☀️";
});
