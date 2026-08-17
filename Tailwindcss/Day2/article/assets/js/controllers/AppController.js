/**
 * AppController.js - Master MVC Coordinator for Enterprise Educational Application
 */

class AppController {
  constructor() {
    // Models
    this.courseModel = new window.CourseModel();
    this.playgroundModel = new window.PlaygroundModel();

    // Views
    this.navbarView = new window.NavbarView();
    this.frameworksView = new window.FrameworksView();
    this.playgroundView = new window.PlaygroundView(this.playgroundModel);
    this.courseView = new window.CourseView(this.courseModel);
  }

  init() {
    console.info(`[DevScript Enterprise] Initializing MVC Core Engine v${window.AppConfig.version}...`);
    
    // Initialize UI Views
    this.navbarView.init();
    this.frameworksView.init();
    this.playgroundView.init();
    this.courseView.init();

    // Global Event Handlers & Enterprise Interactions
    this.initSmoothScroll();
    this.initNewsletterModal();
    this.initQuickActionButtons();
    this.initToastSystem();

    console.info("[DevScript Enterprise] All MVC components mounted successfully.");
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId.length <= 1) return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  initNewsletterModal() {
    const enrollBtns = document.querySelectorAll('.enroll-modal-btn');
    const modal = document.getElementById('enroll-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const form = document.getElementById('enroll-form');

    if (modal) {
      enrollBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        });
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        });
      }

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
        }
      });

      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const emailInput = form.querySelector('input[type="email"]');
          const email = emailInput ? emailInput.value : '';
          
          this.showToast(`✔ Enrollment confirmed for ${email}! Curriculum materials dispatched.`, 'success');
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          form.reset();
        });
      }
    }
  }

  initQuickActionButtons() {
    // Copy code buttons
    document.querySelectorAll('.copy-code-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const codeBlock = btn.closest('.code-card')?.querySelector('code, textarea');
        if (codeBlock) {
          const text = codeBlock.value || codeBlock.innerText;
          navigator.clipboard.writeText(text).then(() => {
            this.showToast('Code copied to clipboard!', 'info');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = `<span>Copied!</span>`;
            setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
          });
        }
      });
    });
  }

  initToastSystem() {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full';
      document.body.appendChild(toastContainer);
    }
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const bgColors = {
      success: 'bg-slate-900 border-emerald-500/50 text-emerald-300 shadow-emerald-950/40',
      error: 'bg-slate-900 border-rose-500/50 text-rose-300 shadow-rose-950/40',
      info: 'bg-slate-900 border-sky-500/50 text-sky-300 shadow-sky-950/40'
    };

    toast.className = `p-4 rounded-xl border ${bgColors[type] || bgColors.info} shadow-xl backdrop-blur-md pointer-events-auto transform translate-y-4 opacity-0 transition-all duration-300 flex items-center justify-between gap-3 text-xs font-medium`;
    toast.innerHTML = `
      <div class="flex items-center gap-2.5">
        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span>${message}</span>
      </div>
      <button class="text-slate-400 hover:text-white" onclick="this.parentElement.remove()">✕</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('translate-y-4', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    }, 10);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
}

window.AppController = AppController;
