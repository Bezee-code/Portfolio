const fs = require('fs');
const path = require('path');

const fireflyFile = path.join(__dirname, 'firefly.html');
let fireflyContent = fs.readFileSync(fireflyFile, 'utf8');

const oldFireflyPills = `<div class="meta-pills">
      <a href="index.html" class="pill back-btn-pill">
        ← <strong>Back to Portfolio</strong>
      </a>
      <div class="pill">
        Candidate: <strong>Souvik Ghosh (IIM Calcutta / B.Tech CSE)</strong>
      </div>
      <div class="pill">
        Target Role: <strong>PM - Multilingual & GenAI Platform</strong>
      </div>
      <div class="pill highlight">
        North Star: <strong>Post-Translation Edit Distance (-64%)</strong>
      </div>
    </div>`;

const alignedFireflyPills = `<div class="meta-pills">
      <a href="index.html" class="pill back-btn-pill">
        ← <strong>Back to Portfolio</strong>
      </a>
      <div class="pill">
        Campaign TAT: <strong>48 Hours (was 14d)</strong>
      </div>
      <div class="pill">
        Time Savings: <strong>85% Reduction</strong>
      </div>
      <div class="pill highlight">
        Brand Compliance: <strong>98.2% Accuracy</strong>
      </div>
    </div>`;

if (fireflyContent.includes(oldFireflyPills)) {
  fireflyContent = fireflyContent.replace(oldFireflyPills, alignedFireflyPills);
  fs.writeFileSync(fireflyFile, fireflyContent, 'utf8');
  console.log('Successfully aligned top meta pills in firefly.html with index.html!');
} else {
  console.log('Top meta pills in firefly.html were already checked or updated.');
}

console.log('Adobe Firefly metrics alignment check completed!');
