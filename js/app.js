// Header Appearance
const header = document.querySelector("header");

let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  // Check if the user is scrolling down
  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down, hide the header
    header.style.transform = "translateY(-100%)";
    header.style.backgroundColor = "transparent";
  } else if (currentScrollPosition > 0) {
    // Scrolling up, show the header
    header.style.backgroundColor = "#655a3f";
    header.style.transform = "translateY(0)";
  } else {
    header.style.backgroundColor = "";
  }

  lastScrollPosition = currentScrollPosition;
});
// Hamburger Window Display
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const hamburger_display = document.querySelector(".hamburger-display");
  const close_btn = document.querySelector(".fa-times");
  const header_btn = document.querySelector(".header-mob-button");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    document.body.style.overflow = "hidden";
    setTimeout(function () {
      hamburger_display.style.display = "block";
    }, 100);
  });

  close_btn.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    hamburger_display.style.display = "none";
    document.body.style.overflow = "";
  });
  header_btn.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    hamburger_display.style.display = "none";
    document.body.style.overflow = "";
  });
});
