const hero = document.getElementById('hero');
const main = document.querySelector('.main');

let entered = false;

if (hero) {
  hero.addEventListener('click', () => {
    if (entered) return;
    entered = true;

    hero.classList.add('zoom');

    setTimeout(() => {
      hero.style.display = 'none';
      document.body.classList.remove('lock');
    }, 1000);
  });
}


