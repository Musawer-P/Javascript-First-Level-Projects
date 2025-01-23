let saveForm = document.getElementById("save-form");
let quantityInput = document.getElementById("quantity");
let itemInput = document.getElementById("item");
let priceInput = document.getElementById("price");

saveForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const quantity = quantityInput.value;
    const item = itemInput.value;
    const price = priceInput.value;

    localStorage.setItem("quantity", quantity);
    localStorage.setItem("item", item);
    localStorage.setItem("price", price);
    
     alert('Data saved to localStorage successfully!');
});