function arrowMove() {
    let arrow = document.querySelector(".main__image-container--arrow");
    let article = document.querySelector(".main__article");
    let location = article.offsetTop;
    arrow.addEventListener("click",() => {
        window.scrollTo({top : location, behavior:'smooth'}),false
    });
}

arrowMove();
