// navbar burger
document.addEventListener('DOMContentLoaded', () => {
    const navbarItems = document.querySelectorAll('.navbar-item')
    const navbarBurger = document.getElementById('navbar-burger')
    const navbarMenu = document.getElementById(navbarBurger.dataset.target)

    navbarBurger.addEventListener('click', () => {
        // console.log(navbarBurger, idTarget, target)
        navbarBurger.classList.toggle('is-active')
        navbarMenu.classList.toggle('is-active')
        // console.log(navbarBurger.classList)
    })

    navbarItems.forEach(item => {
        item.addEventListener('click', () => {
            // console.log('navbar-item')
            navbarBurger.classList.remove('is-active')
            navbarMenu.classList.remove('is-active')
        })
    })
})

