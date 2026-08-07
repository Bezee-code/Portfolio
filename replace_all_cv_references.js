const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);

let count = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.statSync(filePath).isFile() && (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.json'))) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('CV_souvik_P')) {
      content = content.replaceAll('CV_souvik_P.pdf', 'CV_souvik_P.pdf');
      content = content.replaceAll('CV_souvik_P', 'CV_souvik_P');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Replaced all CV references in ${file}!`);
      count++;
    }
  }
});

console.log(`Updated ${count} files!`);
