'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  function closeMenu() {
    nav.classList.remove('nav-open');
    menuToggle.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  }

  menuToggle.addEventListener('click', () => {
    const opening = !nav.classList.contains('nav-open');
    nav.classList.toggle('nav-open', opening);
    menuToggle.classList.toggle('is-active', opening);
    menuToggle.setAttribute('aria-expanded', String(opening));
    menuToggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', opening);
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', (event) => {
    if (nav.classList.contains('nav-open') && !nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 880) closeMenu();
  });
}

const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;

    const name = document.getElementById('customer-name').value.trim();
    const area = document.getElementById('customer-area').value.trim();
    const service = document.getElementById('customer-service').value;
    const notes = document.getElementById('customer-message').value.trim();
    const error = document.getElementById('form-error');

    if (!name || !area || !service) {
      error.textContent = 'Please fill in your name, area and the service you need.';
      error.hidden = false;
      return;
    }
    error.hidden = true;

    const message = [
      'Hello Clean Ceylon, I would like to enquire about a service.',
      '',
      `Name: ${name}`,
      `Area: ${area}`,
      `Service: ${service}`,
      ...(notes ? [`Details: ${notes}`] : []),
      '',
      'Could you please share the next steps and availability? Thank you.'
    ].join('\n');

    // Navigate in the same tab to avoid pop-up blockers on mobile devices.
    window.location.assign(`https://wa.me/94722277226?text=${encodeURIComponent(message)}`);
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Reveal motion is optional; content stays visible if JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.06, rootMargin: '0px 0px 40px 0px'});
  elements.forEach(el => observer.observe(el));
}
