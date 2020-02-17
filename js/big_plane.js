// renamed all variables to be sure they aren't contaminating lil_plane

const big_plane = document.getElementById("big_plane")

let options2 = {
    threshold: 0.0,
    rootMargin: "0px 0px 0px 0px"
}

observer2 = new IntersectionObserver((activate) => {
    activate.forEach((activated) => {

        if (activated.isIntersecting) {
            // if the image enters the viewport, watch the user's scroll...
            window.onscroll = debounce(function() {
                    
                right = activated.target.style.right
                startAmount = activated.target.offsetTop
                endAmount = window.pageYOffset + window.innerHeight
                finalAmount = endAmount - startAmount

                // move the image by updating the margin by the amount scrolled
                activated.target.style.right = `${finalAmount - 600}px`

            })
        }
    })
}, options2)

// call the function
observer2.observe(big_plane)

// debounce, stop from running too often, maybe not doing anything?...
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
let scrollPos2 = 0
let scrollingDown2

window.addEventListener('scroll', function(){
    if ((document.body.getBoundingClientRect()).top > scrollPos2) {
        scrollingDown2 = false
        document.getElementById("big_plane").style.transform = "scaleX(1)"
    } else {
        scrollingDown2 = true
        document.getElementById("big_plane").style.transform = "scaleX(-1)"
    }
    scrollPos2 = (document.body.getBoundingClientRect()).top
})