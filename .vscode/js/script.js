
// MENU HAMBÚRGUER

const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.main-nav');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});
