document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".e-cart-item");
    const subtotalDisplay = document.querySelector("#total-p");

    function calculateSubtotal() {
      let subtotal = 0;
      cartItems.forEach((item) => {
        const price = parseFloat(item.querySelector("#cart-p").textContent.replace("$", ""));
        const quantity = parseInt(item.querySelector("input[type='number']").value);
        subtotal += price * quantity;
      });
      subtotalDisplay.innerHTML = `<strong id="strong-p">Subtotal:</strong> $${subtotal.toFixed(2)}`;
    }

    cartItems.forEach((item) => {
      const minusBtn = item.querySelector("#min-btn");
      const plusBtn = item.querySelector("#sub-btn");
      const quantityInput = item.querySelector("input[type='number']");

      minusBtn.addEventListener("click", () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
          quantityInput.value = value - 1;
          calculateSubtotal();
        }
      });

      plusBtn.addEventListener("click", () => {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
        calculateSubtotal();
      });

      quantityInput.addEventListener("change", () => {
        if (parseInt(quantityInput.value) < 1) quantityInput.value = 1;
        calculateSubtotal();
      });
    });

    calculateSubtotal(); 
  });