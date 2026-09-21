# Experiment No. 7

**Student Name:** Sai konde
**PRN:** 24070521032

---

## Experiment Title
Event Handling in JavaScript

---

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Task 7.1 — To-Do List (DOM Events)

### Aim
Demonstrate JavaScript DOM event handling by building an interactive To-Do List where tasks can be added, edited, and deleted dynamically.

### File Path
`PRACTICAL7/7.1/index1.html`

### Program Code

#### `7.1/index1.html`
```html
<!DOCTYPE html>
<html>

<head>
    <title>To Do List</title>
    <h1>sai konde24070521032 </h1>

    <style>
        body {
            font-family: Arial;
            background: #f2f2f2;
            text-align: center;
        }

        .container {
            width: 400px;
            margin: 50px auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
        }

        input {
            padding: 10px;
            width: 220px;
        }

        button {
            padding: 10px;
            margin: 5px;
            border: none;
            cursor: pointer;
        }

        #addBtn {
            background: green;
            color: white;
        }

        .edit {
            background: orange;
        }

        .delete {
            background: red;
            color: white;
        }

        li {
            list-style: none;
            margin: 10px 0;
            padding: 10px;
            background: #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    </style>
</head>

<body>

    <div class="container">

        <h1>To Do List</h1>

        <input type="text" id="taskInput" placeholder="Enter task">
        <button id="addBtn">Add</button>

        <ul id="taskList"></ul>

    </div>

    <script>

        let input = document.getElementById("taskInput");
        let addBtn = document.getElementById("addBtn");
        let taskList = document.getElementById("taskList");

        addBtn.addEventListener("click", function () {

            let task = input.value;

            if (task == "") {
                alert("Enter a task");
                return;
            }

            let li = document.createElement("li");
            let span = document.createElement("span");
            let editBtn = document.createElement("button");
            let deleteBtn = document.createElement("button");

            span.innerText = task;

            editBtn.innerText = "Edit";
            editBtn.className = "edit";

            deleteBtn.innerText = "Delete";
            deleteBtn.className = "delete";

            editBtn.addEventListener("click", function () {
                let newTask = prompt("Edit task:", span.innerText);
                if (newTask != null && newTask != "") {
                    span.innerText = newTask;
                }
            });

            deleteBtn.addEventListener("click", function () {
                li.remove();
            });

            li.appendChild(span);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);

            input.value = "";
        });

    </script>

</body>

</html>
```

### Events Used

| Event / Method | Purpose |
|---|---|
| `addEventListener("click")` | Triggers Add, Edit, and Delete actions |
| `prompt()` | Opens a dialog box to edit an existing task |
| `document.createElement()` | Dynamically creates `li`, `span`, `button` elements |
| `li.remove()` | Removes the task item from the list |

### Output
- User types a task and clicks **Add** — task appears in the list with Edit and Delete buttons.
- Clicking **Edit** opens a `prompt()` dialog to update the task text in-place.
- Clicking **Delete** removes the task from the list entirely.

### Screenshot

![Task 7.1 Output](data:image/png;base64,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3W7O17JhRKdXAwBAtARCoMLKdryulUa2oq8TYLfgc6pe691912yh+D4JWRAAQCAE4rK1NJ8FwSJr5iWjAABxEgiBYZTXfRae6pspmnez8WRmlrKd1pc1EwIAERMIgQrbO6jME4eVeZL6xaw/4eq0slEAAIEQiEvSttgtE51ZK4YgXV3+dDETAGAojTx69CgA9Gi328nPx48fJxOPM5+Uzp49GwB4GR4+fPhq6ZXMyMhI8jNZlUwEgNKlS5fyiWvXru23zVtvvZVPaCEEAACIlEAIAAAQKYEQAAAgUgIhAABApARCAACASAmEAAAAkRIIAQAAInUiAFTSRx991Gw279+/v7OzEwCqZGxsbGJiol6vj46OBoBhJhACVZSkwdu3b7/++uuXL18+depUAKiS7e3t5M9VyWMqeUbJhMBQUzIKVFHSNpikwQsXLkiDQAUlj6bkAXXmzJl79+4FgGEmEAJVlPzpfWJiIgBU2Llz5x48eBAAhpmSUaCKdnZ2tA0CFZc8pnRyBoadFkIAAIBICYQAAACREggBAAAiJRACAABESiAEAACIlEAIAAAQKYEQAAAgUgIhAABApARCAACASAmEAAAAkRIIAQAAIiUQAgAAREogBAAAiJRACAAAECmBEAAAIFICIQAAQKQEQgAAgEgJhAAAAJESCAEAACIlEAIAAERKIASqaGxsbHt7OwBUWPKYSh5WAWCYCYRAFU1MTNy/fz8AVNiDBw/OnTsXAIaZQAhUUb1ef++9995++23thEAFJY+m5AH17rvvnj9/PgAMsxMBoHpGR0cvX758796927dv7+zsBIAqGRsbS9oGk8dU8rAKAMNMIAQqKvmYdSETAAB4PpSMAgAAREqNw7NyAAAQAElEQVQgBAAAiJRACAAAECmBEAAAIFICIQAAQKQEQgAAgEgJhAAAAJESCAEAACIlEAIAAERKIAQAAIiUQAgAABApgRAAACBSAiEAAECkBEIAAIBICYQAAACREggBAAAiJRACAABESiAEAACIlEAIAAAQKYEQAAAgUgIhAABApARCAACASAmEAAAAkRIIAQAAIiUQAgAAREogBAAAiJRACAAAECmBEAAAIFICIQAAQKQEQgAAgEgJhAAAAJESCAEAACIlEALVsz47kppd371kpL60tWtZ75LDHOkZr2BrqX7wmQAAhpBACFRP/eJk+muj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IASGQycSFiGqNr9UZKrugDNFrNtXWdzZMzpN+VUW+Zr+stGio15/N8UsshUn74x5UxywbPwr0mq5dU99Z2eTshNgefDi+tf3GxW07GPY9woAAD4lgRAYFrsjYadlLje5uPmEL1mYWetuP7NWVJd2ylHzQxTDfeZju3SbBbt7lUPH9J8827VbrtpJhOkAMqHTINjXjTFpxuw7ePfYA/Vdy+TimkFlAIAjMPLo0aMA0KPdbic/Hz9+nEw8znxSOnv2bBhCxXf4dUIgwBB6+PDhq6VXMiMjI8nPZFUyEQBKly5dOvzGWggBAAAiJRACAABE6kQAOO7SL49YCQAA7KKFEAAAIFICLCM6QAAACNpJREFUIQAAQKQEQgAAgEgJhAAAAJEyqAxQUR999FGz2bx///7Ozk4AqJKxsbGJiYl6vT46OhoAhplACFRRkgZv3779+uuvX758+dSpUwGgSra3t5M/VyWPqeQZJRMCQ03JKFBFSdtgkgYvXLggDQIVlDyakgfUmTNn7t27FwCGmUAIVFHyp/eJiYkAUGHnzp178OBBABhmSkaBKtrZ2dE2CFRc8pjSyRkYdloIAQAAIiUQAgAAREogBAAAiJRACAAAECmBEAAAIFICIQAAQKQEQgAAgEgJhAAAAJESCAEAACIlEAIAAERKIAQAAIiUQAgAABApgRAAACBSAiEAAECkBEIAAIBICYQAAACREggBAAAiJRACAABESiAEAACIlEAIAAAQKYEQqKKxsbHt7e0AUGHJYyp5WAWAYSYQAlU0MTFx//79AFBhDx48OHfuXAAYZgIhUEX1ev299957++23tRMCFZQ8mpIH1Lvvvnv+/PkAMMxOBIDqGR0dvXz58r17927fvr2zsxMAqmRsbCxpG0weU8nDKgAMM4EQqKjkY9aFTAAA4PlQMgoAABApgRAAACBSAiEAAECkBEIAAIBICYQAAACREggBAAAiJRACAABESiAEAACIlEAIAAAQKYEQAAAgUgIhAABApARCAACASAmEAAAAkRIIAQAAIiUQAgAAREogBAAAiJRACAAAECmBEAAAIFICIQAAQKQEQgAAgEgJhAAAAJESCAEAACIlEAIAAERKIAQAAIiUQAgAABApgRAAACBSAiEAAECkBEIAAIBICYQAAACREggBAAAiJRACAABESiAEAACIlEAIxGN9dmRkdj1U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)

---

## Task 7.2 — Registration Form with Validation & Submitted Details Panel

### Aim
Build a Registration Form that validates all fields using JavaScript event handling (`submit`, `change`, `focus`, `blur`) and displays the submitted details in a side panel with an option to edit.

### File Path
`PRACTICAL7/7.2/index.html`

### Program Code

#### `7.2/index.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Case Study 7 - Event Handling in JavaScript</title>
    <style>
        * { box-sizing: border-box; }

        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            padding: 30px;
            min-height: 100vh;
        }

        .page-wrapper {
            display: flex;
            gap: 30px;
            align-items: flex-start;
            width: 100%;
            max-width: 900px;
        }

        .form-container {
            background: #fff;
            padding: 25px 35px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            width: 420px;
            flex-shrink: 0;
        }

        .details-panel {
            background: #fff;
            padding: 25px 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            flex: 1;
            display: none;
            animation: slideIn 0.4s ease;
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to   { opacity: 1; transform: translateX(0); }
        }

        .error { color: red; font-size: 12px; margin-top: 3px; min-height: 14px; }
        .focused { border: 2px solid #2196F3 !important; background: #eef7ff; }

        button {
            width: 100%; padding: 10px; background: #2196F3;
            color: #fff; border: none; border-radius: 4px;
            font-size: 15px; cursor: pointer;
        }

        #editBtn { background: #FF9800; margin-top: 18px; }
        #successMsg { color: green; text-align: center; margin-top: 10px; font-weight: bold; }
    </style>
</head>

<body>
    <div class="page-wrapper">

        <!-- LEFT: Form -->
        <div class="form-container">
            <h2>Registration Form</h2>
            <p class="mandatory">*Mandatory to fill</p>

            <form id="regForm" novalidate>
                <div class="field">
                    <label for="firstname">Firstname *</label>
                    <input type="text" id="firstname" name="firstname">
                    <div class="error" id="err-firstname"></div>
                </div>
                <div class="field">
                    <label for="lastname">Lastname</label>
                    <input type="text" id="lastname" name="lastname">
                </div>
                <div class="field">
                    <label>Birthday</label>
                    <div class="dob-row">
                        <select id="day"><option value="">Day</option></select>
                        <select id="month"><option value="">Month</option></select>
                        <select id="year"><option value="">Year</option></select>
                    </div>
                    <div class="error" id="err-dob"></div>
                </div>
                <div class="field">
                    <label for="username">Username *</label>
                    <input type="text" id="username" name="username">
                    <div class="error" id="err-username"></div>
                </div>
                <div class="field">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" name="email">
                    <div class="error" id="err-email"></div>
                </div>
                <div class="field">
                    <label for="website">Website</label>
                    <input type="url" id="website" name="website">
                </div>
                <div class="field">
                    <label for="password">Password *</label>
                    <input type="password" id="password" name="password">
                    <div class="error" id="err-password"></div>
                </div>
                <div class="field">
                    <label for="repassword">Re-password *</label>
                    <input type="password" id="repassword" name="repassword">
                    <div class="error" id="err-repassword"></div>
                </div>
                <div class="checkbox-row">
                    <input type="checkbox" id="terms">
                    <label for="terms">I agree to the terms &amp; conditions.</label>
                </div>
                <div class="error" id="err-terms"></div>
                <button type="submit" id="submitBtn">Submit</button>
                <p id="successMsg"></p>
            </form>
        </div>

        <!-- RIGHT: Submitted Details Panel -->
        <div class="details-panel" id="detailsPanel">
            <h3>&#10003; Submitted Details</h3>
            <span class="badge-success">Registration Successful</span>
            <table>
                <tr><td>First Name</td><td id="d-firstname">—</td></tr>
                <tr><td>Last Name</td><td id="d-lastname">—</td></tr>
                <tr><td>Birthday</td><td id="d-dob">—</td></tr>
                <tr><td>Username</td><td id="d-username">—</td></tr>
                <tr><td>E-mail</td><td id="d-email">—</td></tr>
                <tr><td>Website</td><td id="d-website">—</td></tr>
                <tr><td>Terms Agreed</td><td id="d-terms">—</td></tr>
            </table>
            <button type="button" id="editBtn">&#9998; Edit Details</button>
        </div>

    </div>

    <script>
        const form        = document.getElementById("regForm");
        const firstname   = document.getElementById("firstname");
        const lastname    = document.getElementById("lastname");
        const username    = document.getElementById("username");
        const email       = document.getElementById("email");
        const website     = document.getElementById("website");
        const password    = document.getElementById("password");
        const repassword  = document.getElementById("repassword");
        const terms       = document.getElementById("terms");
        const daySel      = document.getElementById("day");
        const monthSel    = document.getElementById("month");
        const yearSel     = document.getElementById("year");
        const successMsg  = document.getElementById("successMsg");
        const detailsPanel = document.getElementById("detailsPanel");

        const allInputs = document.querySelectorAll(
            "input[type='text'], input[type='email'], input[type='url'], input[type='password'], select"
        );

        for (let d = 1; d <= 31; d++) daySel.appendChild(new Option(d, d));
        const months = ["January","February","March","April","May","June",
                        "July","August","September","October","November","December"];
        months.forEach((m, i) => monthSel.appendChild(new Option(m, i + 1)));
        const currentYear = new Date().getFullYear();
        for (let y = currentYear; y >= currentYear - 100; y--) {
            yearSel.appendChild(new Option(y, y));
        }

        allInputs.forEach(input => {
            input.addEventListener("focus", () => input.classList.add("focused"));
            input.addEventListener("blur",  () => input.classList.remove("focused"));
        });

        function showError(id, msg) { document.getElementById(id).textContent = msg; }
        function clearError(id)     { document.getElementById(id).textContent = ""; }

        firstname.addEventListener("change", () => {
            firstname.value.trim() === ""
                ? showError("err-firstname", "Firstname is required.")
                : clearError("err-firstname");
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let valid = true;

            if (firstname.value.trim() === "") {
                showError("err-firstname", "Firstname is required."); valid = false;
            } else { clearError("err-firstname"); }

            if (username.value.trim() === "") {
                showError("err-username", "Username is required."); valid = false;
            } else { clearError("err-username"); }

            if (valid) {
                document.getElementById("d-firstname").textContent = firstname.value.trim();
                document.getElementById("d-lastname").textContent  = lastname.value.trim() || "—";
                document.getElementById("d-dob").textContent =
                    daySel.value + " " + months[monthSel.value - 1] + " " + yearSel.value;
                document.getElementById("d-username").textContent  = username.value.trim();
                document.getElementById("d-email").textContent     = email.value.trim() || "—";
                document.getElementById("d-website").textContent   = website.value.trim() || "—";
                document.getElementById("d-terms").textContent     = "Yes";

                detailsPanel.style.display = "block";
                successMsg.textContent = "Form submitted successfully!";
                allInputs.forEach(el => el.disabled = true);
                document.getElementById("submitBtn").style.display = "none";
            }
        });

        document.getElementById("editBtn").addEventListener("click", function () {
            allInputs.forEach(el => el.disabled = false);
            successMsg.textContent = "";
            detailsPanel.style.display = "none";
            document.getElementById("submitBtn").style.display = "block";
        });
    </script>

</body>
</html>
```

### Events Used

| Event | Purpose |
|---|---|
| `submit` | Validates all fields on form submission |
| `change` | Inline validation triggered as user leaves a field |
| `focus` | Highlights the active input field with blue border |
| `blur` | Removes the highlight when the field loses focus |
| `click` (Edit button) | Re-enables form fields and hides the details panel |

### Output
- A two-column layout: **Registration Form** on the left.
- On valid submission, a **Submitted Details** panel slides in on the right showing all entered data.
- Clicking **✏️ Edit Details** hides the panel and re-enables the form for changes.
- Invalid fields show red error messages inline.

### Screenshot

![Task 7.2 Output](data:image/png;base64,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)


---

## Result / Conclusion

Both tasks were completed successfully:

- **Task 7.1** demonstrated JavaScript DOM event handling by creating an interactive To-Do List that uses `addEventListener`, `createElement`, `prompt()`, and `remove()` to add, edit, and delete tasks dynamically.
- **Task 7.2** demonstrated form event handling (`submit`, `change`, `focus`, `blur`) by building a Registration Form with real-time inline validation. On successful submission, a details panel slides in on the right showing all submitted data, and the user can click **Edit Details** to re-enable the form for modifications.
