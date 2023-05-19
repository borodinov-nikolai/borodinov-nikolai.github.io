'use strict'



const headerMenu = document.querySelector('.header__down-menu');
const headerMenuItems = document.querySelectorAll('.header__down-menu-item');

headerMenuItems.forEach(function(item) {
    item.onmouseover = ()=>{
        item.querySelector('ul').classList.remove('none');
    }

    item.onmouseout = ()=> {
        item.querySelector('ul').classList.add('none');
    }
});