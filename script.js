document.addEventListener("DOMContentLoaded", function() {
    var burgerIcon = document.querySelector('.burger-icon');
    var menu = document.querySelector('.menu');

    burgerIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});