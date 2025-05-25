
//Emoji Face off
let fighters = ["🐉", "🐥", "🐊", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
  
  let animal = Math.floor(Math.random() * fighters.length)
  let animalTwo = Math.floor(Math.random() * fighters.length)
  stageEl.textContent = (fighters[animal] + " vs " + fighters[animalTwo])
  })

//Done