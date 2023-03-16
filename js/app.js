
const navbarBurger = document.getElementById('navbar-burger')
const navbarItems = document.querySelectorAll('.navbar-item')

document.addEventListener('DOMContentLoaded', () => {

    navbarBurger.addEventListener('click', () => {
        
        const idTarget = navbarBurger.dataset.target
        const target = document.getElementById(idTarget)
        // console.log(navbarBurger, idTarget, target)
        navbarBurger.classList.toggle('is-active')
        target.classList.toggle('is-active')
        // console.log(navbarBurger.classList)

    })
        navbarItems.forEach(item=>{
            item.addEventListener('click', ()=>{
                // console.log('navbar-item')
                navbarBurger.classList.remove('is-active')
                document.getElementById('navbar-menu').classList.remove('is-active')
            })
        })
    
})

