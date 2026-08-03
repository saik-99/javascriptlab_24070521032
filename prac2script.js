/**
 * Calculates the total bill and displays the result.
 * Triggered by the 'Generate Bill' button in prac2.html.
 */
function calculateBill() {
    // 1. Get references to the input elements
    const nameInput = document.getElementById('name');
    const productInput = document.getElementById('product');
    const priceInput = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
    const outputDiv = document.getElementById('output');

    // 2. Extract values
    const name = nameInput.value.trim();
    const product = productInput.value.trim();
    const priceStr = priceInput.value;
    const quantityStr = quantityInput.value;

    // 3. Validation
    if (!name || !product) {
        outputDiv.innerHTML = "<p style='color: red;'>Please enter both Customer Name and Product Name.</p>";
        return;
    }

    if (priceStr === '' || quantityStr === '') {
        outputDiv.innerHTML = "<p style='color: red;'>Please enter valid Price and Quantity.</p>";
        return;
    }

    const price = parseFloat(priceStr);
    const quantity = parseFloat(quantityStr);

    if (isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0) {
        outputDiv.innerHTML = "<p style='color: red;'>Price and Quantity must be valid positive numbers.</p>";
        return;
    }

    // 4. Calculation
    const total = price * quantity;

    // 5. Format the output
    // Using toFixed(2) ensures 2 decimal places for currency
    const formattedTotal = total.toFixed(2);

    // 6. Display the result in the output div
    const currentDate = new Date().toLocaleDateString();
    
    outputDiv.innerHTML = `
        <h3>Bill Summary</h3>
        <p><strong>Date:</strong> ${currentDate}</p>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Price per Item:</strong> $${price.toFixed(2)}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <hr>
        <p style="font-size: 1.2em; color: #2c3e50;"><strong>Total Amount: $${formattedTotal}</strong></p>
    `;

    // Optional: Log to console for debugging
    console.log(`Bill generated for ${name}: $${formattedTotal}`);
}
