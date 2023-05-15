'use strict'



window.addEventListener('click' , function(event){
let cartInner = document.querySelector('.cart-inner');

let cartCard = event.target.closest('.cart-card');
const productCard = event.target.closest('.product-card');
let totalPrice = document.querySelector('.total-price');
const cartBtnCounter = document.querySelector('.cart-btn-counter');


if(event.target.classList == 'right' && event.target.closest('.cart-inner')){

    totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(cartCard.querySelector('.summ').innerText) + '₽';
    cartBtnCounter.innerText = parseInt(cartBtnCounter.innerText) + 1;

} else if(event.target.classList == 'left' && event.target.closest('.cart-inner')){

    totalPrice.innerText = parseInt(totalPrice.innerText) - parseInt(cartCard.querySelector('.summ').innerText) + '₽';
    cartBtnCounter.innerText = parseInt(cartBtnCounter.innerText) - 1;
    if(parseInt(cartBtnCounter.innerText) < 1){
        cartBtnCounter.classList.add('none');
    }
    
}
 else if(event.target.hasAttribute('data-inCart')) {
    totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(productCard.querySelector('.price').innerText) * parseInt(productCard.querySelector('.counter').innerText) + '₽';
    productCard.querySelector('.counter').innerText = '1';
    

}


})




 
   

