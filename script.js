// Santana Interiors — small enhancements
(function(){
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  if (toggle && mobile){
    toggle.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when a link is tapped
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobile.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Form submit (demo only — no backend)
  const form = document.querySelector('.contact-form form');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn){
        const original = btn.innerHTML;
        btn.innerHTML = 'Thank you — we will be in touch';
        btn.disabled = true;
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; form.reset(); }, 3200);
      }
    });
  }
})();
