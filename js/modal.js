'use strict'


let button = document.querySelector('#button-header');
let buttonClose = document.querySelector('.button-close');

button.onclick = function(){
modal__fade.classList.toggle('hidden');

}

buttonClose.onclick = function(){
    modal__fade.classList.toggle('hidden');
}
