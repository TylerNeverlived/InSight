const mediaQuery = window.matchMedia(
  '(min-width: 320px) and (max-width: 767px)'
);
const overlay = document.querySelector('.backdrop');
const mobMenuWindow = document.querySelector('.mob-menu');

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.remove('is-open'); // Предположим, что класс 'open' отвечает за видимость меню
}

// Добавляем обработчики событий клика к ссылкам в мобильном меню
const menuLinks = document.querySelectorAll('#mobile-menu a');
menuLinks.forEach(function (link) {
  link.addEventListener('click', closeMobileMenu);
});

function handleTabletMediaQuery(event) {
  const mobileMenu = document.getElementById('mobile-menu');

  document.getElementById('menu-button').addEventListener('click', function () {
    mobileMenu.style.right = '0';
    overlay.classList.add('is-open');
    mobMenuWindow.classList.add('is-open');
  });

  document
    .getElementById('close-button')
    .addEventListener('click', function () {
      mobileMenu.style.right = '-380px';
      overlay.classList.remove('is-open');
    });

  overlay.addEventListener('click', function () {
    mobileMenu.style.right = '-380px';
    overlay.classList.remove('is-open');
  });

  menuLinks.addEventListener('click', function () {
    mobileMenu.style.right = '-380px';
    overlay.classList.remove('is-open');
  });
}

// mediaQuery.addListener(handleTabletMediaQuery); // Attach the event listener
handleTabletMediaQuery(mediaQuery); // Call the function once to check the initial state

// // Функция для закрытия мобильного меню
// function closeMobileMenu() {
//   const mobileMenu = document.getElementById('mobile-menu');
//   mobileMenu.classList.remove('is-open'); // Предположим, что класс 'open' отвечает за видимость меню
// }

// // Добавляем обработчики событий клика к ссылкам в мобильном меню
// const menuLinks = document.querySelectorAll('#mobile-menu a');
// menuLinks.forEach(function (link) {
//   link.addEventListener('click', closeMobileMenu);
// });

// // Настройка медиа-запроса и его обработка
// const mediaQuery = window.matchMedia(
//   '(min-width: 320px) and (max-width: 767px)'
// );
// const overlay = document.querySelector('.backdrop');
// const mobMenuWindow = document.querySelector('.mob-menu');

// function handleTabletMediaQuery(event) {
//   const mobileMenu = document.getElementById('mobile-menu');

//   document.getElementById('menu-button').addEventListener('click', function () {
//     mobileMenu.style.right = '0';
//     overlay.classList.add('is-open');
//     mobMenuWindow.classList.add('is-open');
//   });

//   document
//     .getElementById('close-button')
//     .addEventListener('click', function () {
//       mobileMenu.style.right = '-380px';
//       overlay.classList.remove('is-open');
//     });

//   overlay.addEventListener('click', function () {
//     mobileMenu.style.right = '-380px';
//     overlay.classList.remove('is-open');
//   });
// }

// mediaQuery.addListener(handleTabletMediaQuery); // Привяжем обработчик события
// handleTabletMediaQuery(mediaQuery); // Вызовем функцию один раз для проверки начального состояния
