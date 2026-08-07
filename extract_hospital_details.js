const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'hospital.html'), 'utf8');

const titleMatch = content.match(/<title>(.*?)<\/title>/);
console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');

// Search headings
const h1Matches = content.match(/<h1[^>]*>(.*?)<\/h1>/gi);
console.log('\nH1 Tags:', h1Matches);

const h2Matches = content.match(/<h2[^>]*>(.*?)<\/h2>/gi);
console.log('\nH2 Tags:', h2Matches ? h2Matches.slice(0, 10) : []);

// Search metrics
const metricMatches = content.match(/class="metric-[^"]*">(.*?)<\/div>/gi);
console.log('\nMetric classes snippet:', content.substring(content.indexOf('metric'), content.indexOf('metric') + 500));
