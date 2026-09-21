# Experiment No. 5

**Student Name:** sai konde
**PRN:** 24070521032

---

## Experiment Title
Apply Array Methods and Object Handling in JavaScript

---

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Task 5.1 — Shopping Cart Calculator

### Aim
Demonstrate JavaScript array methods — `forEach`, `map`, `filter`, `reduce` — using a Shopping Cart Calculator with product objects.

### File Path
`Task5/5.1/index.html`

### Program Code

#### `5.1/index.html`
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Shopping Cart</title>
  <style>
    body { font-family: Arial; background: #f2f2f2; }
    .container {
      width: 800px; margin: 30px auto; background: white;
      padding: 20px; border-radius: 10px; box-shadow: 0 0 10px gray;
    }
    input  { padding: 8px; width: 150px; margin: 5px; }
    button { padding: 10px; cursor: pointer; }
    table  { width: 100%; border-collapse: collapse; margin-top: 20px; }
    table, th, td { border: 1px solid black; }
    th { background: #007bff; color: white; }
    th, td { padding: 10px; text-align: center; }
    .result { margin-top: 20px; font-size: 18px; }
  </style>
</head>
<body>
  <h2>Shopping Cart Calculator</h2>
  <input type="text"   id="name"  placeholder="Product Name">
  <input type="number" id="price" placeholder="Price">
  <input type="number" id="qty"   placeholder="Quantity">

  <button onclick="addProduct()">Add Product</button>

  <table id="cartTable">
    <tr>
      <th>ID</th><th>Product</th><th>Price</th>
      <th>Quantity</th><th>Total</th>
    </tr>
  </table>

  <div class="result" id="result">
    <h3>Item Summary</h3>
    <ul id="summary"></ul>
    <h3>Expensive Products (Price > 1000)</h3>
    <ul id="expensive"></ul>
  </div>

  <script>
    let cart = [];

    function addProduct() {
      let name  = document.getElementById("name").value;
      let price = parseFloat(document.getElementById("price").value);
      let qty   = parseInt(document.getElementById("qty").value);

      if (name == "" || isNaN(price) || isNaN(qty)) {
        alert("Please enter all fields");
        return;
      }

      let product = { id: cart.length + 1, name: name, price: price, quantity: qty };
      cart.push(product);
      displayCart();

      document.getElementById("name").value  = "";
      document.getElementById("price").value = "";
      document.getElementById("qty").value   = "";
    }

    function displayCart() {
      let table = document.getElementById("cartTable");
      table.innerHTML = `
        <tr>
          <th>ID</th><th>Product</th><th>Price</th>
          <th>Quantity</th><th>Total</th>
        </tr>`;

      // forEach — renders each cart item row
      cart.forEach(function (item) {
        table.innerHTML += `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
          </tr>`;
      });

      // reduce — calculates grand total
      let total = cart.reduce(function (sum, item) {
        return sum + (item.price * item.quantity);
      }, 0);

      let discount = 0;
      if      (total >= 50000) discount = total * 0.20;
      else if (total >= 20000) discount = total * 0.10;
      else if (total >= 5000)  discount = total * 0.05;

      let finalAmount = total - discount;

      document.getElementById("result").innerHTML = `
        <b>Total Amount :</b> ${total}<br>
        <b>Discount :</b> ${discount.toFixed(2)}<br>
        <b>Final Amount :</b> ${finalAmount.toFixed(2)}`;

      // map — builds item summary list
      let summary = document.getElementById("summary");
      summary.innerHTML = "";
      cart.map(function (item) {
        summary.innerHTML += `<li>${item.name} : ${item.price * item.quantity}</li>`;
      });

      // filter — finds products with price > 1000
      let expensive = document.getElementById("expensive");
      expensive.innerHTML = "";
      let exp = cart.filter(function (item) {
        return item.price > 1000;
      });
      exp.forEach(function (item) {
        expensive.innerHTML += `<li>${item.name}</li>`;
      });
    }
  </script>
</body>
</html>
```

### Array Methods Used

| Method     | Purpose                                                    |
|------------|------------------------------------------------------------|
| `forEach`  | Renders each cart item as a table row                      |
| `map`      | Builds Item Summary list with `name : itemTotal`           |
| `filter`   | Extracts products where `price > 1000`                     |
| `reduce`   | Calculates grand total: `sum + (price × quantity)`         |

### Output
- User enters Product Name, Price, and Quantity → clicks **Add Product**
- Table shows ID, Name, Price, Qty, Total for each product
- Discount applied automatically:
  - ≥ ₹50,000 → 20% off
  - ≥ ₹20,000 → 10% off
  - ≥ ₹5,000  → 5% off
- Final Amount = Total − Discount
- Item Summary and Expensive Products lists update on every add

### Screenshot

![Task 5.1 Output](data:image/png;base64,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0607HwYHAICnxzMrKyvRF+J257Nt8dD99f0zj3HwFZ5esxdfaIpvttg8NHerwygnT8TUhcMn4mLTttHNRs8BAOBLZQ9HGYVdyQ/wOjkysbNRUdmte2NjcW3vga4uaRAAIAwCIftG7bnLSefNyetjEuGTcHd4MB47p6n/reMRAABBEAjZR46/dTW+b8b0wOCTv19hcFbfH4yrRau73j2nYBcAIBRfXB9CAAAA9hUthAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRAwbC3hAAABYBJREFUCAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACBEggBAAACJRACAAAESiAEAAAIlEAIAAAQKIEQAAAgUAIhAABAoARCAACAQAmEAAAAgRIIAQAAAiUQAgAABEogBAAACJRACAAAECiBEAAAIFACIQAAQKAEQgAAgEAJhAAAAIESCAEAAAIlEAIAAARKIAQAAAiUQAgAABAogRAAACBQAiEAAECgBEIAAIBACYQAAACB+v8BAAD//zx/DUcAAAAGSURBVAMADzPoRsE0vbAAAAAASUVORK5CYII=)


---

## Task 5.2 — Max & Min Finder (Array of Objects)

### Aim
Create an array of objects from user input and find the Maximum and Minimum values using array methods — `map()`, `Math.max()`, `Math.min()`, `some()`.

### File Path
`Task5/5.2/index.html` + `Task5/5.2/script.js`

### Program Code

#### `5.2/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Task 5.2 – Max & Min</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f0f4f8;
      display: flex;
      justify-content: center;
      padding: 40px;
    }
    .box {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      width: 400px;
    }
    h2   { margin-bottom: 20px; color: #333; }
    input {
      width: 100%; padding: 10px; font-size: 16px;
      border: 1px solid #ccc; border-radius: 6px;
      margin-bottom: 10px; box-sizing: border-box;
    }
    button {
      width: 100%; padding: 10px; background: #4f46e5;
      color: white; font-size: 16px;
      border: none; border-radius: 6px; cursor: pointer;
    }
    button:hover { background: #4338ca; }
    .result { margin-top: 20px; display: none; }
    .result p { font-size: 16px; margin: 8px 0; color: #333; }
    .result span { font-weight: bold; color: #4f46e5; }
    .error { color: red; font-size: 14px; margin-top: 8px; }
  </style>
</head>
<body>
  <div class="box">
    <h2>Task 5.2 – Max &amp; Min Finder</h2>

    <label>Enter numbers separated by commas:</label>
    <input type="text" id="inputNumbers" placeholder="e.g. 10, 25, 3, 47, 8" />
    <div class="error" id="errorMsg"></div>

    <button onclick="findMaxMin()">Find Max &amp; Min</button>

    <div class="result" id="result">
      <p>Numbers Array: <span id="arrDisplay"></span></p>
      <p>Maximum Value: <span id="maxVal"></span></p>
      <p>Minimum Value: <span id="minVal"></span></p>
    </div>

    <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />
    <p style="margin-top: 12px; font-size: 14px; color: #555;">
      <strong>Name:</strong> Sai Konde &nbsp;|&nbsp; <strong>PRN:</strong> 24070521032
    </p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

#### `5.2/script.js`
```js


function findMaxMin() {
  const input      = document.getElementById("inputNumbers").value.trim();
  const errorMsg   = document.getElementById("errorMsg");
  const resultDiv  = document.getElementById("result");

  errorMsg.textContent   = "";
  resultDiv.style.display = "none";

  if (input === "") {
    errorMsg.textContent = "Please enter at least one number.";
    return;
  }

  // Convert input string → array of objects using map()
  const rawValues   = input.split(",");
  const numbersArray = rawValues.map((item, index) => ({
    id: index + 1,
    value: Number(item.trim())
  }));

  // Validate using some()
  const hasInvalid = numbersArray.some(obj => isNaN(obj.value));
  if (hasInvalid) {
    errorMsg.textContent = "Invalid input! Please enter numbers only, separated by commas.";
    return;
  }

  // Extract numeric values using map()
  const values = numbersArray.map(obj => obj.value);

  // Find max and min using Math methods + spread operator
  const maxVal = Math.max(...values);
  const minVal = Math.min(...values);

  // Display results
  document.getElementById("arrDisplay").textContent = "[" + values.join(", ") + "]";
  document.getElementById("maxVal").textContent     = maxVal;
  document.getElementById("minVal").textContent     = minVal;
  resultDiv.style.display = "block";
}
```

### Array Methods Used

| Method        | Purpose                                              |
|---------------|------------------------------------------------------|
| `map()`       | Converts input strings into array of number objects  |
| `map()`       | Extracts `value` from each object into a plain array |
| `some()`      | Validates that no entry is `NaN`                     |
| `Math.max()`  | Finds the largest number using spread operator       |
| `Math.min()`  | Finds the smallest number using spread operator      |

### Output
- User types comma-separated numbers (e.g. `10, 25, 3, 47, 8`)
- Clicking **Find Max & Min** shows:
  - Numbers Array: `[10, 25, 3, 47, 8]`
  - Maximum Value: **47**
  - Minimum Value: **3**
- Invalid input shows an error message in red

### Screenshot

![Task 5.2 Output](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAMgCAIAAAC8ggxVAAAQAElEQVR4nOzdDbBc5Xkn+PeCTGIsBV+ERK4SRDYitwo5ZcmCGMcIw5odB5Fgz3jteC3vFBgzVLnKwVMOZUO5imxIZflY4qp1vOMdCjDemoh1nPUOlg3EO2SEkWdMBmQgA5pcoyQytm6QLASLjD0Y3HM++nSf/rytr+bSz+9XQjp9+vT56kPf87/P+769ZPXbL00AAADEc1wCAAAgJIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgKIEQAAAgqCUJ4Mg0Go0EwKthamoqARwBgRAYleAHsNgM+mQWFIERCYTA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YRqYDHvXnAB4dQzJgWnIb+h8dENYAiHENTgTptR3pNDaOAX9IqGmoQDjNLXgjFGfkwYhMIEQQqsNFdP/+WqiMfCZ+iyREGA8Rk1wCywnCgICIbBgLEzDkmHfpQB4NS38cSwKAiWBEGga2oK0vVTnQzVBgMXgENKdKAjUCYRAW+fX0I/0igTAa4QoCPQSCIE+Dj0ZArBIyYHAEAIhMEy/b6IHYLETAoERCYTAqEb+JnoAxkTwA46QQAgcKbcjAACvUcclAAAAQhIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIQgqU9wAAAjNJREFUAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAgvpvAAAA//+EOmsWAAAABklEQVQDAGX+SOZ0CbDFAAAAAElFTkSuQmCC)


---

## Result / Conclusion

Both tasks were completed successfully:

- **Task 5.1** demonstrated `forEach`, `map`, `filter`, and `reduce` through a Shopping Cart Calculator that dynamically adds products, computes totals, applies discounts, and lists expensive items.
- **Task 5.2** demonstrated `map()`, `some()`, `Math.max()`, and `Math.min()` by converting user-entered comma-separated numbers into an array of objects and finding the maximum and minimum values.
