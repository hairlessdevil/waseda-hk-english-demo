(() => {
  const root = document.documentElement;
  root.classList.add('js', 'ready');
  const header = document.getElementById('hd');
  const toggle = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  const closeButton = document.getElementById('close');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  let lastFocus;
  let previousOverflow = '';

  function setMenu(open, restoreFocus = true) {
    if (open) {
      lastFocus = document.activeElement;
      previousOverflow = document.body.style.overflow;
    }
    drawer.classList.toggle('open', open);
    drawer.inert = !open;
    drawer.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    main.inert = open;
    footer.inert = open;
    header.inert = open;
    document.body.style.overflow = open ? 'hidden' : previousOverflow;
    if (open) closeButton.focus();
    else if (restoreFocus && lastFocus) lastFocus.focus();
  }
  toggle.addEventListener('click', () => setMenu(true));
  closeButton.addEventListener('click', () => setMenu(false));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (!drawer.classList.contains('open')) return;
    if (event.key === 'Escape') {
      event.preventDefault(); setMenu(false);
    }
    if (event.key === 'Tab') {
      const focusable = [...drawer.querySelectorAll('button, a[href]')];
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  });
  function updateHeader() { header.classList.toggle('small', window.scrollY > 30); }
  window.addEventListener('scroll', updateHeader, {passive:true});
  updateHeader();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
      });
    }, {threshold:0.08});
    document.querySelectorAll('.rv').forEach(el => observer.observe(el));
  } else document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
})();
