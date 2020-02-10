// change the buffalo man's position so that he doesn't obscure too much of the portfolio

// select the portfolio grid and the buffalo man
const myGrid = document.querySelector('.portfolio_grid')
const buffalos = document.querySelectorAll('.buffalo_man')

observer = new IntersectionObserver((entries) => {

    // if the grid is visible on the viewport, lower the buffalo man and zoom on his face
    console.log(entries)
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            buffalos.forEach(buffalo => {
                buffalo.classList.add('hide')
            })
        } else {
            buffalos.forEach(buffalo => {
                buffalo.classList.remove('hide')
            })
        }
    })
})

observer.observe(myGrid)

// make the buffalo man smaller so that he appears to fall into the well

const landscape = document.querySelector('#landscape')
// const buffalos = document.querySelectorAll('.buffalo_man')

observer = new IntersectionObserver((entries) => {

    console.log(entries)
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            buffalos.forEach(buffalo => {
                buffalo.classList.add('fall')
            })
        } else {
            buffalos.forEach(buffalo => {
                buffalo.classList.remove('fall')
            })
        }
    })
})

observer.observe(landscape)