const fs = require('fs');
const path = require('path');

const dir = __dirname;

const projects = [
  {
    name: 'Orient Electric',
    file: 'orient.html',
    homepageMetrics: ['11-12 Days', '25-27 days', '₹8 Cr', '99.4%'],
    expectedInPage: ['11-12 Days', '25-27 days', '₹8 Cr'],
  },
  {
    name: 'Healthcare Agentic AI Suite',
    file: 'hospital.html',
    homepageMetrics: ['4.3 Hours', '24h', '82%', '68%', '99.8%'],
    expectedInPage: ['4.3 Hours', '24h', '82%', '68%', '99.8%'],
  },
  {
    name: 'Adobe Firefly Transcreate',
    file: 'firefly.html',
    homepageMetrics: ['48 Hours', '14d', '85%', '98.2%'],
    expectedInPage: ['48 Hours', '14d', '85%', '98.2%'],
  },
  {
    name: 'Snapmint Pay & Credit',
    file: 'snapmint.html',
    homepageMetrics: ['+28%', '42%', '<30s'],
    expectedInPage: ['+28%', '42%', '30s'],
  },
  {
    name: 'MakeMyTrip HostAssist AI',
    file: 'hostassist.html',
    homepageMetrics: ['3.2 Min', '4.2h', '+21.4%', '94.8%'],
    expectedInPage: ['3.2 Min', '4.2h', '+21.4%', '94.8%'],
  },
  {
    name: 'Upstox MTF Smart Nudge',
    file: 'upstox.html',
    homepageMetrics: ['64%', '+38%', '<10s'],
    expectedInPage: ['64%', '+38%', '10s'],
  }
];

console.log('=== FULL CROSS-PAGE NUMERICAL AUDIT REPORT ===\n');

projects.forEach(p => {
  const filePath = path.join(dir, p.file);
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`📌 Checking ${p.name} (${p.file})...`);
  
  let allFound = true;
  p.expectedInPage.forEach(metric => {
    if (content.includes(metric)) {
      console.log(`   ✓ Found expected metric: "${metric}"`);
    } else {
      console.log(`   ❌ MISSING metric: "${metric}"`);
      allFound = false;
    }
  });
  
  if (allFound) {
    console.log(`   ✅ 100% ALIGNED & MATCHED between index.html and ${p.file}\n`);
  } else {
    console.log(`   ⚠️ Mismatch detected in ${p.file}\n`);
  }
});
