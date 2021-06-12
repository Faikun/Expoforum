new WOW().init();

var navbar = document.getElementById('header__navbar');
var navToggle = document.getElementById('navToggle');
var headerLink = document.getElementsByClassName('header__link');

navToggle.addEventListener('click', event => {

    if(navToggle.classList.contains('shown')) {
        navbar.style.display = "none";
        navToggle.classList.remove('shown');
    }
    else {
        navToggle.classList.add('shown');
        navbar.style.display = "flex";
    }

});

for(let i=0; i < headerLink.length; i++) {
    headerLink[i].addEventListener("click", function(e) {
        e.preventDefault();

        var $this = e.currentTarget;
        var id = $this.getAttribute('data-scroll');
        var scrollTarget = document.getElementById(id);
        var topOffset;

        if(document.body.clientWidth <= 1000) {
            topOffset = document.querySelector('.header__nav').offsetHeight - 20;
        }
        else {
           topOffset = document.querySelector('.header__nav').offsetHeight - 100;
        }

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

        if(document.body.clientWidth <= 1000) {
            navbar.style.display = "none";
            navToggle.classList.remove('shown');
        }


    });
}

