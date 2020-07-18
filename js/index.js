const navigation = document.getElementById('navigation').classList;
const navigationMobile = document.querySelector('.navigation__list').classList;
const hamburger = document.getElementById('hamburger').classList;

function handleClick() {
  const state = hamburger.toggle('is-active');

  (function (state) {
    if (state === true) {
      navigation.add('navigation__nav--mobile');
      navigationMobile.add('backInDown');
      navigationMobile.remove('backOutUp');

      navigation.add('fadeIn');
    } else if (state === false) {
      navigationMobile.remove('backInDown');
      navigationMobile.add('backOutUp');

      navigation.remove('fadeIn');

      setTimeout(() => navigation.remove('navigation__nav--mobile'), 350);
    }
  })(state);

}

function handleNavigation() {

  const elementsArray = document.querySelectorAll('.navigation__item');

  if (window.innerWidth > 640) {

    navigation.remove('navigation__nav--mobile', 'fadeIn');
    navigationMobile.remove('backInDown');
    hamburger.remove('is-active');
    elementsArray.forEach(function (e) {
      e.removeEventListener('click', handleClick);
    });

  } else if (window.innerWidth < 640) {

    elementsArray.forEach(function (e) {
      e.addEventListener('click', handleClick);
    });

  };
}

document.getElementById('hamburger').addEventListener('click', handleClick);
window.addEventListener('load', handleNavigation);
window.addEventListener('resize', handleNavigation);