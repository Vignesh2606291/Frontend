/**
 * DevScript Enterprise - Configuration & Datastore
 * Centralized data store for JavaScript educational portal
 */

window.AppConfig = {
  appTitle: "DevScript Enterprise",
  version: "2.4.0",
  author: "Enterprise Web Architecture Team",
  
  // Frameworks & Technologies Data
  technologies: [
    {
      id: "javascript",
      name: "JavaScript (Core ES6+)",
      category: "core",
      badge: "Language Core",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      iconSvg: `<svg class="w-7 h-7 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.546-.237-1.077-.444-1.503-.687-.417-.238-.59-.444-.59-.75 0-.394.3-.655.856-.655.518 0 .866.196 1.139.57.147.202.261.476.324.773l1.838-.415c-.173-.699-.54-1.282-1.07-1.688-.638-.49-1.464-.72-2.38-.72-1.042 0-1.916.314-2.483.896-.549.563-.827 1.309-.827 2.115 0 .827.279 1.503.804 1.984.582.534 1.399.882 2.373 1.258.647.25 1.189.497 1.508.769.313.267.458.583.458.98 0 .49-.379.845-1.055.845-.694 0-1.127-.333-1.399-.906-.153-.321-.242-.71-.247-1.161l-1.892.296c.106.902.482 1.625 1.123 2.138.681.545 1.579.805 2.583.805 1.199 0 2.176-.328 2.782-.937.589-.594.887-1.378.887-2.264 0-.38-.066-.75-.199-1.074zm-6.273-5.289h-2.19v6.525c0 .99-.187 1.597-.563 1.954-.383.364-.982.502-1.745.502-.452 0-.901-.061-1.308-.182v-1.722c.304.097.636.146.953.146.402 0 .685-.098.815-.282.115-.162.164-.476.164-1.002V11.418h-2.19V9.6h6.064v1.818z"/></svg>`,
      description: "The universal programming language of the web. Drives dynamic client-side experiences and powers server environments with high-speed JIT execution engines (V8, SpiderMonkey).",
      features: ["ES2024 Modern Syntax", "First-Class Functions", "Prototypes & Classes", "Event-Driven Engine"],
      popularUse: "Standard Web Standards, DOM Logic, Web APIs",
      stats: "98.7% of all active websites"
    },
    {
      id: "react",
      name: "React.js",
      category: "frontend",
      badge: "UI Library",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      iconSvg: `<svg class="w-7 h-7 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(90 12 12)"/><ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(150 12 12)"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`,
      description: "Meta's declarative, component-based frontend library utilizing a high-efficiency Virtual DOM reconciliation engine for predictable UI state management and blazing fast rendering.",
      features: ["Virtual DOM Diffing", "Hooks & State Logic", "Component Reusability", "Next-gen Server Components"],
      popularUse: "Enterprise SaaS, SPAs, High-interaction UIs",
      stats: "215k+ GitHub Stars • Meta Backed"
    },
    {
      id: "angular",
      name: "Angular",
      category: "frontend",
      badge: "Enterprise MVC",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
      iconSvg: `<svg class="w-7 h-7 text-red-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 5.5l1.5 13L12 22l8.5-3.5 1.5-13L12 2zm0 3.2l5.7 12.3h-2.1l-1.2-3H9.6l-1.2 3H6.3L12 5.2zm2.1 7.6L12 7.7l-2.1 5.1h4.2z"/></svg>`,
      description: "Google's comprehensive, battery-included TypeScript framework designed for scalable, maintainable enterprise web architectures with built-in Dependency Injection and Reactive Signals.",
      features: ["Dependency Injection", "TypeScript Native", "Signals & RxJS", "Modular Architecture"],
      popularUse: "Banking Portals, ERP Systems, Large Corporate Platforms",
      stats: "Enterprise Favorite • Google Backed"
    },
    {
      id: "vue",
      name: "Vue.js",
      category: "frontend",
      badge: "Progressive Framework",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      iconSvg: `<svg class="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M2 3h3.5L12 14.2 18.5 3H22L12 20.3 2 3zm4.5 0h3L12 7.5 14.5 3h3L12 11.5 6.5 3z"/></svg>`,
      description: "A progressive, approachable framework designed for seamless incremental adoption. Combines reactive 2-way data binding with a powerful Composition API and lightweight runtime.",
      features: ["Reactive Reactivity System", "Composition API", "Single-File Components (SFC)", "Ultra-compact Bundle"],
      popularUse: "Rapid Prototyping, Modern Web Apps, Interactive Dashboards",
      stats: "207k+ GitHub Stars • Global Community"
    },
    {
      id: "node",
      name: "Node.js",
      category: "backend",
      badge: "Server Runtime",
      badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
      iconSvg: `<svg class="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.7v8.6l7.5 4.3 7.5-4.3V8.7L12 4.3zm-.1 3.5c1.8 0 3.2 1 3.2 2.7 0 1.2-.7 2-1.7 2.4.9.4 1.6 1.2 1.6 2.3 0 1.8-1.5 2.9-3.4 2.9h-3.4v-10.3h3.7zm-.6 1.9h-1.3v2.6h1.3c.7 0 1.3-.4 1.3-1.3 0-.9-.6-1.3-1.3-1.3zm.2 4.3h-1.5v2.8h1.5c.8 0 1.4-.4 1.4-1.4 0-1-.6-1.4-1.4-1.4z"/></svg>`,
      description: "An open-source, cross-platform runtime environment built on Google Chrome's V8 engine. Executes asynchronous non-blocking event-driven JavaScript for high-throughput server backends.",
      features: ["Non-blocking Async I/O", "npm Package Ecosystem", "Microservice Ready", "High Concurrency"],
      popularUse: "REST/GraphQL APIs, Real-Time Sockets, Streaming Services",
      stats: "Powers 50M+ Server Instances Worldwide"
    },
    {
      id: "express",
      name: "Express.js",
      category: "backend",
      badge: "Backend Micro-Framework",
      badgeColor: "bg-slate-400/10 text-slate-300 border-slate-400/20",
      iconSvg: `<svg class="w-7 h-7 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h10"/><circle cx="19" cy="17" r="2"/></svg>`,
      description: "Fast, unopinionated, minimalist web framework for Node.js. Provides a robust suite of routing and middleware features for building high-performance web applications and REST APIs.",
      features: ["Middleware Pipeline", "Ultra-fast HTTP Routing", "Plug-and-play Template Engines", "Minimalist Overhead"],
      popularUse: "Backend Microservices, API Gateways, Fullstack Backends",
      stats: "30M+ Weekly npm Downloads"
    }
  ],

  // Code Playground Presets
  playgroundPresets: {
    dom: {
      title: "1. Dynamic DOM & Style Mutator",
      category: "DOM Manipulation",
      code: `// Select target DOM elements
const card = document.getElementById("demo-card");
const title = document.getElementById("demo-title");
const statusBadge = document.getElementById("demo-status");

// Dynamically mutate DOM properties and CSS classes
title.innerText = "⚡ Interactive JavaScript State Applied!";
title.className = "text-xl font-bold text-sky-400 transition-all duration-300";

statusBadge.innerText = "ACTIVE • DOM UPDATED";
statusBadge.className = "px-3 py-1 text-xs font-semibold rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/40 inline-flex items-center gap-1.5";

// Append dynamic child elements with inline animations
const logEntry = document.createElement("p");
logEntry.className = "text-xs text-slate-400 mt-3 pt-2 border-t border-slate-700/60 flex items-center gap-2";
logEntry.innerHTML = \`<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Timestamp: \${new Date().toLocaleTimeString()} • DOM node updated via Event Handler\`;

// Remove previous dynamic logs if any
const existingLog = card.querySelector(".dynamic-log");
if (existingLog) existingLog.remove();

logEntry.classList.add("dynamic-log");
card.appendChild(logEntry);

console.log("DOM Manipulation successfully executed at", new Date().toISOString());`,
      htmlPreview: `<div id="demo-card" class="p-6 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white shadow-xl transition-all duration-300">
  <div class="flex items-center justify-between mb-3">
    <span id="demo-status" class="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-400 border border-slate-700">DEFAULT STATE</span>
    <span class="text-xs text-slate-500 font-mono">ID: #demo-card</span>
  </div>
  <h4 id="demo-title" class="text-lg font-semibold text-slate-200">Click 'Try It' to Mutate This Element</h4>
  <p class="text-xs text-slate-400 mt-1">JavaScript directly updates the document object model in real-time without refreshing.</p>
</div>`
    },

    counter: {
      title: "2. Event Handling & Real-time State",
      category: "Event Handling",
      code: `// Initialize reactive counter state
let count = parseInt(window.counterState || "0") + 1;
window.counterState = count;

const countDisplay = document.getElementById("counter-num");
const barProgress = document.getElementById("counter-bar");
const badge = document.getElementById("click-badge");

// Animate count number
countDisplay.innerText = count;
countDisplay.classList.add("scale-125", "text-emerald-400");
setTimeout(() => countDisplay.classList.remove("scale-125", "text-emerald-400"), 200);

// Calculate percentage and update CSS width dynamically
const pct = Math.min((count % 10) * 10, 100);
barProgress.style.width = \`\${pct === 0 ? 100 : pct}%\`;

badge.innerText = \`Total Events Dispatched: \${count}\`;
console.log(\`[Event] Button Click Handled -> State Count: \${count}\`);`,
      htmlPreview: `<div class="p-6 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white shadow-xl">
  <div class="flex items-center justify-between mb-4">
    <span id="click-badge" class="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Total Events Dispatched: 0</span>
    <span class="text-xs text-slate-400 font-mono">EventListener API</span>
  </div>
  <div class="flex items-baseline gap-3 mb-3">
    <span id="counter-num" class="text-4xl font-extrabold text-white transition-transform duration-200">0</span>
    <span class="text-xs text-slate-400 font-medium">Interactions Recorded</span>
  </div>
  <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
    <div id="counter-bar" class="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
  </div>
</div>`
    },

    asyncApi: {
      title: "3. Asynchronous Promises & Mock API Fetch",
      category: "Async Programming",
      code: `const outputDiv = document.getElementById("api-result");
const spinner = document.getElementById("api-spinner");

// Indicate loading state
outputDiv.innerHTML = '<span class="text-sky-400 font-mono animate-pulse">⏳ Dispatching asynchronous HTTP Promise request...</span>';

// Mock asynchronous API call with async/await
async function fetchUserData() {
  console.log("[Network] Sending asynchronous GET /api/v1/user/telemetry...");
  
  // Simulating 800ms network latency
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const mockResponse = {
    status: 200,
    responseTime: "42ms",
    endpoint: "https://api.enterprise-hub.dev/v2/metrics",
    data: {
      connectedNodes: 1420,
      protocol: "HTTP/3 over QUIC",
      systemHealth: "Optimal (99.99%)",
      cachedResponses: true
    }
  };
  
  outputDiv.innerHTML = \`
    <div class="space-y-2 text-xs font-mono">
      <div class="flex items-center justify-between text-emerald-400">
        <span>✔ Status: \${mockResponse.status} OK</span>
        <span class="text-slate-400">Latency: \${mockResponse.responseTime}</span>
      </div>
      <div class="p-3 bg-slate-950/80 rounded border border-slate-800 text-slate-300">
        <div>• Protocol: <span class="text-sky-300">\${mockResponse.data.protocol}</span></div>
        <div>• Nodes Active: <span class="text-amber-300">\${mockResponse.data.connectedNodes}</span></div>
        <div>• Health: <span class="text-emerald-300">\${mockResponse.data.systemHealth}</span></div>
      </div>
    </div>
  \`;
  console.log("[Network] Response resolved successfully:", mockResponse);
}

fetchUserData();`,
      htmlPreview: `<div class="p-6 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white shadow-xl">
  <div class="flex items-center justify-between mb-3">
    <span class="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">Fetch / Promise Engine</span>
    <span class="text-xs text-slate-400 font-mono">Async/Await</span>
  </div>
  <div id="api-result" class="min-h-[90px] flex items-center justify-center p-3 rounded-lg bg-slate-950 border border-slate-800/80">
    <span class="text-xs text-slate-500">Click "Try It" to simulate an asynchronous REST API call</span>
  </div>
</div>`
    },

    elements: {
      title: "4. Dynamic UI Component Generator",
      category: "Component Synthesis",
      code: `const container = document.getElementById("chips-container");

const badges = [
  { label: "⚡ Micro-Frontend", color: "border-sky-500/30 bg-sky-500/10 text-sky-300" },
  { label: "🛡️ Strict Type Safety", color: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300" },
  { label: "🚀 Serverless Edge", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" },
  { label: "📦 WebAssembly JIT", color: "border-amber-500/30 bg-amber-500/10 text-amber-300" }
];

// Pick random badge
const item = badges[Math.floor(Math.random() * badges.length)];

const chip = document.createElement("div");
chip.className = \`px-3 py-1.5 rounded-lg border text-xs font-medium \${item.color} flex items-center justify-between gap-2 transform transition-all duration-300 scale-95 opacity-0\`;
chip.innerHTML = \`<span>\${item.label}</span> <button class="text-slate-400 hover:text-white" onclick="this.parentElement.remove()">✕</button>\`;

container.appendChild(chip);

// Trigger micro-animation
setTimeout(() => {
  chip.classList.remove("scale-95", "opacity-0");
  chip.classList.add("scale-100", "opacity-100");
}, 20);

console.log("Dynamically created and mounted component to Virtual/Real DOM");`,
      htmlPreview: `<div class="p-6 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white shadow-xl">
  <div class="flex items-center justify-between mb-3">
    <span class="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">Dynamic Node Generation</span>
    <span class="text-xs text-slate-400 font-mono">createElement()</span>
  </div>
  <p class="text-xs text-slate-400 mb-3">Dynamically appended UI widgets into live DOM tree:</p>
  <div id="chips-container" class="grid grid-cols-2 gap-2 min-h-[60px] p-2 rounded-lg bg-slate-950/60 border border-slate-800">
    <div class="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/60 text-slate-300 text-xs font-medium flex items-center justify-between">
      <span>Initial Root Node</span>
      <span class="text-slate-500 text-[10px]">FIXED</span>
    </div>
  </div>
</div>`
    }
  },

  // Full Course Curriculum Data
  curriculum: [
    {
      moduleNumber: 1,
      title: "Module 1: Foundations & Modern ES6+ Architecture",
      badge: "Core Architecture",
      duration: "4 Weeks • 12 Lessons",
      description: "Deep dive into the JavaScript execution runtime, call stack, memory heap, and modern ES2023+ syntax.",
      topics: [
        "V8 Engine internals: JIT Compilation, Parsing, and Bytecode generation",
        "Variable scopes: Execution context, Hoisting, Lexical scope & Closures",
        "Modern ES6+ features: Destructuring, Spread/Rest, Modules, Symbols",
        "Object-Oriented Programming: Prototypes, Classes, Inheritance & Encapsulation",
        "Memory Management & Garbage Collection optimization techniques"
      ]
    },
    {
      moduleNumber: 2,
      title: "Module 2: DOM Engineering & Asynchronous Event Systems",
      badge: "Browser Systems",
      duration: "3 Weeks • 10 Lessons",
      description: "Master document object manipulation, high-frequency event listeners, and browser layout lifecycles.",
      topics: [
        "DOM Tree Structure, Node traversal, and DocumentFragment batch mutations",
        "Event Propagation: Capturing phase, Bubbling phase & Event Delegation",
        "Browser Rendering Lifecycle: Reflows, Repaints, and Compositing pipelines",
        "Web APIs: IntersectionObserver, MutationObserver, and ResizeObserver",
        "Web Storage API, IndexedDB, and Client-Side State Persistence"
      ]
    },
    {
      moduleNumber: 3,
      title: "Module 3: Asynchronous Programming & Enterprise API Integration",
      badge: "Network & Concurrency",
      duration: "4 Weeks • 14 Lessons",
      description: "Understand the JavaScript Event Loop, asynchronous non-blocking I/O, Promises, WebSockets, and Web Workers.",
      topics: [
        "JavaScript Event Loop: Call Stack, Task Queue, and Microtask Queue priority",
        "Promises in Depth: Chaining, Error Boundaries, Promise.all & Promise.allSettled",
        "Async / Await syntactic mastery with comprehensive exception handling",
        "Network Engineering: Fetch API, AbortController, HTTP/2 & HTTP/3 considerations",
        "Real-Time Protocols: WebSockets, Server-Sent Events (SSE), and WebRTC streams",
        "Multithreading with Web Workers and SharedArrayBuffer concurrency"
      ]
    },
    {
      moduleNumber: 4,
      title: "Module 4: Enterprise Frameworks, Node.js & Fullstack Ecosystem",
      badge: "Fullstack Systems",
      duration: "5 Weeks • 18 Lessons",
      description: "Architect fullstack enterprise applications using React, Angular, Vue, Node.js, Express, and microservices.",
      topics: [
        "Single Page Application (SPA) Routing & Client-Side State Architecture",
        "Virtual DOM vs Reactive Signals: React, Vue 3, and Angular deep comparison",
        "Node.js Backend Engineering: Event Loop, Streams, Buffers, and Libuv",
        "Express.js & Fastify API architecture with JWT Authentication & Rate Limiting",
        "Build Tooling & Bundlers: Vite, Rollup, Webpack 5, ESBuild, and Turbopack",
        "Automated Testing & CI/CD: Unit testing with Jest/Vitest, E2E with Playwright"
      ]
    }
  ]
};
