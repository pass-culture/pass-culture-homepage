import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss';

$(document).ready(function () {
    if ($(window).width() < 800) $(".container-nav").width($(window).width());
    $(window).resize(function () {
        if ($(window).width() < 800) $(".container-nav").width($(window).width());
    });
    $(".buttonNav").on('click', function (){
        $(".overlay").toggleClass('open')
        $(".buttonNav").toggleClass('active')
    })
    
});