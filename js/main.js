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
        element.addEventListener('click', function () { 
            this.classList.toggle('accordion__head_closed');
            this.nextElementSibling.classList.toggle('accordion__content_closed');

        });
    });
}