const mobile_nav = document.querySelector('.mobile-navbar-btn');
const header = document.querySelector('.header');
// mobile_nav.addEventListener('click',(e)=>{
//     if(header.classList.contains('active')){
//         header.classList.remove('active');
//     }
//     else{
//         header.classList.add('active');
//     }
// })
// instead of add and remove use toogle
mobile_nav.addEventListener('click', () => {
    header.classList.toggle('active');
})
// fixed navbar
window.addEventListener('scroll', (e) => {
    const position = header.getBoundingClientRect().height;
    if (Math.floor(window.scrollY) > position) {
        header.classList.add('show');
    }
    else {
        header.classList.remove('show');
    }
})