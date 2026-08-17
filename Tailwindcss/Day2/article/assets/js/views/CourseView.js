/**
 * CourseView.js - Full Course Syllabus, Interactive Lesson Checklists, & Progress Tracker
 */

class CourseView {
  constructor(courseModel) {
    this.model = courseModel;
    this.container = document.getElementById('curriculum-accordion');
    this.searchInput = document.getElementById('curriculum-search');
    this.progressBar = document.getElementById('curriculum-progress-fill');
    this.progressText = document.getElementById('curriculum-progress-text');
    this.statsBadge = document.getElementById('curriculum-stats-badge');
  }

  init() {
    this.render();
    this.updateProgress();
    this.bindEvents();
  }

  render() {
    if (!this.container) return;
    const modules = this.model.getFilteredModules();

    if (modules.length === 0) {
      this.container.innerHTML = `
        <div class="p-8 text-center rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400">
          <p class="text-base font-semibold">No modules match your search filter.</p>
          <p class="text-xs text-slate-500 mt-1">Try searching for keywords like "DOM", "Async", "V8", or "React".</p>
        </div>
      `;
      return;
    }

    this.container.innerHTML = modules.map((mod, modIdx) => {
      const isFirst = modIdx === 0;
      return `
        <div class="module-card border border-slate-800 rounded-2xl bg-slate-900/70 overflow-hidden transition-all duration-300 hover:border-slate-700">
          <!-- Module Header Trigger -->
          <button class="module-header-btn w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none bg-slate-900/90 hover:bg-slate-850 transition-colors" data-module-id="${mod.moduleNumber}">
            <div class="flex items-start sm:items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold flex items-center justify-center shrink-0">
                0${mod.moduleNumber}
              </div>
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1">
                  <h3 class="text-base sm:text-lg font-bold text-white">${mod.title}</h3>
                  <span class="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-slate-800 text-sky-300 border border-slate-700">
                    ${mod.badge}
                  </span>
                </div>
                <p class="text-xs text-slate-400">${mod.duration} • ${mod.description}</p>
              </div>
            </div>
            
            <div class="flex items-center gap-3 shrink-0">
              <div class="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 transition-transform duration-300 module-chevron ${isFirst ? 'rotate-180' : ''}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
          </button>

          <!-- Module Topics Body -->
          <div class="module-body px-6 pb-6 pt-2 border-t border-slate-800/80 ${isFirst ? '' : 'hidden'}">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Structured Learning Topics & Enterprise Labs
            </h4>
            <div class="space-y-2.5">
              ${mod.topics.map((topic, topicIdx) => {
                const isChecked = this.model.isLessonCompleted(mod.moduleNumber, topicIdx);
                return `
                  <div class="lesson-item flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all ${isChecked ? 'bg-emerald-950/20 border-emerald-500/30' : ''}">
                    <div class="flex items-center gap-3">
                      <button class="lesson-toggle-btn w-5 h-5 rounded border flex items-center justify-center transition-all ${isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600 bg-slate-900 text-transparent hover:border-sky-400'}" data-module="${mod.moduleNumber}" data-index="${topicIdx}" title="Mark lesson as complete">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                      </button>
                      <span class="text-xs sm:text-sm font-medium ${isChecked ? 'text-slate-400 line-through' : 'text-slate-200'}">
                        ${topic}
                      </span>
                    </div>
                    <span class="text-[11px] font-mono text-slate-500 shrink-0 hidden sm:inline-block">Lesson ${topicIdx + 1}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');

    this.bindDynamicAccordionEvents();
  }

  bindDynamicAccordionEvents() {
    const headers = this.container.querySelectorAll('.module-header-btn');
    headers.forEach(btn => {
      btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        const chevron = btn.querySelector('.module-chevron');
        const isClosed = body.classList.contains('hidden');

        if (isClosed) {
          body.classList.remove('hidden');
          chevron.classList.add('rotate-180');
        } else {
          body.classList.add('hidden');
          chevron.classList.remove('rotate-180');
        }
      });
    });

    const checkButtons = this.container.querySelectorAll('.lesson-toggle-btn');
    checkButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modId = parseInt(btn.getAttribute('data-module'));
        const idx = parseInt(btn.getAttribute('data-index'));
        this.model.toggleLessonCompletion(modId, idx);
        this.render();
        this.updateProgress();
      });
    });
  }

  updateProgress() {
    const stats = this.model.getProgressStats();
    if (this.progressBar) {
      this.progressBar.style.width = `${stats.percentage}%`;
    }
    if (this.progressText) {
      this.progressText.innerText = `${stats.percentage}% Complete (${stats.completedTopics}/${stats.totalTopics} Lessons)`;
    }
    if (this.statsBadge) {
      this.statsBadge.innerText = `${stats.completedTopics}/${stats.totalTopics} Verified`;
    }
  }

  bindEvents() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.model.searchQuery = e.target.value;
        this.render();
      });
    }
  }
}

window.CourseView = CourseView;
