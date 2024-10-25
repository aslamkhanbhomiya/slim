var swiper = new Swiper(".customerSwiper", {
    slidesPerView: 4,
    spaceBetween: 8,
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

  var swiper = new Swiper(".customerSwiper2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
     
  });