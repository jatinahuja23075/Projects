// Get DOM elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle navigation menu
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

// Close menu when a link is clicked
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.className = "ri-menu-line";
});

// ScrollReveal configuration
const scrollRevealOptions = {
  distance: "50px",
  duration: 1000,
};

// Initialize ScrollReveal
const scrollReveal = ScrollReveal();

// Define reveal targets with specific configurations
const revealTargets = [
  { selector: ".header__container p", delay: 0 },
  { selector: ".header__container h1", delay: 500 },
  { selector: ".about__image img", delay: 0, origin: "left" },
  { selector: ".about__content .section__subheader", delay: 500 },
  { selector: ".about__content .section__header", delay: 1000 },
  { selector: ".about__content .section__description", delay: 1500 },
  { selector: ".about__btn", delay: 2000 },
  { selector: ".room__card", interval: 500 },
  { selector: ".service__list li", interval: 500, origin: "right" }
];

// Apply ScrollReveal to each target
revealTargets.forEach(target => {
  const { selector, delay = 0, interval, origin } = target;
  scrollReveal.reveal(selector, {
    ...scrollRevealOptions,
    delay,
    interval,
    origin
  });
});
