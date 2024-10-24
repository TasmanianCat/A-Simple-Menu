// Get the access to HTML elements
const openMenuBtn = document.getElementById('openMenuBtn');

const closeMenuBtn = document.getElementById('closeMenuBtn');

const navLinks = document.getElementById('navLinks');

// Open the menu
openMenuBtn.addEventListener('click', (event) => {
  navLinks.classList.toggle('nav-links-show');
});

// Close the menu
closeMenuBtn.addEventListener('click', (event) => {
  navLinks.classList.remove('nav-links-show');
});

// THE SECOND OPTION BELOW

// // Ensures elements are available: If your script is placed in the <head> section or before the HTML elements it targets
// document.addEventListener('DOMContentLoaded', () => {
// // Get the access to HTML elements
// const openMenuBtn = document.getElementById('openMenuBtn');

// const closeMenuBtn = document.getElementById('closeMenuBtn');

// const navLinks = document.getElementById('navLinks');

// // Open the menu
// openMenuBtn.addEventListener('click', (event) => {
//   navLinks.classList.toggle('nav-links-show');
// });

// // Close the menu
// closeMenuBtn.addEventListener('click', (event) => {
//   navLinks.classList.remove('nav-links-show');
// });
// });
