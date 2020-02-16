const plane = document.getElementById("plane")
    // console.log(plane)        

  // the options aren't effecting it?
let options = {
    threshold: 1.0,
    rootMargin: "0px 0px 0px 0px"
}

observer = new IntersectionObserver((activate, options) => {
    activate.forEach((activated) => {

        if (activated.isIntersecting) {
        // if the image enters the viewport, watch the user's scroll...
        window.onscroll = debounce(function() {
                
            left = activated.target.style.left
            startAmount = activated.target.offsetTop
            endAmount = window.pageYOffset + (window.innerHeight * 2)
            finalAmount = endAmount - startAmount

            // move the image by updating the margin by the amount scrolled,
            // if the amount isn't more than the screen width
            // if (finalAmount <= window.innerWidth) {
                // activated.target.display = "block"
                activated.target.style.left = `${finalAmount}px`
            // } else {
                // console.log("over the amount")
                // activated.target.style.display = "none"
            // }

            // console.log(finalAmount + " final amount")
            console.log(left + " left")
            console.log(window.innerWidth + "window")
        //   console.log(plane)

        })
        }
    })
    })

    //   call the function
    observer.observe(plane)


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
        document.getElementById("plane").style.transform = "scaleX(-1)"
    } else {
        scrollingDown = true
        document.getElementById("plane").style.transform = "scaleX(1)"
    }
    scrollPos = (document.body.getBoundingClientRect()).top
    // console.log(scrollingDown)
})