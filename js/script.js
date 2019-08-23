AOS.init();

let windowHeight = window.innerHeight;

function scrollWin() {
    window.scrollTo(0, 1100);
};


var phone = document.querySelector('.container');
var hamburger = document.querySelector('.hamburger');
var ul = document.querySelector('ul');
var logo = document.querySelector('.logo');

phone.addEventListener("click", function () {
    phone.classList.toggle('alert-is-shown');
});


hamburger.addEventListener("click", function () {
    ul.classList.toggle('mobile');
    logo.classList.toggle('mobile');
});


var mobile = document.querySelectorAll('nav ul li a');

for (var mobile of mobile) {
    mobile.addEventListener('click', function () {
        ul.classList.remove('mobile');
        logo.classList.toggle('mobile')
    });
};