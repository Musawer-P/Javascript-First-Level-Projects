let generateEl = document.getElementById("generate-el")
function generate(){
    let random  = Math.floor(Math.random()*10)+1;
    generateEl.innerText = random
    
}
