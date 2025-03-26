const mainModal = document.getElementById("main")
const popupModal = document.getElementById("popup")
const popupText = document.getElementById("inside-text")
const loginForm = document.getElementById("login-form")
const closeBtn = document.getElementById("close-btn")
const emailI = document.getElementById("email")
const acceptBtn = document.getElementById("accept-btn")
const declineBtn = document.getElementById("decline-btn")
const button = document.getElementById("button")

setTimeout(function(){
popupModal.style.display = 'block'
},1500)

closeBtn.addEventListener('click', function(){
    popupModal.style.display = 'none'
})


loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    popupText.innerHTML = `<div class="modal-inner-loading">
        <img src="loading.gif" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`;

    setTimeout(function() {
        document.getElementById('uploadText').innerText = `Making the sale...`; 
    }, 1500); 

    setTimeout(function(){
        document.getElementById('popup').innerHTML = `<h2 style = "color:white;">Thanks <span class="modal-display-name">${fullName}</span>, you easy target! </h2>
        <p style = "color:white;">We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="pirate.gif">
        </div>`; 
        closeBtn.disabled = false
    },3000)

    const formData = new FormData(loginForm)
const fullName = formData.get('name')
});

declineBtn.addEventListener('mouseenter', function(){
    button.classList.toggle('reverse')
})