// Get elements
const popup = document.getElementById("popup");
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const closePopupTextButton = document.getElementById("closePopupButton");
const resetButton = document.getElementById("resetButton");
const inputField = document.getElementById("inputField");

// Open popup with transition
openPopupButton.addEventListener("click", () => {
    popup.classList.add("show");
});

// Close popup (with "X" or button) with transition
closePopupButton.addEventListener("click", () => {
    popup.classList.remove("show");
});

closePopupTextButton.addEventListener("click", () => {
    popup.classList.remove("show");
});

// Reset input field when "Reset" button is clicked
resetButton.addEventListener("click", () => {
    inputField.value = ''; // Clear the input field
});
