'use-strict'






window.addEventListener('click', function(event) {
    const cartModalWindow = document.querySelector('.modalWindow__cart');
    const cartInner = document.querySelector('.modalWindow__cart-itemsHolder');
    const cartCounter = document.querySelector('.header__up-menu-cart-counter');

    if(event.target.hasAttribute('data-cart')) {
        cartModalWindow.classList.remove('none');
    }

    if(event.target.hasAttribute('data-cart-close')) {
        cartModalWindow.classList.add('none');
    }

    if(event.target.hasAttribute('data-inCart')) {
        
        const productCard = event.target.closest('.product-card');
        const img = productCard.querySelector('.product-img');
        
            
        const obj = {
            id: productCard.dataset.id,
            title: productCard.querySelector('.description').innerText,
            price: productCard.querySelector('.price').innerText,
            img: img.getAttribute('src'),
        };

        const cartItem = `<div class="modalWindow__cart-item">
        <div class="modalWindow__cart-item-description">
            <img src="${obj.img}" alt="" class="modalWindow__cart-item-img">
            <div class="modalWindow__cart-item-title">${obj.title}</div>
        </div>
        <div class="modalWindow__cart-item-price">${obj.price}</div>
    </div>`;
        
        if(parseInt(cartCounter.innerText) < 5) {
      cartCounter.classList.remove('none');
       cartCounter.innerText = parseInt(cartCounter.innerText) + 1;
       cartInner.insertAdjacentHTML('beforeend', cartItem);
    }
    }


    if(event.target.hasAttribute('data-cart-buyBtn') && parseInt(cartCounter.innerText) > 0) {
        cartInner.innerHTML = `<div class="modalWindow__cart-inputs-holder">
        <div class="modalWindow__cart-inputs-text">
            Введите свои контактные данные и наш менеджер свяжется с вами!
        </div>
        <div class="modalWindow__cart-inputs">
            <div class="modalWindow__cart-input-holder">
                <div class="modalWindow__cart-input-title">Имя</div>
                <input type="text" class="modalWindow__cart-input">
            </div>
            <div class="modalWindow__cart-input-holder">
                <div class="modalWindow__cart-input-title">Адрес</div>
                <input type="text" class="modalWindow__cart-input">
            </div>
            <div class="modalWindow__cart-input-holder">
                <div class="modalWindow__cart-input-title">Телефон</div>
                <input type="text" class="modalWindow__cart-input">
            </div>
        </div>

        <div class="modalWindow__cart-input-btns-holder">
            <button class="modalWindow__cart-input-btnCancel" data-cart-btnCancel>Отмена</button>
            <button class="modalWindow__cart-input-btnConfirm" data-cart-btnConfirm>Отправить</button>
        </div>

    </div>`;

        event.target.classList.add('none');

    }

    if(event.target.hasAttribute('data-cart-btnCancel')) {
        const buyBtn = document.querySelector('[data-cart-buyBtn]')
        cartInner.innerHTML = ``;
        cartCounter.innerText = '0';
        cartCounter.classList.add('none');
        buyBtn.classList.remove('none');

    }
    if(event.target.hasAttribute('data-cart-btnConfirm')){
        cartInner.innerHTML = `<div class="modalWindow__cart-confirmText">Спасибо за заказ, ваши данные получены,<br> но никто, ничего вам не отправит!</div>`;

    }

})


