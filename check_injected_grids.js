const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const projects = ['firefly-transcreate', 'stanza-care', 'orient-srn', 'snapmint-bnpl'];

projects.forEach(p => {
  console.log(`Checking ${p}:`);
  const pos = content.indexOf(p);
  if (pos !== -1) {
    const nextPos = content.indexOf('pm-case-card', pos + 20);
    const sliceEnd = nextPos !== -1 ? nextPos : pos + 4000;
    const block = content.substring(pos, sliceEnd);
    const hasGrid = block.includes('pm-thinking-grid-section');
    console.log(`  -> Has 2x2 grid: ${hasGrid}`);
  } else {
    console.log(`  -> Project id ${p} not found in index.html!`);
  }
});
