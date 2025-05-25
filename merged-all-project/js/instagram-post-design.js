let messageIcon = document.getElementById("message-icon")
let sendIcon = document.getElementById("send-icon")
let likeSection = document.getElementById("like-section");
let likeSectionTwo = document.getElementById("like-section-two");
let likeSectionThree = document.getElementById("like-section-three");
let loveIcon = document.getElementById("love-icon");
let loveIconTwo = document.getElementById("love-icon-two");
let loveIconThree = document.getElementById("love-icon-three");

let count = 21.492;
loveIcon.addEventListener('click', () => {
    if (loveIcon.classList.contains("far")) {
        // Change to filled heart
        loveIcon.classList.remove("far");
        loveIcon.classList.add("fas");
        loveIcon.style.color = "red";
        count += 0.001; // Increase count
    } else {
        // Change back to outlined heart
        loveIcon.classList.remove("fas");
        loveIcon.classList.add("far");
        loveIcon.style.color = ""; // Reset color
        count -= 0.001; // Decrease count
    }
    likeSection.textContent = count.toFixed(3) + " likes" ; // Update displayed count
});

let countTwo = 12.502;
loveIconTwo.addEventListener('click', () => {
    if (loveIconTwo.classList.contains("far")) {
        // Change to filled heart
        loveIconTwo.classList.remove("far");
        loveIconTwo.classList.add("fas");
        loveIconTwo.style.color = "red";
        countTwo += 0.001; // Increase count
    } else {
        // Change back to outlined heart
        loveIconTwo.classList.remove("fas");
        loveIconTwo.classList.add("far");
        loveIconTwo.style.color = ""; // Reset color
        countTwo -= 0.001; // Decrease count
    }
    likeSectionTwo.textContent = countTwo.toFixed(3) + " likes" ; // Update displayed count
});

let countThree = 15.137;
loveIconThree.addEventListener('click', () => {
    if (loveIconThree.classList.contains("far")) {
        // Change to filled heart
        loveIconThree.classList.remove("far");
        loveIconThree.classList.add("fas");
        loveIconThree.style.color = "red";
        countThree += 0.001; // Increase count
    } else {
        // Change back to outlined heart
        loveIconThree.classList.remove("fas");
        loveIconThree.classList.add("far");
        loveIconThree.style.color = ""; // Reset color
        countThree -= 0.001; // Decrease count
    }
    likeSectionThree.textContent = countThree.toFixed(3) + " likes" ; // Update displayed count
});



messageIcon.addEventListener('hover', () => {

});