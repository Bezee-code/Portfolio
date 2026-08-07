const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const indexPath = path.join(__dirname, 'index.html');
const dataPath = path.join(__dirname, 'js', 'data.js');

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

console.log('Finding true full index.html and js/data.js in transcript...');

// 1. Find full index.html
for (let i = lines.length - 1; i >= 0; i--) {
  const line = lines[i];
  if (line && line.includes('index.html') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.TargetFile && tc.args.TargetFile.endsWith('index.html')) {
            const content = tc.args.CodeContent;
            if (content.includes('<!DOCTYPE html>') && content.length > 50000 && content.includes('hospital.html')) {
              fs.writeFileSync(indexPath, content, 'utf8');
              console.log(`Restored full index.html from line ${i}! (${content.length} bytes)`);
              i = -1;
              break;
            }
          }
        }
      }
    } catch (e) {}
  }
}

// 2. Find full js/data.js
for (let i = lines.length - 1; i >= 0; i--) {
  const line = lines[i];
  if (line && line.includes('data.js') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.TargetFile && tc.args.TargetFile.endsWith('data.js')) {
            const content = tc.args.CodeContent;
            if (content.includes('const DEFAULT_PORTFOLIO_DATA') && content.length > 50000 && !content.includes('];**')) {
              fs.writeFileSync(dataPath, content, 'utf8');
              console.log(`Restored full data.js from line ${i}! (${content.length} bytes)`);
              i = -1;
              break;
            }
          }
        }
      }
    } catch (e) {}
  }
}

console.log('Done searching!');
