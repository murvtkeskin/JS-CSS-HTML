const searchE1 = document.querySelector('.search-bar-container')
const magnifierE1 = document.querySelector('.magnifier')


magnifierE1.addEventListener('click', () => {
    searchE1.classList.toggle("active")
});