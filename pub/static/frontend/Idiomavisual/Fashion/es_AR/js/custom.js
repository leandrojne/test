require([
    'jquery'
], function ($) {

    $(document).ready(function () {
        alert('hola');
    })

    $(document).ready(function() {
        var $header = $("header"),
            $clone = $header.before($header.clone().addClass("clone"));

        $(window).on("scroll", function() {
            var fromTop = $("body").scrollTop();
            $('body').toggleClass("down", (fromTop > 215));
        });
    });

    // HEADER FIXED
/*
    var sticky = $('#maincontent').offset().top;
    $header = $('header');
    $content = $('#maincontent');

    sticky_header(sticky);

    function sticky_header(sticky) {
        //Content llega al top y se agrega la clase fixed
        $(window).scroll(function(){
            if($(this).scrollTop() > sticky){
                $header.addClass('fixed');
                $content.addClass('fixed');
            }
            else{
                $header.removeClass('fixed');
                $content.removeClass('fixed');
            }
        });
    }*/

});
