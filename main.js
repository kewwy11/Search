const search = document.querySelector('.search')
const searchBtn = document.querySelector('.icon')
const closeBtn = document.querySelector('.close')
const input = document.getElementById('myinput')

searchBtn.addEventListener('click', () => {
    search.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    input.value = '';
});