const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexFile, 'utf8');

// 1. Swap nav links order
const oldNav = `<a href="#beyond-portfolio" class="nav-link-item">Beyond Portfolio</a>
        <a href="#certifications" class="nav-link-item">Certifications</a>`;

const newNav = `<a href="#certifications" class="nav-link-item">Certifications</a>
        <a href="#beyond-portfolio" class="nav-link-item">Beyond Portfolio</a>`;

if (indexContent.includes(oldNav)) {
  indexContent = indexContent.replace(oldNav, newNav);
  console.log('Updated top header nav link order!');
}

// 2. Extract beyond-portfolio section and certifications section
const beyondStart = indexContent.indexOf('<!-- Beyond the Portfolio Section');
const certStart = indexContent.indexOf('<!-- Certifications & Verified Credentials Section');
const contactStart = indexContent.indexOf('<!-- Contact & Footer Callout');

if (beyondStart !== -1 && certStart !== -1 && contactStart !== -1) {
  const beyondSectionHtml = indexContent.substring(beyondStart, certStart).trim();
  const certSectionHtml = indexContent.substring(certStart, contactStart).trim();

  const swappedSections = certSectionHtml + '\n\n    ' + beyondSectionHtml + '\n\n    ';

  indexContent = indexContent.substring(0, beyondStart) + swappedSections + indexContent.substring(contactStart);

  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log('Successfully swapped Beyond Portfolio and Certifications sections in index.html!');
}
