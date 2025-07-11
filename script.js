// Navbar Header Sticky While Scroll

function stickyNav() {
  var headerHeight = document.querySelector("#home").offsetHeight;
  var navbar = document.querySelector("header");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("header-sticky");
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove("header-sticky");
  }
}

window.addEventListener("scroll", stickyNav);

// Toggle visibility of navbar when button clicked

function navToggle() {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
  document.querySelector("body").classList.toggle("show");
}
