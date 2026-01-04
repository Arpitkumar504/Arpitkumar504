// Scroll Project
const scr = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
    if (Math.floor(window.scrollY) >350 ) {
        scr.classList.add('showlink');
    }
    else {
        scr.classList.remove('showlink');
    }
})