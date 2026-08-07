const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\6d8b40d9-0c7f-4eee-a888-15f179dbd14e\\hospital_onboarding_portfolio_prototype.html';
const destPath = path.join(__dirname, 'hospital.html');
const destPathFull = path.join(__dirname, 'hospital_onboarding_portfolio_prototype.html');

const content = fs.readFileSync(srcPath, 'utf8');

// Copy file to project folder
fs.writeFileSync(destPath, content, 'utf8');
fs.writeFileSync(destPathFull, content, 'utf8');
console.log(`Copied hospital prototype (${content.length} bytes) to hospital.html & hospital_onboarding_portfolio_prototype.html!`);

// Inspect key text snippets
const lines = content.split('\n');
console.log('\n--- FIRST 40 LINES ---');
console.log(lines.slice(0, 40).join('\n'));
