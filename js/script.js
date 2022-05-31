"use strict";
// console.log("hello"); //To test

//  ********FOOTER copyright(To settle current year)*******
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// console.log(yearEl)

// **********ACTIVATE MOBILE NAVIGATION**********
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".navigation");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
  // "toggle" will add that class with "headerEl" if it is not there and if it is there, then it will remove it
  // we must mention just the class name without "."
});

// **********SMOOTH SCROLLING ANIMATION**********
const allLinks = document.querySelectorAll("a:link");
// We cannot add here 'addEventListener', becasue all-links are multiple elements. RATHER, we need to add "fprEach" element
allLinks.forEach(function (link) {
  // Here the parameter could be named anything (we used 'link', becoz it is more relevenet in this situation)
  link.addEventListener("click", function (e) {
    e.preventDefault(); // This function will prevent default html-acnor behaviour
    const href = link.getAttribute("href"); // Now target each 'href' attribute where we gonna implemet the animation
    // console.log(href);
    // First connect to top link(clicking from footer to logo)
    if (href === "#")
      window.scroll({
        // scrolling-event is available on "window". So we must use window.scroll)
        top: 0,
        behavior: "smooth",
      });
    // Now link to all other links (in section-level which is as document element)
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      /* We used 'scrollIntoView function, bcoz we dont know the pixel
      value how high or how low in the content. But for log we used
      "top:0", bco it is situated at the very top (0pixel level) */
    }

    // Close mobile-navigation
    if (link.classList.contains("navigation__nav-link")) {
      navEl.classList.remove("nav-open");
    }
  });
});

//////SCROLL THROUGH THE FOOTER-HAND
const footerHand = document.querySelector(".footer__icon");
footerHand.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

//////STICKY NAVBAR/////
/*
const header = document.querySelector(".header");
const nav = document.querySelector(".navigation__nav");

const navHeight = nav.getBoundingClientRect().height; //Dynamicly we can get that navHeight. It is better practice for responsive web. instead of hardcodeing
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: "-150px",
  rootMargin: `-${navHeight}px`,
});

navObserver.observe(header);
*/
