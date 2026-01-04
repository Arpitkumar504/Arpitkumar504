let slideindex = 0;
const buttons = document.querySelectorAll('.button');
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        const value = +e.currentTarget.dataset.button;
        slideindex += value;
        showslide(slideindex);
    })
});

const dot = document.querySelectorAll('.dot');
dot.forEach(element => {
    element.addEventListener('click', (e) => {
        const d = +e.currentTarget.dataset.dot;
        slideindex = d;
        showslide(d);
    })
})

const showslide = (data) => {
    const slides = document.querySelectorAll('.myslides');
    const dots = document.querySelectorAll('.dot');
    if (data < 1) {
        slideindex = slides.length;
    }
    if (data > slides.length) {
        slideindex = 1;
    }
    slides.forEach(e => {
        e.style.display = "none";
    })
    dots.forEach(e => {
        e.classList.remove('active');
    })
    slides[slideindex - 1].style.display = "block";
    dots[slideindex - 1].classList.add('active');
}
showslide(slideindex);

// Automative Slideshow
let slideind = 0;

const showslides = () => {
    const slide = document.querySelectorAll('.myslides');
    const dot = document.querySelectorAll('.dot');
    slide.forEach(e => {
        e.style.display = 'none';
    })
    dot.forEach(e => {
        e.classList.remove('active');
    })
    slideind++;
    if (slideind > slide.length) {
        slideind = 1;
    }
    slide[slideind - 1].style.display = 'block';
    dot[slideind - 1].classList.add('active');
    setTimeout(showslides, 2000);
}
showslides();

