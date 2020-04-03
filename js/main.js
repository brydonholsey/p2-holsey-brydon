//hamburger menu
var hamburgerIcon = document.getElementById('hamburger-icon');
var hamburgerMenu = document.getElementById('hamburger-menu');

function toggleMenu() {
    hamburgerMenu.classList.toggle('show');
}

hamburgerIcon.addEventListener('click', toggleMenu);

var upcomingPrograms = document.getElementById('up-prog');
var progContent = document.getElementById('program-content')

function togglePrograms() {
    progContent.classList.toggle('show');
}

upcomingPrograms.addEventListener('click', togglePrograms);