const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

lines.forEach((line, idx) => {
  if (line.includes('index.html') && line.includes('<!DOCTYPE html>')) {
    console.log(`Step ${idx + 1} contains <!DOCTYPE html> for index.html`);
  }
});
