// INTERFACE PAGE SLIDER

const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    
    effect: 'cards',
    cardsEffect: {
        perSlideOffset: 19,
        perSlideRotate: 0,
        slideShadows: false,
        rotate: false,
    },
    keyboard: {
        enabled: true
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },   

    // breakpoints: {
    //     460: {
    //     },
    //     768: {
    //     },
    //     1024: {
    //     },
    //     1600: {
    //     }
    //   }
})


const customersSwiper = new Swiper('.customers-swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    
    effect: 'cards',
    cardsEffect: {
        perSlideOffset: 19,
        perSlideRotate: 0,
        slideShadows: false,
        rotate: false,
    },
    keyboard: {
        enabled: true
    },

    // pagination: {
    //     el: ".customers-swiper-pagination",
    //     clickable: true,
    // },   

    // breakpoints: {
    //     460: {
    //     },
    //     768: {
    //     },
    //     1024: {
    //     },
    //     1600: {
    //     }
    //   }
})