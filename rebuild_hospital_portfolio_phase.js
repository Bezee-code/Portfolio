const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const indexPath = path.join(__dirname, 'index.html');

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

console.log('Finding pre-hospital full index.html in transcript...');

for (let i = lines.length - 1; i >= 0; i--) {
  const line = lines[i];
  if (line && line.includes('index.html') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.TargetFile && tc.args.TargetFile.endsWith('index.html')) {
            const content = tc.args.CodeContent;
            if (content.includes('<!DOCTYPE html>') && content.length > 50000) {
              fs.writeFileSync(indexPath, content, 'utf8');
              console.log(`Found full pre-hospital index.html at line ${i}! (${content.length} bytes)`);
              i = -1;
              break;
            }
          }
        }
      }
    } catch (e) {}
  }
}

// Now run add_hospital_project.js
require('./add_hospital_project.js');
console.log('Successfully rebuilt portfolio to the exact hospital onboarding prompt phase!');
