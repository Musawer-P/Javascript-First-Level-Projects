
const Todaytime = new Date();
document.getElementById("time").innerHTML = Todaytime;

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { 
    getDatabase,
    ref,
    push,
    onValue,
    remove,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

const firebaseConfig = {
    databaseURL: "https://notes-app-187cd-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "notes");

const addNotes = document.getElementById("add-notes");
const notesSubmit = document.getElementById("notes-submit");
const searchInputs = document.getElementById("search-inputs");
const notesPlace = document.getElementById("notes-place")
const notesDate = document.getElementById("notes-date")

function render(notesList){
    addNotes.innerHTML= ""; //clearing the list
    Object.keys(notesList).forEach((key) => {
        const notesItem = notesList [key];

        
    })
}





//load data from firebase and render it 
onValue (referenceInDB, function (snapshot){
    if(snapshot.exists()){
        render(snapshot.val());
    }else{
     notesPlace.innerHTML = "<p>No Tasks Found</p>"
    }
})

//submit notes
notesSubmit.addEventListener("click", function(){
    if (addNotes.value.trim() !== ""){
        push(referenceInDB, {text: addNotes.value, chaecked: false});
        addNotes.value = "";
    }
});

//Delete all Notes
deleteBtn.addEventListener("dblclick", function(){
    remove(referenceInDB);
    notesPlace.innerHTML = "";
})
