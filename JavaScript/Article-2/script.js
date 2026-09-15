// Root-level script.js mirror
// Dynamically loads the main modular script
import('./js/script.js').catch(() => {
  const s = document.createElement('script');
  s.src = './js/script.js';
  document.head.appendChild(s);
});
