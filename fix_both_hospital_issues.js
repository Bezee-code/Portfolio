const fs = require('fs');
const path = require('path');

// 1. Fix index.html spacing & broken closing div tag
const indexFile = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexFile, 'utf8');

// Fix broken tag around line 1357
if (indexContent.includes('<\n\n\n        <!-- Project 5')) {
  indexContent = indexContent.replace(
    '</div>\n        <\n\n\n        <!-- Project 5',
    '</div>\n          </div>\n        </div>\n\n        <!-- Project 5'
  );
  console.log('Fixed broken closing tag on Project 4 in index.html!');
}

// Make sure Project 5 pm-case-card has explicit margin-top: 3.5rem;
const proj5Target = `<div class="pm-case-card clickable-card" onclick="if(!event.target.closest('a')) window.location.href='hospital.html';" style="cursor:pointer; border-color:var(--border-highlight);">`;
const proj5Replacement = `<div class="pm-case-card clickable-card" onclick="if(!event.target.closest('a')) window.location.href='hospital.html';" style="cursor:pointer; border-color:var(--border-highlight); margin-top:3.5rem;">`;

if (indexContent.includes(proj5Target)) {
  indexContent = indexContent.replace(proj5Target, proj5Replacement);
  console.log('Added margin-top: 3.5rem to Project 5 card in index.html!');
}

fs.writeFileSync(indexFile, indexContent, 'utf8');

// 2. Add Back to Portfolio button on hospital.html & hospital_onboarding_portfolio_prototype.html
const hospitalFiles = [
  path.join(__dirname, 'hospital.html'),
  path.join(__dirname, 'hospital_onboarding_portfolio_prototype.html')
];

const backBtnHeader = `<header class="portfolio-header">
        <div class="header-title-block">
            <div style="margin-bottom: 10px;">
                <a href="index.html#case-studies" style="display: inline-flex; align-items: center; gap: 8px; background: rgba(99, 102, 241, 0.25); border: 1px solid rgba(99, 102, 241, 0.5); color: #38bdf8; padding: 8px 16px; border-radius: 9999px; font-size: 13px; font-weight: 700; text-decoration: none; box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: all 0.2s ease;">
                    ← <strong>Back to Portfolio Homepage</strong>
                </a>
            </div>
            <h1>`;

hospitalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('Back to Portfolio Homepage')) {
      content = content.replace(
        '<header class="portfolio-header">\n        <div class="header-title-block">\n            <h1>',
        backBtnHeader
      );
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Added Back to Portfolio button in ${path.basename(file)}!`);
    }
  }
});

console.log('Successfully completed all fixes!');
