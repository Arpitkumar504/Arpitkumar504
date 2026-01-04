var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Autoplay
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    // Make Responsive
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
        },
    }
});

// Preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', (e) => {
    preloader.style.display = 'none';
})

// dark mode
const dark = document.querySelector('.darks');
dark.addEventListener('click', (e) => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('fades');
})

// button toggle
const button = document.querySelector('.navbutton');
button.addEventListener('click', (e) => {
    const data = e.currentTarget.parentElement;
    data.classList.toggle('active');
})

// header fixed
const headers = document.querySelector('.header');
window.addEventListener('scroll', () => {
    const position = headers.getBoundingClientRect().height;
    if (Math.floor(window.scrollY) > position) {
        headers.classList.add('fixedheader');
    }
    else {
        headers.classList.remove('fixedheader');
    }
})

// Collapse Navitem
const general = document.querySelectorAll('.navlink');
general.forEach(element => {
    const btn = element.querySelector('.navbtn');
    btn.addEventListener('click', (e) => {
        general.forEach(data => {
            if (data !== element) {
                data.classList.remove('show');
            }
        })
        element.classList.toggle('show');
    })
})

// Animate On Scroll(AOS)
AOS.init({
    offset: 100,
    delay: 200,
    duration: 600,
});

// Searchbar
const search = document.querySelector('.search');
search.addEventListener('click', (e) => {
    const data = e.currentTarget.parentElement;
    data.classList.toggle('searchactive');
})

// Filter
const cards = document.querySelectorAll('.item');
const bt = document.querySelectorAll('.bt');
bt.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.currentTarget.dataset.filter;
        cards.forEach(e => {
            if (filter === 'all') {
                e.style.display = "block";
            }
            else {
                if (e.classList.contains(filter)) {
                    e.style.display = "block";
                }
                else {
                    e.style.display = "none";
                }
            }
        })
    });
});
const searchbar = document.querySelector('.searchbars');
searchbar.addEventListener('keyup', (e) => {
    const d = e.currentTarget.value.trim().toLowerCase();
    cards.forEach(element => {
        if (d == "all") {
            element.style.display = "block";
        }
        // using classname
        // else {
        //     if (element.className.includes(d)) {
        //         element.style.display = "block";
        //     }
        //     else {
        //         element.style.display = "none";
        //     }
        // }
        // using product name
        else {
            const filterdata = element.children[1].textContent.toLowerCase();
            if (filterdata.includes(d)) {
                element.style.display = "block";
            }
            else {
                element.style.display = 'none';
            }
        }
    })
})