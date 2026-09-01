let header = document.querySelector('.header');
let headerBtn = document.querySelector('.header__btn')

window.addEventListener("scroll", trackScroll);

function trackScroll() {
    const scrolled = window.scrollY;
    const heroBanner = document.querySelector('.hero')
    const coords = heroBanner.offsetHeight;
    if (scrolled > coords) {
        header.classList.add('header--change-bg');
        if (window.innerWidth < 835) {
            headerBtn.classList.add('btn--active')
        }
    } else {
        header.classList.remove('header--change-bg');
        if (window.innerWidth < 835) {
            headerBtn.classList.remove('btn--active')
        }
    }
}