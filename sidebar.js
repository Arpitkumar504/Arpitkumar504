const btn = document.querySelector('.bx-menu');
const sidebar = document.querySelector('.sidebar');
btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})