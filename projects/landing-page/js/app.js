/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
//selecting the navul
const navUl = document.getElementById("navbar__list");
//selecting all the sections
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
//1 select all sections with querySelectorAll.
//2 put them in a forEach method.
//3 creat the navList items and store them in a variable.
//4 insert adjascent html element to the navbar list items
sections.forEach((section) => {
  //store navList in a variable
  const navlistItems = `<li><a class="menu_link" href="#${section.id}">${section.dataset.nav}</a></li>`;
  //insert li in nav ul.
  navUl.insertAdjacentHTML("beforeend", navlistItems);
  //console.log(section.id); returns section's id
  //console.log(section.dataset.nav); returns data_nav
});

// Add class 'active' to section when near top of viewport

//1 have to add a scroll eventListener to the window
//2 checking whether it is near the top of view port.
//3 have to add  active class if the conditon meets
//4 have to remove  active class
function toggleActiveClass() {
  //looping over section
  sections.forEach((section) => {
    //getting section's top position
    const topOfSection = section.getBoundingClientRect().top;
    //checking wheather it is near the top of viewport.
    if (topOfSection > 0 && topOfSection < 100) {
      //if yes add active class
      section.classList.add("your-active-class");
    } else {
      //otherwise remove active class
      section.classList.remove("your-active-class");
    }
  });
}
//adding eventListener for scroll
window.addEventListener("scroll", toggleActiveClass);

// Scroll to anchor ID using scrollTO event
const menuLinks = document.querySelectorAll(".menu_link");
//console.log(menuLinks);
for (let section of sections) {
  section.addEventListener("click", (e) => {
    e.preventDefault();
    menuLinks.forEach((menuLink) => {
      menuLink.scrollIntoView({ behavior: "smooth" });
    });
  });
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
