var swiper = new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".related-post-list", {
    slidesPerView: 3,
    spaceBetween: 35,
    loop: true,
    autoplay: false,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1366: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        374: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
    },
});
var swiper = new Swiper(".related-blogs-slider", {
    slidesPerView: 3,
    spaceBetween: 35,
    loop: true,
    autoplay: false,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1366: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        374: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
    },
});
var swiper = new Swiper(".testimonials-slide", {
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    speed: 600,
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});

var swiper = new Swiper(".blogs-slide", {
    slidesPerView: 3,
    spaceBetween: 35,
    loop: true,
    autoplay: false,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1366: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        374: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
    },
});


var swiper = new Swiper(".partner-slide", {
    slidesPerView: 6,
    spaceBetween: 35,
    loop: true,
    autoplay: false,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1366: {
            slidesPerView: 6,
            spaceBetween: 35,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        374: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
    },
});


var swiper = new Swiper(".teams-slide", {
    slidesPerView: 6,
    spaceBetween: 0,
    loop: true,
    autoplay: false,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1366: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        374: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});