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

      navigation.classList.add('fadeIn');
    } else if (state === false) {
      navigationMobile.remove('backInDown');
      navigationMobile.add('backOutUp');

      navigation.remove('fadeIn');

      setTimeout(() => navigation.remove('navigation__nav--mobile'), 350);
    }
  })(state);

}

document.getElementById('hamburger').addEventListener('click', handleClick);

const elementsArray = document.querySelectorAll('.navigation__item');
elementsArray.forEach(function (e) {
  e.addEventListener('click', handleClick);
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener('resize', function () {
  if (window.innerWidth > 640) {
    navigation.remove('navigation__nav--mobile', 'fadeIn');
    navigationMobile.remove('backInDown');
    hamburger.remove('is-active');
  };
});