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
const themeToggleBtn = document.getElementById("notes-theme-toggle");
const notesDate = document.getElementById("notes-date");
const notesSubmit = document.getElementById("notes-submit");
const deleteBtn = document.getElementById("notes-delete-btn");
const searchIcon = document.getElementById("notes-search-icon");
const searchBox = document.getElementById("notes-search-box");
const searchInput = document.getElementById("notes-search-input");
const closeBtn = document.getElementById("notes-close-btn");

let allNotes = []; // Store all notes for searching

// Function to get current date and time (YYYY-MM-DD HH:MM:SS)
function getFormattedDateTime() {
    const now = new Date();
    return now.toISOString().split("T")[0] + " " + now.toLocaleTimeString();
}

// Update date-time display every second
function updateDateTimeDisplay() {
    notesDate.textContent = getFormattedDateTime(); // Show current time in UI
}
setInterval(updateDateTimeDisplay, 1000); // Update time every second

// Function to render notes with date-time
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

    notesPlace.innerHTML = listNotes; // Insert all notes into the container
}



// Fetch notes from Firebase
onValue(referenceInDB, (snapshot) => {
    if (snapshot.exists()) {
        allNotes = Object.values(snapshot.val()); // Store all notes
        render(allNotes);
    } else {
        notesPlace.innerHTML = "<p>No Notes Yet.</p>";
        allNotes = []; // Reset stored notes
    }
});

// Add note event
notesSubmit.addEventListener("click", function (event) {
    event.preventDefault(); 

    const note = addNotes.value.trim();
    const date = notesDate.textContent; // Use displayed time

    if (note) {
        push(referenceInDB, { note, date })
            .then(() => {
                addNotes.value = "";
                console.log("Note added:", note, "Date:", date);
            })
            .catch((error) => {
                console.error("Error adding note:", error);
            });
    } else {
        alert("Please enter a note.");
    }
});

// Delete all notes on double-click
deleteBtn.addEventListener("dblclick", function () {
    remove(referenceInDB)
        .then(() => {
            notesPlace.innerHTML = "<p style='color: blueviolet;' >No Notes Yet.</p>";
        })
        .catch((error) => { 
            console.error("Error deleting notes:", error);
        });
});

// Initialize time display
updateDateTimeDisplay();

/* SEARCH FUNCTIONALITY */
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    // Filter notes based on search term
    const filteredNotes = allNotes.filter(noteObj =>
        noteObj.note.toLowerCase().includes(searchTerm) ||
        noteObj.date.toLowerCase().includes(searchTerm)
    );

    render(filteredNotes); // Display only matching notes
});

// Show search box
searchIcon.addEventListener("click", function () {
    searchBox.classList.add("show");
    searchInput.focus(); // Focus on the input field
});

// Hide search box
closeBtn.addEventListener("click", function () {
    searchBox.classList.remove("show");
    searchInput.value = ""; // Clear input
    render(allNotes); // Show all notes again
});

// THEME TOGGLE FUNCTIONALITY
themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggleBtn.innerHTML = "🌙"; // Change to sun icon
    } else {
        localStorage.setItem("theme", "light");
        themeToggleBtn.innerHTML = "☀️"; // Change to moon icon
    }
});

// Apply saved theme and correct icon on page load
window.addEventListener("load", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleBtn.innerHTML = "🌙"; // Show sun icon in dark mode
    } else {
        themeToggleBtn.innerHTML = "☀️"; // Show moon icon in light mode
    }
});
