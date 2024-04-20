const burguerbutton = document.getElementById('burguer-button');
const sidebar = document.getElementById('sidebar');

burguerbutton.addEventListener('click', () => {
    if (window.innerWidth <= 700) {
        console.log('click');
        if (!sidebar.classList.contains('is-active')) {
            sidebar.classList.add('is-active');
            sidebar.style.width = '250px';
        } else {
            sidebar.classList.remove('is-active');
            sidebar.style.width = '0px';
        }
    }
});
