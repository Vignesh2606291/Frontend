/**
 * ============================================================================
 * JavaScript Learning Platform - Core Interactive Script
 * Modern, Beginner-Friendly, and Robust JavaScript Code
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initBackToTop();
  initPracticeArena();
});

/* ==========================================================================
   1. UI Navigation & Scroll Utilities
   ========================================================================== */

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-custom');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Toast Notification Utility
 */
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toastId = 'toast-' + Date.now();
  const bgClass = type === 'success' ? 'bg-success text-white' : type === 'error' ? 'bg-danger text-white' : 'bg-dark text-white';

  const toastHtml = `
    <div id="${toastId}" class="toast align-items-center ${bgClass} border-0 show shadow-lg mb-2" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body d-flex align-items-center gap-2">
          <i class="bi ${type === 'success' ? 'bi-check-circle-fill' : type === 'error' ? 'bi-exclamation-triangle-fill' : 'bi-info-circle-fill'}"></i>
          <span>${message}</span>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onclick="document.getElementById('${toastId}').remove()"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML('beforeend', toastHtml);

  setTimeout(() => {
    const el = document.getElementById(toastId);
    if (el) el.remove();
  }, 3500);
}

/**
 * Copy Code to Clipboard Utility
 */
function copySnippet(elementId) {
  const codeEl = document.getElementById(elementId);
  if (!codeEl) return;

  const textToCopy = codeEl.innerText;
  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast('Code copied to clipboard!', 'success');
  }).catch(() => {
    showToast('Failed to copy code.', 'error');
  });
}

/* ==========================================================================
   2. JavaScript Topics - Detailed Knowledge Base & Modal Handler
   ========================================================================== */

const topicDetailsData = {
  1: {
    title: "1. Variables (var, let, const)",
    tag: "Core Fundamental",
    overview: "Variables are containers for storing data values. In modern JavaScript (ES6+), `let` and `const` are preferred over `var` due to block scoping and better predictability.",
    explanation: `
      <ul>
        <li><strong><code>var</code></strong>: Function-scoped or globally-scoped. Can be re-declared and updated. Hoisted to the top with an initial value of <code>undefined</code>.</li>
        <li><strong><code>let</code></strong>: Block-scoped <code>{ ... }</code>. Can be updated/re-assigned, but NOT re-declared within the same scope.</li>
        <li><strong><code>const</code></strong>: Block-scoped. Cannot be re-assigned or re-declared. Must be initialized at declaration.</li>
      </ul>
    `,
    codeSnippet: `// 1. var example (avoid in modern code)
var city = "Chennai";
var city = "Bangalore"; // Allowed (can re-declare)

// 2. let example (use when value changes)
let score = 10;
score = 25; // Allowed
// let score = 30; // SyntaxError: Identifier 'score' has already been declared

// 3. const example (use by default for constants & objects/arrays)
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable

const user = { name: "Vignesh" };
user.name = "Alex"; // Allowed! Object mutation is permitted in const.
console.log(score, PI, user.name);`,
    outputPreview: `// Output:
25 3.14159 Alex`,
    keyPoints: [
      "Always default to using `const`.",
      "Use `let` only when you know the variable's value needs to change (e.g., loops, accumulators).",
      "Avoid `var` in modern JavaScript to prevent unintended variable leakage and bugs."
    ]
  },
  2: {
    title: "2. Data Types",
    tag: "Data Modeling",
    overview: "JavaScript is dynamically typed, meaning variables do not hold a fixed static type. Values have types, which are broadly divided into Primitive Types and Reference (Object) Types.",
    explanation: `
      <h6>Primitive Data Types (Immutable, stored by value):</h6>
      <ul>
        <li><code>String</code> - Textual data (e.g. <code>"Hello World"</code>)</li>
        <li><code>Number</code> - Integers and floating-point numbers (e.g. <code>42</code>, <code>3.14</code>)</li>
        <li><code>BigInt</code> - Arbitrary-precision integers for very large numbers</li>
        <li><code>Boolean</code> - Logical entity (<code>true</code> or <code>false</code>)</li>
        <li><code>Undefined</code> - Variable declared but not assigned a value</li>
        <li><code>Null</code> - Intentional absence of any object value</li>
        <li><code>Symbol</code> - Unique, immutable primitive identifier</li>
      </ul>
      <h6>Reference Types (Stored by reference in memory):</h6>
      <ul>
        <li><code>Object</code>, <code>Array</code>, <code>Function</code>, <code>Date</code>, etc.</li>
      </ul>
    `,
    codeSnippet: `// Primitive Types
let name = "John Doe";        // String
let age = 22;                 // Number
let isEnrolled = true;        // Boolean
let salary = null;            // Null (intentional empty)
let grade;                    // Undefined

// Check data types using typeof operator
console.log(typeof name);       // "string"
console.log(typeof age);        // "number"
console.log(typeof isEnrolled); // "boolean"
console.log(typeof salary);     // "object" (historical JS quirk!)
console.log(typeof grade);      // "undefined"

// Reference Types
let skills = ["HTML", "CSS", "JS"]; // Array
let student = { id: 101, name: "Priya" }; // Object
console.log(Array.isArray(skills)); // true`,
    outputPreview: `// Output:
"string"
"number"
"boolean"
"object"
"undefined"
true`,
    keyPoints: [
      "Primitives are copied by value; Objects are copied by reference.",
      "`typeof null` returning `'object'` is a known historical JavaScript behavior.",
      "Use `Array.isArray(variable)` to accurately check if a variable is an array."
    ]
  },
  3: {
    title: "3. Operators",
    tag: "Expressions & Logic",
    overview: "Operators are symbols that perform mathematical calculations, logical evaluations, assignments, and comparisons between operands.",
    explanation: `
      <ul>
        <li><strong>Arithmetic Operators:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulo), <code>**</code> (exponentiation).</li>
        <li><strong>Assignment Operators:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>.</li>
        <li><strong>Comparison Operators:</strong> 
          <code>==</code> (loose equality, converts types), 
          <code>===</code> (strict equality, checks type AND value - Recommended!), 
          <code>!=</code>, <code>!==</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.
        </li>
        <li><strong>Logical Operators:</strong> <code>&amp;&amp;</code> (AND), <code>||</code> (OR), <code>!</code> (NOT), <code>??</code> (Nullish Coalescing).</li>
        <li><strong>Ternary Operator:</strong> <code>condition ? valueIfTrue : valueIfFalse</code>.</li>
      </ul>
    `,
    codeSnippet: `let a = 10;
let b = "10";

// Strict vs Loose Equality
console.log(a == b);   // true (type coercion converts "10" to 10)
console.log(a === b);  // false (types differ: number !== string)

// Logical Operators
let hasLicense = true;
let isAdult = true;
let canDrive = hasLicense && isAdult; // true

// Ternary Operator
let marks = 85;
let result = (marks >= 50) ? "Passed" : "Failed";
console.log("Exam Result:", result);`,
    outputPreview: `// Output:
true
false
Exam Result: Passed`,
    keyPoints: [
      "Always use strict equality `===` and strict inequality `!==` to avoid unexpected type coercion.",
      "Ternary operator provides a clean one-line shorthand for simple `if-else` blocks."
    ]
  },
  4: {
    title: "4. Conditional Statements (if, else)",
    tag: "Control Flow",
    overview: "Conditional statements allow your JavaScript program to execute different blocks of code based on whether a specific condition evaluates to true or false.",
    explanation: `
      <p>JavaScript supports several conditional structures:</p>
      <ul>
        <li><code>if</code> statement: executes code when the condition is true.</li>
        <li><code>else if</code> statement: tests a new condition if the first condition was false.</li>
        <li><code>else</code> statement: executes code when all previous conditions were false.</li>
        <li>Nested conditions: putting <code>if</code> statements inside other <code>if</code> statements.</li>
      </ul>
    `,
    codeSnippet: `let score = 78;
let grade;

if (score >= 90) {
  grade = "A+";
} else if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 50) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log(\`Student Score: \${score}, Grade: \${grade}\`);`,
    outputPreview: `// Output:
Student Score: 78, Grade: B`,
    keyPoints: [
      "Conditions evaluate expressions to truthy or falsy values.",
      "Falsy values in JS: `false`, `0`, `\"\"`, `null`, `undefined`, `NaN`.",
      "Keep conditional branches clean to improve code readability."
    ]
  },
  5: {
    title: "5. Switch Statement",
    tag: "Control Flow",
    overview: "The `switch` statement evaluates an expression against multiple matching `case` clauses, executing statements associated with the first matching case.",
    explanation: `
      <ul>
        <li><strong><code>switch (expression)</code></strong>: The value to compare.</li>
        <li><strong><code>case value:</code></strong>: Matches against the expression using strict equality (<code>===</code>).</li>
        <li><strong><code>break;</code></strong>: Stops execution inside the switch block. If omitted, execution falls through to the next case!</li>
        <li><strong><code>default:</code></strong>: Executes if no cases match.</li>
      </ul>
    `,
    codeSnippet: `let dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
  case 7:
    dayName = "Weekend!";
    break;
  default:
    dayName = "Invalid Day";
}

console.log(\`Day \${dayNumber} is \${dayName}\`);`,
    outputPreview: `// Output:
Day 3 is Wednesday`,
    keyPoints: [
      "Switch statements use strict comparison (`===`).",
      "Don't forget the `break` statement unless you intentionally want a fallthrough behavior.",
      "Switch is great for fixed enum-like values or menu actions."
    ]
  },
  6: {
    title: "6. Loops (for, while, do-while)",
    tag: "Iteration & Repetition",
    overview: "Loops repeatedly execute a block of code until a specified stopping condition is met. They are essential for processing arrays, datasets, and repetitive computations.",
    explanation: `
      <ul>
        <li><strong><code>for</code> loop:</strong> Used when you know in advance how many times the loop should run.</li>
        <li><strong><code>while</code> loop:</strong> Repeats as long as a condition remains true. Evaluates condition before iteration.</li>
        <li><strong><code>do...while</code> loop:</strong> Executes the block at least once before checking the condition.</li>
        <li><strong><code>for...of</code> loop:</strong> Iterates over values of iterable objects like Arrays, Strings, NodeLists.</li>
        <li><strong><code>for...in</code> loop:</strong> Iterates over enumerable properties (keys) of an Object.</li>
      </ul>
    `,
    codeSnippet: `// 1. Classic for loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop count:", i);
}

// 2. while loop
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// 3. Modern for...of loop with array
const fruits = ["Apple", "Mango", "Banana"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}`,
    outputPreview: `// Output:
For loop count: 1
For loop count: 2
For loop count: 3
Countdown: 3
Countdown: 2
Countdown: 1
Fruit: Apple
Fruit: Mango
Fruit: Banana`,
    keyPoints: [
      "Ensure loop increment/decrement conditions progress toward the exit condition to avoid infinite loops.",
      "Use `break` to exit a loop early, and `continue` to skip to the next iteration."
    ]
  },
  7: {
    title: "7. Functions",
    tag: "Modular Programming",
    overview: "Functions are reusable blocks of code designed to perform specific tasks. They take inputs (arguments), execute logic, and can return an output.",
    explanation: `
      <ul>
        <li><strong>Function Declaration:</strong> Hoisted, defined with <code>function name() {}</code>.</li>
        <li><strong>Function Expression:</strong> Assigned to a variable: <code>const add = function() {}</code>.</li>
        <li><strong>Arrow Function (ES6):</strong> Concise syntax: <code>const add = (a, b) =&gt; a + b;</code>. Lexically binds <code>this</code>.</li>
        <li><strong>Default Parameters:</strong> Assign fallback values to parameters if none are passed.</li>
      </ul>
    `,
    codeSnippet: `// 1. Function Declaration
function greetUser(name = "Learner") {
  return \`Welcome to JavaScript, \${name}!\`;
}

// 2. Arrow Function with implicit return
const calculateSquare = num => num * num;

// 3. Arrow Function with multiple parameters
const calculateTotal = (price, taxRate = 0.05) => {
  const tax = price * taxRate;
  return price + tax;
};

console.log(greetUser("Anand"));
console.log("Square of 8:", calculateSquare(8));
console.log("Total Bill:", calculateTotal(100, 0.18));`,
    outputPreview: `// Output:
Welcome to JavaScript, Anand!
Square of 8: 64
Total Bill: 118`,
    keyPoints: [
      "Functions promote DRY (Don't Repeat Yourself) principle and clean architecture.",
      "Arrow functions do not have their own `this`, making them ideal for callbacks and array methods."
    ]
  },
  8: {
    title: "8. Arrays",
    tag: "Data Structures",
    overview: "An Array is an ordered list of values. In JavaScript, arrays can hold elements of mixed data types and offer rich built-in higher-order methods.",
    explanation: `
      <h6>Common Array Methods:</h6>
      <ul>
        <li><code>push()</code> / <code>pop()</code>: Add / remove element at the end.</li>
        <li><code>unshift()</code> / <code>shift()</code>: Add / remove element at the beginning.</li>
        <li><code>includes()</code> / <code>indexOf()</code>: Search for elements.</li>
        <li><code>map()</code>: Transforms each element into a new array.</li>
        <li><code>filter()</code>: Creates a new array with elements that pass a test condition.</li>
        <li><code>reduce()</code>: Reduces an array to a single cumulative value.</li>
      </ul>
    `,
    codeSnippet: `const numbers = [1, 2, 3, 4, 5, 6];

// 1. Map: Double all numbers
const doubled = numbers.map(n => n * 2);

// 2. Filter: Only even numbers
const evens = numbers.filter(n => n % 2 === 0);

// 3. Reduce: Sum of all numbers
const totalSum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Total Sum:", totalSum);`,
    outputPreview: `// Output:
Doubled: [2, 4, 6, 8, 10, 12]
Evens: [2, 4, 6]
Total Sum: 21`,
    keyPoints: [
      "Array indices start at 0.",
      "Methods like `.map()` and `.filter()` do not mutate the original array; they return fresh new arrays.",
      "Arrays are objects with numerical keys and a special `length` property."
    ]
  },
  9: {
    title: "9. Objects",
    tag: "Data Structures",
    overview: "Objects are key-value pairs used to store structured data and complex entities. Keys are strings (or symbols) and values can be any type, including other objects or functions (methods).",
    explanation: `
      <ul>
        <li><strong>Object Literals:</strong> <code>{ key: value }</code> syntax.</li>
        <li><strong>Accessing Properties:</strong> Dot notation (<code>obj.prop</code>) or bracket notation (<code>obj["prop"]</code>).</li>
        <li><strong>Methods:</strong> Functions stored as object properties.</li>
        <li><strong>Destructuring:</strong> Extract properties easily: <code>const { name, age } = person;</code>.</li>
      </ul>
    `,
    codeSnippet: `const course = {
  title: "Modern JavaScript Bootcamp",
  instructor: "Kavitha",
  lessonsCount: 45,
  isPublished: true,
  topics: ["ES6", "DOM", "Async JS"],
  
  // Object Method
  getSummary() {
    return \`"\${this.title}" by \${this.instructor} (\${this.lessonsCount} lessons)\`;
  }
};

// Accessing properties
console.log(course.getSummary());

// Object Destructuring
const { title, instructor } = course;
console.log(\`Course: \${title} | Teacher: \${instructor}\`);`,
    outputPreview: `// Output:
"Modern JavaScript Bootcamp" by Kavitha (45 lessons)
Course: Modern JavaScript Bootcamp | Teacher: Kavitha`,
    keyPoints: [
      "Use bracket notation when property names contain spaces, special characters, or are dynamic variables.",
      "ES6 destructuring and spread operator (`...`) make working with objects fast and clean."
    ]
  },
  10: {
    title: "10. DOM Manipulation",
    tag: "Web APIs & Browser",
    overview: "The Document Object Model (DOM) is a tree-like representation of HTML. JavaScript uses DOM methods to dynamically select, create, modify, and style HTML elements and react to user events.",
    explanation: `
      <h6>Core DOM Operations:</h6>
      <ul>
        <li><strong>Selecting Elements:</strong> <code>document.getElementById()</code>, <code>document.querySelector()</code>, <code>document.querySelectorAll()</code>.</li>
        <li><strong>Modifying Content:</strong> <code>element.textContent</code>, <code>element.innerHTML</code>.</li>
        <li><strong>Modifying Styles & Classes:</strong> <code>element.classList.add()</code>, <code>element.classList.remove()</code>, <code>element.classList.toggle()</code>.</li>
        <li><strong>Event Listeners:</strong> <code>element.addEventListener("click", callbackFunction)</code>.</li>
      </ul>
    `,
    codeSnippet: `// 1. Select element
const heading = document.querySelector("#mainHeading");
const button = document.querySelector("#changeColorBtn");

// 2. Add Event Listener to trigger dynamic change
button.addEventListener("click", () => {
  // Update text
  heading.textContent = "JavaScript is Awesome!";
  
  // Toggle CSS class
  heading.classList.toggle("text-primary");
  
  console.log("Heading updated successfully!");
});`,
    outputPreview: `// Browser Action:
// Clicking the button updates the heading text to "JavaScript is Awesome!" and applies blue color dynamically.`,
    keyPoints: [
      "Always prefer `textContent` over `innerHTML` when inserting untrusted plain text to prevent XSS (Cross-Site Scripting).",
      "Event listeners allow asynchronous, interactive responses to clicks, key presses, form submissions, and scrolls."
    ]
  }
};

/**
 * Open Topic Modal with Detailed Concept Notes
 */
function openTopicModal(topicId) {
  const topic = topicDetailsData[topicId];
  if (!topic) return;

  const modalTitle = document.getElementById('topicModalTitle');
  const modalTag = document.getElementById('topicModalTag');
  const modalOverview = document.getElementById('topicModalOverview');
  const modalExplanation = document.getElementById('topicModalExplanation');
  const modalCode = document.getElementById('topicModalCode');
  const modalOutput = document.getElementById('topicModalOutput');
  const modalKeyPoints = document.getElementById('topicModalKeyPoints');

  modalTitle.textContent = topic.title;
  modalTag.textContent = topic.tag;
  modalOverview.textContent = topic.overview;
  modalExplanation.innerHTML = topic.explanation;
  modalCode.textContent = topic.codeSnippet;
  modalOutput.textContent = topic.outputPreview;

  // Render Key Points
  modalKeyPoints.innerHTML = topic.keyPoints.map(point => `<li><i class="bi bi-check2-circle text-primary me-2"></i>${point}</li>`).join('');

  // Show Bootstrap Modal
  const modalElement = document.getElementById('topicDetailModal');
  const bootstrapModal = new bootstrap.Modal(modalElement);
  bootstrapModal.show();
}

/* ==========================================================================
   3. Logical Programs - Interactive Solvers & Handlers
   ========================================================================== */

/**
 * Helper to update program terminal output
 */
function setProgramOutput(outputId, text, isError = false) {
  const outEl = document.getElementById(outputId);
  if (!outEl) return;

  outEl.classList.remove('output-error', 'output-muted');
  if (isError) {
    outEl.classList.add('output-error');
    outEl.textContent = `[Error] ${text}`;
  } else {
    outEl.textContent = `> ${text}`;
  }
}

/**
 * Helper to reset output
 */
function resetProgramOutput(outputId, defaultText = "Click 'Run Code' to execute.") {
  const outEl = document.getElementById(outputId);
  if (!outEl) return;
  outEl.classList.remove('output-error');
  outEl.classList.add('output-muted');
  outEl.textContent = defaultText;
}

// --------------------------------------------------------------------------
// Program 1: Check Odd or Even
// --------------------------------------------------------------------------
function runOddEven() {
  const input = document.getElementById('prog1Input').value.trim();
  if (input === '') {
    setProgramOutput('prog1Output', 'Please enter a number.', true);
    return;
  }
  const num = Number(input);
  if (isNaN(num)) {
    setProgramOutput('prog1Output', 'Invalid input! Please enter a valid number.', true);
    return;
  }
  
  if (num % 2 === 0) {
    setProgramOutput('prog1Output', `Result: ${num} is an EVEN number.`);
  } else {
    setProgramOutput('prog1Output', `Result: ${num} is an ODD number.`);
  }
}

function resetOddEven() {
  document.getElementById('prog1Input').value = '17';
  resetProgramOutput('prog1Output');
}

// --------------------------------------------------------------------------
// Program 2: Find Largest Number
// --------------------------------------------------------------------------
function runLargestNumber() {
  const val1 = document.getElementById('prog2Input1').value.trim();
  const val2 = document.getElementById('prog2Input2').value.trim();
  const val3 = document.getElementById('prog2Input3').value.trim();

  if (val1 === '' || val2 === '' || val3 === '') {
    setProgramOutput('prog2Output', 'Please enter all three numbers.', true);
    return;
  }

  const n1 = Number(val1);
  const n2 = Number(val2);
  const n3 = Number(val3);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    setProgramOutput('prog2Output', 'Please enter valid numerical values.', true);
    return;
  }

  let largest;
  if (n1 >= n2 && n1 >= n3) {
    largest = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    largest = n2;
  } else {
    largest = n3;
  }

  setProgramOutput('prog2Output', `Comparison: [${n1}, ${n2}, ${n3}]\nThe largest number is: ${largest}`);
}

function resetLargestNumber() {
  document.getElementById('prog2Input1').value = '45';
  document.getElementById('prog2Input2').value = '92';
  document.getElementById('prog2Input3').value = '18';
  resetProgramOutput('prog2Output');
}

// --------------------------------------------------------------------------
// Program 3: Find Smallest Number
// --------------------------------------------------------------------------
function runSmallestNumber() {
  const val1 = document.getElementById('prog3Input1').value.trim();
  const val2 = document.getElementById('prog3Input2').value.trim();
  const val3 = document.getElementById('prog3Input3').value.trim();

  if (val1 === '' || val2 === '' || val3 === '') {
    setProgramOutput('prog3Output', 'Please enter all three numbers.', true);
    return;
  }

  const n1 = Number(val1);
  const n2 = Number(val2);
  const n3 = Number(val3);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    setProgramOutput('prog3Output', 'Please enter valid numerical values.', true);
    return;
  }

  const smallest = Math.min(n1, n2, n3);
  setProgramOutput('prog3Output', `Comparison: [${n1}, ${n2}, ${n3}]\nThe smallest number is: ${smallest}`);
}

function resetSmallestNumber() {
  document.getElementById('prog3Input1').value = '24';
  document.getElementById('prog3Input2').value = '12';
  document.getElementById('prog3Input3').value = '56';
  resetProgramOutput('prog3Output');
}

// --------------------------------------------------------------------------
// Program 4: Check Positive, Negative, or Zero
// --------------------------------------------------------------------------
function runPositiveNegative() {
  const input = document.getElementById('prog4Input').value.trim();
  if (input === '') {
    setProgramOutput('prog4Output', 'Please enter a number.', true);
    return;
  }
  const num = Number(input);
  if (isNaN(num)) {
    setProgramOutput('prog4Output', 'Please enter a valid numeric value.', true);
    return;
  }

  let result;
  if (num > 0) {
    result = `${num} is a POSITIVE number (+).`;
  } else if (num < 0) {
    result = `${num} is a NEGATIVE number (-).`;
  } else {
    result = `${num} is ZERO (0).`;
  }

  setProgramOutput('prog4Output', `Result: ${result}`);
}

function resetPositiveNegative() {
  document.getElementById('prog4Input').value = '-25';
  resetProgramOutput('prog4Output');
}

// --------------------------------------------------------------------------
// Program 5: Calculate Factorial
// --------------------------------------------------------------------------
function runFactorial() {
  const input = document.getElementById('prog5Input').value.trim();
  if (input === '') {
    setProgramOutput('prog5Output', 'Please enter a non-negative integer.', true);
    return;
  }
  const n = Number(input);
  if (isNaN(n) || !Number.isInteger(n) || n < 0) {
    setProgramOutput('prog5Output', 'Factorial is defined for positive integers and 0.', true);
    return;
  }
  if (n > 20) {
    setProgramOutput('prog5Output', 'Please enter a number <= 20 to prevent numeric overflow.', true);
    return;
  }

  let factorial = 1;
  let calculationSteps = [];
  for (let i = n; i >= 1; i--) {
    factorial *= i;
    calculationSteps.push(i);
  }

  const formula = n === 0 ? "1" : calculationSteps.join(" × ");
  setProgramOutput('prog5Output', `${n}! = ${formula} = ${factorial.toLocaleString()}`);
}

function resetFactorial() {
  document.getElementById('prog5Input').value = '5';
  resetProgramOutput('prog5Output');
}

// --------------------------------------------------------------------------
// Program 6: Generate Multiplication Table
// --------------------------------------------------------------------------
function runMultiplicationTable() {
  const numVal = document.getElementById('prog6Num').value.trim();
  const limitVal = document.getElementById('prog6Limit').value.trim();

  if (numVal === '' || limitVal === '') {
    setProgramOutput('prog6Output', 'Please enter both table number and range limit.', true);
    return;
  }

  const num = Number(numVal);
  const limit = Number(limitVal);

  if (isNaN(num) || isNaN(limit) || limit < 1 || limit > 50) {
    setProgramOutput('prog6Output', 'Please enter valid numbers (Limit between 1 and 50).', true);
    return;
  }

  let lines = [`=== Multiplication Table for ${num} ===`];
  for (let i = 1; i <= limit; i++) {
    lines.push(`${num} × ${i} = ${num * i}`);
  }

  setProgramOutput('prog6Output', lines.join('\n'));
}

function resetMultiplicationTable() {
  document.getElementById('prog6Num').value = '7';
  document.getElementById('prog6Limit').value = '5';
  resetProgramOutput('prog6Output');
}

// --------------------------------------------------------------------------
// Program 7: Reverse a String
// --------------------------------------------------------------------------
function runReverseString() {
  const str = document.getElementById('prog7Input').value;
  if (!str) {
    setProgramOutput('prog7Output', 'Please enter a string to reverse.', true);
    return;
  }

  // Algorithm 1: Built-in methods
  const reversed = str.split('').reverse().join('');
  
  setProgramOutput('prog7Output', `Original String: "${str}"\nReversed String: "${reversed}"\nTotal Length   : ${str.length} characters`);
}

function resetReverseString() {
  document.getElementById('prog7Input').value = 'JavaScript';
  resetProgramOutput('prog7Output');
}

// --------------------------------------------------------------------------
// Program 8: Check Palindrome
// --------------------------------------------------------------------------
function runPalindrome() {
  const rawInput = document.getElementById('prog8Input').value.trim();
  if (rawInput === '') {
    setProgramOutput('prog8Output', 'Please enter a word, phrase, or number.', true);
    return;
  }

  // Clean string (ignore spaces, lowercase)
  const cleaned = rawInput.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  const isPalindrome = cleaned === reversed;

  if (isPalindrome) {
    setProgramOutput('prog8Output', `Input: "${rawInput}"\nNormalized: "${cleaned}"\nReversed  : "${reversed}"\nResult: YES! It is a PALINDROME.`);
  } else {
    setProgramOutput('prog8Output', `Input: "${rawInput}"\nNormalized: "${cleaned}"\nReversed  : "${reversed}"\nResult: NO, it is NOT a palindrome.`);
  }
}

function resetPalindrome() {
  document.getElementById('prog8Input').value = 'madam';
  resetProgramOutput('prog8Output');
}

// --------------------------------------------------------------------------
// Program 9: Sum of Array Elements
// --------------------------------------------------------------------------
function runArraySum() {
  const input = document.getElementById('prog9Input').value.trim();
  if (input === '') {
    setProgramOutput('prog9Output', 'Please enter comma-separated numbers.', true);
    return;
  }

  const rawArray = input.split(',').map(item => item.trim()).filter(item => item !== '');
  const numbers = rawArray.map(Number);

  if (numbers.some(isNaN)) {
    setProgramOutput('prog9Output', 'Array contains invalid non-numeric values. Use format: 10, 20, 30', true);
    return;
  }

  if (numbers.length === 0) {
    setProgramOutput('prog9Output', 'Array cannot be empty.', true);
    return;
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = (sum / numbers.length).toFixed(2);

  setProgramOutput('prog9Output', `Array Elements : [${numbers.join(', ')}]\nElement Count  : ${numbers.length}\nTotal Sum      : ${sum}\nAverage Value  : ${average}`);
}

function resetArraySum() {
  document.getElementById('prog9Input').value = '10, 25, 40, 5, 80';
  resetProgramOutput('prog9Output');
}

// --------------------------------------------------------------------------
// Program 10: Count Even Numbers in an Array
// --------------------------------------------------------------------------
function runCountEven() {
  const input = document.getElementById('prog10Input').value.trim();
  if (input === '') {
    setProgramOutput('prog10Output', 'Please enter comma-separated numbers.', true);
    return;
  }

  const rawArray = input.split(',').map(item => item.trim()).filter(item => item !== '');
  const numbers = rawArray.map(Number);

  if (numbers.some(isNaN)) {
    setProgramOutput('prog10Output', 'Array contains invalid values. Please provide numbers separated by commas.', true);
    return;
  }

  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const oddNumbers = numbers.filter(num => num % 2 !== 0);

  setProgramOutput('prog10Output', `Input Array   : [${numbers.join(', ')}]\nEven Elements : [${evenNumbers.join(', ')}]\nEven Count    : ${evenNumbers.length}\nOdd Count     : ${oddNumbers.length}`);
}

function resetCountEven() {
  document.getElementById('prog10Input').value = '12, 7, 18, 25, 40, 9, 62';
  resetProgramOutput('prog10Output');
}

/* ==========================================================================
   4. Practice Arena - Question Bank & Interactive Code Runner
   ========================================================================== */

const practiceQuestions = {
  1: {
    topic: "Variables & Scope",
    badge: "Easy",
    title: "1. Declare and Swap Two Variables",
    description: "Write a JavaScript function named <code>swapNumbers(a, b)</code> that swaps the values of two numbers and returns an array with the swapped values <code>[b, a]</code>.",
    sampleIO: "Input: swapNumbers(5, 10)\nExpected Output: [10, 5]",
    starterCode: `function swapNumbers(a, b) {
  // Write your code here to swap a and b
  let temp = a;
  a = b;
  b = temp;
  
  return [a, b];
}`,
    hint: "You can use a temporary third variable, or modern ES6 destructuring: [a, b] = [b, a].",
    testCases: [
      { input: [5, 10], expected: [10, 5] },
      { input: [100, 200], expected: [200, 100] },
      { input: [-1, 7], expected: [7, -1] }
    ],
    validate: (userFn) => {
      return userFn(5, 10)[0] === 10 && userFn(5, 10)[1] === 5;
    }
  },
  2: {
    topic: "Conditional Statements",
    badge: "Easy",
    title: "2. Check Voting Eligibility",
    description: "Create a function <code>isEligibleToVote(age)</code> that takes an age as input and returns <code>true</code> if age is 18 or older, and <code>false</code> otherwise.",
    sampleIO: "Input: isEligibleToVote(20) -> true\nInput: isEligibleToVote(16) -> false",
    starterCode: `function isEligibleToVote(age) {
  // Return true if age >= 18, else return false
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}`,
    hint: "You can simply return the expression: return age >= 18;",
    testCases: [
      { input: 20, expected: true },
      { input: 16, expected: false },
      { input: 18, expected: true }
    ],
    validate: (userFn) => {
      return userFn(20) === true && userFn(16) === false && userFn(18) === true;
    }
  },
  3: {
    topic: "Loops & Iterations",
    badge: "Medium",
    title: "3. Sum of Natural Numbers up to N",
    description: "Write a function <code>sumUpTo(n)</code> that calculates and returns the sum of all natural numbers from 1 to <code>n</code> using a loop.",
    sampleIO: "Input: sumUpTo(5) -> 15 (1 + 2 + 3 + 4 + 5 = 15)",
    starterCode: `function sumUpTo(n) {
  let total = 0;
  // Use a loop from 1 to n to accumulate total
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}`,
    hint: "Use a `for` loop starting from `i = 1` up to `i <= n` and add `i` to accumulator `total`.",
    testCases: [
      { input: 5, expected: 15 },
      { input: 10, expected: 55 },
      { input: 1, expected: 1 }
    ],
    validate: (userFn) => {
      return userFn(5) === 15 && userFn(10) === 55 && userFn(1) === 1;
    }
  },
  4: {
    topic: "Functions",
    badge: "Easy",
    title: "4. Convert Celsius to Fahrenheit",
    description: "Write a function <code>celsiusToFahrenheit(celsius)</code> that converts temperature from Celsius to Fahrenheit using the formula: <code>(celsius * 9/5) + 32</code>.",
    sampleIO: "Input: celsiusToFahrenheit(0) -> 32\nInput: celsiusToFahrenheit(100) -> 212",
    starterCode: `function celsiusToFahrenheit(celsius) {
  // Apply formula: (celsius * 9 / 5) + 32
  return (celsius * 9 / 5) + 32;
}`,
    hint: "Multiply celsius by 9/5 and add 32.",
    testCases: [
      { input: 0, expected: 32 },
      { input: 100, expected: 212 },
      { input: 25, expected: 77 }
    ],
    validate: (userFn) => {
      return userFn(0) === 32 && userFn(100) === 212 && userFn(25) === 77;
    }
  },
  5: {
    topic: "Arrays",
    badge: "Medium",
    title: "5. Find Maximum Element in Array",
    description: "Write a function <code>findMax(arr)</code> that takes an array of numbers and returns the maximum number present in the array without using built-in <code>Math.max</code>.",
    sampleIO: "Input: findMax([3, 17, 9, 24, 8]) -> 24",
    starterCode: `function findMax(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}`,
    hint: "Initialize `max` with the first array element `arr[0]`, loop through the remaining items, and update `max` whenever an item is greater.",
    testCases: [
      { input: [3, 17, 9, 24, 8], expected: 24 },
      { input: [-10, -5, -2], expected: -2 }
    ],
    validate: (userFn) => {
      return userFn([3, 17, 9, 24, 8]) === 24 && userFn([-10, -5, -2]) === -2;
    }
  },
  6: {
    topic: "Strings & Logic",
    badge: "Medium",
    title: "6. Count Vowels in a String",
    description: "Write a function <code>countVowels(str)</code> that takes a string and returns the total number of vowels (<code>a, e, i, o, u</code> - case insensitive) in it.",
    sampleIO: "Input: countVowels('JavaScript') -> 3 (a, a, i)",
    starterCode: `function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}`,
    hint: "Convert string to lowercase or check if character is in 'aeiouAEIOU'.",
    testCases: [
      { input: 'JavaScript', expected: 3 },
      { input: 'HELLO', expected: 2 },
      { input: 'rhythm', expected: 0 }
    ],
    validate: (userFn) => {
      return userFn('JavaScript') === 3 && userFn('HELLO') === 2 && userFn('rhythm') === 0;
    }
  }
};

let currentPracticeId = 1;

function initPracticeArena() {
  loadPracticeQuestion(1);

  const selectEl = document.getElementById('practiceTopicSelect');
  if (selectEl) {
    selectEl.addEventListener('change', (e) => {
      loadPracticeQuestion(Number(e.target.value));
    });
  }
}

function loadPracticeQuestion(questionId) {
  const q = practiceQuestions[questionId];
  if (!q) return;

  currentPracticeId = questionId;

  document.getElementById('practiceBadge').textContent = `${q.topic} • ${q.badge}`;
  document.getElementById('practiceTitle').innerHTML = q.title;
  document.getElementById('practiceDesc').innerHTML = q.description;
  document.getElementById('practiceSampleIO').textContent = q.sampleIO;
  document.getElementById('practiceCodeArea').value = q.starterCode;

  // Hide result & hint
  const resBox = document.getElementById('practiceResultBox');
  resBox.style.display = 'none';
  resBox.className = 'practice-result-box';
  
  const hintBox = document.getElementById('practiceHintBox');
  hintBox.style.display = 'none';
  hintBox.textContent = `💡 Hint: ${q.hint}`;
}

function togglePracticeHint() {
  const hintBox = document.getElementById('practiceHintBox');
  if (hintBox.style.display === 'block') {
    hintBox.style.display = 'none';
  } else {
    hintBox.style.display = 'block';
  }
}

function resetPracticeCode() {
  const q = practiceQuestions[currentPracticeId];
  if (q) {
    document.getElementById('practiceCodeArea').value = q.starterCode;
    const resBox = document.getElementById('practiceResultBox');
    resBox.style.display = 'none';
    showToast('Code reset to starter template.', 'info');
  }
}

/**
 * Executes and tests student code safely
 */
function submitPracticeCode() {
  const q = practiceQuestions[currentPracticeId];
  const userCode = document.getElementById('practiceCodeArea').value;
  const resBox = document.getElementById('practiceResultBox');

  resBox.style.display = 'block';

  try {
    // Dynamically evaluate user function definition
    // Wrap in function constructor to isolate scope
    const evalUserScript = new Function(`${userCode}; 
      if (typeof swapNumbers !== 'undefined') return swapNumbers;
      if (typeof isEligibleToVote !== 'undefined') return isEligibleToVote;
      if (typeof sumUpTo !== 'undefined') return sumUpTo;
      if (typeof celsiusToFahrenheit !== 'undefined') return celsiusToFahrenheit;
      if (typeof findMax !== 'undefined') return findMax;
      if (typeof countVowels !== 'undefined') return countVowels;
      return null;
    `);

    const userFunction = evalUserScript();

    if (typeof userFunction !== 'function') {
      resBox.className = 'practice-result-box result-error';
      resBox.innerHTML = `
        <div class="d-flex align-items-center gap-2 mb-1">
          <i class="bi bi-x-circle-fill text-danger fs-5"></i>
          <strong>Function Not Found!</strong>
        </div>
        <p class="mb-0">Make sure your function has the correct name as requested in the problem description.</p>
      `;
      return;
    }

    // Run validation against test cases
    let allPassed = true;
    let feedbackLog = [];

    q.testCases.forEach((tc, idx) => {
      let result;
      if (Array.isArray(tc.input) && tc.input.length === 2 && currentPracticeId === 1) {
        result = userFunction(tc.input[0], tc.input[1]);
      } else {
        result = userFunction(tc.input);
      }

      // Check result comparison
      let isMatch = false;
      if (Array.isArray(tc.expected)) {
        isMatch = Array.isArray(result) && result[0] === tc.expected[0] && result[1] === tc.expected[1];
      } else {
        isMatch = result === tc.expected;
      }

      if (isMatch) {
        feedbackLog.push(`Test Case #${idx + 1}: Passed (Output: ${JSON.stringify(result)})`);
      } else {
        allPassed = false;
        feedbackLog.push(`Test Case #${idx + 1}: Failed (Expected: ${JSON.stringify(tc.expected)}, Got: ${JSON.stringify(result)})`);
      }
    });

    if (allPassed) {
      resBox.className = 'practice-result-box result-success';
      resBox.innerHTML = `
        <div class="d-flex align-items-center gap-2 mb-2">
          <i class="bi bi-check-circle-fill text-success fs-5"></i>
          <strong>Congratulations! All Test Cases Passed!</strong>
        </div>
        <pre class="mb-0 text-dark bg-white p-2 rounded border font-monospace" style="font-size:0.85rem">${feedbackLog.join('\n')}</pre>
      `;
      showToast('Great job! Solution accepted.', 'success');
    } else {
      resBox.className = 'practice-result-box result-error';
      resBox.innerHTML = `
        <div class="d-flex align-items-center gap-2 mb-2">
          <i class="bi bi-exclamation-triangle-fill text-danger fs-5"></i>
          <strong>Some Test Cases Failed. Check your logic:</strong>
        </div>
        <pre class="mb-0 text-dark bg-white p-2 rounded border font-monospace" style="font-size:0.85rem">${feedbackLog.join('\n')}</pre>
      `;
      showToast('Some test cases failed. Please review.', 'error');
    }
  } catch (err) {
    resBox.className = 'practice-result-box result-error';
    resBox.innerHTML = `
      <div class="d-flex align-items-center gap-2 mb-1">
        <i class="bi bi-bug-fill text-danger fs-5"></i>
        <strong>JavaScript Runtime / Syntax Error:</strong>
      </div>
      <pre class="mb-0 text-danger bg-white p-2 rounded border font-monospace" style="font-size:0.85rem">${err.name}: ${err.message}</pre>
    `;
    showToast('Code execution error.', 'error');
  }
}
