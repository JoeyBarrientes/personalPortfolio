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
    var navLink = document.querySelector('.navContainer > ul');
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

document.addEventListener('scroll', function() {
  updateParallax();
});

window.addEventListener('resize', function() {
    updateParallax();
});

function updateParallax() {
    const scrolled = window.scrollY;
    const descriptions = document.querySelectorAll('[id^="description"]');
    const titles = document.querySelectorAll('[id^="title"]');

    // Define the base values
    const baseDescriptionOffset = 500;
    const baseTitleOffset = 70;
    const descSpeed = -0.5;
    const titleSpeed = -0.05
    
        // Calculate the scaling factor based on window width
        const scaleFactor = Math.min(Math.max(window.innerWidth / 1920, 0.3), 1);
    
        // Calculate the actual offsets and speed
        const descriptionOffset = baseDescriptionOffset * (scaleFactor);
        const titleOffset = baseTitleOffset * scaleFactor;
        const descSpeed2 = descSpeed * scaleFactor;
        const titleSpeed2 = titleSpeed * scaleFactor
    
        descriptions.forEach((description, index) => {
            const topOffset = descriptionOffset + (500 * index * scaleFactor);
            description.style.top = `${topOffset + (scrolled * descSpeed2)}px`;
        });
    
        titles.forEach((title, index) => {
            const topOffset = titleOffset + (50 * index * scaleFactor);
            title.style.top = `${topOffset + (scrolled * titleSpeed2)}px`;
        });

    // let descriptionOffsets;
    // let titleOffsets;

    // if (window.innerWidth > 768) {
    //     descriptionOffsets = 400;
    //     titleOffsets = 70;
    // } else if (window.innerWidth > 420) {
    //     descriptionOffsets = 900;
    //     titleOffsets = 80;
    // } else if (window.innerWidth < 420){
    //     descriptionOffsets = 0;
    //     titleOffsets = 150;
    // }

    // descriptions.forEach((description, index) => {
    //     const topOffset = descriptionOffsets + (500 * index);
    //     const speed = -0.5;
    //     description.style.top = `${topOffset + (scrolled * speed)}px`;
    // });

    // titles.forEach((title, index) => {
    //     const topOffset = titleOffsets + (50 * index);
    //     const speed = -0.05;
    //     title.style.top = `${topOffset + (scrolled * speed)}px`;
    // });

    // const descriptionOffsets = window.innerWidth > 768 ? 400 : 900;
    // const titleOffsets = window.innerWidth > 768 ? 70 : 80;

    // descriptions.forEach((description, index) => {
    //     const topOffset = descriptionOffsets + (500 * index);
    //     const speed = -0.5;
    //     description.style.top = `${topOffset + (scrolled * speed)}px`;
    // });

    // titles.forEach((title, index) => {
    //     const topOffset = titleOffsets + (50 * index);
    //     const speed = -0.05;
    //     title.style.top = `${topOffset + (scrolled * speed)}px`;
    // });
}

// Initial call to set positions correctly on page load
updateParallax();