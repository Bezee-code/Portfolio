const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

const dir = __dirname;

console.log('Restoring exact codebase at Step 1365 (before prompt #74)...');

// 1. Find pure style.css
for (let i = 1365; i >= 0; i--) {
  const line = lines[i];
  if (line && line.includes('style.css') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.TargetFile && tc.args.TargetFile.endsWith('style.css')) {
            const content = tc.args.CodeContent;
            if (!content.includes('<!DOCTYPE') && !content.includes('const fs')) {
              fs.writeFileSync(path.join(dir, 'css', 'style.css'), content, 'utf8');
              console.log(`Restored css/style.css from line ${i} (${content.length} bytes)`);
              i = -1;
              break;
            }
          }
        }
      }
    } catch (e) {}
  }
}

// 2. Find index.html from step 1001 / step 1365
for (let i = 1365; i >= 900; i--) {
  const line = lines[i];
  if (line && line.includes('index.html') && line.includes('<!DOCTYPE html>')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.TargetFile && tc.args.TargetFile.endsWith('index.html')) {
            const content = tc.args.CodeContent;
            if (content.includes('<!DOCTYPE html>') && content.length > 50000) {
              fs.writeFileSync(path.join(dir, 'index.html'), content, 'utf8');
              console.log(`Restored index.html from line ${i} (${content.length} bytes)`);
              i = -1;
              break;
            }
          }
        }
      }
    } catch (e) {}
  }
}

// 3. Find js/data.js from step 1365
for (let i = 1365; i >= 900; i--) {
  const line = lines[i];
  if (line && line.includes('data.js') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.TargetFile && tc.args.TargetFile.endsWith('data.js')) {
            const content = tc.args.CodeContent;
            if (content.includes('DEFAULT_PORTFOLIO_DATA') && !content.includes('];**')) {
              fs.writeFileSync(path.join(dir, 'js', 'data.js'), content, 'utf8');
              console.log(`Restored js/data.js from line ${i} (${content.length} bytes)`);
              i = -1;
              break;
            }
          }
        }
      }
    } catch (e) {}
  }
}

// 4. Find js/app.js from step 1365
for (let i = 1365; i >= 900; i--) {
  const line = lines[i];
  if (line && line.includes('app.js') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.TargetFile && tc.args.TargetFile.endsWith('app.js')) {
            const content = tc.args.CodeContent;
            if (content.length > 10000) {
              fs.writeFileSync(path.join(dir, 'js', 'app.js'), content, 'utf8');
              console.log(`Restored js/app.js from line ${i} (${content.length} bytes)`);
              i = -1;
              break;
            }
          }
        }
      }
    } catch (e) {}
  }
}

console.log('Done restoring to Step 1365 baseline!');
