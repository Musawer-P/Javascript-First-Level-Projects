import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js"
 import { getDatabase,
         ref,
         push,
         onValue,
         remove } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: ""
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "todo")

const inputTodo = document.getElementById("input-todo")
const submitTodo = document.getElementById("submit-todo")
const insertplaceTodo = document.getElementById("insertplace-todo")

function render(todo){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `
        <li>
             <a target='_blank' href = '${todo[i]}'>
             ${todo[i]}
             </a>
        </li>
        `
    }

    insertplaceTodo.innerHTML = listItems

}

onValue(referenceInDB,function (snapshot){
    const snapshotDoesExist = snapshot.exists()
    if(snapshotDoesExist){
        const snapshotValues = snapshot.val()
        const todo = Object.values(snapshotValues)
        render(todo)
    }
})

deleteBtn.addEventListenere("dblclick", function(){
    remove(referenceInDB)
    insertplaceTodo.innerHTML = ""
})

submit-todo.addEventListenere("click" , function(){
    push(referenceInDB,insertplaceTodo.value)
    insertplaceTodo.value = ""
})