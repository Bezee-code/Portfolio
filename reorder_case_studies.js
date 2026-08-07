const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const dataFile = path.join(__dirname, 'js', 'data.js');

// 1. Reorder js/data.js
let dataContent = fs.readFileSync(dataFile, 'utf8');

// Evaluate current caseStudies array
const vm = require('vm');
const sandbox = { global: {} };
vm.createContext(sandbox);
vm.runInContext(dataContent.replace('const DEFAULT_PORTFOLIO_DATA =', 'global.DEFAULT_PORTFOLIO_DATA ='), sandbox);

const currentList = sandbox.global.DEFAULT_PORTFOLIO_DATA.caseStudies;

const orientObj = currentList.find(c => c.id.includes('orient'));
const hospitalObj = currentList.find(c => c.id.includes('healthcare') || c.id.includes('hospital'));
const fireflyObj = currentList.find(c => c.id.includes('firefly'));
const stanzaObj = currentList.find(c => c.id.includes('stanza'));
const snapmintObj = currentList.find(c => c.id.includes('snapmint'));

const newOrderedList = [orientObj, hospitalObj, fireflyObj, stanzaObj, snapmintObj];

// Rebuild js/data.js caseStudies array text
const oldArrayStart = dataContent.indexOf('caseStudies: [');
const oldArrayEnd = dataContent.indexOf('];', oldArrayStart) + 2;

const newArrayText = 'caseStudies: ' + JSON.stringify(newOrderedList, null, 2) + ';';
dataContent = dataContent.substring(0, oldArrayStart) + newArrayText + dataContent.substring(oldArrayEnd);

fs.writeFileSync(dataFile, dataContent, 'utf8');
console.log('Successfully reordered caseStudies in js/data.js!');

// 2. Reorder index.html
let indexContent = fs.readFileSync(indexFile, 'utf8');

// Extract card blocks from index.html
function getCardBlock(commentTitle) {
  const start = indexContent.indexOf(commentTitle);
  if (start === -1) return '';
  // Find next comment or end of case studies list
  let nextStart = indexContent.indexOf('<!-- Project', start + 10);
  if (nextStart === -1) {
    nextStart = indexContent.indexOf('<!-- Beyond the Portfolio', start + 10);
  }
  return indexContent.substring(start, nextStart).trim();
}

const fireflyBlock = getCardBlock('<!-- Project 1: Adobe Firefly');
const stanzaBlock = getCardBlock('<!-- Project 2: Stanza Living');
const orientBlock = getCardBlock('<!-- Project 3: Orient Electric');
const snapmintBlock = getCardBlock('<!-- Project 4: Snapmint');
const hospitalBlock = getCardBlock('<!-- Project 5: Healthcare Agentic AI Suite');

// Prepare reordered blocks
const newCard1 = orientBlock.replace('<!-- Project 3: Orient Electric', '<!-- Project 1: Orient Electric');
const newCard2 = hospitalBlock.replace('<!-- Project 5: Healthcare Agentic AI Suite', '<!-- Project 2: Healthcare Agentic AI Suite').replace('margin-top:3.5rem;', '');
const newCard3 = fireflyBlock.replace('<!-- Project 1: Adobe Firefly', '<!-- Project 3: Adobe Firefly');
const newCard4 = stanzaBlock.replace('<!-- Project 2: Stanza Living', '<!-- Project 4: Stanza Living');
const newCard5 = snapmintBlock.replace('<!-- Project 4: Snapmint', '<!-- Project 5: Snapmint');

const fullReorderedHtml = `
        ${newCard1}

        ${newCard2}

        ${newCard3}

        ${newCard4}

        ${newCard5}
`;

const listStart = indexContent.indexOf('<div id="case-studies-list">');
const listEnd = indexContent.indexOf('<!-- Beyond the Portfolio Section', listStart);

const beforeList = indexContent.substring(0, listStart + '<div id="case-studies-list">'.length);
const afterList = indexContent.substring(listEnd);

indexContent = beforeList + '\n' + fullReorderedHtml + '\n      </div>\n    </section>\n\n    ' + afterList;

fs.writeFileSync(indexFile, indexContent, 'utf8');
console.log('Successfully reordered case studies in index.html!');
