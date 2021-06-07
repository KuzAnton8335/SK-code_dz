// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// burger menu-code

let navSlide = () => {
  let burger = document.querySelector(".burger");
  let navMenu = document.querySelector(".nav-header__list");
  let navlinks = document.querySelectorAll(".nav-header__list li");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("actione");

    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });

    burger.classList.toggle("actione");
  });
};
navSlide();

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "true",
  },
});

// tabs

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll(".tab-content").forEach(function (tabContent) {
        tabContent.classList.remove("tab-content-active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tab-content-active");
    });
  });
});

//accordion

$(function () {
  $("#accordion").accordion();
});
