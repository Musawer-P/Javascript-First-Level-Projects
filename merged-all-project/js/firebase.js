// ✅ firebase.js (shared config file)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const notesApp = initializeApp({
    databaseURL: "https://notes-app-187cd-default-rtdb.firebaseio.com/",
}, "notes");

const todoApp = initializeApp({
    databaseURL: "https://to-do-list-70f83-default-rtdb.firebaseio.com/",
}, "todo");

export const notesDB = getDatabase(notesApp);
export const todoDB = getDatabase(todoApp);
