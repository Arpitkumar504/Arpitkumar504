// sidebar toogle
const sidebar = document.querySelector('.wrapper');
const button = document.querySelector('.button');
button.addEventListener('click', (e) => {
    sidebar.classList.toggle('active');
})

// fixed navbar
const header = document.querySelector('.header');
window.addEventListener('scroll', (e) => {
    const postion = header.getBoundingClientRect().height;
    if (Math.floor(window.scrollY) > postion) {
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed');
    }
})