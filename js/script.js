AOS.init();

let windowHeight = window.innerHeight;

function scrollWin() {
    window.scrollTo(0, 1100);
};


var phone = document.querySelector('.container');

phone.addEventListener("click", function () {
    phone.classList.toggle('alert-is-shown');
    console.log('toszarecos');
});

var skills = document.querySelectorAll('.skill_example');


//if (window.screen.width >= 1202 ) {
    //skills.classList.add('csgo');
//};


//var hamburger = document.querySelector('.hamburger');
//var nav = document.querySelector('');
