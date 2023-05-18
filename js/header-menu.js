'use strict'



const headerMenu = document.querySelector('.header__down-menu');
const headerMenuItems = document.querySelectorAll('.header__down-menu-item');

headerMenuItems.forEach(function(item) {
    item.onmouseover = ()=>{
        console.log('over');
        item.querySelector('ul').classList.remove('hidden');
    }

    item.onmouseout = ()=> {
        console.log('out')
        item.querySelector('ul').classList.add('hidden');
    }
}) 