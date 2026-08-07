const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const cssPath = path.join(__dirname, 'css', 'style.css');

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

// Find step 842 which had the complete style.css
for (let i = 850; i >= 800; i--) {
  const line = lines[i];
  if (line && line.includes('"name":"write_to_file"') && line.includes('style.css')) {
    try {
      const obj = JSON.parse(line);
      for (const tc of obj.tool_calls) {
        if (tc.name === 'write_to_file' && tc.args.CodeContent) {
          fs.writeFileSync(cssPath, tc.args.CodeContent, 'utf8');
          console.log(`Successfully restored complete style.css from step ${i}! (${tc.args.CodeContent.length} bytes)`);
          process.exit(0);
        }
      }
    } catch (e) {}
  }
}

// Fallback search for replace_file_content or multi_replace_file_content
console.log('Searching for any full style.css writes in transcript...');
for (let i = lines.length - 1; i >= 0; i--) {
  const line = lines[i];
  if (line && line.includes('style.css') && line.includes('"CodeContent"')) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls) {
        for (const tc of obj.tool_calls) {
          if (tc.args && tc.args.CodeContent && tc.args.CodeContent.length > 20000 && !tc.args.CodeContent.includes('DESIGN SYSTEM: LINEAR.APP')) {
            fs.writeFileSync(cssPath, tc.args.CodeContent, 'utf8');
            console.log(`Found full style.css write at line ${i}! (${tc.args.CodeContent.length} bytes)`);
            process.exit(0);
          }
        }
      }
    } catch (e) {}
  }
}
