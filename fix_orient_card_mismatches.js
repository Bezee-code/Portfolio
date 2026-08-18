const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexFile, 'utf8');

// 1. Fix Card 1 (Problem Statement - Line 742)
indexContent = indexContent.replace(
  'Manual paper-based Sales Return Note (SRN) processing causing 21-day credit note settlement delays.',
  'Manual paper-based Sales Return Note (SRN) processing causing 25-27 day credit note settlement delays.'
);

// 2. Fix Card 1 (Problem Statement - Line 750)
indexContent = indexContent.replace(
  'Claim Settlement Turnaround Time (21 days) & Dealer NPS',
  'Claim Settlement Turnaround Time (25-27 days) & Dealer NPS'
);

// 3. Fix Card 4 (Metrics & Business Impact - Line 824)
indexContent = indexContent.replace(
  'Claim settlement TAT reduced from 21 days to 3 days; 99.4% SAP ledger reconciliation accuracy.',
  'Claim settlement TAT reduced from 25-27 days to 11-12 days; 99.4% SAP ledger reconciliation accuracy.'
);

fs.writeFileSync(indexFile, indexContent, 'utf8');
console.log('Successfully aligned all Orient Electric Product Thinking card numbers in index.html!');
