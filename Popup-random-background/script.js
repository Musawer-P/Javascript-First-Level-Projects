const openPopupBtn = document.getElementById("openPopup");
const closePopupBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const popupContent = document.querySelector(".popup-content");

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
    popup.classList.remove("hidden");
});

// Close popup
closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("visible");
    setTimeout(() => {
        popup.classList.add("hidden");
    }, 300); // Matches the transition duration for smooth hiding
});
