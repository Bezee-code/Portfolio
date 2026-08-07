const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const dir = __dirname;

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

console.log('Rolling back to exact state after prompt: "add hospital_onboarding_portfolio_prototype.html to portfolio"');

// Restore style.css from step 362 (pure CSS)
for (let i = 400; i >= 0; i--) {
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
              console.log(`Restored css/style.css from step ${i} (${content.length} bytes)`);
              i = -1;
              break;
            }
          }
        }
      }
    } catch (e) {}
  }
}

// Restore index.html from step ~1387
for (let i = 1400; i >= 1350; i--) {
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

// Restore js/app.js from step ~1400
for (let i = 1420; i >= 1350; i--) {
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

// Restore js/data.js from step ~1387
for (let i = 1400; i >= 1350; i--) {
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

console.log('Rollback completed!');
