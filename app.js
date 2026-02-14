const page = document.body.dataset.page;
if (page) {
  document.querySelectorAll('[data-page]').forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
}

// Cache-bust the header logo if needed
const logo = document.querySelector('.logo-button img');
if (logo) {
  const src = logo.getAttribute('src');
  logo.setAttribute('src', `${src}?v=${Date.now()}`);
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    item?.classList.toggle('is-open', !expanded);
    const panelId = button.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    if (panel) {
      panel.setAttribute('aria-hidden', String(expanded));
    }
  });
});
