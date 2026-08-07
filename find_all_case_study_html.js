const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('class="pm-case-card"') || line.includes('class="case-study-card"') || line.includes('Adobe Firefly') || line.includes('Stanza') || line.includes('Orient') || line.includes('Snapmint')) {
    console.log(`Line ${idx + 1}: ${line.trim().substring(0, 100)}`);
  }
});
