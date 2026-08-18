const fs = require('fs');
const path = require('path');

const hostassistFile = path.join(__dirname, 'hostassist.html');
let hostassistContent = fs.readFileSync(hostassistFile, 'utf8');

const oldHostAssistHero = `<div class="metric-hero">
        <div class="metric-pill">
          <span class="metric-label">Primary Outcome Metric</span>
          <span class="metric-val">7-Day Listing Completion Rate</span>
        </div>
        <div class="metric-pill">
          <span class="metric-label">Core Efficiency Goal</span>
          <span class="metric-val">Reduced Time-to-Activation</span>
        </div>
      </div>`;

const alignedHostAssistHero = `<div class="metric-hero">
        <div class="metric-pill">
          <span class="metric-label">Guest Response Time</span>
          <span class="metric-val">3.2 Min (was 4.2h)</span>
        </div>
        <div class="metric-pill">
          <span class="metric-label">Host RevPAR Revenue Lift</span>
          <span class="metric-val">+21.4% Revenue</span>
        </div>
        <div class="metric-pill">
          <span class="metric-label">Guest AI CSAT Rating</span>
          <span class="metric-val">94.8% Rating</span>
        </div>
      </div>`;

if (hostassistContent.includes(oldHostAssistHero)) {
  hostassistContent = hostassistContent.replace(oldHostAssistHero, alignedHostAssistHero);
  fs.writeFileSync(hostassistFile, hostassistContent, 'utf8');
  console.log('Successfully aligned top metric hero pills in hostassist.html with index.html!');
} else {
  console.log('Top metric hero pills in hostassist.html were already checked or updated.');
}

console.log('MakeMyTrip HostAssist metrics alignment check completed!');
