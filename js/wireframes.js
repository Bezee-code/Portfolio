/**
 * Interactive Wireframe Switcher for Stanza Living Case Study
 */

function setupWireframeViewer(wireframeData) {
  const container = document.getElementById('wireframeContainer');
  if (!container || !wireframeData) return;

  let activeStepId = wireframeData.steps[0].id;

  function render() {
    const activeStep = wireframeData.steps.find(s => s.id === activeStepId) || wireframeData.steps[0];

    container.innerHTML = `
      <div class="wireframe-container">
        <div class="wireframe-steps">
          <h4 style="color:var(--text-main); font-family:var(--font-heading); margin-bottom:0.75rem;">Interactive User Flow</h4>
          ${wireframeData.steps.map((step, idx) => `
            <button class="step-btn ${step.id === activeStepId ? 'active' : ''}" data-step-id="${step.id}">
              <span class="step-number">STEP 0${idx + 1}</span>
              <span style="font-weight:600; font-size:0.9rem;">${step.label}</span>
            </button>
          `).join('')}
        </div>

        <div style="display:flex; flex-direction:column; align-items:center;">
          <div class="phone-mockup">
            <div class="phone-notch"></div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; border-bottom:1px solid #334155; padding-bottom:0.5rem;">
              <span style="font-size:12px; font-weight:700; color:#38bdf8;">${activeStep.screenTitle}</span>
              <span style="font-size:10px; color:#10b981; font-weight:600;">LIVE PROTOTYPE</span>
            </div>
            <div style="flex-grow:1;">
              ${activeStep.mockupHtml}
            </div>
            <div style="text-align:center; padding-top:0.75rem; border-top:1px solid #334155; font-size:10px; color:#64748b;">
              Stanza Resident App • iOS v2.1
            </div>
          </div>
        </div>
      </div>
    `;

    // Attach step listeners
    container.querySelectorAll('.step-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const stepId = btn.getAttribute('data-step-id');
        activeStepId = stepId;
        render();
      });
    });
  }

  render();
}
