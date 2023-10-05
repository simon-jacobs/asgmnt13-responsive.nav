const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const containerButton = document.getElementsByClassName('container-button')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    containerButton.classList.toggle('active')
})

