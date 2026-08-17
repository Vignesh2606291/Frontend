/**
 * PlaygroundView.js - Interactive Code Laboratory & Real-time DOM Sandbox UI
 */

class PlaygroundView {
  constructor(playgroundModel) {
    this.model = playgroundModel;
    this.editorTextarea = document.getElementById('playground-code');
    this.previewContainer = document.getElementById('playground-preview');
    this.consoleOutput = document.getElementById('playground-console');
    this.presetTabs = document.querySelectorAll('.playground-tab-btn');
    this.runBtn = document.getElementById('playground-run-btn');
    this.resetBtn = document.getElementById('playground-reset-btn');
    this.clearLogsBtn = document.getElementById('playground-clear-logs');
    this.presetBadge = document.getElementById('current-preset-badge');
  }

  init() {
    this.loadPreset('dom');
    this.bindEvents();
  }

  loadPreset(key) {
    const preset = this.model.setPreset(key);
    if (!preset) return;

    if (this.editorTextarea) {
      this.editorTextarea.value = preset.code;
    }

    if (this.previewContainer) {
      this.previewContainer.innerHTML = preset.htmlPreview;
    }

    if (this.presetBadge) {
      this.presetBadge.innerText = preset.category;
    }

    // Update active tab styling
    this.presetTabs.forEach(tab => {
      if (tab.getAttribute('data-preset') === key) {
        tab.classList.remove('bg-slate-800/80', 'text-slate-400', 'border-slate-700');
        tab.classList.add('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40', 'font-semibold');
      } else {
        tab.classList.add('bg-slate-800/80', 'text-slate-400', 'border-slate-700');
        tab.classList.remove('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40', 'font-semibold');
      }
    });

    this.logToConsole('system', `Preset loaded: ${preset.title}`);
  }

  resetPreview() {
    const current = this.model.getCurrentPreset();
    if (!current) return;
    if (this.previewContainer) {
      this.previewContainer.innerHTML = current.htmlPreview;
    }
    if (this.editorTextarea) {
      this.editorTextarea.value = current.code;
    }
    this.logToConsole('info', 'Sandbox and preview reset to initial state.');
  }

  executeCurrentCode() {
    if (!this.editorTextarea) return;
    const code = this.editorTextarea.value;
    this.model.setCurrentCode(code);

    // Intercept console.log within execution scope
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    try {
      this.logToConsole('exec', '▶ Executing JavaScript sandbox script...');
      
      // Execute in sandbox context
      const sandboxFn = new Function('console', code);
      sandboxFn({
        log: (...args) => {
          originalConsoleLog(...args);
          this.logToConsole('log', args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' '));
        },
        error: (...args) => {
          originalConsoleError(...args);
          this.logToConsole('error', args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' '));
        },
        warn: (...args) => {
          this.logToConsole('warn', args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' '));
        }
      });

      this.logToConsole('success', '✔ Script evaluated with exit status 0 (Success)');
      this.triggerSuccessPulse();
    } catch (err) {
      console.error(err);
      this.logToConsole('error', `✖ Runtime Exception: ${err.message}`);
    }
  }

  logToConsole(type, message) {
    if (!this.consoleOutput) return;
    const timestamp = new Date().toLocaleTimeString();
    
    let colorClass = 'text-slate-300';
    let prefix = '•';

    switch (type) {
      case 'exec':
        colorClass = 'text-sky-400 font-semibold';
        prefix = '▶';
        break;
      case 'success':
        colorClass = 'text-emerald-400 font-semibold';
        prefix = '✔';
        break;
      case 'error':
        colorClass = 'text-rose-400 font-semibold';
        prefix = '✖';
        break;
      case 'warn':
        colorClass = 'text-amber-400';
        prefix = '▲';
        break;
      case 'system':
        colorClass = 'text-indigo-400';
        prefix = '⚙';
        break;
      default:
        colorClass = 'text-slate-300';
        prefix = '>';
    }

    const logLine = document.createElement('div');
    logLine.className = `font-mono text-xs flex items-start gap-2 py-0.5 leading-relaxed ${colorClass}`;
    logLine.innerHTML = `<span class="text-slate-500 shrink-0 text-[10px]">[${timestamp}]</span> <span class="shrink-0">${prefix}</span> <span class="break-all">${message}</span>`;

    this.consoleOutput.appendChild(logLine);
    this.consoleOutput.scrollTop = this.consoleOutput.scrollHeight;
  }

  clearLogs() {
    if (this.consoleOutput) {
      this.consoleOutput.innerHTML = `<div class="text-xs text-slate-500 font-mono italic">Console cleared. Ready for input.</div>`;
    }
    this.model.clearLogs();
  }

  triggerSuccessPulse() {
    if (this.previewContainer) {
      this.previewContainer.classList.add('ring-2', 'ring-emerald-400/50');
      setTimeout(() => {
        this.previewContainer.classList.remove('ring-2', 'ring-emerald-400/50');
      }, 600);
    }
  }

  bindEvents() {
    // Preset Tab Clicks
    this.presetTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const key = e.currentTarget.getAttribute('data-preset');
        this.loadPreset(key);
      });
    });

    // Run Button
    if (this.runBtn) {
      this.runBtn.addEventListener('click', () => this.executeCurrentCode());
    }

    // Reset Button
    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.resetPreview());
    }

    // Clear Logs Button
    if (this.clearLogsBtn) {
      this.clearLogsBtn.addEventListener('click', () => this.clearLogs());
    }
  }
}

window.PlaygroundView = PlaygroundView;
