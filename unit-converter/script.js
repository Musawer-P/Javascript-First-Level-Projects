 let buttonConvert = document.getElementById("button-convert")
 let inputMain = document.getElementById("input-main")
 let lenghtEl = document.getElementById("lenght-el")
 let volumeEl = document.getElementById("volume-el")
 let massEl = document.getElementById("mass-el")


 const meterToFeet = 3.281
 const literToGallon = 0.264
 const kiloToPound = 2.204

 buttonConvert.addEventListener("click" , function(){
    let baseValue = inputMain.value

    lenghtEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet.toFixed(3)} feet`
    volumeEl.textContent = `${baseValue} volume = ${baseValue * literToGallon.toFixed(3)} gallon`
    massEl.textContent = `${baseValue} mass = ${baseValue * kiloToPound.toFixed(3)} pound`

 })