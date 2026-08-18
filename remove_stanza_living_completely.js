const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const dataJsFile = path.join(__dirname, 'js', 'data.js');

// 1. Update index.html
let indexContent = fs.readFileSync(indexFile, 'utf8');

// Update project counts
indexContent = indexContent.replace('⚡ All Projects (6)', '⚡ All Projects (5)');
indexContent = indexContent.replace('💡 Independent PM Case Studies (4)', '💡 Independent PM Case Studies (3)');
indexContent = indexContent.replace('(4 Self-Initiated Projects)', '(3 Self-Initiated Projects)');

// Locate Stanza Living card block in index.html
const stanzaStart = indexContent.indexOf('<!-- Project 2: Stanza Living Care -->');
const snapmintStart = indexContent.indexOf('<!-- Project 4: Snapmint Pay & Credit -->');

if (stanzaStart !== -1 && snapmintStart !== -1) {
  indexContent = indexContent.substring(0, stanzaStart) + indexContent.substring(snapmintStart);
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Removed Stanza Living card block from index.html!');
}

// 2. Update js/data.js if stanza-living-care exists
let dataContent = fs.readFileSync(dataJsFile, 'utf8');
if (dataContent.includes('stanza-living-care')) {
  // Remove stanza object from caseStudies array
  const stanzaObjStart = dataContent.indexOf('{', dataContent.indexOf('id: "stanza-living-care"'));
  const stanzaObjEnd = dataContent.indexOf('},', stanzaObjStart) + 2;
  
  if (stanzaObjStart !== -1 && stanzaObjEnd !== -1) {
    dataContent = dataContent.substring(0, stanzaObjStart) + dataContent.substring(stanzaObjEnd);
    dataContent = dataContent.replace('caseStudiesCount: 6', 'caseStudiesCount: 5');
    dataContent = dataContent.replace('PM Projects (6)', 'PM Projects (5)');
    fs.writeFileSync(dataJsFile, dataContent, 'utf8');
    console.log('Removed Stanza Living object from js/data.js!');
  }
}

console.log('Successfully completed full deletion of Stanza Living project!');
