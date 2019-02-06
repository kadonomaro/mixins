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

    let big = document.getElementById('big');
    window.addEventListener('scroll', function () {
        
    });
    

}