'use strict'




const slider = document.querySelector('.slider__body');
const sliderImg = document.querySelector('.slider__img');
slider.style.marginLeft = 0;




setInterval(()=> {
if (slider.style.marginLeft == '-3600px') {
    slider.style.marginLeft = '0';
} else {
    slider.style.marginLeft = parseInt(slider.style.marginLeft) - 1200 + 'px';
}  
 },5000);






