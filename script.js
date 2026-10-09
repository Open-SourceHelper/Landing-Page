const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const translate = (key, fallback) => (window.kinemoI18n ? window.kinemoI18n.t(key) : fallback);

const setMenuState = (opened) => {
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.setAttribute('aria-label', opened ? translate('menu.close', 'Cerrar menú') : translate('menu.open', 'Abrir menú'));
  navigation.classList.toggle('open', opened);
};

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    setMenuState(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuState(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenuState(false);
  });
  document.addEventListener('kinemo:languagechange', () => {
    setMenuState(menuButton.getAttribute('aria-expanded') === 'true');
  });
}
