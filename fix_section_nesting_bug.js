const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexFile, 'utf8');

// 1. Remove early </section> at line 1023
indexContent = indexContent.replace(
  '</div>\n\n      </div>\n    </section>\n\n    \n\n        </div>\n      </div>\n\n      <!-- Category Group 2: Independent PM Strategy Case Studies -->',
  '</div>\n      </div>\n\n      <!-- Category Group 2: Independent PM Strategy Case Studies -->'
);

// 2. Ensure </section> closes after group-case-studies and before beyond-portfolio
const beyondPos = indexContent.indexOf('<!-- Beyond the Portfolio Section');
const hostassistPos = indexContent.indexOf('href="hostassist.html"');

if (beyondPos !== -1 && hostassistPos !== -1) {
  // Check closing tags right before beyond-portfolio
  const closingStr = indexContent.substring(beyondPos - 200, beyondPos);
  console.log('Closing structure before beyond-portfolio:\n', closingStr);
}

// Clean closing structure right before beyond-portfolio
const oldBeyondTransition = indexContent.substring(indexContent.indexOf('href="hostassist.html"'));
const targetTransitionStart = oldBeyondTransition.indexOf('<!-- Beyond the Portfolio Section');

if (targetTransitionStart !== -1) {
  const cardEndPos = oldBeyondTransition.indexOf('<!-- Beyond the Portfolio Section');
  const cardSnippet = oldBeyondTransition.substring(0, cardEndPos);
  
  const cleanHostAssistEnd = cardSnippet.substring(0, cardSnippet.indexOf('</div>\n          </div>') + 21) +
    '\n        </div>\n      </div>\n    </section>\n\n    ';
    
  indexContent = indexContent.substring(0, indexContent.indexOf('href="hostassist.html"')) +
    cleanHostAssistEnd +
    indexContent.substring(beyondPos);

  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Fixed section nesting structure in index.html!');
}
