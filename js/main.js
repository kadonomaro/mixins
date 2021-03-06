$(document).ready(function(){
    $(".card-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
    });
});


window.onload = function () {
    var accToggle = document.querySelectorAll('.accordion__head');

    accToggle.forEach(element => {
        element.addEventListener('click', function (evt) {
            evt.preventDefault();
            this.classList.toggle('accordion__head_closed');
            this.nextElementSibling.classList.toggle('accordion__content_closed');

        });
    });

    var column = document.querySelector('.row__side');

    column.addEventListener('click', function () {
        column.classList.toggle('row__side_size_large');
    });
    console.dir(window);
    let big = document.getElementById('big');
    console.dir(big);
    window.addEventListener('scroll', function () {
        console.log("win: ",window.pageYOffset,"big: ", big.offsetTop);
        big.style.backgroundPosition = `top ${(big.offsetTop - window.pageYOffset) /2}px left 20px, 
                                        top ${(big.offsetTop - window.pageYOffset) /2.5}px left 60px,
                                        top ${(big.offsetTop - window.pageYOffset) /3}px left 100px,
                                        top ${(big.offsetTop - window.pageYOffset) /3.5}px left 140px`;
    });
    

    function parallax (backgroundArr) {
    
        let backgrounds = document.querySelectorAll(backgroundArr);
        backgrounds[0].addEventListener('mousemove', function (evt) {
            
            let coordX = (evt.clientX / window.innerWidth * 100 - 50).toFixed(0);
            let coordY = (evt.clientY / window.innerHeight * 100 - 50).toFixed(0);
            for (let i = 0; i < backgrounds.length; i++) {
                backgrounds[i].style = `transform: translate(${coordX / backgrounds[i].dataset.divider}%, ${coordY / backgrounds[i].dataset.divider}%)`;
                
            }
        });
    };

    parallax('.soap__background');


}