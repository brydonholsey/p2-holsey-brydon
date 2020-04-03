//hamburger menu
var hamburgerIcon = document.getElementById('hamburger-icon');
var hamburgerMenu = document.getElementById('hamburger-menu');

function toggleMenu() {
    hamburgerMenu.classList.toggle('show');
}

hamburgerIcon.addEventListener('click', toggleMenu);