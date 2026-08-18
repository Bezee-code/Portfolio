const fs = require('fs');
const path = require('path');

const hospitalFile = path.join(__dirname, 'hospital.html');
let hospitalContent = fs.readFileSync(hospitalFile, 'utf8');

// Update workflow 1 metrics in hospital.html JS data structure
const oldMetricsJs = `metrics: \`
                    <div class="metric-pill">
                        <div class="val">-41%</div>
                        <div class="lbl">Intake SLA (45m → 8.5m)</div>
                    </div>
                    <div class="metric-pill">
                        <div class="val">94%</div>
                        <div class="lbl">Instant Pre-Auth Approval</div>
                    </div>
                \`,`;

const alignedMetricsJs = `metrics: \`
                    <div class="metric-pill">
                        <div class="val">4.3 Hours</div>
                        <div class="lbl">Pre-Auth Claim TAT (was 24h)</div>
                    </div>
                    <div class="metric-pill">
                        <div class="val">82%</div>
                        <div class="lbl">Claim Approval Speedup</div>
                    </div>
                    <div class="metric-pill">
                        <div class="val">99.8%</div>
                        <div class="lbl">Medication Safety Accuracy</div>
                    </div>
                \`,`;

if (hospitalContent.includes(oldMetricsJs)) {
  hospitalContent = hospitalContent.replace(oldMetricsJs, alignedMetricsJs);
  fs.writeFileSync(hospitalFile, hospitalContent, 'utf8');
  console.log('Successfully aligned top metric pills in hospital.html with index.html!');
} else {
  console.log('Top metric pills in hospital.html were already checked or updated.');
}

console.log('Healthcare metrics alignment check completed!');
