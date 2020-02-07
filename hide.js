const buffalo = document.getElementById("buffalo_1")
const grid = document.getElementsByClassName("portfolio_grid")

if (grid.style.top >= 0 && grid.style.bottom < screen.height) {
    console.log(yes)
} else {
    console.log(no)
}

console.log(grid)
console.log(buffalo)

// next, try to find a way to detect if the portfolio_grid is on screen