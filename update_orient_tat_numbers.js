const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
const orientFile = path.join(__dirname, 'orient.html');

let indexContent = fs.readFileSync(indexFile, 'utf8');
let orientContent = fs.readFileSync(orientFile, 'utf8');

// 1. Update index.html
indexContent = indexContent.replace(
  'User Story: 3-Day B2B Return & Credit Note Settlement',
  'User Story: 11-12 Day B2B Return & Credit Note Settlement'
);

indexContent = indexContent.replace(
  '<div class="visual-node-sub">3-Day Turnaround</div>',
  '<div class="visual-node-sub">11-12 Day Turnaround</div>'
);

indexContent = indexContent.replace(
  'Reduced claim settlement turnaround time from 21 days to 3 days across ₹8 Cr monthly dealer returns.',
  'Reduced claim settlement turnaround time from 25-27 days to 11-12 days across ₹8 Cr monthly dealer returns.'
);

indexContent = indexContent.replace(
  '<div class="pm-kpi-val">3 Days</div><div class="pm-kpi-lbl">Claim Settlement TAT (was 21d)</div>',
  '<div class="pm-kpi-val">11-12 Days</div><div class="pm-kpi-lbl">Claim Settlement TAT (was 25-27d)</div>'
);

fs.writeFileSync(indexFile, indexContent, 'utf8');
console.log('Updated Orient Electric TAT numbers in index.html!');

// 2. Update orient.html
orientContent = orientContent.replace(
  'reducing turn-around time (TAT) by 78.5% across 2.5 Lakh annual units.',
  'reducing turn-around time (TAT) from 25-27 days to 11-12 days across 2.5 Lakh annual units.'
);

orientContent = orientContent.replace(
  'Resulted in 21-day average delays',
  'Resulted in 25-27 day average delays'
);

orientContent = orientContent.replace(
  '21-Day',
  '25-27 Day'
);

orientContent = orientContent.replace(
  '21 Days',
  '25-27 Days'
);

orientContent = orientContent.replace(
  '4.5 Days',
  '11-12 Days'
);

orientContent = orientContent.replace(
  '-78.5%',
  '-55%'
);

orientContent = orientContent.replace(
  '21.0 days',
  '25-27 days'
);

fs.writeFileSync(orientFile, orientContent, 'utf8');
console.log('Updated Orient Electric TAT numbers in orient.html!');

console.log('Successfully completed Orient Electric TAT metrics update!');
