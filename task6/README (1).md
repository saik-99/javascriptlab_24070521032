# Experiment No. 6

**Student Name:** sai konde
**PRN:** 24070521032

---

## Experiment Title
String Methods and Regular Expressions in JavaScript

---

## Software / Tools Required
1. Visual Studio Code
2. Google Chrome
3. HTML5
4. JavaScript (ES6)

---

## Task 6.1 — String Methods & Regular Expressions

### Aim
Demonstrate JavaScript string methods (`split`, `match`, `replace`, `indexOf`, `reverse`) and Regular Expressions for text processing and email validation.

### File Path
`PRACTICAL6/6.1/index.html`

### Program Code

#### `6.1/index.html`
```html
<!DOCTYPE html>
<html>

<head>
    <title>String Methods and Regular Expressions</title>

    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 40px;
        }

        h1 { text-align: center; }

        .box {
            border: 1px solid #ccc;
            padding: 20px;
            margin-top: 20px;
            border-radius: 8px;
        }

        input, textarea, button {
            padding: 10px;
            margin: 5px 0;
            width: 90%;
        }

        button { width: 150px; cursor: pointer; }

        #output {
            margin-top: 20px;
            padding: 15px;
            background-color: #f5f5f5;
        }
    </style>
</head>

<body>

    <h1>String Methods &amp; Regular Expressions</h1>

    <div class="box">
        <label><b>Enter a paragraph:</b></label><br>
        <textarea id="paragraph" rows="5">JavaScript is a powerful programming language. It is widely used for web development.</textarea>
        <br>
        <label><b>Enter email:</b></label><br>
        <input type="text" id="email" placeholder="Enter your email">
        <br>
        <button onclick="ProcessString()">Process</button>
        <div id="output"></div>
    </div>

    <script>

        function ProcessString() {

            let paragraph = document.getElementById("paragraph").value;
            let email = document.getElementById("email").value;

            // split() - Split paragraph into words
            let words = paragraph.split(/\s+/);

            // match() - Find all vowels
            let vowels = paragraph.match(/[aeiou]/gi);
            let vowelCount = vowels ? vowels.length : 0;

            // replace() - Replace a word
            let replacedParagraph = paragraph.replace(
                /JavaScript/gi,
                "Javascript Programming"
            );

            // indexOf() - Search a word
            let searchWord = "powerful";
            let position = paragraph.indexOf(searchWord);

            // Email validation using Regex
            let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            let emailResult = emailRegex.test(email) ? "Valid" : "Invalid";

            // Regex - Extract email from text
            let emailText = "For queries contact student@gmail.com";
            let extractedEmails = emailText.match(
                /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
            );

            // reverse() - Reverse paragraph
            let reversedParagraph = paragraph.split("").reverse().join("");

            // Display output
            document.getElementById("output").innerHTML = `
                <h3>1. Original Paragraph</h3>
                <p>${paragraph}</p>

                <h3>2. split() - Words</h3>
                <p>${words.join(", ")}</p>

                <h3>3. match() - Vowels</h3>
                <p>${vowels ? vowels.join(", ") : "No vowels found"}</p>

                <h3>4. Vowel Count</h3>
                <p>Total number of vowels: <b>${vowelCount}</b></p>

                <h3>5. replace() - Replaced Text</h3>
                <p>${replacedParagraph}</p>

                <h3>6. indexOf() - Search Word</h3>
                <p>Position of "<b>${searchWord}</b>": <b>${position}</b></p>

                <h3>7. Email Validation Using Regex</h3>
                <p>Email: <b>${email}</b><br>Result: <b>${emailResult}</b></p>

                <h3>8. Regex - Extracted Information</h3>
                <p>${extractedEmails ? extractedEmails.join(", ") : "No email found"}</p>

                <h3>9. reverse() - Reversed Paragraph</h3>
                <p>${reversedParagraph}</p>
            `;
        }

    </script>

</body>

</html>
```

### String Methods & Regex Used

| Method / Regex | Purpose |
|---|---|
| `split(/\s+/)` | Splits paragraph into individual words |
| `match(/[aeiou]/gi)` | Finds all vowels in the paragraph |
| `replace(/JavaScript/gi, ...)` | Replaces all occurrences of "JavaScript" |
| `indexOf("powerful")` | Finds the position of the word "powerful" |
| `split("").reverse().join("")` | Reverses the entire paragraph character by character |
| `/^[a-zA-Z0-9._%+-]+@.../` | Validates email address format using regex |
| `match(/.../g)` | Extracts all emails from a given text string |

### Output
- User enters a paragraph and an email address, then clicks **Process**.
- Results displayed include:
  1. Original paragraph
  2. Word list (via `split`)
  3. Vowels found and total vowel count (via `match`)
  4. Replaced text ("JavaScript" → "Javascript Programming")
  5. Index position of word "powerful"
  6. Email validation result (Valid / Invalid)
  7. Extracted email from a sample string
  8. Reversed paragraph

### Screenshot

![Task 6.1 Output](data:image/png;base64,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4NKrb7/70YPFif6mGSdtx9z8yTfPdT2aX2f1/rn9lZbto5s/ufTs6rzkD50+O3Bt5uZHWWMn//X/tifKyT97It1NX/u34pTmgL/9y9cvZZVfu5HoodOnzz77zWsz7360Mps9R69eqT306sDZ1RVKi/ed3JkRj6snxAv5SfseTfdw6fVffvBRqzMhG8s1vXL756++UDsbHu0690Ja4StzQ+vMsXGyd2TuTjaBfLa/3PlXOqjyLsc22a7L5qT/6IO0VhvmHSxv8tW3b5aqtbOzNHV9VpOPdqVpcLxvZ1uPayLh0suDuYxRKuTNmcbDLn/oWtb01k/qk8WJldt1p03lPb29Mj1Y2MJnoFyUb+aq+NFKWdKS9w/2r1b8/deubDx15+67MztUFwfPXpsYyldwWkGT+cGIa+aHXdWRnurLN/PPac3O9Fd/ntVke18FNdvoFi4F6Wd1OXuCRMM6pZPohfI6w2s+eltaaSNbvmps0S5cNYA9cezBgwcJwEGwPNZ95mJ1+GDXtZt78FgH2F1O6l1TV7XZo0Imtz1VJkBIegiBvTI71NFZnpdjzZQsZcv5yf57uwsJHHBOagAOO4EQ2CvdPYVb5Xk5zj915tSJk4PT1bn0sskm58b6+mtzxD/04pBv+zn4nNQAHHaGjAJ75s5k8dTzbT1b7ey1mwuG1nEIOKn3jSGjADtDDyGwZ9Luk3df3WAWutQXLv18TsOZw8FJDcAhJxACe6ije7g8C12ryVOziejmr/SaiI5Dw0kNwKFmyCgAAEBQeggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCEggBAACCOp4cAH/5y19WVlb++Mc/fvjhh3/+858TAACAo+j48eMPlzz22GN/9Vf73z937MGDB8m++u///u/333//U5/6VEdHR1ovH/vYxxIAAICj6E9/+lPaDXbv3r3f/va3hULh4x//eLKv9jkQ/td//dfdu3f/+q//OgEAAIjk17/+9cmTJ//H//gfyf7Zzz7KtG9QGgQAAGL6m7/5mzt37vzhD39I9s++BcK//OUv77//vjQIAACElWbC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TPLvv2p8IMWnP/O3ya9+8d6aJXPTlt6+XQ2bWS9geWzpV3/1nf9dHnLa7DUAAIBmBML98un/eaE6TDR56///TnX46Jeer81Jms0Q8/lXf5MtWRkIWp5dpnQTYfaf6k2CWWTMehubvQYAANCCIaP7Ju3L+5dfnKoM70x7ACujO7/0zze++/mzp04luZfzS1Zf+3R+uezFrNew2WsAAADNCYQ7LpsKps3flGaNWbNYNurzpSar/nMbyzV7DQAAoClDRgEAAIISCAEAAIISCAEAAIISCAEAAIISCAEAAIISCAEAAIISCAEAAIISCAEAAIISCAEAAIISCAEAAIISCAEAAII6nhxOZ86cSTi0vH0AAHAQHNYewkceeeStt95KOITSNy59+xIAAGC/HdYewq997Ws/+MEPJicnb968mXB4pH2DaRpM374EAADYb4c1ECalTJgAAACwVSaVAQAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACEogBAAACOp4cjh9+OGHCQAAwMHw8MMPJ4eQHkIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgBEIAAICgjieH08MPP5wAAACwDXoIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAghIIAQAAgtq3QHj8+PE//elPCQAAQGBpLErDUbJP9i0QPvzwwx9++GECAAAQWBqL0nCU7JP9DIT37t1LAAAAAvvoo48eeeSRZJ/sWyB87LHHfvvb3yYAAACBpbEoDUfJPtm3QPhXf/VXhULh17/+dQIAABBSGojOnDlz7NixZJ/s5yyjH//4x0+dOiUTAgAAAaVR6OMlyf459uDBg2Rf/eEPf1heXv7Upz7V0dHx8MMPf+xjH0sAAACOoj/96U8ffvjhvXv3/uM//iPtG9zfNJgchECY+stf/vLBBx98WPLnP/85AQAAOIqOHz+edoM98sgjjz322D6OFF11IAIhAAAAe28/7yEEAABgHwmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmE0EiMuwAAAPtJREFUAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQQmEAAAAQf0/AAAA///4GtRPAAAABklEQVQDACXcqexzZFHFAAAAAElFTkSuQmCC)


---

## Task 6.2 — Student Information Extraction using Regular Expressions

### Aim
Use JavaScript Regular Expressions to extract structured student information (Name, Roll No., Email, Phone, Department) from raw text, validate email and phone formats, and apply string transformations (lowercase, replace).

### File Path
`PRACTICAL6/6.2/index1.html`

### Program Code

#### `6.2/index1.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Student Information using Regular Expressions</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
            background: #fdf6f0;
            color: #3d3229;
            padding: 40px 20px;
        }

        .wrapper { max-width: 680px; margin: 0 auto; }

        .card {
            background: #ffffff;
            border-radius: 20px;
            padding: 28px 32px;
            box-shadow: 0 4px 24px rgba(140, 110, 80, 0.08);
            margin-bottom: 24px;
        }

        textarea {
            width: 100%; height: 170px; padding: 16px;
            font-size: 0.95rem; line-height: 1.7;
            background: #faf7f4; border: 2px solid #ece3d9;
            border-radius: 14px; resize: vertical; outline: none;
        }

        .btn {
            width: 100%; margin-top: 20px; padding: 15px 0;
            font-size: 1rem; font-weight: 600; color: #fff;
            background: linear-gradient(135deg, #d4a574, #c4876e);
            border: none; border-radius: 14px; cursor: pointer;
        }

        .badge.valid  { background: #e6f7ee; color: #1d8348; }
        .badge.invalid { background: #fdeaea; color: #c0392b; }
    </style>
</head>

<body>

    <div class="wrapper">
        <div class="header">
            <h1>Student Information Extraction</h1>
            <p>Paste student details below and let regex do the magic</p>
        </div>

        <div class="card">
            <label for="inputText">Student Data</label>
            <textarea id="inputText">Student Name: Sai Konde
Roll Number: 23
Email Address: saikonde03@gmail.com
Phone Number: 9876543210
Department: Computer Science</textarea>

            <button class="btn" onclick="processText()">Process Information</button>
        </div>

        <div id="result"></div>
    </div>

    <script>

        function processText() {

            let text = document.getElementById("inputText").value;

            let studentName = text.match(/Student Name:\s*([A-Za-z ]+)/i);
            let rollNumber  = text.match(/Roll Number:\s*(\d+)/i);
            let email       = text.match(/Email Address:\s*([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/i);
            let phone       = text.match(/Phone Number:\s*(\d+)/i);
            let department  = text.match(/Department:\s*(.+)/i);

            studentName = studentName ? studentName[1].trim() : "Not Found";
            rollNumber  = rollNumber  ? rollNumber[1].trim()  : "Not Found";
            email       = email       ? email[1].trim()       : "Not Found";
            phone       = phone       ? phone[1].trim()       : "Not Found";
            department  = department  ? department[1].trim()  : "Not Found";

            let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            let emailValid  = emailRegex.test(email);
            let emailStatus = emailValid
                ? '<span class="badge valid">Valid</span>'
                : '<span class="badge invalid">Invalid</span>';

            let phoneRegex = /^\d{10}$/;
            let phoneValid  = phoneRegex.test(phone);
            let phoneStatus = phoneValid
                ? '<span class="badge valid">Valid — 10 digits</span>'
                : '<span class="badge invalid">Invalid — Must be 10 digits</span>';

            let words          = text.trim().match(/\S+/g);
            let totalWords     = words ? words.length : 0;
            let totalCharacters = text.replace(/\s/g, "").length;
            let lowerText      = text.toLowerCase();
            let replacedText   = text.replace(/Computer Science/gi, "Information Technology");

            document.getElementById("result").innerHTML = `
                <div class="card">
                    <b>Name:</b> ${studentName} &nbsp;|&nbsp;
                    <b>Roll No.:</b> ${rollNumber} &nbsp;|&nbsp;
                    <b>Email:</b> ${email} ${emailStatus} &nbsp;|&nbsp;
                    <b>Phone:</b> ${phone} ${phoneStatus} &nbsp;|&nbsp;
                    <b>Department:</b> ${department}
                </div>
                <div class="card">
                    <b>Words:</b> ${totalWords} &nbsp;|&nbsp;
                    <b>Characters:</b> ${totalCharacters}
                </div>
                <div class="card">
                    <b>Lowercase:</b><br>${lowerText}
                </div>
                <div class="card">
                    <b>After Replace:</b><br>${replacedText}
                </div>
            `;
        }

    </script>

</body>
</html>
```

### Regex Patterns Used

| Pattern | Purpose |
|---|---|
| `/Student Name:\s*([A-Za-z ]+)/i` | Extracts student name from text |
| `/Roll Number:\s*(\d+)/i` | Extracts roll number digits |
| `/Email Address:\s*([A-Za-z0-9._%+-]+@...)/i` | Extracts email address |
| `/Phone Number:\s*(\d+)/i` | Extracts phone number |
| `/Department:\s*(.+)/i` | Extracts department name |
| `/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/` | Validates email format |
| `/^\d{10}$/` | Validates phone is exactly 10 digits |
| `/\S+/g` | Counts total words (non-whitespace tokens) |
| `/\s/g` | Strips whitespace for character count |
| `/Computer Science/gi` | Replaces department name in text |

### Output
- User pastes raw student text and clicks **Process Information**.
- Extracted fields displayed: Name, Roll No., Email, Phone, Department.
- Email and Phone show **Valid / Invalid** badges.
- Text statistics shown: total Words and Characters.
- Lowercase and department-replaced versions of the text are displayed below.

### Screenshot

![Task 6.2 Output](data:image/png;base64,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xMeylXIgTAkPwKhgVFAeAAAAMChuOwEAAJBQAiEAAEBCCYQAAAAJJRACAAAklEAIAACQUAIhAABAQgmEAAAACSUQAgAAJJRACAAAkFACIQAAQEIJhAAAAAklEAIAACTUiAXCsopRXce6AwAAgAQLY1EYjoIRMmKBsKK6orOtMwAAAEiwztbOMBwFI2REA2G7CiEAAJBone1dSQyEY6dVH37zaAAAAJBgh99sHTu9OhghIxYIR5WNmlA37sAbLQEAAEAi7d/WMmH2uFGjkjeGMDS6pqpyQmXYBAEAAEDChFGoalLl6ElVwcgZ1X30WDCi2g60H9pxeNz06oqq8orqivJz3AkDAAA4O3Ud6+5s7exs7zr8ZmtYGxzZNBicCYEwdLz7+NE9rceOdoZN0915PAAAADgblVWMCstg54ypGDOtegR7iuacEYEQAACA00//TAAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIKIEQAAAgoQRCAACAhBIIAQAAEkogBAAASCiBEAAAIKEEQgAAgIQSCAEAABJKIAQAAEgogRAAACChBEIAAICEEggBAAASSiAEAABIqP8fAAD//6/wtaAAAAAGSURBVAMA5VYcuWs43hMAAAAASUVORK5CYII=)


---

## Result / Conclusion

Both tasks were completed successfully:

- **Task 6.1** demonstrated JavaScript string methods (`split`, `match`, `replace`, `indexOf`, `reverse`) and Regular Expressions for text processing, vowel counting, word splitting, email validation, and email extraction from a paragraph.
- **Task 6.2** demonstrated advanced Regex usage by extracting structured student information (Name, Roll No., Email, Phone, Department) from raw unstructured text, validating email and phone formats using regex patterns, and applying string transformations including lowercase conversion and keyword replacement.
