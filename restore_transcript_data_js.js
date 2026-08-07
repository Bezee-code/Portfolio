const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const dataPath = path.join(__dirname, 'js', 'data.js');

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

console.log('Searching for clean js/data.js in transcript...');

for (let i = 1450; i >= 1300; i--) {
  const line = lines[i];
  if (line && line.includes('data.js') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.CodeContent.includes('healthcare-agentic-ai-suite')) {
            fs.writeFileSync(dataPath, tc.args.CodeContent, 'utf8');
            console.log(`Successfully restored data.js from step ${i}! (${tc.args.CodeContent.length} bytes)`);
            process.exit(0);
          }
        }
      }
    } catch (e) {}
  }
}

console.log('No data.js write found in step range 1300-1450, checking earlier writes...');
for (let i = lines.length - 1; i >= 0; i--) {
  const line = lines[i];
  if (line && line.includes('data.js') && line.includes('CodeContent') && line.includes('DEFAULT_PORTFOLIO_DATA')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.CodeContent.length > 20000 && !tc.args.CodeContent.includes('];**')) {
            fs.writeFileSync(dataPath, tc.args.CodeContent, 'utf8');
            console.log(`Successfully restored clean data.js from step ${i}! (${tc.args.CodeContent.length} bytes)`);
            process.exit(0);
          }
        }
      }
    } catch (e) {}
  }
}
