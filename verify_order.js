const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const matches = content.match(/<!-- Project \d+:[^>]+/g);
console.log('Case studies order in index.html:');
console.log(matches);
