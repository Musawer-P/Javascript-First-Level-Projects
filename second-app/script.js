import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { 
    getDatabase,
    ref,
    push,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js"; 

const firebaseConfig = {
    
    databaseURL: "https://notes-app-187cd-default-rtdb.firebaseio.com/",

};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "notes");

const addNotes = document.getElementById("add-notes");
const notesPlace = document.getElementById("notes-place");
const datesPlace = document.getElementById("dates-place");
const notesSubmit = document.getElementById("notes-submit");
const deleteBtn = document.getElementById("delete-btn");
const notesDate = document.getElementById("notes-date");
const themeToggleBtn = document.getElementById("theme-toggle");

function render(notes) {
    let listNotes = "";
    let listDates = "";
    notes.forEach((noteObj) => {
        listNotes += `
            <div class="note-item">
                <p class="note-text">${noteObj.note}</p>
            </div>
        `;
        listDates += `
            <div class="note-item">
                <p class="note-date">${noteObj.date}</p>
            </div>
        `;
    });

    notesPlace.innerHTML = listNotes;
    datesPlace.innerHTML = listDates;
}

onValue(referenceInDB, (snapshot) => {
    if (snapshot.exists()) {
        const notes = Object.values(snapshot.val());
        render(notes);
    } else {
        notesPlace.innerHTML = "<p>No Notes Yet.</p>";
    }
});

notesSubmit.addEventListener("click", function (event) {
    event.preventDefault(); 

    const note = addNotes.value.trim();
    const date = notesDate.value.trim();

    if (note && date) {
        push(referenceInDB, { note, date })
            .then(() => {
                addNotes.value = "";
                notesDate.value = "";
                console.log("Note added:", note, "Date:", date);
            })
            .catch((error) => {
                console.error("Error adding note:", error);
            });
    } else {
        alert("Please enter a note and select a date.");
    }
});

deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB)
        .then(() => {
            notesPlace.innerHTML = "<p>No Notes Yet.</p>";
        })
        .catch((error) => {
            console.error("Error deleting notes:", error);
        });
});

const Todaytime = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
notesDate.value = Todaytime;

const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");
const closeBtn = document.getElementById("close-btn");

searchIcon.addEventListener("click", function () {
    searchBox.classList.add("show"); // Show the search input
});
closeBtn.addEventListener("click", function () {
    searchBox.classList.remove("show"); // Hide the search input
});
