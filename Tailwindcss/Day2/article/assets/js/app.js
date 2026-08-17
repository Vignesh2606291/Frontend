/**
 * app.js - Main Application Bootstrap
 * DevScript Enterprise Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  // Instantiate Master MVC Controller
  if (window.AppController) {
    window.AppInstance = new window.AppController();
    window.AppInstance.init();
  } else {
    console.error('[DevScript] AppController not loaded.');
  }
});
