const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'hospital.html'), 'utf8');
const lines = content.split('\n');

lines.forEach((line, idx) => {
  if (line.includes('portfolio-header')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});
