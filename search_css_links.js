const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'css', 'style.css');
const css = fs.readFileSync(cssPath, 'utf8');

const lines = css.split('\n');
lines.forEach((line, idx) => {
  if (line.toLowerCase().includes('linkedin') || line.toLowerCase().includes('contact')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
