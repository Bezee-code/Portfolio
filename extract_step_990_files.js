const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const dir = __dirname;

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

console.log('Extracting exact file state at step ~970 to 990...');

// Let's inspect tool calls between line 970 and 990
for (let i = 970; i <= 990; i++) {
  const line = lines[i];
  if (!line) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      for (const tc of obj.tool_calls) {
        console.log(`Step ${i}: ${tc.name} -> ${tc.args.TargetFile || tc.args.targetFile || ''}`);
        if (tc.args.CodeContent && tc.args.TargetFile) {
          const target = tc.args.TargetFile;
          const content = tc.args.CodeContent;
          if (target.endsWith('style.css')) {
            fs.writeFileSync(path.join(dir, 'css', 'style.css'), content, 'utf8');
            console.log('Restored css/style.css');
          } else if (target.endsWith('index.html')) {
            fs.writeFileSync(path.join(dir, 'index.html'), content, 'utf8');
            console.log('Restored index.html');
          } else if (target.endsWith('app.js')) {
            fs.writeFileSync(path.join(dir, 'js', 'app.js'), content, 'utf8');
            console.log('Restored js/app.js');
          } else if (target.endsWith('data.js')) {
            fs.writeFileSync(path.join(dir, 'js', 'data.js'), content, 'utf8');
            console.log('Restored js/data.js');
          }
        }
      }
    }
  } catch (e) {}
}
