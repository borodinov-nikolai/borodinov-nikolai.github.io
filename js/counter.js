'use strict'




window.addEventListener('click', function (event) {


    if (event.target.classList == 'left') {
        let left = event.target;
        let counter = left.parentNode.querySelector('.counter');
        if (counter.innerText > 0) counter.innerText -= 1;

    }

    if (event.target.classList == 'left' && event.target.closest('.cart-inner')){
        const cartCard = event.target.closest('.cart-card');
        let buyBtn = document.querySelector('.buy-btn');
        const cartTotal = document.querySelector('.cart__total');
        let cartInner = document.querySelector('.cart-inner');
        const cart = document.querySelector('.cart');
        const cartEmpty = document.querySelector('.cart-empty');




        if(parseInt(cartCard.querySelector('.counter').innerText) < 1) {
            cartCard.remove();
            
        }
             
        if (cartInner.children.length < 1) {

            buyBtn.classList.add('none');
            cartTotal.classList.add('none');
            cart.classList.add('none');
            cartEmpty.classList.remove('none');



        }
    }

})


window.addEventListener('click', function (event) {

    if (event.target.classList == 'right') {
        let right = event.target;
        let counter = right.parentNode.querySelector('.counter');
        counter.innerText = +counter.innerText + 1;

    }



})