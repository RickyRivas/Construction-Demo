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


// tabs 
const controlTabs = Array.from(document.querySelectorAll(".tab-control"));
    const tabContents = Array.from(document.querySelectorAll(".tab-content"));
    const tabControlContainer = document.querySelector(".tab-controls");

    function showTab() {
      const activeTab = controlTabs.find((tab) =>
        tab.classList.contains("active")
      );
      const activeTabContent = tabContents.find(
        (tabContent) => tabContent.dataset.content === activeTab.dataset.tab
      );
      activeTabContent.style.display = "flex";
      hideInactiveTabContents(activeTab);
    }

    function hideInactiveTabContents(activeTab) {
      tabContents.forEach((tab) => {
        if (tab.dataset.content !== activeTab.dataset.tab) {
          tab.style.display = "none";
        }
      });
    }

    controlTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const currentlyActiveTab = controlTabs.find((tab) =>
          tab.classList.contains("active")
        );
        if (tab == currentlyActiveTab) {
          return;
        }
        currentlyActiveTab.classList.remove("active");
        tab.classList.add("active");
        showTab();
      });
    });

showTab();
  
// Projects swiper
var swiper = new Swiper(" .portSwiper", {
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  autoplay: true,
  slidesPerView: 'auto',
  disableOnInteraction: true,
  centeredSlides: true,
  pagination: false,
  navigation: {
    nextEl: ".swiper-next-port",
    prevEl: ".swiper-prev-port"
  },
});
let swiperPortControls = document.querySelectorAll('.control');
swiperPortControls.forEach(control => {
  control.addEventListener('click', () => {
    document.querySelector('.controller .pressedControl').classList.remove('pressedControl')
    control.classList.add('pressedControl')
  })
})