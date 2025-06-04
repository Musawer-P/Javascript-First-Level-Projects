
//Popup random background
const openPopupBtn = document.getElementById("openPopup-random");
const closePopupBtn = document.getElementById("closePopup-random");
const popup = document.getElementById("popup-random");
const popupContent = document.querySelector(".popup-content-random");

// Function to generate a random hex color
function getRandomColor() {
    const characters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Open popup and set random background color
openPopupBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    popupContent.style.backgroundColor = randomColor;
    popup.classList.add("visible");
    popup.classList.remove("hidden-random");
});

// Close popup
closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("visible");
    setTimeout(() => {
        popup.classList.add("hidden-random");
    }, 300); // Matches the transition duration for smooth hiding
});
//Done
