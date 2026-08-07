const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');

dataContent = dataContent.replace('const DEFAULT_PORTFOLIO_DATA =', 'global.DEFAULT_PORTFOLIO_DATA =');
eval(dataContent);

const csList = global.DEFAULT_PORTFOLIO_DATA.caseStudies;
console.log(`Found ${csList.length} case studies in DEFAULT_PORTFOLIO_DATA:`);

csList.forEach(cs => {
  console.log(`\n- ID: ${cs.id} | Title: ${cs.title}`);
  if (!cs.productThinking) {
    console.log('  ❌ MISSING productThinking!');
  } else {
    const pt = cs.productThinking;
    console.log(`  ✅ Has productThinking. Keys:`, Object.keys(pt));
    console.log(`     problemCard: ${pt.problemCard ? pt.problemCard.title : 'MISSING'}`);
    console.log(`     researchCard: ${pt.researchCard ? pt.researchCard.title : 'MISSING'}`);
    console.log(`     decisionsCard: ${pt.decisionsCard ? pt.decisionsCard.title : 'MISSING'}`);
    console.log(`     solutionCard: ${pt.solutionCard ? pt.solutionCard.title : 'MISSING'}`);
  }
});
