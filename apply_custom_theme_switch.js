const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const cssFile = path.join(__dirname, 'css', 'style.css');
const themeJsFile = path.join(__dirname, 'js', 'theme.js');

// 1. Update index.html
let indexContent = fs.readFileSync(indexFile, 'utf8');

const oldToggleBtn = `<button id="topHeaderThemeToggle" onclick="toggleTheme()" class="theme-floating-pill" style="position:static; margin:0; padding:0.4rem 0.85rem; font-size:0.85rem;">
          🌙 Dark
        </button>`;

const newToggleBtn = `<!-- Custom Theme Pill Switch (Matching User Reference Image) -->
        <button id="topHeaderThemeToggle" onclick="toggleTheme()" class="custom-theme-switch" aria-label="Toggle Dark/Light Mode">
          <span class="switch-track">
            <span class="icon-moon">🌙</span>
            <span class="icon-sun">☀️</span>
            <span class="switch-thumb"></span>
          </span>
        </button>`;

if (indexContent.includes('id="topHeaderThemeToggle"')) {
  const btnStart = indexContent.indexOf('<button id="topHeaderThemeToggle"');
  const btnEnd = indexContent.indexOf('</button>', btnStart) + 9;
  indexContent = indexContent.substring(0, btnStart) + newToggleBtn + indexContent.substring(btnEnd);
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Updated theme switch HTML in index.html!');
}

// 2. Append custom theme switch styles to css/style.css
let cssContent = fs.readFileSync(cssFile, 'utf8');

const switchStyles = `
/* ==========================================================================
   CUSTOM PILL THEME SWITCH TOGGLE (EXACT MATCH FOR USER REFERENCE IMAGE)
   ========================================================================== */
.custom-theme-switch {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  align-items: center;
}

.switch-track {
  width: 66px;
  height: 34px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 9999px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

[data-theme="light"] .switch-track {
  background: rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.1);
}

.icon-moon, .icon-sun {
  font-size: 14px;
  width: 26px;
  text-align: center;
  z-index: 1;
  user-select: none;
  line-height: 1;
  transition: opacity 0.3s ease;
}

.icon-moon {
  margin-left: 2px;
}

.icon-sun {
  margin-right: 2px;
}

.switch-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #6366f1;
  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.6);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.35s ease;
  z-index: 2;
}

/* Dark Mode State: Thumb over Moon on left */
[data-theme="dark"] .switch-thumb {
  transform: translateX(0px);
  background: #6366f1;
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.7);
}

/* Light Mode State: Thumb over Sun on right */
[data-theme="light"] .switch-thumb {
  transform: translateX(32px);
  background: #f59e0b;
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.7);
}
`;

if (!cssContent.includes('CUSTOM PILL THEME SWITCH TOGGLE')) {
  cssContent += '\n' + switchStyles;
  fs.writeFileSync(cssFile, cssContent, 'utf8');
  console.log('Appended custom theme switch styles to css/style.css!');
}

// 3. Update js/theme.js to include .custom-theme-switch in click targets
let jsContent = fs.readFileSync(themeJsFile, 'utf8');
if (!jsContent.includes('.custom-theme-switch')) {
  jsContent = jsContent.replace('.theme-toggle-btn', '.theme-toggle-btn, .custom-theme-switch, #topHeaderThemeToggle');
  fs.writeFileSync(themeJsFile, jsContent, 'utf8');
  console.log('Updated click targets in js/theme.js!');
}

console.log('Successfully applied custom theme switch!');
