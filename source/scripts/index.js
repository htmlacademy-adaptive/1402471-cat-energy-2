/* в этот файл добавляет скрипты*/

const burgerMenu = document.querySelector('.main-nav');
const burgerButton = document.querySelector('.logo__toggle');
const mapImg = document.querySelector('.map__static-map');
const mapIframe = document.querySelector('.map__iframe');

burgerMenu?.classList.remove('main-nav--open');
burgerButton?.classList.remove('logo__toggle--active');
burgerMenu?.classList.add('main-nav--js');
mapImg?.classList.add('map__static-map--hidden');
mapIframe?.classList.add('map__iframe--show');

function handleClickBurgerButton() {
  burgerMenu?.classList.toggle('main-nav--open');
  burgerButton?.classList.toggle('logo__toggle--active');
}

burgerButton?.addEventListener('click', handleClickBurgerButton);
