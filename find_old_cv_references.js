const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.statSync(filePath).isFile() && (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.json'))) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('Souvik_Ghosh_CV')) {
      console.log(`Found old CV reference in ${file}`);
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (line.includes('Souvik_Ghosh_CV')) {
          console.log(`  Line ${idx + 1}: ${line.trim()}`);
        }
      });
    }
  }
});
