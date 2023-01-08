(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-button-menu_icons"),
    closeMenuBtn: document.querySelector(".header-menu-close_icon"),
    menu: document.querySelector(".header-menu-nav"),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();