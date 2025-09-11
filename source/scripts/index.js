/* в этот файл добавляет скрипты*/

const burgerMenu = document.querySelector('.main-nav');
const burgerButton = document.querySelector('.logo__toggle');

function handleClickBurgerButton() {
  burgerMenu.classList.toggle('main-nav--open');
  burgerButton.classList.toggle('logo__toggle--active')
}

burgerButton.addEventListener('click', handleClickBurgerButton);
