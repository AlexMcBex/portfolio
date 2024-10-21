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

    const titleIntro = document.getElementsByClassName('title-intro')[0]
    const introString = "Hi! I'm Alex, \n a Full Stack Software Developer \n based in New York City"
    for (let i = 0; i < introString.length; i++ ){
    setTimeout(() => {
        titleIntro.textContent += introString[i];
    }, 50 * i);
    }

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
        // {
        //     name: 'Tic Tac Toe',
        //     link: 'https://alexmcbex.github.io/TicTacToeProject-0/',
        //     github: 'https://github.com/AlexMcBex/TicTacToeProject-0',
        //     image: './img/ttt.png',
        //     description: 'A web game that allows users to play a game of tic tac toe.'
        // },
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
        // {
        //     name: 'Xketchez',
        //     link: 'https://xketchez.onrender.com',
        //     github: 'https://github.com/AlexMcBex/Xketchez',
        //     image: './img/xketchez.png',
        //     description: 'A web app that allows users to post their doodles and arts'
        // }
    ]


    const skills ={
        "Languages": {
            "JavaScript": "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
            "TypeScript": "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
            "HTML5": "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
            "CSS3": "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
            "Python": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
            "SQL": "https://img.icons8.com/?size=100&id=13406&format=png&color=000000"
        },
        "Frameworks": {
            "Node.js" : "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
            "React js" : "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
            "Next.js": "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
            "Bootstrap": "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
            "Tailwind": "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
            "Express": "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
            "Django": "https://img.icons8.com/?size=100&id=mUBILbYvUMq8&format=png&color=000000"

        },
        "Tools": {
            "MongoDB": "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
            "Firebase": "https://img.icons8.com/?size=100&id=62452&format=png&color=000000",
            "GitHub": "https://img.icons8.com/?size=100&id=12598&format=png&color=000000",
            "AWS": "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
            "GCP": "https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000",
            "Linux": "https://img.icons8.com/?size=100&id=17842&format=png&color=000000",
            "Figma": "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
            "VS Code": "https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000",
            "Postman": "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
        }
    }

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

    //  SKILLS
    const skillsContainer = document.getElementsByClassName('skills-container')[0]

    for (const category in skills){
        const skillSection = document.createElement('div')
        skillSection.classList.add('skills-section')

        const heading = document.createElement('h3')
        heading.textContent = category
        heading.classList.add('skill-heading')
        skillSection.appendChild(heading)

        const skillsGrid = document.createElement('div')
        skillsGrid.classList.add('skills-grid')

        for (const skill in skills[category]){
            const skillDiv = document.createElement('div')
            skillDiv.classList.add('skill-div')

            const skillImg = document.createElement('img')
            skillImg.src = skills[category][skill]
            skillImg.alt = skill
            skillImg.classList.add('skill-icon')

            const skillName = document.createElement('p')
            skillName.textContent = skill
            skillName.classList.add('skill-name')

            skillDiv.appendChild(skillImg)
            skillDiv.appendChild(skillName)

            skillsGrid.appendChild(skillDiv)
        }

        skillSection.appendChild(skillsGrid)
        skillsContainer.appendChild(skillSection)

    }
    console.dir(skills)


    
})

