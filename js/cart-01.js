'use strict'



window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-cart-btn')) {
        const cart = document.querySelector('.cart');
        console.log('click')
        cart.classList.toggle('none');


    }



    if (event.target.hasAttribute('data-inCart')) {


        let productCard = event.target.closest('.product-card');
        let cartInner = document.querySelector('.cart-inner');
        let buyBtn = document.querySelector('.buy-btn');
        const cartTotal = document.querySelector('.cart__total');
        const cart = document.querySelector('.cart');
        const cartEmpty = document.querySelector('.cart-empty');




        let obj = {
            id: productCard.getAttribute('data-id'),
            title: productCard.querySelector('.description').innerText,
            count: productCard.querySelector('.counter').innerText,
            img: productCard.querySelector('.product-img').getAttribute('src'),
            price: productCard.querySelector('.price').innerText,
        };


        const cartCard = cartInner.querySelector(`[data-id = "${obj.id}"]`)

        if (cartCard) {
            cartCard.querySelector('.counter').innerText = parseInt(cartCard.querySelector('.counter').innerText) + parseInt(obj.count);
        } else {

            cartInner.insertAdjacentHTML('beforeend', `<div class="cart-card" data-id="${obj.id}" >
<div class="cart-card-desc"><div class="card-img-holder"><img src="${obj.img}" alt="" class="cart-card-img"></div>
    <p class="cart-card-title">${obj.title}</p>
    <div class="cart-card-counter">
        <div class="counter-wrapper"><button class="left">-</button>
            <div class="counter">${obj.count}</div><button class="right">+</button>
        </div>
    </div>
</div>
<div class="summ-desc" >Стоимость: </div>
<div class="summ">${parseInt(obj.price)}₽</div>
</div>`);
        }

        console.log(cartInner.children.length);

        if (+cartInner.children.length > 0) {

            buyBtn.classList.remove('none');
            cartTotal.classList.remove('none');
            cart.classList.remove('none');
            cartEmpty.classList.add('none');
        }

    }
}




)