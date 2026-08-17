/**
 * NavbarView.js - Navigation & UI Reading Progress Indicator
 */

class NavbarView {
  constructor() {
    this.navbar = document.getElementById('main-navbar');
    this.progressBar = document.getElementById('reading-progress-bar');
    this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    this.mobileMenu = document.getElementById('mobile-menu-drawer');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  }

  init() {
    this.bindScrollEvents();
    this.bindMobileEvents();
    this.initIntersectionObserver();
  }

  bindScrollEvents() {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      if (this.progressBar) {
        this.progressBar.style.width = `${scrolled}%`;
      }

      // Add solid background glass when scrolled
      if (this.navbar) {
        if (winScroll > 30) {
          this.navbar.classList.add('navbar-scrolled', 'shadow-2xl', 'shadow-slate-950/60');
          this.navbar.classList.remove('bg-slate-950/70');
          this.navbar.classList.add('bg-slate-950/95');
        } else {
          this.navbar.classList.remove('navbar-scrolled', 'shadow-2xl', 'shadow-slate-950/60');
          this.navbar.classList.add('bg-slate-950/70');
          this.navbar.classList.remove('bg-slate-950/95');
        }
      }
    });
  }

  bindMobileEvents() {
    if (this.mobileMenuBtn && this.mobileMenu) {
      this.mobileMenuBtn.addEventListener('click', () => {
        const isHidden = this.mobileMenu.classList.contains('hidden');
        if (isHidden) {
          this.mobileMenu.classList.remove('hidden');
          setTimeout(() => {
            this.mobileMenu.classList.remove('opacity-0', '-translate-y-4');
            this.mobileMenu.classList.add('opacity-100', 'translate-y-0');
          }, 10);
        } else {
          this.mobileMenu.classList.add('opacity-0', '-translate-y-4');
          setTimeout(() => {
            this.mobileMenu.classList.add('hidden');
          }, 200);
        }
      });

      this.mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          this.mobileMenu.classList.add('opacity-0', '-translate-y-4');
          setTimeout(() => {
            this.mobileMenu.classList.add('hidden');
          }, 200);
        });
      });
    }
  }

  initIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('text-sky-400', 'border-b-2', 'border-sky-400', 'font-semibold');
              link.classList.remove('text-slate-300');
            } else {
              link.classList.remove('text-sky-400', 'border-b-2', 'border-sky-400', 'font-semibold');
              link.classList.add('text-slate-300');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
  }
}

window.NavbarView = NavbarView;
