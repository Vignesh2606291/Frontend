/**
 * CHENNAI 2029 – Main Core Scripts
 * Global utilities: Dark/Light Theme Switcher, Reading Progress Bar,
 * Global Search Modal, Navigation, and Smooth Scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initReadingProgressBar();
  initGlobalSearch();
  initActiveNavLink();
  initBackToTop();
});

/**
 * 1. Dark / Light Theme Toggle with LocalStorage Persistence
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const htmlRoot = document.documentElement;
  
  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('chennai2029_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('chennai2029_theme', theme);
    
    // Update button icon
    if (toggleBtn) {
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'bi bi-sun-fill text-warning';
          toggleBtn.setAttribute('title', 'Switch to Light Mode');
        } else {
          icon.className = 'bi bi-moon-stars-fill text-primary';
          toggleBtn.setAttribute('title', 'Switch to Dark Mode');
        }
      }
    }

    // Trigger custom event for Chart.js updates
    window.dispatchEvent(new Event('themeChanged'));
  }
}

/**
 * 2. Reading Progress Indicator Bar
 */
function initReadingProgressBar() {
  const progressBar = document.getElementById('readingProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  }, { passive: true });
}

/**
 * 3. Global Interactive Search Modal (Ctrl+K or search button)
 */
function initGlobalSearch() {
  const openBtns = document.querySelectorAll('[data-open-search]');
  const modalBackdrop = document.getElementById('searchModalBackdrop');
  const closeBtn = document.getElementById('closeSearchModalBtn');
  const searchInput = document.getElementById('globalSearchInput');
  const resultsContainer = document.getElementById('searchResultsContainer');

  if (!modalBackdrop || !searchInput || !resultsContainer) return;

  function openSearch() {
    modalBackdrop.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    modalBackdrop.classList.remove('active');
    searchInput.value = '';
    resultsContainer.innerHTML = '<div class="text-center text-muted p-4">Type keywords such as "GCC", "EV", "CMDA", "Apollo", or "OMR"...</div>';
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  // Close on backdrop click
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeSearch();
  });

  // Shortcut Ctrl+K / Cmd+K and Esc
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (modalBackdrop.classList.contains('active')) closeSearch();
      else openSearch();
    }
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeSearch();
    }
  });

  // Real-time search query execution
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      resultsContainer.innerHTML = '<div class="text-center text-muted p-4">Type keywords such as "GCC", "EV", "CMDA", "Apollo", or "OMR"...</div>';
      return;
    }

    if (typeof SEARCH_DATABASE === 'undefined') {
      resultsContainer.innerHTML = '<div class="p-3 text-danger">Search database not loaded.</div>';
      return;
    }

    const matches = SEARCH_DATABASE.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchSnippet = item.snippet.toLowerCase().includes(query);
      const matchKeywords = item.keywords.some(k => k.toLowerCase().includes(query));
      return matchTitle || matchSnippet || matchKeywords;
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="text-center text-muted p-4">
          <i class="bi bi-search display-6 d-block mb-2 opacity-50"></i>
          No research topics found matching "<strong>${escapeHtml(query)}</strong>".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(item => `
      <a href="${item.page}" class="search-result-item" onclick="document.getElementById('searchModalBackdrop').classList.remove('active'); document.body.style.overflow = '';">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="item-title">${highlightMatch(item.title, query)}</span>
          <span class="item-badge">${item.badge}</span>
        </div>
        <div class="item-snippet">${highlightMatch(item.snippet, query)}</div>
      </a>
    `).join('');
  });

  function highlightMatch(text, q) {
    const regex = new RegExp(`(${escapeRegExp(q)})`, 'gi');
    return text.replace(regex, '<mark class="bg-warning text-dark px-1 rounded">$1</mark>');
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function escapeHtml(string) {
    return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

/**
 * 4. Active Nav Link Detection
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link-custom');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * 5. Back to Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.pointerEvents = 'none';
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
