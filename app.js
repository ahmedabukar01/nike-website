const red =document.querySelector('.red');
const blue =document.querySelector('.blue');
const green =document.querySelector('.green');
const img = document.querySelector('.right img');
const color = document.querySelector('h1 span');

red.addEventListener('click',e=>{
    document.body.classList.remove('blue-theme');
    document.body.classList.remove('green-theme');
    img.src="img/red.png";
    color.innerText = 'Red';
});

blue.addEventListener('click',e=>{
    document.body.classList.remove('red-theme');
    document.body.classList.remove('green-theme');
    document.body.classList.add('blue-theme');
    color.innerText = 'blue';
    img.src="img/blue.png";
});
green.addEventListener('click',e=>{
    document.body.classList.remove('red-theme');
    document.body.classList.add('blue-theme');
    document.body.classList.add('green-theme');
    color.innerText = 'green';
    img.src="img/green.png";
});