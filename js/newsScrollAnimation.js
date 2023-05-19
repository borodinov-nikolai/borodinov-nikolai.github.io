'use strict'



const news = document.querySelectorAll('.news__item')



news.forEach(function(item){
    item.style.marginTop = '400px';
    const newsData = item.dataset.newsItem
    console.log(newsData)
    window.addEventListener('scroll', function(event) {
        console.log(this.pageYOffset);
        if (this.pageYOffset > 1218) {
            item.classList.add(`news__item${newsData}`)
            item.style.marginTop = '0px';
        } else {
            item.style.marginTop = '400px';
            console.log(typeof newsData)
            item.classList.remove(`news__item${newsData}`)
    
    
        }
    })

})