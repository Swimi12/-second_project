const burgerBtn = document.getElementById('js-burger');
const headerNavigation = document.getElementById('js-header-navigation');
const navigationList = document.getElementById('js-header-navigation-list');

const burger = burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--open');
  headerNavigation.classList.toggle('burger__page--show');
  navigationList.classList.toggle('navigation__list--burger');
});

const items = document.getElementById('js-header-navigation').getElementsByClassName('navigation__link');
for (const item of items) {
  item.addEventListener('click', () => {
    burgerBtn.classList.remove('burger--open');
    headerNavigation.classList.remove('burger__page--show');
    navigationList.classList.remove('navigation__list--burger');
  });
}
export default burger;
