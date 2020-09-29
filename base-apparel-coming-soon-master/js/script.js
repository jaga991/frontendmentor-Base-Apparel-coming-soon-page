function myFunction(x) {
  if (x.matches) {
    wrapper.classList.toggle("desktop-wrapper");
    wrapper.classList.toggle("mobile-wrapper");
    document.getElementById('hero-img').src = "/images/hero-mobile.jpg"
  } else {
    return;
  }
}

var wrapper = document.querySelector('#body-wrapper');
var x = window.matchMedia("(max-width: 1025px)");



myFunction(x);
x.addListener(myFunction);