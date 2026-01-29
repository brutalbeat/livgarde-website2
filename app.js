const page = document.body.dataset.page;
if (page) {
  document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
}
