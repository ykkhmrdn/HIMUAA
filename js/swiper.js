var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 1,
        spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
        slidesPerView: 2,
        spaceBetween: 40
    },
    1000: {
        slidesPerView: 3,
        spaceBetween: 30,
    }


}
  });