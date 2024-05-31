
/* ---------- Slideshow ---------- */
let currentSlide = 0;
let isLight = true;
let hasChanged = 0;

function getVisibleSlides() {
    if (window.innerWidth >= 1240) {
        return 6; // Show 6 slides on large screens
    } else if (1024 <= window.innerWidth && window.innerWidth < 1240) {
        return 5; // Show 5 slides on medium screens
    } else if (580 <= window.innerWidth && window.innerWidth < 1024) {
        return 4; // Show 4 slides on smaller screens
    } else if (window.innerWidth < 580){
        return 3; // Show 3 slides on mobile
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
/* -------------------------------- */

/* ---------- Navigation ---------- */

document.getElementById('burgerMenu').addEventListener('click', function() {
    var navigation = document.querySelector('.navigation');
    var navLink = document.querySelector('.navContainer > ul');
    var sideHeader = document.querySelector('.sideHeaderContainer');
    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none';
        navLink.style.display = 'none';
        // sideHeader.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
        navLink.style.display = 'flex';
        // sideHeader.style.display = 'block';
    }
  });
  

window.addEventListener('resize', function() {
    var navigation = document.querySelector('.navigation');
    var sideHeader = document.querySelector('.sideHeaderContainer');
    var burgerMenu = document.getElementById('burgerMenu');
    
    if (window.innerWidth > 768) {
        navigation.style.display = 'flex';
        burgerMenu.style.display = 'none';
        // sideHeader.style.display = 'none';
    } else {
        navigation.style.display = 'none';
        burgerMenu.style.display = 'flex';
    }
  });
/* --------------------------------------- */

/* ---------- Projects Parallax ---------- */
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
    const baseTitleOffset = 50;
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
        const topOffset = descriptionOffset + (425 * index * scaleFactor);
        description.style.top = `${topOffset + (scrolled * descSpeed2)}px`;
    });
    
    titles.forEach((title, index) => {
        const topOffset = titleOffset + (40 * index * scaleFactor);
        title.style.top = `${topOffset + (scrolled * titleSpeed2)}px`;
    });
}

// Initial call to set positions correctly on page load
updateParallax();

/* --------------------------------------------- */
  
/* ----------------- Change Nav Color ----------------- */
document.addEventListener('DOMContentLoaded', function() {
    function hoverNav() {
        const navLinks = document.querySelectorAll('.navLink a');

        navLinks.forEach(link => {
            if ((isLight))  {
                link.classList.add('lightHover');
                link.classList.remove('darkHover');
            } else if ((!isLight)) {
                link.classList.add('darkHover');
                link.classList.remove('lightHover');
            }
        });
    }
    setInterval(hoverNav, 10);
});


/* ---------- Change Background Color ---------- */
/* ---------- Nav Color Hover ---------- */
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    var sectionHeaders = document.getElementsByTagName('h1');
    var sectionNums = document.querySelectorAll('h1 span');
    var aboutText = document.querySelectorAll('#about p');
    var contactText = document.querySelectorAll('#contact p, #contact a');
    var burgerMenu = document.getElementById('burgerMenu');

    function lightScreen() {
        isLight = true;
        document.body.style.backgroundColor = 'var(--bgColor)';
        for (let i = 0; i < sectionHeaders.length; i++) {
            sectionHeaders[i].style.color = 'black';
        }
        sectionNums.forEach(num => {
            num.style.color = 'var(--tertiaryColor)';
        });
        aboutText.forEach(text => {
            text.style.color = 'black';
        });
        contactText.forEach(contactText => {
            contactText.style.color = 'black';
        });

        burgerMenu.style.color = 'black';
    }

    function darkScreen() {
        isLight = false;
        document.body.style.backgroundColor = 'var(--secondaryBgColor)';
        for (let i = 0; i < sectionHeaders.length; i++) {
            sectionHeaders[i].style.color = 'var(--bgColor)';
        }
        sectionNums.forEach(num => {
            num.style.color = 'var(--primaryShadow)';
        });
        aboutText.forEach(aboutText => {
            aboutText.style.color = 'var(--bgColor)';
        });
        contactText.forEach(contactText => {
            contactText.style.color = 'var(--bgColor';
        });
        burgerMenu.style.color = 'var(--bgColor)';
    }

    function updateNavColor() {
        const navLinks = document.querySelectorAll('.navLink a');
        
        navLinks.forEach(link => {
    
            if ((isLight) && (hasChanged < 4)) {
                link.classList.remove('darkHover');
                link.classList.add('lightHover');
                hasChanged++;
            } else if ((!isLight) && (hasChanged > 0)){
                link.classList.remove('lightHover');
                link.classList.add('darkHover');
                hasChanged--;}
        });
    }
    
    if (window.innerWidth > 500){
    
        if (scrollPosition <= 547) {
            lightScreen();
            updateNavColor();
        } else if (547 < scrollPosition && scrollPosition <= 1426) {
            lightScreen();
            updateNavColor();
        } else if (1426 < scrollPosition && scrollPosition <= 3413) {
            darkScreen();
            updateNavColor();
        } else {
            lightScreen();
            updateNavColor();
        }

    } else{
        
        if (scrollPosition <= 309) {
            lightScreen();
            updateNavColor();
        } else if (309 < scrollPosition && scrollPosition <= 1100) {
            lightScreen();
            updateNavColor();
        } else if (1100 < scrollPosition && scrollPosition <= 3087) {
            darkScreen();
            updateNavColor();
        } else {
            lightScreen();
            updateNavColor();
        }
    }
});
/* -------------------------------------------------- */
