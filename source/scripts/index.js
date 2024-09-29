document.addEventListener('DOMContentLoaded', () => {
  const navMain = document.querySelector('.main-navigation');
  const navToggle = document.querySelector('.main-header__toggle');
  const burgerIcon = document.querySelector('.main-header__icon--burger');
  const closeIcon = document.querySelector('.main-header__icon--close');

  // Убираем класс no-js, если JavaScript работает
  navMain.classList.remove('main-navigation--nojs');

  // Добавляем обработчик клика для кнопки
  navToggle.addEventListener('click', () => {
    const isMenuOpen = navMain.classList.contains('main-navigation--open');

    // Переключаем классы меню
    if (isMenuOpen) {
      navMain.classList.remove('main-navigation--open');
      navMain.classList.add('main-navigation--close');
      navToggle.setAttribute('aria-expanded', 'false');

      // Меняем иконки
      closeIcon.style.display = 'none';
      burgerIcon.style.display = 'block';
    } else {
      navMain.classList.remove('main-navigation--close');
      navMain.classList.add('main-navigation--open');
      navToggle.setAttribute('aria-expanded', 'true');

      // Меняем иконки
      closeIcon.style.display = 'block';
      burgerIcon.style.display = 'none';
    }
  });
});

