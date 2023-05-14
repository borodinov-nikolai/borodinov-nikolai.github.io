'use sctrict'



const productCardsContainer = document.querySelector('.product-cards');

async function getProductCards() {
    const response = await fetch('./js/productCards.json');
    console.log(response);
    

    const productCardsArray = await response.json();
    renderProductCards(productCardsArray);
}



getProductCards();



function renderProductCards(array){
    array.forEach(function(item) {
        const productHTML = `<div class="product-card" data-id="${item.id}">
        <img src="images/${item.img}" alt="" class="product-img">
        <p class="description">${item.name}</p>
        <div class="product-card-cont">
            <div class="counter-wrapper">
                <button class="left">-</button>
                <div class="counter">1</div>
                <button class="right">+</button>
            </div>
            <div class="price">${item.price}₽</div>
        </div>
        <button data-inCart class="incart">+ в корзину</button>
    </div>`
     productCardsContainer.insertAdjacentHTML('beforeend', productHTML);

    })

    
    
}
