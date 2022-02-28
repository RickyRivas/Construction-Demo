// Navigation 1
const body = document.querySelector('body');
const burger = document.querySelector(".hamburger");
const navOverlay = document.querySelector('.navlinks-overlay');
const nav = document.querySelector(".nav-links");

function toggleNav() {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    body.classList.toggle('body-fixed');
    navOverlay.classList.toggle('is-active');
}
burger.addEventListener('click', toggleNav)
navOverlay.addEventListener('click', toggleNav)


var swiper = new Swiper(".landingSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 9000,
        disableOnInteraction: true,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".landing-swipe-next",
        prevEl: ".landing-swipe-prev",
    },
});


// // Color theme toggle
// const themeToggle = document.querySelector('.theme-toggle');
// const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme == 'dark') {
//     document.body.classList.toggle('dark-mode')
// }

// themeToggle.addEventListener('click', () => {
//     if (prefersDarkTheme.matches) {
//         document.body.classList.toggle('light-mode')
//         var theme = document.body.classList.contains('light-mode') ? 'light' : 'dark'
//     } else {
//         document.body.classList.toggle('dark-mode');
//         var theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light'
//     }
//     localStorage.setItem('theme', theme)
// })

