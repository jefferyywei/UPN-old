const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const nav = document.querySelector('.mobile-open');

hamburger.addEventListener('click', (e) => {
    hamburger.classList.remove('is-active');
    close.classList.add('is-active');
    nav.classList.add('open');

});
close.addEventListener('click', (e) => {
    hamburger.classList.add("is-active");
    close.classList.remove("is-active");
    nav.classList.remove("open");

} );
