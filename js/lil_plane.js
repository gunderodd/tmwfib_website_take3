const lil_plane = document.getElementById("lil_plane")
const lil_holder = document.getElementById("plane-holder-lil")
console.log(lil_holder)

let options = {
    threshold: 0.0,
    rootMargin: "0px 0px 0px 0px"
}

observer = new IntersectionObserver((activate) => {
    activate.forEach((activated) => {

        if (activated.isIntersecting) {
            // if the image enters the viewport, watch the user's scroll...
            window.onscroll = debounce(function() {
                    
                left = lil_plane.style.left
                startAmount = lil_plane.offsetTop
                endAmount = window.pageYOffset + window.innerHeight
                finalAmount = endAmount - startAmount

                // move the image by updating the margin by the amount scrolled
                lil_plane.style.left = `${finalAmount * 2}px`

            })
        }
    })
}, options)

// call the function
observer.observe(lil_holder)


// stop the animation from running too much and wasting bandwidth
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
};

// determine if user is scrolling up or down and reverse the image based on that

// set a starting line to compare current position after user starts scrolling
let scrollPos = 0
let scrollingDown

window.addEventListener('scroll', function(){
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        scrollingDown = false
        document.getElementById("lil_plane").style.transform = "scaleX(-1)"
    } else {
        scrollingDown = true
        document.getElementById("lil_plane").style.transform = "scaleX(1)"
    }
    scrollPos = (document.body.getBoundingClientRect()).top
})


