
//Basketball counter app 
//first section
let section_one_button_one = document.getElementById("button_submit_one-basket")
let section_one_button_two = document.getElementById("button_submit_two-basket")
let section_one_button_three = document.getElementById("button_submit_three-basket")
//second section 
let section_two_button_one = document.getElementById("button_submit_one_two-basket")
let section_two_button_two = document.getElementById("button_submit_two_two-basket")
let section_two_button_three = document.getElementById("button_submit_three_two-basket")

let section_one_number = document.getElementById("first_section_number")
//second section 
let section_two_number = document.getElementById("second_section_number")


let section_one_increase = 0
//second section 
let section_two_increase = 0

//first section
function button_one() {
    section_one_increase += 1
    section_one_number.textContent = section_one_increase
    console.log("hi")
}


function button_two() {
    section_one_increase += 2
    section_one_number.textContent = section_one_increase
    console.log("hi")
}


function button_three() {
    section_one_increase += 3
    section_one_number.textContent = section_one_increase
    console.log("hi")
}

//second section 

function button_one_two() {
    section_two_increase += 1
    section_two_number.textContent = section_two_increase
    console.log("hi")
}


function button_two_two() {
    section_two_increase += 2
    section_two_number.textContent = section_two_increase
    console.log("hi")
}


function button_three_two() {
    section_two_increase += 3
    section_two_number.textContent = section_two_increase
    console.log("hi")
}


//Done