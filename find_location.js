const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.json')) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isFile()) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('Bengaluru') || content.includes('Bangalore')) {
        console.log(`Found location match in ${file}`);
      }
    }
  }
});
