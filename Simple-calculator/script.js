// Function to perform the operation based on the clicked button
function performOperation(operator) {
    // Get the input values
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    let result;

    // Perform the operation based on the operator
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 0;
            break;
    }

    // Display the result
    document.getElementById("result").textContent = result;

    // Clear the inputs after the operation
    clearInputs();
}

// Function to clear the input fields
function clearInputs() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
