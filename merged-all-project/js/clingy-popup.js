  const popupModal = document.getElementById("popup");
  const popupText = document.getElementById("inside-text");
  const loginForm = document.getElementById("login-form");
  const closeBtn = document.getElementById("close-btn");
  const declineBtn = document.getElementById("decline-btn");
  const clingyButton = document.getElementById("clingy-button");

  // Show popup after 1.5 seconds
  setTimeout(function () {
    popupModal.style.display = "block";
  }, 1500);

  // Close button logic
  closeBtn.addEventListener("click", function () {
    popupModal.style.display = "none";
  });

  // Submit form logic
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const fullName = formData.get("name");

    popupText.innerHTML = `
      <div class="modal-inner-loading">
        <img src="images/loading.gif" class="loading">
        <p id="uploadText">Uploading your data to the dark web...</p>
      </div>`;

    setTimeout(function () {
      document.getElementById("uploadText").innerText = "Making the sale...";
    }, 1500);

    setTimeout(function () {
      document.getElementById("popup").innerHTML = `
        <h2 style="color:white;">Thanks <span class="modal-display-name">${fullName}</span>, you easy target!</h2>
        <p style="color:white;">We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
          <img src="images/pirate.gif">
        </div>`;
      closeBtn.disabled = false;
    }, 3000);
  });

  // Decline button moves away on hover
  declineBtn.addEventListener("mouseenter", function () {
    clingyButton.classList.toggle("reverse");
  });
