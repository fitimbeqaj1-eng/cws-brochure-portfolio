const detailRoot = document.querySelector("#detailRoot");
const params = new URLSearchParams(window.location.search);
const brochureId = params.get("id");
const allBrochures = window.BROCHURES || [];
const activeBrochure = allBrochures.find((brochure) => brochure.id === brochureId) || allBrochures[0];

function imageUrl(path) {
  return `url("${path}")`;
}

function renderNotFound() {
  detailRoot.innerHTML = `
    <section class="detail-hero detail-empty" aria-labelledby="detail-title">
      <p class="eyebrow">Brochure detail</p>
      <h1 id="detail-title">Brochure not found.</h1>
      <p>The selected brochure could not be loaded. Return to the portfolio and choose another sample.</p>
      <div class="hero-actions">
        <a class="primary-action" href="index.html#work">Back to Portfolio</a>
      </div>
    </section>
  `;
}

function displayImage(brochure, side) {
  return brochure.mockups?.[side] || brochure.sides[side];
}

function renderDetail(brochure) {
  document.title = `${brochure.title} | CWS Brochure Portfolio`;

  detailRoot.innerHTML = `
    <section class="detail-hero" aria-labelledby="detail-title">
      <div class="detail-hero-copy">
        <a class="back-link" href="index.html#work">Back to portfolio</a>
        <p class="eyebrow">Brochure detail</p>
        <h1 id="detail-title">${brochure.title}</h1>
        <p>${brochure.description}</p>
        <dl class="detail-facts" aria-label="Brochure facts">
          <div>
            <dt>Brand</dt>
            <dd>${brochure.title}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>${brochure.category}</dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>${brochure.format}</dd>
          </div>
          <div>
            <dt>Size</dt>
            <dd>${brochure.size}</dd>
          </div>
        </dl>
      </div>
      <div class="detail-hero-art" aria-hidden="true">
        <img src="${displayImage(brochure, "outside")}" alt="" />
      </div>
    </section>

    <section class="mockup-section" aria-labelledby="mockup-title">
      <div class="section-heading detail-section-heading">
        <p class="eyebrow">Ready mockups</p>
        <h2 id="mockup-title">Outside and inside presentation views</h2>
      </div>
      <div class="mockup-grid">
        <article class="mockup-card">
          <div class="mockup-frame">
            <img src="${displayImage(brochure, "outside")}" alt="${brochure.title} outside brochure mockup" />
          </div>
          <div>
            <h3>Outside view</h3>
            <p>Front-facing brochure artwork prepared for a polished client preview.</p>
          </div>
        </article>
        <article class="mockup-card">
          <div class="mockup-frame">
            <img src="${displayImage(brochure, "inside")}" alt="${brochure.title} inside brochure mockup" />
          </div>
          <div>
            <h3>Inside view</h3>
            <p>Interior spread shown as a clean presentation image for easy review.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="viewer-section detail-viewer" id="interactive" aria-labelledby="detail-viewer-title">
      <div class="section-heading detail-section-heading">
        <p class="eyebrow">Interactive preview</p>
        <h2 id="detail-viewer-title">Open and close this brochure</h2>
      </div>
      <div class="viewer-layout">
        <aside class="viewer-controls" aria-label="Brochure controls">
          <div class="segmented" role="group" aria-label="Choose brochure side">
            <button class="is-active" type="button" data-detail-side="outside">Outside</button>
            <button type="button" data-detail-side="inside">Inside</button>
          </div>
          <div class="button-row">
            <button class="icon-button" type="button" id="detailCloseBrochure" aria-label="Close brochure">
              <span aria-hidden="true">↤</span>
              Close
            </button>
            <button class="icon-button" type="button" id="detailOpenBrochure" aria-label="Open brochure">
              Open
              <span aria-hidden="true">↦</span>
            </button>
          </div>
          <label class="range-label" for="detailFoldRange">
            Fold
            <span id="detailFoldValue">100%</span>
          </label>
          <input id="detailFoldRange" type="range" min="0" max="100" value="100" />
        </aside>
        <div class="stage-wrap">
          <div class="stage-shadow"></div>
          <div class="trifold" id="detailTrifold" aria-label="Interactive brochure preview">
            <div class="panel panel-left"></div>
            <div class="panel panel-center"></div>
            <div class="panel panel-right"></div>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer detail-footer" id="share" aria-labelledby="detail-footer-title">
      <div class="footer-main">
        <div class="footer-brand-block">
          <h2 id="detail-footer-title">A better way to show brochure samples</h2>
          <p>A curated viewing experience for clients to preview polished brochure work without receiving editable or full-resolution source PDFs.</p>
          <img class="footer-branding" src="assets/images/logos/foot-branding.svg" alt="Creative Web Services" />
        </div>
        <div class="footer-columns" aria-label="CWS contact">
          <div class="footer-column">
            <h3>Let’s talk innovation</h3>
            <a href="tel:12012126367">201-212-6367</a>
            <a href="mailto:info@cwsio.com">info@cwsio.com</a>
            <a href="https://www.cwsio.com/" target="_blank" rel="noreferrer">cwsio.com</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function setupDetailTool(brochure) {
  const trifold = document.querySelector("#detailTrifold");
  const foldRange = document.querySelector("#detailFoldRange");
  const foldValue = document.querySelector("#detailFoldValue");
  const sideButtons = document.querySelectorAll("[data-detail-side]");
  let currentSide = "outside";

  function setBrochureImage() {
    trifold.style.setProperty("--brochure-image", imageUrl(brochure.sides[currentSide]));
  }

  function setFold(value) {
    const fold = Number(value) / 100;
    trifold.style.setProperty("--fold", fold.toFixed(2));
    trifold.classList.toggle("is-folded", fold > 0.55);
    foldRange.value = String(value);
    foldValue.textContent = `${value}%`;
  }

  sideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentSide = button.dataset.detailSide;
      sideButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      setBrochureImage();
    });
  });

  document.querySelector("#detailOpenBrochure").addEventListener("click", () => setFold(0));
  document.querySelector("#detailCloseBrochure").addEventListener("click", () => setFold(100));
  foldRange.addEventListener("input", (event) => setFold(event.target.value));

  setBrochureImage();
  setFold(34);
}

if (!activeBrochure) {
  renderNotFound();
} else {
  renderDetail(activeBrochure);
  setupDetailTool(activeBrochure);
}
