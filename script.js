const hero = document.getElementById('hero');
const main = document.querySelector('.main');

hero.addEventListener('click', () => {
    hero.classList.add('zoom');

    setTimeout(() => {
        hero.style.display = 'none';
        main.style.display = 'block';
    }, 1000);
});


