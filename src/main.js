const mediaQuery = window.matchMedia(
  '(min-width: 320px) and (max-width: 767px)'
);
const overlay = document.querySelector('.backdrop');
const mobMenuWindow = document.querySelector('.mob-menu');

function handleTabletMediaQuery(event) {
  const mobileMenu = document.getElementById('mobile-menu');

  //   if (event.matches) {
  // Mobile view: screen width between 320px and 767px
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
      //   mobMenuWindow.classList.remove('is-open');
    });

  overlay.addEventListener('click', function () {
    mobileMenu.style.right = '-380px';
    // mobMenuWindow.classList.remove('is-open');
    overlay.classList.remove('is-open');
  });

  //   overlay.addEventListener('click', closeMobMenuWindow);
  //   } else {
  //     // Tablet view: screen width greater than or equal to 768px
  //     document
  //       .getElementById('menu-button')
  //       .addEventListener('click', function () {
  //         mobileMenu.style.right = '0';
  //       });

  //     document
  //       .getElementById('close-button')
  //       .addEventListener('click', function () {
  //         mobileMenu.style.right = '-380px';
  //       });
  //   }
}

mediaQuery.addListener(handleTabletMediaQuery); // Attach the event listener
handleTabletMediaQuery(mediaQuery); // Call the function once to check the initial state
