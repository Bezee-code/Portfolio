const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

const userPrompts = [];

lines.forEach((line, idx) => {
  if (line.includes('"type":"USER_INPUT"')) {
    try {
      const obj = JSON.parse(line);
      userPrompts.push({ lineIndex: idx, stepIndex: obj.step_index, content: obj.content });
    } catch (e) {}
  }
});

console.log(`Total USER_INPUT prompts found: ${userPrompts.length}`);
console.log('\n--- LAST 10 USER PROMPTS ---');
userPrompts.slice(-10).forEach((p, idx) => {
  console.log(`[Prompt #${userPrompts.length - 10 + idx + 1}] Step ${p.stepIndex} (Line ${p.lineIndex}): ${p.content.substring(0, 100).replace(/\n/g, ' ')}...`);
});
