const toggle_menu = document.querySelector('#toggleMenu');
const menu = document.querySelector('#barra');

toggle_menu.addEventListener('click', function(e) {

    menu.classList.toggle('ativa');
    
});