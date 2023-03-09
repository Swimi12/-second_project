const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    260: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1170: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
export default swiper;
