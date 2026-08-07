const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
const content = fs.readFileSync(filePath, 'utf8');

const matches = [];
let regex = /<div class="pm-case-card[^"]*">/g;
let match;
while ((match = regex.exec(content)) !== null) {
  matches.push(match.index);
}

console.log(`Found ${matches.length} pm-case-card occurrences in index.html:`);

matches.forEach((idx, i) => {
  const slice = content.substring(idx, idx + 450);
  console.log(`--- CARD ${i + 1} ---`);
  console.log(slice);
  console.log(`Has pm-thinking-grid-section? ${content.substring(idx, idx + 5000).includes('pm-thinking-grid-section')}`);
});
