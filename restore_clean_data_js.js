const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'js', 'data.js');
let dataContent = fs.readFileSync(dataFile, 'utf8');

// Find caseStudies array in data.js text and clean syntax
const fireflyIndex = dataContent.indexOf('"adobe-firefly-transcreate"');
const stanzaIndex = dataContent.indexOf('"stanza-care-ai-triage"');
const orientIndex = dataContent.indexOf('"orient-electric-srn-digitization"');
const snapmintIndex = dataContent.indexOf('"snapmint-bnpl-checkout"');
const hospitalIndex = dataContent.indexOf('"healthcare-agentic-ai-suite"');

console.log('Indices in data.js:');
console.log('Firefly:', fireflyIndex);
console.log('Stanza:', stanzaIndex);
console.log('Orient:', orientIndex);
console.log('Snapmint:', snapmintIndex);
console.log('Hospital:', hospitalIndex);
