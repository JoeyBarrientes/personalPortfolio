let currentSlide = 0;

function getVisibleSlides() {
    if (window.innerWidth >= 1024) {
        return 5; // Show 6 slides on large screens
    } else {
        return 3; // Show 3 slides on smaller screens
    }
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const visibleSlides = getVisibleSlides();

    if (index >= totalSlides - visibleSlides + 1) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - visibleSlides;
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * (100 / visibleSlides);
    document.getElementById('slideshow').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(() => {
        moveSlide(1);
    }, 4000); // Change slide every 4 seconds

    window.addEventListener('resize', () => {
        showSlide(currentSlide);
    });
});



const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
