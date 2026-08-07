const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.json')) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isFile()) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('CV_souvik_P.pdf')) {
        content = content.replaceAll('CV_souvik_P.pdf', 'CV_souvik_P.pdf');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
      }
    }
  }
});

const jsDir = path.join(dir, 'js');
if (fs.existsSync(jsDir)) {
  const jsFiles = fs.readdirSync(jsDir);
  jsFiles.forEach(file => {
    const filePath = path.join(jsDir, file);
    if (fs.statSync(filePath).isFile()) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('CV_souvik_P.pdf')) {
        content = content.replaceAll('CV_souvik_P.pdf', 'CV_souvik_P.pdf');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated js/${file}`);
      }
    }
  });
}
