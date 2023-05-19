'use strict'


let leftImgHolder = document.querySelector('.hits__images-left-holder');
let rightImgHolder = document.querySelector('.hits__images-right-holder');

 leftImgHolder.style.marginLeft = '-200px';
            rightImgHolder.style.marginLeft = '400px';
           

    window.addEventListener('scroll', function(event) {
        

        if(this.pageYOffset > 240 && this.pageYOffset < 1800 ) {
            leftImgHolder.style.transition = 'margin-left 1s';
            rightImgHolder.style.transition = 'margin-left 1s';

            leftImgHolder.style.marginLeft = '0px';
            rightImgHolder.style.marginLeft = '0px';
           

        } else {
            leftImgHolder.style.transition = '';
            rightImgHolder.style.transition = '';
            leftImgHolder.style.marginLeft = '-200px';
            rightImgHolder.style.marginLeft = '400px';

        }
    })


