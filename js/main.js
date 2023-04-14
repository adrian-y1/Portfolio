filterSelection('all')

// Filters the project based on the given selection
function filterSelection(selector) {
    let project = document.getElementsByClassName('filterProject');
    if (selector === 'all') selector = '';
    for (i = 0; i < project.length; i++) {
        project[i].classList.add("hide")
        if (project[i].className.indexOf(selector) > -1) { // Checks whether the current element's class name contains the "selector"
            project[i].classList.remove("hide")
        }
    }
}

// Adds the active class to the currently pressed button
function makeActive(button) {
    let btnContainer = document.getElementById('myprojects-btn-container')
    let btns = btnContainer.getElementsByClassName('btn')
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
    button.classList.add('active');
}

// On link click, close hamburger menu
let mediaQuery = window.matchMedia('(max-width: 1146px)');
let navbarLinks = document.querySelectorAll('.navbar-right li')
if(mediaQuery.matches === true){
    navbarLinks.forEach(link => {
        link.onclick = () => {
            document.querySelector('.hamburger-menu .toggler').click()
        }
    })
}