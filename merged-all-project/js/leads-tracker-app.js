import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js"
 import { getDatabase,
         ref,
         push,
         onValue,
         remove } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-4ffb0-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("leads-tracker-input-el")
const inputBtn = document.getElementById("leads-tracker-input-btn")
const ulEl = document.getElementById("leads-tracker-ul-el")
const deleteBtn = document.getElementById("leads-tracker-delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})

deleteBtn.addEventListener("dblclick", function() {
    remove(referenceInDB)
    ulEl.innerHTML = ""
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = "" 
})