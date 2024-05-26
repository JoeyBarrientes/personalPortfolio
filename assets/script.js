// let currentSlide = 0;

// function getVisibleSlides() {
//     if (window.innerWidth >= 1024) {
//         return 5; // Show 6 slides on large screens
//     } else {
//         return 3; // Show 3 slides on smaller screens
//     }
// }

// function showSlide(index) {
//     const slides = document.querySelectorAll('.slide');
//     const totalSlides = slides.length;
//     const visibleSlides = getVisibleSlides();

//     if (index >= totalSlides - visibleSlides + 1) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = totalSlides - visibleSlides;
//     } else {
//         currentSlide = index;
//     }
    
//     const offset = -currentSlide * (100 / visibleSlides);
//     document.getElementById('slideshow').style.transform = `translateX(${offset}%)`;
// }

// function moveSlide(step) {
//     showSlide(currentSlide + step);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentSlide);
//     setInterval(() => {
//         moveSlide(1);
//     }, 4000); // Change slide every 4 seconds

//     window.addEventListener('resize', () => {
//         showSlide(currentSlide);
//     });
// });

document.getElementById('burger-menu').addEventListener('click', function() {
    var navigation = document.querySelector('.navigation');
    var navLink = document.querySelector('.container > ul');
    var sideHeader = document.querySelector('.sideHeaderContainer');
    if (navigation.style.display === 'flex') {
      navigation.style.display = 'none';
      navLink.style.display = 'none';
      sideHeader.style.display = 'none';
    } else {
      navigation.style.display = 'flex';
      navLink.style.display = 'flex';
      sideHeader.style.display = 'block';
    }
  });
  
  // Add event listener for window resize
  window.addEventListener('resize', function() {
    var navigation = document.querySelector('.navigation');
    var sideHeader = document.querySelector('.sideHeaderContainer');
    var burgerMenu = document.getElementById('burger-menu');
    
    if (window.innerWidth > 768) { // Adjust this value as per breakpoint
      navigation.style.display = 'flex'; // Show navigation links
      burgerMenu.style.display = 'none'; // Hide hamburger menu
      sideHeader.style.display = 'none';
    } else {
      navigation.style.display = 'none'; // Hide navigation links
      burgerMenu.style.display = 'flex'; // Show hamburger menu
    }
  });