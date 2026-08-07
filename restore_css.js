const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const cssPath = path.join(__dirname, 'css', 'style.css');

if (fs.existsSync(logPath)) {
  const fileContent = fs.readFileSync(logPath, 'utf8');
  const lines = fileContent.split('\n');

  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i];
    if (line.includes('update_style_linear.js')) {
      console.log('Found update_style_linear step at line', i);
    }
  }
} else {
  console.log('Log file not found');
}
