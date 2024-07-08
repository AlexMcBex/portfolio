document.addEventListener('DOMContentLoaded', () => {
    // navbar burger
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

    // projects
    const projects = [
        {
            name: 'Fish in a Bucket',
            link: 'https://fishinabucket.netlify.app/',
            github: 'https://github.com/AlexMcBex/Fish-in-a-Bucket---Project-1',
            image: './img/fish.png',
            description: 'Project 1: A funny pixelous fish-catching game.'
        },
        {
            name: 'Pokemon Teams',
            link: 'https://pokemonteams.fly.dev/',
            github: 'https://github.com/AlexMcBex/PokemonTeams_Project-2',
            image: './img/pokemon2.png',
            description: 'A web app that allows users to create their own Pokemon teams.'
        },
        {
            name: 'Tic Tac Toe',
            link: 'https://alexmcbex.github.io/TicTacToeProject-0/',
            github: 'https://github.com/AlexMcBex/TicTacToeProject-0',
            image: './img/ttt.png',
            description: 'A web game that allows users to play a game of tic tac toe.'
        },
        {
            name: 'Project 3W',
            link: 'https://project-3w.netlify.app/',
            github: 'https://github.com/AlexMcBex/Project3-client',
            image: './img/3w.png',
            description: 'This React powered app allows the user to keep track of their goals'
        },
        {
            name: 'Calculator',
            link: 'https://alexmcbex.github.io/Calculator-App/',
            github: 'https://github.com/AlexMcBex/Calculator-App',
            image: './img/calc.png',
            description: 'A web app that allows users to perform basic calculations.'
        },
        {
            name: 'Xketchez',
            link: 'https://xketchez.onrender.com',
            github: 'https://github.com/AlexMcBex/Xketchez',
            image: './img/xketchez.png',
            description: 'A web app that allows users to post their doodles and arts'
        }
    ]

    const projectsContainer = document.getElementsByClassName('projects')

    projects.forEach(project => {
        projectsContainer[0].innerHTML += `
        <div class="card project-card" style="background-image: url(${project.image})">
            <div class="card-header">
                <h3 class="subtitle project-name">${project.name}</h3>
            </div>
            <div class="card-buttons">
                <a class="project-link button" href="${project.link}">Demo</a>
                <a class="project-link button" href="${project.github}">GitHub</a>
            </div>
        </div>
        `
    })
    
})

