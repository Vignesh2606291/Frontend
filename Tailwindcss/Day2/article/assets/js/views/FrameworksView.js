/**
 * FrameworksView.js - Renders interactive tech stack grid with filter tabs
 */

class FrameworksView {
  constructor() {
    this.container = document.getElementById('frameworks-grid');
    this.filterButtons = document.querySelectorAll('.framework-filter-btn');
    this.activeFilter = 'all';
  }

  init() {
    this.render();
    this.bindFilterEvents();
  }

  render(filter = 'all') {
    if (!this.container) return;
    const techs = window.AppConfig.technologies || [];
    const filtered = filter === 'all' ? techs : techs.filter(t => t.category === filter);

    this.container.innerHTML = filtered.map(item => `
      <div class="tech-card group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 flex flex-col justify-between" data-category="${item.category}">
        <div>
          <!-- Card Header -->
          <div class="flex items-center justify-between mb-4">
            <div class="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform duration-300">
              ${item.iconSvg}
            </div>
            <span class="px-3 py-1 text-xs font-semibold rounded-full border ${item.badgeColor}">
              ${item.badge}
            </span>
          </div>

          <!-- Title & Description -->
          <h3 class="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-200 mb-2">
            ${item.name}
          </h3>
          <p class="text-sm text-slate-400 leading-relaxed mb-4">
            ${item.description}
          </p>

          <!-- Core Feature Bullets -->
          <div class="space-y-1.5 mb-5">
            ${item.features.map(f => `
              <div class="flex items-center gap-2 text-xs text-slate-300">
                <svg class="w-3.5 h-3.5 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>${f}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Card Footer Info -->
        <div class="pt-4 border-t border-slate-800/80 mt-auto flex items-center justify-between text-xs text-slate-400 font-mono">
          <span class="text-sky-400">${item.popularUse}</span>
          <span class="text-slate-500">${item.stats}</span>
        </div>
      </div>
    `).join('');
  }

  bindFilterEvents() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filterButtons.forEach(b => {
          b.classList.remove('bg-sky-500', 'text-white', 'border-sky-400');
          b.classList.add('bg-slate-800/80', 'text-slate-400', 'border-slate-700');
        });

        const target = e.currentTarget;
        target.classList.remove('bg-slate-800/80', 'text-slate-400', 'border-slate-700');
        target.classList.add('bg-sky-500', 'text-white', 'border-sky-400');

        const category = target.getAttribute('data-filter') || 'all';
        this.activeFilter = category;
        this.render(category);
      });
    });
  }
}

window.FrameworksView = FrameworksView;
