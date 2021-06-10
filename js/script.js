AOS.init();

let windowHeight = window.innerHeight;

const width = 1100;

function scrollWin() {
    window.scrollTo(0, width);
};


const phone = document.querySelector('.container');
const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('ul');
const logo = document.querySelector('.logo');

phone.addEventListener("click", function () {
    phone.classList.toggle('alert-is-shown');
});


hamburger.addEventListener("click", function () {
    ul.classList.toggle('mobile');
    logo.classList.toggle('mobile');
});


let mobile = document.querySelectorAll('nav ul li a');

for (let mobile of mobile) {
    mobile.addEventListener('click', function () {
        ul.classList.remove('mobile');
        logo.classList.toggle('mobile')
    });
};