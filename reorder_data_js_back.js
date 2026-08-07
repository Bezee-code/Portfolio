const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'js', 'data.js');

// Load module by appending module.exports
let code = fs.readFileSync(dataFile, 'utf8');
code += '\nif(typeof module !== "undefined") module.exports = DEFAULT_PORTFOLIO_DATA;';
const tmpPath = path.join(__dirname, 'tmp_data.js');
fs.writeFileSync(tmpPath, code, 'utf8');

const dataObj = require('./tmp_data.js');

const fireflyObj = dataObj.caseStudies.find(c => c.id.includes('firefly'));
const stanzaObj = dataObj.caseStudies.find(c => c.id.includes('stanza'));
const orientObj = dataObj.caseStudies.find(c => c.id.includes('orient'));
const snapmintObj = dataObj.caseStudies.find(c => c.id.includes('snapmint'));
const hospitalObj = dataObj.caseStudies.find(c => c.id.includes('healthcare') || c.id.includes('hospital'));

dataObj.caseStudies = [fireflyObj, stanzaObj, orientObj, snapmintObj, hospitalObj];

const newCode = `/**
 * PM Portfolio Master Data Store
 * Featuring Souvik Ghosh's Flagship PM Projects & Official CV Download
 */

const DEFAULT_PORTFOLIO_DATA = ${JSON.stringify(dataObj, null, 2)};
`;

fs.writeFileSync(dataFile, newCode, 'utf8');
fs.unlinkSync(tmpPath);
console.log('Successfully restored data.js to clean original order!');
