(() => {
 const refs = {
  openMenuBtn: document.querySelector(“[data-menuBTN-open]“),
  closeMenuBtn: document.querySelector(“[data-menuBTN-close]“),
  menu: document.querySelector(“[data-menu]“),
  body: document.querySelector(“header”),
 };
 refs.openMenuBtn.addEventListener(“click”, toggleModal);
 refs.closeMenuBtn.addEventListener(“click”, toggleModal);
 function toggleModal() {
  refs.menu.classList.toggle(“is-open”);
  refs.body.classList.toggle(“no-scroll”);
 }
 window.matchMedia(“(min-width: 768px)“).addEventListener(“change”, (e) => {
  if (!e.matches) return;
  refs.menu.classList.remove(“is-open”);
  refs.body.classList.remove(“no-scroll”);
 });
})();