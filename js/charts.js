/**
 * PM Portfolio Metrics Chart Renderer
 * Renders SVG and Chart.js metrics for Stanza Living Case Study
 */

function renderRetentionChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const labels = data.labels;
  const legacy = data.legacyCohort;
  const v2 = data.v2Cohort;

  const width = 460;
  const height = 240;
  const padding = 40;

  const maxVal = 100;
  const minVal = 0;

  const getX = (i) => padding + (i * (width - 2 * padding)) / (labels.length - 1);
  const getY = (val) => height - padding - ((val - minVal) * (height - 2 * padding)) / (maxVal - minVal);

  let legacyPoints = legacy.map((val, i) => `${getX(i)},${getY(val)}`).join(' ');
  let v2Points = v2.map((val, i) => `${getX(i)},${getY(val)}`).join(' ');

  let svgHtml = `
    <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" style="overflow: visible;">
      <!-- Gridlines -->
      <line x1="${padding}" y1="${getY(0)}" x2="${width - padding}" y2="${getY(0)}" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4"/>
      <line x1="${padding}" y1="${getY(50)}" x2="${width - padding}" y2="${getY(50)}" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4"/>
      <line x1="${padding}" y1="${getY(100)}" x2="${width - padding}" y2="${getY(100)}" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4"/>

      <!-- Legacy Cohort Line -->
      <polyline points="${legacyPoints}" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6"/>
      ${legacy.map((val, i) => `<circle cx="${getX(i)}" cy="${getY(val)}" r="4" fill="#ef4444"/>`).join('')}

      <!-- V2 Cohort Line -->
      <polyline points="${v2Points}" fill="none" stroke="#10b981" stroke-width="3"/>
      ${v2.map((val, i) => `<circle cx="${getX(i)}" cy="${getY(val)}" r="5" fill="#10b981"/>`).join('')}

      <!-- X Axis Labels -->
      ${labels.map((lbl, i) => `
        <text x="${getX(i)}" y="${height - 10}" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="sans-serif">${lbl}</text>
      `).join('')}

      <!-- Legend -->
      <g transform="translate(${padding}, 15)">
        <rect x="0" y="0" width="10" height="10" fill="#10b981" rx="2"/>
        <text x="16" y="9" fill="#f8fafc" font-size="11" font-weight="600">Stanza v2.0 Retention (+18.4% Lift)</text>
        <rect x="230" y="0" width="10" height="10" fill="#ef4444" rx="2"/>
        <text x="246" y="9" fill="#94a3b8" font-size="11">Legacy Baseline</text>
      </g>
    </svg>
  `;

  container.innerHTML = svgHtml;
}

function renderSlaChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const labels = data.labels;
  const before = data.beforeSlaHours;
  const after = data.afterSlaHours;

  const width = 460;
  const height = 240;
  const padding = 40;

  const maxVal = 16;
  const getX = (i) => padding + (i * (width - 2 * padding)) / (labels.length - 1);
  const getY = (val) => height - padding - (val * (height - 2 * padding)) / maxVal;

  let beforePoints = before.map((val, i) => `${getX(i)},${getY(val)}`).join(' ');
  let afterPoints = after.map((val, i) => `${getX(i)},${getY(val)}`).join(' ');

  let svgHtml = `
    <svg width="100%" height="100%" viewBox="0 0 ${width} ${height}" style="overflow: visible;">
      <!-- Gridlines -->
      <line x1="${padding}" y1="${getY(0)}" x2="${width - padding}" y2="${getY(0)}" stroke="rgba(255,255,255,0.1)"/>
      <line x1="${padding}" y1="${getY(5)}" x2="${width - padding}" y2="${getY(5)}" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4"/>
      <line x1="${padding}" y1="${getY(10)}" x2="${width - padding}" y2="${getY(10)}" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4"/>
      <line x1="${padding}" y1="${getY(15)}" x2="${width - padding}" y2="${getY(15)}" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4"/>

      <!-- Before SLA Line -->
      <polyline points="${beforePoints}" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4"/>
      ${before.map((val, i) => `<circle cx="${getX(i)}" cy="${getY(val)}" r="4" fill="#f59e0b"/>`).join('')}

      <!-- After SLA Line -->
      <polyline points="${afterPoints}" fill="none" stroke="#06b6d4" stroke-width="3"/>
      ${after.map((val, i) => `<circle cx="${getX(i)}" cy="${getY(val)}" r="5" fill="#06b6d4"/>`).join('')}

      <!-- X Axis Labels -->
      ${labels.map((lbl, i) => `
        <text x="${getX(i)}" y="${height - 10}" fill="#94a3b8" font-size="11" text-anchor="middle" font-family="sans-serif">${lbl}</text>
      `).join('')}

      <!-- Legend -->
      <g transform="translate(${padding}, 15)">
        <rect x="0" y="0" width="10" height="10" fill="#06b6d4" rx="2"/>
        <text x="16" y="9" fill="#f8fafc" font-size="11" font-weight="600">Stanza v2.0 SLA (Avg 2.7 Hours)</text>
        <rect x="230" y="0" width="10" height="10" fill="#f59e0b" rx="2"/>
        <text x="246" y="9" fill="#94a3b8" font-size="11">Before Automation (14 Hours)</text>
      </g>
    </svg>
  `;

  container.innerHTML = svgHtml;
}
