const title_bubble = document.getElementById('title_bubble')
const scroll_bubble = document.getElementById('scroll_bubble')


// if window is scrolled to the top, show title bubble and direction bubble
window.addEventListener('scroll', function(){
    if (document.documentElement.scrollTop == 0) {
        title_bubble.style.display = "block"
        scroll_bubble.style.display = "block"
    } else {
        title_bubble.style.display = "none"
        scroll_bubble.style.display = "none"
    }
})