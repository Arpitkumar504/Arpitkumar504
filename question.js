// const btn = document.querySelectorAll('.btn');
// btn.forEach(element => {
//     element.addEventListener('click', (e) => {
//         const datas = e.currentTarget.parentElement.parentElement;
//         datas.classList.toggle('active');
//     })
// })

// only one open
const general = document.querySelectorAll('.general');
general.forEach(element => {
    const btn = element.querySelector('.btn');
    btn.addEventListener('click', (e) => {
        general.forEach(data => {
            if (data !== element) {
                data.classList.remove('active');
            }
        })
        element.classList.toggle('active');
    })
})