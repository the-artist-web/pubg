'use strict';

/**
 * add event on multiple element
 */
const addEventOnElement = function (element, eventType, callback) {
    for(let i = 0, len = element.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    };
};

/**
 * mobile navbar
 */
const navBar = document.querySelector("[data-navbar]"),
navToggler = document.querySelector("[data-nav-toggle]"),
navLink = document.querySelector("[data-nav-link]");

const toggleNav = function () {
    navBar.classList.toggle("active");
    this.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNav);

/**
 * header
 */
const header = document.querySelector("[data-header]");
const dataBackTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("active");
        dataBackTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        dataBackTopBtn.classList.remove("active");
    };
});