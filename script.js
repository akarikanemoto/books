const button = document.getElementById('openButton');
const overlay = document.getElementById('overlay');


button.addEventListener('click', () => {
overlay.classList.add('active');
});


overlay.addEventListener('click', () => {
overlay.classList.remove('active');
});
