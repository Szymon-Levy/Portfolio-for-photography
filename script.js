const offcanvasToggler = document.querySelector(".offcanvas-toggler");
const navigation = document.querySelector(".nav");

offcanvasToggler.addEventListener("click", () =>{
    navigation.classList.toggle("active");
    offcanvasToggler.classList.toggle("active");
});


//images slider

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 2,
    grabCursor: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

  });