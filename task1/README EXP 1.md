# Experiment No. 1

**Student Name:** sai konde
**PRN:** 24070521032
**File Path:** `PRACTICAL1/index.html` | `PRACTICAL1/website.html` | `PRACTICAL1/script.js`

---

## Experiment Title
Demonstration of Inline, Internal and External JavaScript, Console Methods and Uses Information Webpage

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Experiment Program Code

### `index.html` — SIT Nagpur Department Page (External JS)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SIT Nagpur - Department of Computer Science</title>
    <style>
        body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #020617, #0f172a 55%, #1e3a8a);
            color: #e2e8f0;
        }
    </style>
</head>
<body>
    <section class="hero">
        <div class="panel">
            <div class="hero-content">
                <div>
                    <span class="badge">Case Study 1</span>
                    <h1>Department of Computer Science and Engineering</h1>
                    <p class="lead">Welcome to SIT Nagpur. Our department focuses on strong academic
                    foundations, practical laboratory learning, innovation, and student development.</p>
                    <div class="actions">
                        <a class="button button-primary" href="website.html">View Student Info Page</a>
                        <a class="button button-secondary" href="#about">Explore Department</a>
                    </div>
                    <div class="info-grid" id="about">
                        <div class="card"><h3>Vision</h3><p>To develop skilled, ethical graduates.</p></div>
                        <div class="card"><h3>Mission</h3><p>Quality education and modern computing.</p></div>
                        <div class="card"><h3>Facilities</h3><p>Smart classrooms and programming labs.</p></div>
                    </div>
                </div>
                <aside class="highlight">
                    <h2>Department Highlights</h2>
                    <ul>
                        <li>Experienced faculty members and mentor support.</li>
                        <li>Focus on web development, programming, and problem solving.</li>
                        <li>Industry-oriented mini projects and practical assignments.</li>
                        <li>Student clubs, coding events, and placement preparation.</li>
                    </ul>
                </aside>
            </div>
        </div>
    </section>
    <script src="script.js"></script>
</body>
</html>
```

### `script.js` — External JavaScript
```js
function greet() {
    alert("Welcome to SIT NAGPUR");

    console.table([{ College: "SIT Nagpur", Course: "Computer Science" }]);
    console.time("Execution");
    console.timeEnd("Execution");
}
```

### `website.html` — Student Information Page (Internal JS + Inline JS)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SIT Nagpur - Student Information</title>
    <script>
        function showWelcome() {
            const name = document.getElementById("name").value.trim();
            const age  = document.getElementById("age").value.trim();
            const out  = document.getElementById("output");

            if (!name || !age) {
                out.innerHTML = '<div class="error-box">Please fill in both Name and Age.</div>';
                return;
            }
            const ageNum = parseInt(age, 10);
            const year   = ageNum >= 21 ? "Final Year" : ageNum >= 20 ? "Third Year"
                         : ageNum >= 19 ? "Second Year" : "First Year";
            const today  = new Date().toLocaleDateString("en-IN",
                           { day:"2-digit", month:"short", year:"numeric" });

            out.innerHTML = `
                <div class="student-table-wrap">
                    <h2>Student Details</h2>
                    <table class="info-table">
                        <thead><tr><th>Field</th><th>Information</th></tr></thead>
                        <tbody>
                            <tr><td>Student Name</td><td><strong>${name}</strong></td></tr>
                            <tr><td>Age</td><td>${age} years</td></tr>
                            <tr><td>Institute</td><td>SIT Nagpur</td></tr>
                            <tr><td>Course</td><td>Computer Science &amp; Engineering</td></tr>
                            <tr><td>Year</td><td>${year}</td></tr>
                            <tr><td>Submitted On</td><td>${today}</td></tr>
                            <tr><td>Status</td><td><span class="badge">Registered</span></td></tr>
                        </tbody>
                    </table>
                </div>`;

            console.log("User Name: " + name);
            console.info("User Age: " + age);
            console.warn("Demo warning message.");
            console.error("Demo error message for console output practice.");
        }
    </script>
</head>
<body>
    <main class="wrapper">
        <section class="panel">
            <h1>Student Information</h1>
            <label for="name">Enter Name</label>
            <input type="text" id="name" placeholder="Enter student name">
            <label for="age">Enter Age</label>
            <input type="number" id="age" placeholder="Enter student age">

            <button onclick="showWelcome(); greet();">Submit</button>

            <div id="output">
                <div class="placeholder">The submitted information will appear here.</div>
            </div>
            <a class="back-link" href="index.html">Back to Department Page</a>
        </section>
        <aside class="panel side-card">
            <h2>MADE BY Sai Konde (24070521032)</h2>
        </aside>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

---

## Output
- The SIT Nagpur department page loads with a dark-themed hero layout.
- Clicking **"View Student Info Page"** navigates to `website.html`.
- On entering Name and Age and clicking **Submit**:
  - An alert box displays `"Welcome to SIT NAGPUR"` (External JS triggered via inline `onclick`).
  - A student details table is dynamically generated (Internal JS).
  - Browser console shows output from: `console.log`, `console.info`, `console.warn`, `console.error`, `console.table`, `console.time`.

### Screenshot
![Task 1 Output](data:image/png;base64,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gEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEgJQgAAgEj9/wAAAP//4WZKTQAAAAZJREFUAwAj76LUu9Q0hQAAAABJRU5ErkJggg==)

---

## Case Study Title
Making of a Student Information Webpage Connected to the SIT Nagpur Department Webpage using JavaScript

## Case Study Program Code
> All three JS types are used together in `website.html` and `script.js` (see above).

The case study demonstrates all three JavaScript inclusion methods in one project:

| Type | Where Used | Function |
|------|-----------|----------|
| **Inline JS** | `onclick="showWelcome(); greet();"` on Submit button | Triggers both functions |
| **Internal JS** | `<script>` block in `website.html` | `showWelcome()` — builds the student table |
| **External JS** | `script.js` linked via `<script src="">` | `greet()` — shows alert + console methods |

## Output
- Department homepage links to the student information page.
- On form submission: Welcome alert fires, student table is rendered dynamically, all console methods execute.

---

## Result / Conclusion
The practical was performed successfully. Different methods of JavaScript — **Internal**, **Inline**, and **External** — were demonstrated along with all major console methods (`console.log`, `console.error`, `console.warn`, `console.info`, `console.table`, `console.time`). A student information webpage connected to the SIT Nagpur department page was created successfully.
