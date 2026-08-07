const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const dataFile = path.join(__dirname, 'js', 'data.js');

let dataContent = fs.readFileSync(dataFile, 'utf8');

try {
  let evalCode = dataContent.replace('const DEFAULT_PORTFOLIO_DATA =', 'var DEFAULT_PORTFOLIO_DATA =');
  eval(evalCode);
  const currentList = DEFAULT_PORTFOLIO_DATA.caseStudies;

  const fireflyObj = currentList.find(c => c.id.includes('firefly'));
  const stanzaObj = currentList.find(c => c.id.includes('stanza'));
  const orientObj = currentList.find(c => c.id.includes('orient'));
  const snapmintObj = currentList.find(c => c.id.includes('snapmint'));
  const hospitalObj = currentList.find(c => c.id.includes('healthcare') || c.id.includes('hospital'));

  const originalOrderedList = [fireflyObj, stanzaObj, orientObj, snapmintObj, hospitalObj];

  const oldArrayStart = dataContent.indexOf('caseStudies: [');
  const oldArrayEnd = dataContent.indexOf('];', oldArrayStart) + 2;

  const newArrayText = 'caseStudies: ' + JSON.stringify(originalOrderedList, null, 2) + ';';
  dataContent = dataContent.substring(0, oldArrayStart) + newArrayText + dataContent.substring(oldArrayEnd);

  fs.writeFileSync(dataFile, dataContent, 'utf8');
  console.log('Restored js/data.js caseStudies array order!');
} catch(e) {
  console.log('Error updating data.js:', e);
}

// 2. Restore index.html
let indexContent = fs.readFileSync(indexFile, 'utf8');

function getCardBlock(commentTitle) {
  const start = indexContent.indexOf(commentTitle);
  if (start === -1) return '';
  let nextStart = indexContent.indexOf('<!-- Project', start + 10);
  if (nextStart === -1) {
    nextStart = indexContent.indexOf('<!-- Beyond the Portfolio', start + 10);
  }
  return indexContent.substring(start, nextStart).trim();
}

const fireflyBlock = getCardBlock('<!-- Project 3: Adobe Firefly') || getCardBlock('<!-- Project 1: Adobe Firefly');
const stanzaBlock = getCardBlock('<!-- Project 4: Stanza Living') || getCardBlock('<!-- Project 2: Stanza Living');
const orientBlock = getCardBlock('<!-- Project 1: Orient Electric') || getCardBlock('<!-- Project 3: Orient Electric');
const snapmintBlock = getCardBlock('<!-- Project 5: Snapmint') || getCardBlock('<!-- Project 4: Snapmint');
const hospitalBlock = getCardBlock('<!-- Project 2: Healthcare Agentic AI Suite') || getCardBlock('<!-- Project 5: Healthcare Agentic AI Suite');

const card1 = fireflyBlock.replace(/<!-- Project \d+: Adobe Firefly/, '<!-- Project 1: Adobe Firefly');
const card2 = stanzaBlock.replace(/<!-- Project \d+: Stanza Living/, '<!-- Project 2: Stanza Living');
const card3 = orientBlock.replace(/<!-- Project \d+: Orient Electric/, '<!-- Project 3: Orient Electric');
const card4 = snapmintBlock.replace(/<!-- Project \d+: Snapmint/, '<!-- Project 4: Snapmint');
const card5 = hospitalBlock.replace(/<!-- Project \d+: Healthcare Agentic AI Suite/, '<!-- Project 5: Healthcare Agentic AI Suite');

const fullOriginalHtml = `
        ${card1}

        ${card2}

        ${card3}

        ${card4}

        ${card5}
`;

const listStart = indexContent.indexOf('<div id="case-studies-list">');
const listEnd = indexContent.indexOf('<!-- Beyond the Portfolio Section', listStart);

const beforeList = indexContent.substring(0, listStart + '<div id="case-studies-list">'.length);
const afterList = indexContent.substring(listEnd);

indexContent = beforeList + '\n' + fullOriginalHtml + '\n      </div>\n    </section>\n\n    ' + afterList;

fs.writeFileSync(indexFile, indexContent, 'utf8');
console.log('Restored index.html case study card order!');
