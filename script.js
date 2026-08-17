const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (menuButton && nav) {
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

// Realistic pellet stove imagery.
const heroImage = document.querySelector('.hero-art img');
if (heroImage) {
  heroImage.src = 'assets/hero-real.webp';
  heroImage.width = 520;
  heroImage.height = 317;
  heroImage.style.width = '100%';
  heroImage.style.maxWidth = '650px';
  heroImage.style.borderRadius = '24px';
  heroImage.style.objectFit = 'cover';
  heroImage.style.boxShadow = '0 26px 55px rgba(0,0,0,.42)';
}

const aboutVisual = document.querySelector('.about-visual');
if (aboutVisual) {
  aboutVisual.innerHTML = '<img class="real-about-photo" src="assets/about-stove.webp" alt="" width="430" height="254">';
  const aboutPhoto = aboutVisual.querySelector('.real-about-photo');
  aboutPhoto.style.position = 'absolute';
  aboutPhoto.style.inset = '0';
  aboutPhoto.style.width = '100%';
  aboutPhoto.style.height = '100%';
  aboutPhoto.style.objectFit = 'cover';
}

const services = document.querySelector('#services .container');
const serviceNote = document.querySelector('#services .service-note');
if (services && serviceNote && !document.querySelector('.cleaning-results')) {
  const showcase = document.createElement('div');
  showcase.className = 'cleaning-results';
  showcase.innerHTML = `
    <div class="cleaning-results-copy">
      <p class="eyebrow">Cleaning & maintenance</p>
      <h3>What a thorough cleaning can reveal</h3>
      <p>Built-up ash and soot can restrict airflow and affect how a pellet stove burns and heats. A proper cleaning removes buildup from the areas that matter for dependable operation.</p>
    </div>
    <div class="cleaning-results-image">
      <img src="assets/before-after.webp" alt="Pellet stove firebox shown before and after cleaning" width="560" height="241">
    </div>`;
  serviceNote.insertAdjacentElement('afterend', showcase);
}

const photoStyles = document.createElement('style');
photoStyles.textContent = `
  .cleaning-results {
    margin-top: 30px;
    display: grid;
    grid-template-columns: .78fr 1.22fr;
    gap: 0;
    border-radius: 24px;
    overflow: hidden;
    background: #171513;
    box-shadow: 0 18px 45px rgba(29,20,12,.14);
  }
  .cleaning-results-copy {
    padding: 34px;
    align-self: center;
    color: #fff;
  }
  .cleaning-results-copy h3 {
    margin: 0 0 12px;
    font-size: clamp(1.55rem, 3vw, 2.35rem);
    line-height: 1.05;
    letter-spacing: -.035em;
  }
  .cleaning-results-copy > p:last-child {
    margin: 0;
    color: #c9c1b8;
  }
  .cleaning-results-image {
    min-height: 290px;
    background: #0d0c0b;
  }
  .cleaning-results-image img {
    width: 100%;
    height: 100%;
    min-height: 290px;
    display: block;
    object-fit: cover;
  }
  @media (max-width: 800px) {
    .cleaning-results { grid-template-columns: 1fr; }
    .cleaning-results-copy { padding: 26px; }
    .cleaning-results-image,
    .cleaning-results-image img { min-height: 0; }
  }
`;
document.head.appendChild(photoStyles);

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
