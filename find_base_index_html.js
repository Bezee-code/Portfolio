const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain';

function findIndexHtml(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      findIndexHtml(full);
    } else if (f.toLowerCase() === 'index.html' || f.toLowerCase() === 'portfolio.html') {
      const sz = fs.statSync(full).size;
      console.log(`Found ${f} at ${full} (${sz} bytes)`);
    }
  }
}

findIndexHtml(brainDir);
