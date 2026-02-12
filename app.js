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
