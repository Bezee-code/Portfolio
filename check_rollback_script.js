const fs = require('fs');
const path = require('path');

const rbFile = path.join(__dirname, 'rollback_to_prompt55.js');
console.log('Exists rollback_to_prompt55.js:', fs.existsSync(rbFile));

if (fs.existsSync(rbFile)) {
  const content = fs.readFileSync(rbFile, 'utf8');
  console.log('Content preview of rollback_to_prompt55.js:');
  console.log(content.substring(0, 500));
}
