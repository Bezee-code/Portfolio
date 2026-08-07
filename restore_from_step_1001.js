const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

const dir = __dirname;

for (let i = 1010; i >= 990; i--) {
  const line = lines[i];
  if (line && line.includes('index.html') && line.includes('<!DOCTYPE html>')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.TargetFile && tc.args.TargetFile.endsWith('index.html')) {
            fs.writeFileSync(path.join(dir, 'index.html'), tc.args.CodeContent, 'utf8');
            console.log(`Extracted full index.html from line ${i}! (${tc.args.CodeContent.length} bytes)`);
            break;
          }
        }
      }
    } catch (e) {}
  }
}

// Now run add_hospital_project.js
require('./add_hospital_project.js');

// Ensure pure style.css and second picture styles are applied
require('./find_pure_css.js');
require('./build_perfect_second_picture_css.js');

console.log('Restoration to exact post-hospital prompt phase complete!');
