'use strict'


let arrowRight = document.querySelector('.gallery__arrow2')
let arrowLeft = document.querySelector('.gallery__arrow1')
let carusel = document.querySelector('.item');


function shift() {
    console.log('click')
    carusel.style.marginLeft = -1115 + 'px';
}

function shift2() {
    carusel.style.marginLeft = 45 + 'px';
}

arrowRight.addEventListener('click', shift);
arrowLeft.addEventListener('click', shift2);



