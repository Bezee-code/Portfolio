const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const lines = content.split('\n');

lines.forEach((line, idx) => {
  if (line.includes('hospital.html') || line.includes('Beyond the Portfolio') || line.includes('beyond-portfolio')) {
    console.log(`Line ${idx + 1}: ${line.trim()}`);
  }
});

// Search for stray literal </div> or escaped &lt;/div&gt; text
lines.forEach((line, idx) => {
  if (idx > 1700 && (line.includes('</div>') || line.includes('&lt;/div&gt;'))) {
    console.log(`Near line ${idx + 1}: ${line.trim()}`);
  }
});
