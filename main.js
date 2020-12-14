let background = document.querySelector('.background');
let cutout = document.querySelector('.phone-cutout');

let backgroundspeed = 0.01;
let cutoutsspeed = 0.03;

window.addEventListener('mousemove', (event) =>{
    background.style.transform = `translate(${event.pageX * backgroundspeed}px, ${event.pageY * backgroundspeed}px)`;
    cutout.style.transform = `translate(${event.pageX * cutoutsspeed}px, ${event.pageY * cutoutsspeed}px)`;
});