'use strict'


let leftImgHolder = document.querySelector('.hits__images-left-holder');
let rightImgHolder = document.querySelector('.hits__images-right-holder');

leftImgHolder.style.marginLeft = '0px';
rightImgHolder.style.marginLeft = '0px';


    window.addEventListener('scroll', function(event) {

        if(this.pageYOffset > 240 && this.pageYOffset < 1800 ) {
            leftImgHolder.style.marginLeft = '-400px';
            leftImgHolder.style.marginLeft = '0px';
            rightImgHolder.style.marginLeft = '800px';
            rightImgHolder.style.marginLeft = '0px';
            // leftImgHolder.classList.remove('hidden');
            // rightImgHolder.classList.remove('hidden');

        } else {
            leftImgHolder.style.marginLeft = '-400px';
            rightImgHolder.style.marginLeft = '800px';

            // leftImgHolder.classList.add('hidden');
            // rightImgHolder.classList.add('hidden');
        }
    })


