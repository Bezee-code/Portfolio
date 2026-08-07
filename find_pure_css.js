const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const cssPath = path.join(__dirname, 'css', 'style.css');

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
  const line = lines[i];
  if (line && line.includes('style.css') && line.includes('CodeContent')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.TargetFile && tc.args.TargetFile.endsWith('style.css')) {
            const content = tc.args.CodeContent;
            if (!content.includes('<!DOCTYPE') && !content.includes('const fs') && (content.includes('/*') || content.includes(':root'))) {
              fs.writeFileSync(cssPath, content, 'utf8');
              console.log(`Found pure style.css at line ${i}! (${content.length} bytes)`);
              process.exit(0);
            }
          }
        }
      }
    } catch (e) {}
  }
}

console.log('No pure style.css found in tool calls, checking replace_file_content...');
