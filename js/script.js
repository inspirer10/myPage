AOS.init();

let windowHeight = window.innerHeight;

function scrollWin() {
    window.scrollTo(0, 1100);
};


var phone = document.querySelector('.container');
var hamburger = document.querySelector('.hamburger');
var ul = document.querySelector('ul');


phone.addEventListener("click", function () {
    phone.classList.toggle('alert-is-shown');
});


hamburger.addEventListener("click", function () {
    ul.classList.toggle('mobile');
    console.log('wqewqe');
});


//var skills = document.querySelectorAll('.skill_example');




//var hamburger = document.querySelector('.hamburger');
//var nav = document.querySelector('');
