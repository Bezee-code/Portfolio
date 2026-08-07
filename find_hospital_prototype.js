const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain';
const appDir = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\scratch\\pm-portfolio-app';

function findFile(dir, fileName) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      const res = findFile(full, fileName);
      if (res) return res;
    } else if (f.toLowerCase() === fileName.toLowerCase()) {
      return full;
    }
  }
  return null;
}

console.log('Searching for hospital_onboarding_portfolio_prototype.html...');
const foundInBrain = findFile(brainDir, 'hospital_onboarding_portfolio_prototype.html');
console.log('Found in brain:', foundInBrain);

const foundInApp = findFile(appDir, 'hospital_onboarding_portfolio_prototype.html');
console.log('Found in app:', foundInApp);
