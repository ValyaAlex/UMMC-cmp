let activeCard = document.querySelector(".services__item.item--active")
let otherCards = document.querySelectorAll(".card")

otherCards.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
        activeCard.classList.remove('item--active')
    })
})

let activeBanner = document.querySelector(".hero__parent.parent--active")
let otherBanners = document.querySelectorAll(".hero-hover")

otherBanners.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
        activeBanner.classList.remove('parent--active')
    })
})