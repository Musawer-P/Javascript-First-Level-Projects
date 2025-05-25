//Podcast room
let bulbIcon = document.getElementById("bulb")
let fullBody = document.body
let podcastText = document.getElementById("podcast")
let hostingText = document.getElementById("hosting")
let lightMsg = document.getElementById("light-message")
let podcastBg = document.getElementById("podcast-background")

let toggle = true;


bulbIcon.addEventListener('click', function(){
    if(toggle){
        
fullBody.style.backgroundColor = 'rgb(40, 40, 43)'
podcastBg.style.backgroundColor = 'rgb(40, 40, 43)'
podcastText.style.color = '#fff'
podcastText.style.textShadow = 'none';
hostingText.style.textShadow = 'none';
hostingText.style.color = '#fff'
bulbIcon.style.color = '#fff'
bulbIcon.style.textShadow = 'none';
lightMsg.style.color = '#fff'
lightMsg.textContent = lightMsg.textContent === "OFF" ? "ON" : "OFF";
    }else{

        fullBody.style.backgroundColor = ''
        podcastBg.style.backgroundColor = ''
        podcastText.style.color = ''
        podcastText.style.textShadow = '';
        hostingText.style.textShadow = '';
        hostingText.style.color = ''
        bulbIcon.style.color = ''
        bulbIcon.style.textShadow = '';
        lightMsg.style.color = ''
        lightMsg.textContent = lightMsg.textContent === "ON" ? "OFF" : "ON";

         
    }

toggle = !toggle
})
//Done