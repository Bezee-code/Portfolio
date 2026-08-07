const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\brain\\a2846572-1544-44bb-be1f-11b8afe44eed\\.system_generated\\logs\\transcript_full.jsonl';
const appDir = __dirname;

const fileContent = fs.readFileSync(logPath, 'utf8');
const lines = fileContent.split('\n');

console.log('Rolling back codebase to state before 5 prompts ago (Up to step 990)...');

for (let i = 0; i <= 990; i++) {
  const line = lines[i];
  if (!line) continue;
  try {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      for (const tc of obj.tool_calls) {
        if (tc.name === 'write_to_file' && tc.args.CodeContent && tc.args.TargetFile) {
          const target = tc.args.TargetFile;
          if (target.includes('pm-portfolio-app')) {
            const relPath = path.relative('C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\scratch\\pm-portfolio-app', target);
            const fullDest = path.join(appDir, relPath);
            fs.mkdirSync(path.dirname(fullDest), { recursive: true });
            fs.writeFileSync(fullDest, tc.args.CodeContent, 'utf8');
            console.log(`Step ${i}: write_to_file ${relPath}`);
          }
        } else if (tc.name === 'replace_file_content' && tc.args.TargetFile) {
          const target = tc.args.TargetFile;
          if (target.includes('pm-portfolio-app')) {
            const relPath = path.relative('C:\\Users\\Souvik Ghosh\\.gemini\\antigravity\\scratch\\pm-portfolio-app', target);
            const fullDest = path.join(appDir, relPath);
            if (fs.existsSync(fullDest)) {
              let cur = fs.readFileSync(fullDest, 'utf8');
              if (cur.includes(tc.args.TargetContent)) {
                cur = cur.replace(tc.args.TargetContent, tc.args.ReplacementContent);
                fs.writeFileSync(fullDest, cur, 'utf8');
                console.log(`Step ${i}: replace_file_content ${relPath}`);
              }
            }
          }
        }
      }
    }
  } catch (e) {}
}

console.log('Rollback completed successfully!');
