$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});



$(document).ready(function() {


    //toggle bar
    $(".toggle-menu").click(function() {
        $(this).toggleClass('active');
        $('body').toggleClass('ov-hidden');
        $('.menu').toggleClass('opened');
    });
    $(".close-mobile-menu").click(function() {
        $('.toggle-menu').removeClass('active');
        $('body').removeClass('ov-hidden');
        $('.menu').removeClass('opened');
    });







    $(".hasDatepicker").flatpickr({
        dateFormat: "d/m/Y"
    });
    $('#check-in').datepicker();
    $('#check-out').datepicker();
    $("#check-in").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#check-out").flatpickr({
        dateFormat: "d/m/Y"
    });

    //hover function
    $(".nav-link").mouseover(function() {
        $(this).css('opacity', '.7');
    });
    $(".nav-link").mouseout(function() {
        $(this).css('opacity', '1');
    });



    // $('.selectpicker').select2();

    // $(document).mouseup(function(e) {
    //     if ($(e.target).closest(".popup-search").length ===
    //         0) {
    //         $('.popup-search').hide();
    //     }
    // });

    $(".has-children .menu-link").click(function() {
        $(this).parents('.has-children').children('.submenu').toggleClass('opened');
    });









    // $(".form-comment-btn").click(function() {
    //     $(this).parents('.form-review').children('.popup-form-review').show();
    // });
    // $(".popup-form-review .close").click(function() {
    //     $(this).parents('.popup-form-review').hide();
    // });



});