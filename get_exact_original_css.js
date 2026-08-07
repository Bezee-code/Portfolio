const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const cssPath = path.join(__dirname, 'css', 'style.css');

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

for (let i = 0; i < 600; i++) {
  const line = lines[i];
  if (line && line.includes('style.css') && line.includes('CodeContent') && line.includes('.gradient-text')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.CodeContent.length > 10000) {
            console.log(`Found earlier style.css write at step ${i}! (${tc.args.CodeContent.length} bytes)`);
            fs.writeFileSync(cssPath, tc.args.CodeContent, 'utf8');
            process.exit(0);
          }
        }
      }
    } catch (e) {}
  }
}
console.log('No earlier full write found, keeping current style.css');
