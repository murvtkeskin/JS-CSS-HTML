const menuIcon = document.querySelector('.sidebar-menu')
const navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change')
})