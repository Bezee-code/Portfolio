const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const dir = __dirname;

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

console.log('Restoring exact state right when Hospital AI Agents project was added (Step 1380-1410)...');

// 1. Restore style.css from step ~1350 or earliest rich write
for (let i = 1350; i >= 0; i--) {
  const line = lines[i];
  if (line && line.includes('style.css') && line.includes('"CodeContent"')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.CodeContent.length > 20000 && !tc.args.CodeContent.includes('const fs')) {
            fs.writeFileSync(path.join(dir, 'css', 'style.css'), tc.args.CodeContent, 'utf8');
            console.log(`Restored css/style.css from step ${i} (${tc.args.CodeContent.length} bytes)`);
            i = -1; // break outer loop
            break;
          }
        }
      }
    } catch (e) {}
  }
}

// 2. Restore index.html from step 1400
for (let i = 1405; i >= 1380; i--) {
  const line = lines[i];
  if (line && line.includes('index.html') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.CodeContent.includes('hospital.html')) {
            fs.writeFileSync(path.join(dir, 'index.html'), tc.args.CodeContent, 'utf8');
            console.log(`Restored index.html from step ${i} (${tc.args.CodeContent.length} bytes)`);
            i = -1;
            break;
          }
        }
      }
    } catch (e) {}
  }
}

// 3. Restore js/app.js from step 1400
for (let i = 1410; i >= 1380; i--) {
  const line = lines[i];
  if (line && line.includes('app.js') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.CodeContent.includes('isHospital')) {
            fs.writeFileSync(path.join(dir, 'js', 'app.js'), tc.args.CodeContent, 'utf8');
            console.log(`Restored js/app.js from step ${i} (${tc.args.CodeContent.length} bytes)`);
            i = -1;
            break;
          }
        }
      }
    } catch (e) {}
  }
}

// 4. Restore js/data.js from step 1387
for (let i = 1400; i >= 1370; i--) {
  const line = lines[i];
  if (line && line.includes('data.js') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.CodeContent.includes('healthcare-agentic-ai-suite')) {
            fs.writeFileSync(path.join(dir, 'js', 'data.js'), tc.args.CodeContent, 'utf8');
            console.log(`Restored js/data.js from step ${i} (${tc.args.CodeContent.length} bytes)`);
            i = -1;
            break;
          }
        }
      }
    } catch (e) {}
  }
}

console.log('Restoration process complete!');
