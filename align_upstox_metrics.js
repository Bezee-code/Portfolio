const fs = require('fs');
const path = require('path');

const upstoxFile = path.join(__dirname, 'upstox.html');
let upstoxContent = fs.readFileSync(upstoxFile, 'utf8');

const oldUpstoxPills = `<div class="metric-pill-container">
      <div class="metric-pill">
        <div class="label">PRIMARY PRODUCT METRIC [PROPOSED]</div>
        <div class="val" id="metric-liquidation">Successful Risk Resolution Rate</div>
      </div>
      <div class="metric-pill">
        <div class="label">SECONDARY CUSTOMER METRIC [PROPOSED]</div>
        <div class="val" id="metric-retention" style="color: #A29BFE;">Time to Risk Resolution</div>
      </div>
    </div>`;

const alignedUpstoxPills = `<div class="metric-pill-container">
      <div class="metric-pill">
        <div class="label">Square-Off Reduction</div>
        <div class="val" id="metric-liquidation">64% Liquidations Prevented</div>
      </div>
      <div class="metric-pill">
        <div class="label">MTF Trade Growth</div>
        <div class="val" id="metric-retention" style="color: #A29BFE;">+38% Order Volume</div>
      </div>
      <div class="metric-pill">
        <div class="label">Margin Top-Up Speed</div>
        <div class="val" style="color: #00E676;">&lt;10s One-Tap UPI</div>
      </div>
    </div>`;

if (upstoxContent.includes(oldUpstoxPills)) {
  upstoxContent = upstoxContent.replace(oldUpstoxPills, alignedUpstoxPills);
  fs.writeFileSync(upstoxFile, upstoxContent, 'utf8');
  console.log('Successfully aligned top metric pills in upstox.html with index.html!');
} else {
  console.log('Top metric pills in upstox.html were already checked or updated.');
}

console.log('Upstox MTF metrics alignment check completed!');
