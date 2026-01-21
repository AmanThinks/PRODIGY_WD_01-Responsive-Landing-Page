const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

/* ===== SCROLL NAVBAR EFFECT ===== */
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ===== ACTIVE LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ===== HAMBURGER MENU ===== */
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* Close menu on link click */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
