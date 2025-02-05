const Todaytime = new Date();
document.getElementById("notes-date").innerHTML = Todaytime;

const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");
const closeBtn = document.getElementById("close-btn");
searchIcon.addEventListener("click", function() {
    searchBox.classList.add("show"); // Show the search input
});
closeBtn.addEventListener("click", function() {
    searchBox.classList.remove("show"); // Hide the search input
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { 
    getDatabase,
    ref,
    push,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

const firebaseConfig = {
    databaseURL: "https://notes-app-187cd-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "notes");

const addNotes = document.getElementById("add-notes");
const notesPlace = document.getElementById("notes-place");
const datesPlace = document.getElementById("dates-place");
const notesSubmit = document.getElementById("notes-submit");
//const searchInputs = document.getElementById("search-inputs");
const deleteBtn = document.getElementById("delete-btn"); 
const notesDate = document.getElementById("notes-date")
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

//load data from firebase and render it 

onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const notes = Object.values(snapshotValues)
        render(notes)
    }else{
        notesPlace.innerHTML = "<p>No Notes Yet.</p>";
    }
})

//submit notes
notesSubmit.addEventListener("click", function(){
    const note = addNotes.value.trim();
    const date = notesDate.value.trim();
 if (note && date){
    push (referenceInDB , {
        note: note,
        date: date
    });
    addNotes.value = "";
    notesDate.value = "";

    console.log("Note added:", note, "Date:", date);
} else {
    alert("Please enter a note.");

 }
});

//Delete all Notes
deleteBtn.addEventListener("dblclick", function(){
    remove(referenceInDB);
    notesPlace.innerHTML = "<p>No Notes Yet.</p>";
})
