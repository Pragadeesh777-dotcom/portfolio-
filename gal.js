document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        grabCursor: true,
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
});