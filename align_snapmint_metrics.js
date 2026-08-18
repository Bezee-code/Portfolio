const fs = require('fs');
const path = require('path');

const snapmintFile = path.join(__dirname, 'snapmint.html');
let snapmintContent = fs.readFileSync(snapmintFile, 'utf8');

const oldSnapmintMeta = `<div class="candidate-meta">
      <a href="index.html#case-studies" class="btn-back-portfolio">
        ← <strong>Back to Portfolio</strong>
      </a>
      <span>Candidate: <strong>Souvik Ghosh</strong></span>
      <span>Role: <strong>Senior PM - Payments</strong></span>
    </div>`;

const alignedSnapmintMeta = `<div class="candidate-meta">
      <a href="index.html#case-studies" class="btn-back-portfolio">
        ← <strong>Back to Portfolio</strong>
      </a>
      <span>Checkout Conversion: <strong>+28% Boost</strong></span>
      <span>Drop-off Reduction: <strong>42%</strong></span>
      <span>Approval Speed: <strong>&lt;30s</strong></span>
    </div>`;

if (snapmintContent.includes(oldSnapmintMeta)) {
  snapmintContent = snapmintContent.replace(oldSnapmintMeta, alignedSnapmintMeta);
  fs.writeFileSync(snapmintFile, snapmintContent, 'utf8');
  console.log('Successfully aligned candidate meta header pills in snapmint.html with index.html!');
} else {
  console.log('Candidate meta header pills in snapmint.html were already checked or updated.');
}

console.log('Snapmint Pay & Credit metrics alignment check completed!');
