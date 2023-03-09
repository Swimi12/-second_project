// Import
import swiper from './js/swiper.js';
import burger from './js/burger.js';
import regestration from './js/regestration.js';
import smoothLinks from './js/scroll.js';

// get DOM elements
const regestrationForm = document.getElementById('js-regestration');
const signUpBtn = document.getElementById('js-sign-up');
const closeBtn = document.getElementById('js-regestration-close');
const nextBtn = document.getElementById('js-regestration-next');
const numbers = document.getElementsByClassName('regestration__item');
const pages = document.getElementsByClassName('regestration__page');
const regestrationWindowPage = document.getElementById('js-regestration-page');
const header = document.getElementsByClassName('regestration__header');
const block = document.getElementsByClassName('regestration__block');
const submitBtn = document.getElementById('js-regestration-submit');
// Scroll event
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 400) {
    getElement('js-header', 'header__scroll', 'add');
    getElement('js-content', 'about__fade-left', 'add');
    getElement('js-content', 'about__content--text', 'remove');
  } else if (document.documentElement.scrollTop < 400) {
    getElement('js-header', 'header__scroll', 'remove');
  }
});
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 1401) {
    getElement('js-advantage-block', 'advantage__fade-left', 'add');
    getElement('js-advantage-block', 'advantage__block--text', 'remove');
  }
});

// Function get element by id
const getElement = (id, className, task) => {
  if (task === 'add') {
    document.getElementById(id).classList.add(className);
  } else if (task === 'remove') {
    document.getElementById(id).classList.remove(className);
  }
};
// Event listeners
let active = 0;
//  Sign uo button
signUpBtn.addEventListener('click', () => {
  // Returns the registration window to the first page
  if (active !== 0) {
    active = 0;
    for (const page of block) {
      page.classList.remove('regestration__block--active');
      page.classList.remove('regestration__block--last');
    }
    for (const number of numbers) {
      number.classList.remove('regestration__item--active');
    }
    header[0].classList.remove('regestration__header--last');
    block[0].classList.add('regestration__block--active');
    nextBtn.style = 'display:flex';
    numbers[0].classList.add('regestration__item--active');
  }
  // Open window regestraion
  regestrationWindowPage.classList.add('regestration__page--open');
});
// Close active window regestration on page of regestarion
closeBtn.addEventListener('click', (e) => {
  for (const page of pages) {
    page.classList.remove('regestration__page--open');
  }
});
// Open next page of regestration
nextBtn.addEventListener('click', () => {
  // Close previus page
  for (const page of block) {
    page.classList.remove('regestration__block--active');
  }
  for (const number of numbers) {
    number.classList.remove('regestration__item--active');
  }
  active += 1;
  // Add last page of regestration custom class
  if (active === numbers.length - 1) {
    block[active].classList.add('regestration__block--last');
    header[0].classList.add('regestration__header--last');
    nextBtn.style = 'display:none';
  }
  // Add a class to show the next page
  numbers[active].classList.add('regestration__item--active');
  block[active].classList.add('regestration__block--active');
});
//

// Event listeners
regestrationForm.addEventListener('submit', regestration);
submitBtn.addEventListener('click', () => {
  getElement('js-regestration-page', 'regestration__page--open', 'remove');
});
