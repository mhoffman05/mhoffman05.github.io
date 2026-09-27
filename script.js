// Full-screen menu (mobile)
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.querySelector('.menu-close');

function setMenu(open) {
  menu.hidden = !open;
  btn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

btn.addEventListener('click', () => setMenu(true));
closeBtn.addEventListener('click', () => setMenu(false));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
