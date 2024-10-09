var swiper = new Swiper(".customerSwiper", {
    slidesPerView: 4,
    spaceBetween: 8,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        
        },
        768: {
          slidesPerView: 3,
        
        },
        1024: {
          slidesPerView: 4,
       
        },
      },
  });