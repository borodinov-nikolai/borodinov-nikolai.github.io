'use strict'


let images = document.querySelectorAll('.images');


let image1 = document.querySelector('[data-image1]');
let selector = document.querySelector(image1.dataset.image1);
console.log(selector)



images.forEach(function(item) {
    const width = item.style.width;
    item.onmouseover = function(){
    this.style.zIndex += "5";  
    this.style.width = 240 + 'px';
    }
    item.onmouseout = function(){
    this.style.zIndex -= "5";
    this.style.width = width;

}
})



// let navItem = document.querySelectorAll('.nav-item');
// let menuPopup = document.querySelector('.header__menu-popup');

// navItem.forEach(function(item){
//     item.onmous = function(){
//     menuPopup.classList.remove('hidden');
//     }
//     item.onmouseout = function(){
//         menuPopup.classList.add('hidden');
//     }
// })