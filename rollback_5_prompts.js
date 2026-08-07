const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

console.log('Total transcript lines:', lines.length);

// Search user input prompts to identify the exact step 5 prompts ago
let userPrompts = [];
lines.forEach((line, index) => {
  if (line.includes('"type":"USER_INPUT"')) {
    try {
      const obj = JSON.parse(line);
      userPrompts.push({ lineIndex: index, content: obj.content ? obj.content.substring(0, 80) : '' });
    } catch (e) {}
  }
});

console.log('User Prompts count:', userPrompts.length);
userPrompts.forEach((p, idx) => {
  console.log(`Prompt ${idx + 1} (Line ${p.lineIndex}): ${p.content}`);
});
