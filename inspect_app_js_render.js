const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js', 'app.js');
const content = fs.readFileSync(filePath, 'utf8');

const start = content.indexOf('function renderCaseStudies()');
const end = content.indexOf('function initWireframeModals()', start);

console.log(content.substring(start, end));
