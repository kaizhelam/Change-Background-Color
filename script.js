const button = document.getElementById('btn');
const body = document.querySelector('body');
const color = ['red', 'green', 'blue', 'yellow', 'pink', 'grey', 'lime'];

body.style.backgroundColor = 'black';
button.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[colorIndex];
    body.style.transition = '1s linear';
});
