$(document).ready(function(){

    /* default settings */
    $('.venobox').venobox(); 


    /* custom settings */
    $('.venobox_custom').venobox({
        framewidth: '400px',        // default: ''
        frameheight: '300px',       // default: ''
        border: '10px',             // default: '0'
        bgcolor: '#5dff5e',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');


    /* 1 */
    // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
    var mainbottom = $('.home').offset().top + $('.home').height();

    // on scroll, 
    $(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.nav').addClass('past-home');
    } else {
        $('.nav').removeClass('past-home');
   }

});

    var $circle = $('#circle'),
        $body = $(document.body),
        bodyHeight = $body.height();

    $(window).scroll(function () {
        $circle.css({
            'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
        });
    });


});