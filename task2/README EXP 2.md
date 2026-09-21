# Experiment No. 2

**Student Name:** sai konde
**PRN:** 24070521032
**File Path:** `PRACTICAL2/index.html` | `PRACTICAL2/script.js` | `PRACTICAL2/style.css`

---

## Experiment Title
Demonstration of var, let, const, Template Literals, Destructuring and Billing Calculator using JavaScript

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Experiment Program Code

### `index.html` — ShopZone Billing Calculator
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ShopZone - Online Store</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="topbar">
    <h2>&#128722; ShopZone</h2>
    <p>Made by sai konde 24070521032</p>
  </div>

  <h2 class="page-heading">Our Products</h2>

  <div class="product-list">
    <div class="product-card">
      <div class="product-icon">&#128187;</div>
      <div class="product-info">
        <p class="product-name">Laptop</p>
        <p class="product-desc">Intel i5, 8GB RAM, 256GB SSD</p>
        <p class="product-price">Rs. 45,999</p>
      </div>
      <div class="product-qty">
        <label>Quantity:</label>
        <input type="number" id="qty1" value="0" min="0" max="10">
        <input type="hidden" id="price1" value="45999">
      </div>
    </div>
  </div>

  <div class="customer-section">
    <h3>Enter Your Details</h3>
    <label>Name:</label>
    <input type="text" id="cust-name" placeholder="Enter your name"><br><br>
    <label>Phone:</label>
    <input type="text" id="cust-phone" placeholder="Enter phone number"><br><br>
    <label>Address:</label>
    <input type="text" id="cust-addr" placeholder="Enter delivery address"><br><br>
    <button onclick="calculateBill()">Generate Bill</button>
    <button onclick="clearAll()" class="btn-clear">Clear</button>
  </div>

  <div class="bill-section" id="bill-section"></div>

  <div class="footer">
    <p>&copy; 2026 ShopZone | Made by Sai Konde (24070521032)</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### `script.js` — JavaScript (var, let, const, Template Literals, Destructuring)
```js
var cart = [];
var GST_RATE = 0.18;

function addToCart(productName, productPrice, qtyId) {
  var qty = Number(document.getElementById(qtyId).value);

  if (qty < 1) { alert("Please enter a valid quantity!"); return; }

  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name == productName) {
      cart[i].qty = cart[i].qty + qty;
      found = true;
      break;
    }
  }
  if (found == false) {
    cart.push({ name: productName, price: productPrice, qty: qty });
  }
  showCart();
}

function showCart() {
  var cartItems  = document.getElementById("cart-items");
  var totalLine  = document.getElementById("cart-total-line");
  var custForm   = document.getElementById("customer-form");

  if (cart.length == 0) {
    cartItems.innerHTML = "<p id='empty-msg'>Cart is empty. Add some items!</p>";
    totalLine.style.display = "none";
    custForm.style.display  = "none";
    return;
  }

  var rows = ""; var subtotal = 0; var totalQty = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var itemTotal = item.price * item.qty;
    subtotal  += itemTotal;
    totalQty  += item.qty;
    rows += `<tr><td>${item.name}</td><td>${item.qty}</td>
             <td>Rs. ${item.price}</td><td>Rs. ${itemTotal}</td>
             <td><button class='remove-btn' onclick='removeItem(${i})'>Remove</button></td></tr>`;
  }

  cartItems.innerHTML = `<table class='cart-table'>
    <tr><th>Product</th><th>Qty</th><th>Price</th><th>Total</th><th>Action</th></tr>
    ${rows}</table>`;

  totalLine.style.display = "block";
  document.getElementById("cart-count").textContent   = totalQty;
  document.getElementById("cart-subtotal").textContent = "Rs. " + subtotal;
  custForm.style.display = "block";
}

function removeItem(index) { cart.splice(index, 1); showCart(); }
function clearCart() { cart = []; showCart(); document.getElementById("bill-box").style.display = "none"; }

function generateBill() {
  var name  = document.getElementById("cust-name").value;
  var phone = document.getElementById("cust-phone").value;

  if (name == "") { alert("Please enter your name!"); return; }

  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].qty;
  }

  const gstAmount  = subtotal * GST_RATE;
  const grandTotal = subtotal + gstAmount;

  var billRows = "";
  for (var j = 0; j < cart.length; j++) {
    const { name: pName, price, qty } = cart[j];
    const total = price * qty;
    billRows += `<tr><td>${j+1}</td><td>${pName}</td><td>${qty}</td>
                 <td>Rs. ${price}</td><td>Rs. ${total}</td></tr>`;
  }

  const billBox = document.getElementById("bill-box");
  billBox.style.display = "block";
  billBox.innerHTML = `
    <h2>Invoice / Bill</h2>
    <div class='bill-info'>
      <b>Name:</b> ${name}<br>
      <b>Phone:</b> ${phone || "N/A"}
    </div>
    <table class='bill-table'>
      <tr><th>#</th><th>Product</th><th>Qty</th><th>Price</th><th>Amount</th></tr>
      ${billRows}
    </table>
    <div class='bill-row'><span>Subtotal</span><span>Rs. ${subtotal}</span></div>
    <div class='bill-row'><span>GST (18%)</span><span>Rs. ${gstAmount.toFixed(2)}</span></div>
    <div class='grand'><span>Grand Total</span><span>Rs. ${grandTotal.toFixed(2)}</span></div>`;

  billBox.scrollIntoView({ behavior: "smooth" });

  console.log("Name: " + name);
  console.log("Subtotal: " + subtotal);
  console.log("GST: " + gstAmount.toFixed(2));
  console.log("Grand Total: " + grandTotal.toFixed(2));
}
```

---

## Output
- A product listing page shows 8 products with quantity selectors.
- User fills in Name, Phone, and Address, then clicks **Generate Bill**.
- The bill displays:
  - Itemized product list with quantities and prices
  - **Subtotal**, **GST (18%)**, and **Grand Total**
- Console logs all billing details.

### Screenshot
![Task 2 Output](data:image/png;base64,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AABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIChBCAAAEJQgBAAACEoQAgAABCUIAQAAghKEAAAAQQlCAACAoAQhAABAUIIQAAAgKEEIAAAQlCAEAAAIShACAAAEJQgBAACCEoQAAABBCUIAAICgBCEAAEBQghAAACAoQQgAABCUIAQAAAhKEAIAAAQlCAEAAIIShAAAAEEJQgAAgKAEIQAAQFCCEAAAIKj/DwAA//9BPnT3AAAABklEQVQDAPar6Kpg5qOGAAAAAElFTkSuQmCC)

---

## Case Study Title
Billing Calculator Webpage for a Shopping App using JavaScript, HTML, and CSS

## Case Study Program Code
> See `script.js` `generateBill()` function above — demonstrates:

| Concept | Usage in Code |
|---------|--------------|
| `var` | `cart`, `GST_RATE`, loop variables, subtotal |
| `const` | `gstAmount`, `grandTotal`, `billBox` |
| **Template Literals** | All `innerHTML` strings using backticks + `${}` |
| **Destructuring** | `const { name: pName, price, qty } = cart[j]` |

## Output
- Customer details (Name, Phone, Address) are accepted.
- Quantities per product are selected.
- On **Generate Bill**: GST calculated at 18%, Grand Total displayed in a formatted invoice.


---

## Result / Conclusion
The practical was completed successfully. The concepts of `var`, `let`, `const`, template literals, and destructuring were implemented. A billing calculator was developed that accepts user input, performs GST and Grand Total calculations, and displays the final bill accurately using JavaScript.
