/* ==========================================================================
   GLOBAL THEME MANAGER (VERCEL & APPLE FRONTEND ARCHITECTURE)
   Key: 'portfolio-theme' ('dark' | 'light')
   Default for first-time visitors: 'dark'
   ========================================================================== */

(function () {
  const THEME_KEY = 'portfolio-theme';

  function getSavedTheme() {
    const saved = localStorage.getItem(THEME_KEY) || localStorage.getItem('pm_portfolio_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark'; // ALWAYS DEFAULT TO DARK MODE ON FIRST VISIT
  }

  function applyTheme(theme) {
    const isLight = theme === 'light';
    document.documentElement.setAttribute('data-theme', theme);
    
    if (isLight) {
      document.documentElement.classList.add('light-theme');
      if (document.body) document.body.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
      if (document.body) document.body.classList.remove('light-theme');
    }

    // Update Slider Pills & Buttons across DOM
    document.querySelectorAll('.theme-slider-pill, #themeSliderToggle, #floatingThemePill, #themeToggleBtn, #pageThemeToggleBtn, .theme-toggle-btn').forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${isLight ? 'Dark' : 'Light'} Mode`);
    });
  }

  // 1. Instant Synchronous FOUC Prevention
  const initialTheme = getSavedTheme();
  applyTheme(initialTheme);

  // 2. Global ThemeManager API
  window.ThemeManager = {
    KEY: THEME_KEY,

    getTheme: function () {
      return document.documentElement.getAttribute('data-theme') || 'dark';
    },

    setTheme: function (theme) {
      if (theme !== 'dark' && theme !== 'light') return;
      applyTheme(theme);
      try {
        localStorage.setItem(THEME_KEY, theme);
        localStorage.setItem('pm_portfolio_theme', theme);
      } catch (e) {}
    },

    toggleTheme: function () {
      const current = this.getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      this.setTheme(next);
      return next;
    }
  };

  // Expose global shorthand for inline handlers
  window.toggleTheme = function () {
    window.ThemeManager.toggleTheme();
  };

  // 3. Multi-Tab Real-Time Sync
  window.addEventListener('storage', function (e) {
    if ((e.key === THEME_KEY || e.key === 'pm_portfolio_theme') && (e.newValue === 'dark' || e.newValue === 'light')) {
      applyTheme(e.newValue);
    }
  });

  // 4. Attach Event Listeners on DOM Ready & Dynamic Clicks
  function bindListeners() {
    const active = window.ThemeManager.getTheme();
    applyTheme(active);

    document.addEventListener('click', function (e) {
      const toggleBtn = e.target.closest('.theme-slider-pill, #themeSliderToggle, #floatingThemePill, #themeToggleBtn, #pageThemeToggleBtn, .theme-toggle-btn, .floating-theme-btn');
      if (toggleBtn) {
        e.preventDefault();
        e.stopPropagation();
        window.ThemeManager.toggleTheme();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindListeners);
  } else {
    bindListeners();
  }
})();
