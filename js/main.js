// // When the user scrolls the page, execute the function
// window.onscroll = function () {
//     fixNavbar();
// };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function fixNavbar() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

window.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    function addStickyClass() {
        if (window.scrollY >= sticky) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    }

    window.addEventListener('scroll', addStickyClass);
});


// script.js
// script.js
let lastScrollTop = 0;
const navbar = document.getElementById('navbar1');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.backgroundColor = '#333';
    } else {
        // Scrolling up
        navbar.style.backgroundColor = '#555';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});





