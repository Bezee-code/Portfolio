const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

for (let i = 845; i >= 600; i--) {
  if (lines[i] && lines[i].includes('.apple-profile-card')) {
    const idx = lines[i].indexOf('.apple-profile-card');
    console.log(`Step ${i} snippet:\n`, lines[i].substring(idx - 50, idx + 600));
    console.log('---');
  }
}
