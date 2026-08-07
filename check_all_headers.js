const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = ['index.html', 'firefly.html', 'orient.html', 'stanza.html', 'snapmint.html'];

htmlFiles.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`Checking ${file}:`);
    if (content.includes('<header')) {
      const start = content.indexOf('<header');
      const end = content.indexOf('</header>', start) + 9;
      console.log(content.substring(start, end));
    }
    console.log('---');
  }
});
