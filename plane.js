const plane = document.getElementById("plane")
    console.log(plane)        

  // the options aren't effecting it?
let options = {
    threshold: 0.0,
    rootMargin: "0px 0px 100px 0px"
}

observer = new IntersectionObserver((activate, options) => {
    activate.forEach((activated) => {

        if (activated.isIntersecting) {
        // if the image enters the viewport, watch the user's scroll...
        window.onscroll = debounce(function() {
                
            margin = activated.target.style.marginLeft
            startAmount = activated.target.offsetTop
            endAmount = window.pageYOffset + window.innerHeight
            finalAmount = endAmount - startAmount

            // move the image by updating the margin by the amount scrolled
            // if (margin <= "1000px") {
                activated.target.style.marginLeft = `${finalAmount}px`
            // } else {
                // console.log("over the amount")
            // }

            // console.log(finalAmount + " final amount")
            // console.log(margin + " margin")
        //   console.log(plane)

        })
        }
    })
    })

    //   call the function
    observer.observe(plane)


// stop the animation from running too much and wasting bandwidth
function debounce(func, wait = 10, immediate = true) {
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